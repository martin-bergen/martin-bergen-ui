---
name: use-brand-colors
description: Reference guide for correctly applying Berget brand colors in the design system. Use this skill whenever the user is styling a component with brand colors, asking how to use brand palette tokens, or wants to know the correct way to reference moss, cloud, slate, night, peak, lichen, spruce, or fjord. Trigger on phrases like "use brand colors", "add color to a component", "style with brand palette", "how do I use moss/peak/fjord", or "brand token".
metadata:
  author: berget-ai
  version: "1.0"
  audience: maintainers
---

# Using Berget Brand Colors

## Where brand colors are allowed

| Location                      | Brand colors allowed?                                                                                               |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `packages/ui/src/primitives/` | **No** — primitives are upstream shadcn/ui; use only standard tokens (`--primary`, `--secondary`, `--border`, etc.) |
| `packages/ui/src/components/` | **Yes** — wrappers and design system components use brand tokens                                                    |
| `apps/keycloak-theme/`        | Via `@berget-ai/ui` components only; keep custom overrides minimal                                                  |

## How to reference brand colors

Always use the design token — never hardcode raw HSL values.

### In Tailwind className props

```tsx
// Correct
<div className="bg-berget-brand-moss text-berget-brand-peak" />

// Wrong — hardcoded HSL
<div style={{ backgroundColor: "hsl(151 44% 52%)" }} />
```

### In inline `style=` props

```tsx
// Correct
<div style={{ color: "hsl(var(--berget-brand-peak))" }} />

// Wrong — hardcoded
<div style={{ color: "hsl(151 44% 52%)" }} />
```

### In `.css` files

```css
/* Correct */
.my-element {
  background-color: hsl(var(--berget-brand-moss));
}

/* Wrong */
.my-element {
  background-color: hsl(151 44% 52%);
}
```

## CSS tokens are the source of truth

Design values are defined as CSS custom properties in `packages/ui/src/styles/index.css`. Do **not** duplicate them in TypeScript or JavaScript.

```tsx
// Wrong — duplicates what index.css already defines
const gradientMap = { "moss-lichen": "linear-gradient(...)" };
style={{ backgroundImage: gradientMap[variant] }}

// Correct — reference the CSS token directly
style={{ backgroundImage: `var(--bg-image-gradient-${variant})` }}
```

## Available brand color tokens

- `--berget-brand-moss` / `bg-berget-brand-moss`
- `--berget-brand-cloud` / `bg-berget-brand-cloud`
- `--berget-brand-slate` / `bg-berget-brand-slate`
- `--berget-brand-night` / `bg-berget-brand-night`
- `--berget-brand-peak` / `bg-berget-brand-peak`
- `--berget-brand-lichen` / `bg-berget-brand-lichen`
- `--berget-brand-spruce` / `bg-berget-brand-spruce`
- `--berget-brand-fjord` / `bg-berget-brand-fjord`
