import type { Token } from "./parser";
import { resolveCSSVariable } from "./css-resolver";

export interface TypographyTableProps {
  tokens: Token[];
  title?: string;
}

interface TextToken extends Token {
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
}

function parseTextToken(token: Token): TextToken {
  const value = token.value;
  const parsed: TextToken = { ...token };

  const sizeMatch = value.match(/(\d+(?:\.\d+)?)(px|rem|em)/);
  if (sizeMatch) {
    parsed.fontSize = sizeMatch[0];
  }

  const weightMatch = value.match(/(\d+)/);
  if (weightMatch) {
    parsed.fontWeight = weightMatch[1];
  }

  const lineHeightMatch = value.match(
    /(\d+(?:\.\d+)?)(px|rem|em)(?:\s+\/\s+(\d+(?:\.\d+)?)(px|rem|em))?/,
  );
  if (lineHeightMatch && lineHeightMatch[3]) {
    parsed.lineHeight = lineHeightMatch[3] + lineHeightMatch[4];
  }

  const letterSpacingMatch = value.match(/-?(\d+(?:\.\d+)?)(px|em|rem)/);
  if (letterSpacingMatch && !sizeMatch) {
    parsed.letterSpacing = letterSpacingMatch[0];
  }

  return parsed;
}

export function TypographyTable({ tokens, title }: TypographyTableProps) {
  const textTokens = tokens.filter(
    (t) => t.name.includes("text-") || t.name.includes("font"),
  );

  const resolvedTokens =
    typeof window === "undefined"
      ? textTokens
      : textTokens.map((token) => {
          const resolved = resolveCSSVariable(token.name);
          if (resolved) {
            return { ...token, value: resolved };
          }
          return token;
        });

  const parsedTokens = resolvedTokens.map(parseTextToken);

  return (
    <div className="mb-12">
      {title && <h3 className="text-xl text-white mb-4">{title}</h3>}
      <div className="space-y-6">
        {parsedTokens.map((token) => (
          <div
            key={token.name}
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <code className="text-berget-brand-moss text-sm">
                  {token.name}
                </code>
                <div className="text-white/50 text-xs font-mono mt-1">
                  {token.value}
                </div>
              </div>
              <div className="text-right text-xs text-white/40 font-mono">
                {token.fontSize && <div>size: {token.fontSize}</div>}
                {token.fontWeight && <div>weight: {token.fontWeight}</div>}
                {token.lineHeight && <div>lh: {token.lineHeight}</div>}
              </div>
            </div>

            <div
              className="text-foreground"
              style={{
                fontSize: token.fontSize || "1rem",
                fontWeight: token.fontWeight ? Number(token.fontWeight) : 400,
                lineHeight: token.lineHeight || "normal",
                letterSpacing: token.letterSpacing,
              }}
            >
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
