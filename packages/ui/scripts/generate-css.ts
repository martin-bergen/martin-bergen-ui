import { tokens } from "../src/tokens";

function colorToHSL(token: { hue: number; saturation: number; lightness: number; alpha?: number }): string {
  const { hue, saturation, lightness, alpha = 1 } = token;
  return `${hue} ${saturation}% ${lightness}${alpha < 1 ? ` / ${alpha}` : ""}`;
}

function generateColorVariables(): string {
  let css = "";

  const generateVars = (obj: any, prefix: string = "") => {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object" && "hue" in value) {
        css += `    --${prefix}${key}: ${colorToHSL(value)};\n`;
      } else if (typeof value === "object") {
        generateVars(value, `${prefix}${key}-`);
      }
    }
  };

  generateVars(tokens.colors, "");
  return css;
}

function generateThemeVariables(theme: "dark" | "light"): string {
  let css = "";
  const themePrefix = theme === "light" ? ".light, [data-theme=\"light\"]" : ":root";

  css += `  ${themePrefix} {\n`;

  const generateVars = (obj: any, prefix: string = "") => {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object" && "hue" in value) {
        css += `    --${prefix}${key}: ${colorToHSL(value)};\n`;
      } else if (typeof value === "object") {
        generateVars(value, `${prefix}${key}-`);
      }
    }
  };

  generateVars(tokens.colors, "");

  css += `  }\n`;
  return css;
}

function generateSpacingVariables(): string {
  let css = "";
  
  const generateVars = (obj: any, prefix: string = "") => {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object" && "value" in value) {
        css += `  --spacing-${prefix}${key}: ${value.value};\n`;
      } else if (typeof value === "object") {
        generateVars(value, `${prefix}${key}-`);
      }
    }
  };

  generateVars(tokens.spacing, "");
  return css;
}

function generateTypographyVariables(): string {
  let css = "";
  
  const generateVars = (obj: any, prefix: string = "") => {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object" && "fontSize" in value) {
        const token = value as { fontSize: string; lineHeight: string; letterSpacing?: string; fontWeight?: string };
        css += `  --font-${prefix}${key}-size: ${token.fontSize};\n`;
        css += `  --font-${prefix}${key}-line-height: ${token.lineHeight};\n`;
        if (token.letterSpacing) {
          css += `  --font-${prefix}${key}-letter-spacing: ${token.letterSpacing};\n`;
        }
        if (token.fontWeight) {
          css += `  --font-${prefix}${key}-weight: ${token.fontWeight};\n`;
        }
      } else if (typeof value === "object") {
        generateVars(value, `${prefix}${key}-`);
      }
    }
  };

  generateVars(tokens.typography, "");
  return css;
}

function generateBorderRadiusVariables(): string {
  let css = "";
  
  for (const [key, value] of Object.entries(tokens.borderRadius)) {
    css += `  --radius-${key}: ${value.value};\n`;
  }
  
  return css;
}

function generateShadowVariables(): string {
  let css = "";
  
  for (const [key, value] of Object.entries(tokens.shadows)) {
    css += `  --shadow-${key}: ${value.value};\n`;
  }
  
  return css;
}

function generateAnimationVariables(): string {
  let css = "";
  
  for (const [key, value] of Object.entries(tokens.animations.float)) {
    css += `  --animate-${key}: ${value.name} ${value.duration} ${value.easing} infinite;\n`;
  }
  
  return css;
}

function generateKeyframes(): string {
  let css = "";

  css += `
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-8px) translateX(4px);
  }
  66% {
    transform: translateY(4px) translateX(-6px);
  }
}

@keyframes float-medium {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-12px) translateX(6px);
  }
  50% {
    transform: translateY(6px) translateX(-8px);
  }
  75% {
    transform: translateY(-4px) translateX(10px);
  }
}

@keyframes float-fast {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  20% {
    transform: translateY(-10px) translateX(8px);
  }
  40% {
    transform: translateY(8px) translateX(-6px);
  }
  60% {
    transform: translateY(-6px) translateX(12px);
  }
  80% {
    transform: translateY(4px) translateX(-10px);
  }
}
`;

  return css;
}

function generateCSS(): string {
  let css = "";

  css += `@theme {\n`;
  css += generateColorVariables();
  css += generateSpacingVariables();
  css += generateTypographyVariables();
  css += generateBorderRadiusVariables();
  css += generateShadowVariables();
  css += generateAnimationVariables();
  css += `}\n\n`;

  css += `@layer base {\n`;
  css += generateThemeVariables("dark");
  css += generateThemeVariables("light");
  css += `}\n\n`;

  css += generateKeyframes();

  return css;
}

console.log(generateCSS());