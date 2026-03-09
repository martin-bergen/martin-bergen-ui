# Design Tokens

This directory contains the design token system for Berget UI. All design values are defined here as the single source of truth.

## Structure

- `tokens.ts` - Type-safe token definitions
- `scripts/generate-css.ts` - Generates CSS variables from tokens
- `src/styles/index.css` - Generated CSS variables (auto-generated, do not edit directly)

## Token Categories

### Colors
- `brand` - Brand colors (moss, lichen, spruce, fjord, peak, cloud, slate, night)
- `semantic` - Semantic colors (success, warning, error, info)
- `borders` - Border colors with opacity
- `ui` - UI component colors (background, foreground, primary, etc.)

### Spacing
- `featureCard` - Feature card specific spacing

### Typography
- `feature` - Feature section typography
- `heading` - Heading typography (h1, h2, h3)
- `body` - Body typography (base, small)

### Border Radius
- `full`, `xl`, `lg`, `md`, `sm`

### Shadows
- `sm`, `md`, `lg`, `xl`

### Animations
- `float` - Float animations (slow, medium, fast)

## Usage

### In TypeScript

```typescript
import { tokens, getColorValue } from '@berget-ai/ui/tokens';

// Access token value directly
const mossColor = tokens.colors.brand.moss;
// { hue: 151, saturation: 44, lightness: 52 }

// Get HSL string for CSS
const mossHSL = getColorValue('brand.moss');
// "151 44% 52"
```

### In React Components

```tsx
import { getColorValue } from '@berget-ai/ui/tokens';

function MyComponent() {
  return (
    <div style={{ color: `hsl(${getColorValue('brand.moss')})` }}>
      Text with moss color
    </div>
  );
}
```

### In Tailwind CSS

The generated CSS variables are available as Tailwind utilities:

```tsx
<div className="bg-brand-moss text-peak">
  Using token colors
</div>
```

## Adding or Modifying Tokens

1. Edit `tokens.ts` with your changes
2. Run `npm run generate:css` to regenerate CSS variables
3. The changes will be automatically applied to all components using the tokens

## Benefits

- **Type-safe**: TypeScript ensures you use valid token paths
- **Single source of truth**: All design values in one place
- **Auto-generated CSS**: CSS variables are generated from TypeScript
- **Atomic design**: Tokens support the atomic design methodology
- **Easy updates**: Change a token once, update everywhere

## Examples

### Adding a new brand color

```typescript
// In tokens.ts
brand: {
  // ... existing colors
  newColor: { hue: 200, saturation: 50, lightness: 50 } as ColorToken,
}
```

Run `npm run generate:css` and the new color is available as `bg-brand-newColor`.

### Adding new spacing token

```typescript
// In tokens.ts
spacing: {
  // ... existing spacing
  newSection: {
    padding: { value: "24px" } as SpacingToken,
    gap: { value: "16px" } as SpacingToken,
  },
}
```

Run `npm run generate:css` and use as `p-[var(--spacing-newSection-padding)]`.