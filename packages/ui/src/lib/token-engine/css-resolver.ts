export interface ResolvedToken {
  name: string;
  rawValue: string;
  resolvedValue: string | null;
}

export function resolveCSSVariable(varName: string): string | null {
  if (typeof document === "undefined") return null;

  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);

  try {
    const value = computedStyle.getPropertyValue(varName).trim();
    return value || null;
  } catch {
    return null;
  }
}

export function resolveAllTokens(
  tokens: Array<{ name: string; value: string }>,
): ResolvedToken[] {
  return tokens.map((token) => ({
    name: token.name,
    rawValue: token.value,
    resolvedValue: resolveCSSVariable(token.name),
  }));
}

export function isVarReference(value: string): boolean {
  return value.includes("var(--");
}

export function extractVarReferences(value: string): string[] {
  const regex = /var\(--[^)]+\)/g;
  const matches = value.match(regex);
  return matches ? matches : [];
}

export function getResolvedValue(
  rawValue: string,
  resolvedValue: string | null,
): string {
  if (resolvedValue) {
    return resolvedValue;
  }

  if (isVarReference(rawValue)) {
    const refs = extractVarReferences(rawValue);
    if (refs.length > 0) {
      return `${rawValue} (unresolved: ${refs.join(", ")}})`;
    }
  }

  return rawValue;
}
