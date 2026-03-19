import * as React from "react";
import type { Token } from "./parser";
import { isVarReference, resolveCSSVariable } from "./css-resolver";

export interface TokenTableProps {
  tokens: Token[];
  title?: string;
}

interface ResolvedTokenData extends Token {
  resolvedValue: string;
}

export function TokenTable({ tokens, title }: TokenTableProps) {
  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const resolvedTokens = React.useMemo<ResolvedTokenData[]>(() => {
    if (typeof window === "undefined")
      return tokens.map((t) => ({ ...t, resolvedValue: t.value }));

    return tokens.map((token) => {
      if (isVarReference(token.value)) {
        const resolved = resolveCSSVariable(token.name);
        return {
          ...token,
          resolvedValue: resolved || token.value,
        };
      }
      return { ...token, resolvedValue: token.value };
    });
  }, [tokens]);

  return (
    <div className="mb-8">
      {title && <h3 className="text-xl text-white mb-4">{title}</h3>}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-white/70">Name</th>
              <th className="text-left py-3 px-4 text-white/70">Value</th>
            </tr>
          </thead>
          <tbody>
            {resolvedTokens.map((token) => {
              const hasVarRef = isVarReference(token.value);
              const resolvedValue = token.resolvedValue;

              return (
                <tr
                  key={token.name}
                  className="border-b border-white/5 hover:bg-white/5"
                >
                  <td className="py-2 px-4">
                    <code className="text-berget-brand-moss text-xs">
                      {token.name}
                    </code>
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-3">
                      {hasVarRef ? (
                        <>
                          <span className="text-white/40 font-mono text-xs line-through">
                            {token.value}
                          </span>
                          <span className="text-white/60 font-mono text-xs">
                            {resolvedValue}
                          </span>
                          {resolvedValue && resolvedValue !== token.value && (
                            <div
                              className="w-4 h-4 rounded border border-white/10"
                              style={{
                                backgroundColor:
                                  typeof resolvedValue === "string" &&
                                  resolvedValue.includes("hsl")
                                    ? resolvedValue
                                        .replace(/hsl/g, "hsl")
                                        .replace(/var\(--[^)]+\)/g, "255")
                                    : undefined,
                              }}
                            />
                          )}
                        </>
                      ) : (
                        <>
                          <span className="text-white/60 font-mono text-xs">
                            {token.value}
                          </span>
                          {typeof token.value === "string" &&
                            token.value.includes("hsl") && (
                              <div
                                className="w-4 h-4 rounded border border-white/10"
                                style={{
                                  backgroundColor: token.value,
                                }}
                              />
                            )}
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
