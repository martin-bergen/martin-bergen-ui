import { tokens, type ColorToken, type SpacingToken, type TypographyToken } from "../tokens";

export type ColorPath =
  | `brand.${"moss" | "lichen" | "spruce" | "fjord" | "peak" | "cloud" | "slate" | "night"}`
  | `semantic.${"success" | "warning" | "error" | "info"}`
  | `borders.${"base" | "hover" | "strong" | "primary" | "moss" | "lichen" | "spruce" | "fjord" | "cloud" | "info" | "success" | "warning" | "destructive"}`
  | `ui.${"background" | "foreground" | "primary" | "primaryForeground" | "secondary" | "secondaryForeground" | "accent" | "accentForeground" | "muted" | "mutedForeground" | "card" | "cardForeground" | "input" | "destructive" | "destructiveForeground" | "ring"}`;

export function getColorValue(path: ColorPath): string {
  const parts = path.split(".");
  let current: any = tokens.colors;

  for (const part of parts) {
    if (current[part] === undefined) {
      throw new Error(`Color token not found: ${path}`);
    }
    current = current[part];
  }

  const { hue, saturation, lightness, alpha = 1 } = current as ColorToken;
  return `${hue} ${saturation}% ${lightness}${alpha < 1 ? ` / ${alpha}` : ""}`;
}

export function getSpacingValue(path: string): string {
  const parts = path.split(".");
  let current: any = tokens.spacing;

  for (const part of parts) {
    if (current[part] === undefined) {
      throw new Error(`Spacing token not found: ${path}`);
    }
    current = current[part];
  }

  return (current as SpacingToken).value;
}

export function getTypographyValue(path: string): TypographyToken {
  const parts = path.split(".");
  let current: any = tokens.typography;

  for (const part of parts) {
    if (current[part] === undefined) {
      throw new Error(`Typography token not found: ${path}`);
    }
    current = current[part];
  }

  return current as TypographyToken;
}

export function getBorderRadiusValue(path: "full" | "xl" | "lg" | "md" | "sm"): string {
  const token = tokens.borderRadius[path];
  if (!token) {
    throw new Error(`Border radius token not found: ${path}`);
  }
  return token.value;
}

export function getShadowValue(path: "sm" | "md" | "lg" | "xl"): string {
  const token = tokens.shadows[path];
  if (!token) {
    throw new Error(`Shadow token not found: ${path}`);
  }
  return token.value;
}

export function getAnimationValue(path: "float.slow" | "float.medium" | "float.fast"): string {
  const parts = path.split(".");
  let current: any = tokens.animations;

  for (const part of parts) {
    if (current[part] === undefined) {
      throw new Error(`Animation token not found: ${path}`);
    }
    current = current[part];
  }

  return `${current.name} ${current.duration} ${current.easing} infinite`;
}

export const tokenUtils = {
  color: getColorValue,
  spacing: getSpacingValue,
  typography: getTypographyValue,
  borderRadius: getBorderRadiusValue,
  shadow: getShadowValue,
  animation: getAnimationValue,
};