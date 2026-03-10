export interface ColorToken {
  hue: number;
  saturation: number;
  lightness: number;
  alpha?: number;
}

export interface SpacingToken {
  value: string;
}

export interface TypographyToken {
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  fontWeight?: string;
}

export interface BorderRadiusToken {
  value: string;
}

export interface ShadowToken {
  value: string;
}

export interface AnimationToken {
  name: string;
  duration: string;
  easing: string;
}

export const tokens = {
  colors: {
    brand: {
      moss: { hue: 151, saturation: 44, lightness: 52 } as ColorToken,
      lichen: { hue: 151, saturation: 37, lightness: 63 } as ColorToken,
      spruce: { hue: 153, saturation: 38, lightness: 30 } as ColorToken,
      fjord: { hue: 204, saturation: 67, lightness: 21 } as ColorToken,
      peak: { hue: 0, saturation: 0, lightness: 100 } as ColorToken,
      cloud: { hue: 25, saturation: 10, lightness: 84 } as ColorToken,
      slate: { hue: 0, saturation: 0, lightness: 10 } as ColorToken,
      night: { hue: 0, saturation: 0, lightness: 4 } as ColorToken,
    },
    semantic: {
      success: { hue: 151, saturation: 44, lightness: 52 } as ColorToken,
      warning: { hue: 71, saturation: 100, lightness: 75 } as ColorToken,
      error: { hue: 6, saturation: 74, lightness: 50 } as ColorToken,
      info: { hue: 217, saturation: 68, lightness: 53 } as ColorToken,
    },
    borders: {
      base: { hue: 25, saturation: 10, lightness: 84, alpha: 0.05 } as ColorToken,
      hover: { hue: 25, saturation: 10, lightness: 84, alpha: 0.1 } as ColorToken,
      strong: { hue: 25, saturation: 10, lightness: 84, alpha: 0.08 } as ColorToken,
      primary: { hue: 151, saturation: 44, lightness: 52, alpha: 0.2 } as ColorToken,
      moss: { hue: 151, saturation: 44, lightness: 52, alpha: 0.2 } as ColorToken,
      lichen: { hue: 151, saturation: 37, lightness: 63, alpha: 0.2 } as ColorToken,
      spruce: { hue: 153, saturation: 38, lightness: 30, alpha: 0.2 } as ColorToken,
      fjord: { hue: 204, saturation: 67, lightness: 21, alpha: 0.2 } as ColorToken,
      cloud: { hue: 25, saturation: 10, lightness: 84, alpha: 0.2 } as ColorToken,
      info: { hue: 217, saturation: 68, lightness: 53, alpha: 0.5 } as ColorToken,
      success: { hue: 151, saturation: 44, lightness: 52, alpha: 0.5 } as ColorToken,
      warning: { hue: 71, saturation: 100, lightness: 75, alpha: 0.5 } as ColorToken,
      destructive: { hue: 6, saturation: 74, lightness: 50, alpha: 0.5 } as ColorToken,
    },
    ui: {
      background: { hue: 0, saturation: 0, lightness: 4 } as ColorToken,
      foreground: { hue: 0, saturation: 0, lightness: 100 } as ColorToken,
      primary: { hue: 151, saturation: 44, lightness: 52 } as ColorToken,
      primaryForeground: { hue: 0, saturation: 0, lightness: 100 } as ColorToken,
      secondary: { hue: 151, saturation: 37, lightness: 63 } as ColorToken,
      secondaryForeground: { hue: 0, saturation: 0, lightness: 4 } as ColorToken,
      accent: { hue: 204, saturation: 67, lightness: 21 } as ColorToken,
      accentForeground: { hue: 0, saturation: 0, lightness: 100 } as ColorToken,
      muted: { hue: 0, saturation: 0, lightness: 10 } as ColorToken,
      mutedForeground: { hue: 25, saturation: 10, lightness: 84, alpha: 0.6 } as ColorToken,
      card: { hue: 0, saturation: 0, lightness: 7 } as ColorToken,
      cardForeground: { hue: 0, saturation: 0, lightness: 100 } as ColorToken,
      input: { hue: 0, saturation: 0, lightness: 15 } as ColorToken,
      destructive: { hue: 6, saturation: 74, lightness: 50 } as ColorToken,
      destructiveForeground: { hue: 0, saturation: 0, lightness: 100 } as ColorToken,
      ring: { hue: 151, saturation: 44, lightness: 52 } as ColorToken,
    },
  },
  spacing: {
    featureCard: {
      paddingVertical: { value: "48px" } as SpacingToken,
      paddingHorizontal: { value: "40px" } as SpacingToken,
      gap: { value: "32px" } as SpacingToken,
    },
  },
  typography: {
    feature: {
      title: {
        fontSize: "40px",
        lineHeight: "56px",
        letterSpacing: "-0.03em",
      } as TypographyToken,
      description: {
        fontSize: "16px",
        lineHeight: "24px",
      } as TypographyToken,
    },
    heading: {
      h1: { fontSize: "64px", lineHeight: "1.1" } as TypographyToken,
      h2: { fontSize: "40px", lineHeight: "1.2" } as TypographyToken,
      h3: { fontSize: "24px", lineHeight: "1.4" } as TypographyToken,
    },
    body: {
      base: { fontSize: "16px", lineHeight: "1.5" } as TypographyToken,
      small: { fontSize: "14px", lineHeight: "1.5" } as TypographyToken,
    },
  },
  borderRadius: {
    full: { value: "9999px" } as BorderRadiusToken,
    xl: { value: "1rem" } as BorderRadiusToken,
    lg: { value: "0.75rem" } as BorderRadiusToken,
    md: { value: "0.5rem" } as BorderRadiusToken,
    sm: { value: "0.25rem" } as BorderRadiusToken,
  },
  shadows: {
    sm: { value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" } as ShadowToken,
    md: { value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" } as ShadowToken,
    lg: { value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" } as ShadowToken,
    xl: { value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" } as ShadowToken,
  },
  animations: {
    float: {
      slow: { name: "float-slow", duration: "20s", easing: "ease-in-out" } as AnimationToken,
      medium: { name: "float-medium", duration: "14s", easing: "ease-in-out" } as AnimationToken,
      fast: { name: "float-fast", duration: "8s", easing: "ease-in-out" } as AnimationToken,
    },
  },
} as const;

export type Tokens = typeof tokens;

function colorToHSL(token: ColorToken): string {
  const { hue, saturation, lightness, alpha = 1 } = token;
  return `${hue} ${saturation}% ${lightness}${alpha < 1 ? ` / ${alpha}` : ""}`;
}

export function getTokenValue<T extends keyof Tokens, K extends keyof Tokens[T]>(
  category: T,
  key: K
): Tokens[T][K] {
  return tokens[category][key];
}

export function getColorValue(
  colorPath: string
): string {
  const path = colorPath.split(".");
  let current: any = tokens.colors;
  for (const segment of path) {
    if (current[segment] === undefined) {
      throw new Error(`Color token not found: ${colorPath}`);
    }
    current = current[segment];
  }
  return colorToHSL(current);
}

export function generateCSSVariables(): string {
  let css = "";

  const generateColorVars = (
    obj: any,
    prefix: string = ""
  ) => {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object" && value !== null && "hue" in value) {
        css += `  --${prefix}${key}: ${colorToHSL(value as ColorToken)};\n`;
      } else if (typeof value === "object" && value !== null) {
        generateColorVars(value, `${prefix}${key}-`);
      }
    }
  };

  generateColorVars(tokens.colors, "");

  return css;
}

export type ColorPath =
  | `brand.${keyof typeof tokens.colors.brand}`
  | `semantic.${keyof typeof tokens.colors.semantic}`
  | `borders.${keyof typeof tokens.colors.borders}`
  | `ui.${keyof typeof tokens.colors.ui}`;

export type SpacingPath = `featureCard.${"paddingVertical" | "paddingHorizontal" | "gap"}`;
export type TypographyPath =
  | `feature.${"title" | "description"}`
  | `heading.${"h1" | "h2" | "h3"}`
  | `body.${"base" | "small"}`;
export type BorderRadiusPath = keyof typeof tokens.borderRadius;
export type ShadowPath = keyof typeof tokens.shadows;
export type AnimationPath = `float.${"slow" | "medium" | "fast"}`;