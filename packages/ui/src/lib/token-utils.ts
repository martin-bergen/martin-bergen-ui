import { tokens } from "./tokens";

export type ColorPath = `brand.${keyof typeof tokens.colors.brand}`
  | `semantic.${keyof typeof tokens.colors.semantic}`
  | `borders.${keyof typeof tokens.colors.borders}`
  | `ui.${keyof typeof tokens.colors.ui}`;

export function getColorValue(path: ColorPath): string {
  const parts = path.split(".");
  let current: any = tokens.colors;
  
  for (const part of parts) {
    if (current[part] === undefined) {
      throw new Error(`Color token not found: ${path}`);
    }
    current = current[part];
  }
  
  const { hue, saturation, lightness, alpha = 1 } = current;
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
  
  return current.value;
}

export function getTypographyValue(path: string): {
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  fontWeight?: string;
} {
  const parts = path.split(".");
  let current: any = tokens.typography;
  
  for (const part of parts) {
    if (current[part] === undefined) {
      throw new Error(`Typography token not found: ${path}`);
    }
    current = current[part];
  }
  
  return current;
}

export function getBorderRadiusValue(path: keyof typeof tokens.borderRadius): string {
  const token = tokens.borderRadius[path];
  if (!token) {
    throw new Error(`Border radius token not found: ${path}`);
  }
  return token.value;
}

export function getShadowValue(path: keyof typeof tokens.shadows): string {
  const token = tokens.shadows[path];
  if (!token) {
    throw new Error(`Shadow token not found: ${path}`);
  }
  return token.value;
}

export function getAnimationValue(path: `float.${"slow" | "medium" | "fast"}`): string {
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