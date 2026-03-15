import cssContent from "../../styles/index.css?raw";

export interface Token {
  name: string;
  value: string;
}

export interface TokenCategory {
  name: string;
  tokens: Token[];
}

function extractRootVariables(css: string): Token[] {
  if (!css) return [];

  const rootMatch = css.match(/:root\s*\{([\s\S]*?)\}/);
  if (!rootMatch || !rootMatch[1]) return [];

  const rootContent = rootMatch[1];
  const variableRegex = /--([a-zA-Z0-9-]+)\s*:\s*([^;]+);/g;

  const tokens: Token[] = [];
  let match;

  while ((match = variableRegex.exec(rootContent)) !== null) {
    if (match[1] && match[2]) {
      tokens.push({
        name: `--${match[1]}`,
        value: match[2].trim(),
      });
    }
  }

  return tokens;
}

export function getTokens(): Token[] {
  return extractRootVariables(cssContent);
}

export function getTokensByCategory(): TokenCategory[] {
  const tokens = getTokens();

  const categories: { [key: string]: Token[] } = {
    brand: [],
    semantic: [],
    button: [],
    sidebar: [],
    status: [],
    chart: [],
    other: [],
  };

  for (const token of tokens) {
    if (token.name.startsWith("--berget-brand-")) {
      categories.brand!.push(token);
    } else if (token.name.startsWith("--berget-button-")) {
      categories.button!.push(token);
    } else if (token.name.startsWith("--berget-sidebar-")) {
      categories.sidebar!.push(token);
    } else if (
      token.name.startsWith("--berget-info") ||
      token.name.startsWith("--berget-success") ||
      token.name.startsWith("--berget-warning") ||
      token.name.startsWith("--berget-destructive")
    ) {
      categories.status!.push(token);
    } else if (token.name.startsWith("--berget-chart-")) {
      categories.chart!.push(token);
    } else {
      categories.semantic!.push(token);
    }
  }

  return Object.entries(categories)
    .filter(([, t]) => (t as Token[]).length > 0)
    .map(([name, t]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      tokens: t as Token[],
    }));
}
