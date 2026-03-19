---
name: design-tokens
description: Reference guide for correctly using design tokens in the Berget design system. Use this skill whenever styling a component with brand colors or semantic values, asking how to use design tokens, or wanting to know the correct way to reference moss, cloud, slate, night, peak, lichen, spruce, fjord, gradients, shadows, radii, or typography tokens. Trigger on phrases like "use brand colors", "design tokens", "add color to a component", "style with brand palette", "how do I use moss/peak/fjord", "brand token", or "CSS variable".
metadata:
  author: berget-ai
  version: "2.0"
  audience: maintainers
---

# Design Tokens

All design values in this repo are defined as CSS custom properties in `packages/ui/src/styles/index.css`. That file is the single source of truth — never duplicate token values in TypeScript or JavaScript.

> **For Tailwind v4 `@theme` mechanics** (how `@theme` blocks work, OKLCH colors, `@custom-variant`, etc.) see the `tailwind-design-system` skill. This skill covers the Berget-specific token catalog and rules only.

## Architecture

`index.css` has four sections:

| Section                 | Lines   | Purpose                                                                                                                                                                                              |
| ----------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **A. Brand primitives** | 1–21    | Raw HSL channel values — `--berget-brand-*`. No `hsl()` wrapper, so Tailwind opacity modifiers work (e.g. `bg-berget-brand-moss/40`).                                                                |
| **B. Semantic tokens**  | 23–137  | Composed from primitives via `hsl(var(--berget-brand-X))`. Surfaces, buttons, borders, shadows, status, sidebar, charts, radii, typography.                                                          |
| **C. shadcn bridge**    | 139–163 | Maps standard shadcn tokens (`--primary`, `--secondary`, `--border`, etc.) to brand primitives so shadcn primitives render correctly.                                                                |
| **D. `@theme` block**   | 165–382 | Exposes everything as Tailwind v4 utilities — `bg-berget-brand-moss`, `shadow-berget-sm`, `rounded-berget-md`, etc. No `tailwind.config.js` exists; this block is the entire Tailwind configuration. |

---

## Token Categories

### Brand color primitives

Stored as raw HSL channels in `:root`. Use these as the base when building semantic tokens in CSS, never in component files directly.

| Token                    | Color                  |
| ------------------------ | ---------------------- |
| `--berget-brand-peak`    | White `#ffffff`        |
| `--berget-brand-cloud`   | Warm grey `#e5ddd5`    |
| `--berget-brand-slate`   | Near-black `#1a1a1a`   |
| `--berget-brand-night`   | Almost black `#0a0a0a` |
| `--berget-brand-coal`    | Pure black `#000000`   |
| `--berget-brand-moss`    | Green `#52b788`        |
| `--berget-brand-lichen`  | Light green `#74c69d`  |
| `--berget-brand-spruce`  | Dark green `#2d6a4f`   |
| `--berget-brand-fjord`   | Dark blue `#0f405a`    |
| `--berget-brand-info`    | Blue `#3975d6`         |
| `--berget-brand-success` | Alias of moss          |
| `--berget-brand-warning` | Yellow-green `#cfff8b` |
| `--berget-brand-error`   | Red `#d1392e`          |

### Gradient tokens

Eight named gradients defined in the `@theme` block as `--bg-image-gradient-*`:

```
moss-lichen · moss-spruce · lichen-cloud
fjord-slate · slate-night
spruce-fjord · spruce-slate · spruce-night
```

### Shadow tokens

`--shadow-berget-sm`, `--shadow-berget-md`, `--shadow-berget-lg`
→ Tailwind: `shadow-berget-sm`, `shadow-berget-md`, `shadow-berget-lg`

### Border-radius tokens

| Token                  | Value  | Tailwind              |
| ---------------------- | ------ | --------------------- |
| `--radius-berget-none` | 0px    | `rounded-berget-none` |
| `--radius-berget-xs`   | 12px   | `rounded-berget-xs`   |
| `--radius-berget-sm`   | 16px   | `rounded-berget-sm`   |
| `--radius-berget-md`   | 24px   | `rounded-berget-md`   |
| `--radius-berget-lg`   | 32px   | `rounded-berget-lg`   |
| `--radius-berget-full` | 9999px | `rounded-berget-full` |

### Typography tokens

Font families, type scale, leading, and tracking are all tokenised:

```css
--berget-font-sans:
  "DM Sans", sans-serif --berget-font-serif: "Ovo",
  serif --berget-font-mono: "DM Mono",
  monospace --text-h1 / --text-h2 / --text-h3 / --text-h4 / --text-p /
    --text-mono;
```

### Animation tokens

```css
--animate-float-slow: float-slow 20s ease-in-out infinite
  --animate-float-medium: float-medium 14s ease-in-out infinite
  --animate-float-fast: float-fast 8s ease-in-out infinite;
```

---

## How to Reference Tokens

**Rule: never hardcode raw HSL values. Always reference a token.**

### In Tailwind `className` props

The `@theme` block maps every `--color-berget-brand-*` entry to Tailwind utilities, so you get `bg-*`, `text-*`, `border-*`, and opacity modifier support for free:

```tsx
// Correct
<div className="bg-berget-brand-moss text-berget-brand-peak" />
<div className="bg-berget-brand-slate/20 border-berget-brand-slate/40" />

// Wrong — hardcoded HSL
<div style={{ backgroundColor: "hsl(151 44% 52%)" }} />
```

Non-color tokens work the same way:

```tsx
<div className="shadow-berget-sm rounded-berget-md" />
```

### In inline `style=` props

Use `hsl(var(--token))` when a Tailwind class can't express the value (SVG `fill`, Canvas, complex arbitrary values):

```tsx
// Correct
<path style={{ fill: "hsl(var(--berget-brand-peak))" }} />
<div style={{ color: "hsl(var(--berget-brand-cloud) / 0.3)" }} />

// Wrong — hardcoded
<path style={{ fill: "hsl(0 0% 100%)" }} />
```

### In `.css` files

```css
/* Correct */
.my-element {
  background-color: hsl(var(--berget-brand-moss));
  box-shadow: var(--shadow-berget-sm);
}

/* Wrong */
.my-element {
  background-color: hsl(151 44% 52%);
}
```

### For gradients — reference the CSS token, not a JS map

```tsx
// Wrong — duplicates what index.css already defines
const gradientMap = { "moss-lichen": "linear-gradient(...)" };
style={{ backgroundImage: gradientMap[variant] }}

// Correct — reference the token directly
style={{ backgroundImage: `var(--bg-image-gradient-${variant})` }}
```

---

## Where Brand Tokens Are Allowed

| Location                      | Brand tokens allowed?                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `packages/ui/src/primitives/` | **No** — upstream shadcn/ui; use only standard shadcn tokens (`--primary`, `--secondary`, `--border`, etc.) |
| `packages/ui/src/components/` | **Yes** — wrappers and design system components use brand and semantic tokens                               |
| `apps/keycloak-theme/`        | Via `@berget-ai/ui` components only; keep custom CSS overrides minimal                                      |
| `apps/storybook/`             | Infrastructure styles only; prefer token references over hardcoded values                                   |

---

## Known Exceptions

Some patterns are forced by platform constraints and are acceptable:

- **Canvas 2D API** (`NetworkBackground.tsx`) — requires numeric RGB tuples, not CSS values. Comment the mapping to the corresponding token (e.g. `// --berget-brand-cloud`).
- **Brand portal reference page** — `hslValue` props on color swatches are display strings for documentation, not styling.
- **Keycloak theme CSS** — currently maintains a parallel, standalone token set with hardcoded HSL values. This is a known divergence; new work should use `@berget-ai/ui` components instead of extending the standalone CSS.

---

## Adding a New Token

1. Add the raw primitive (if new color) to **Section A** of `index.css` as `--berget-brand-<name>: <H> <S%> <L%>` — channels only, no `hsl()`.
2. Add semantic aliases in **Section B** using `hsl(var(--berget-brand-<name>))`.
3. Expose as a Tailwind utility in the **`@theme` block (Section D)** as `--color-berget-<name>: hsl(var(--berget-brand-<name>))`.
4. Do **not** create a corresponding constant or object in any TypeScript file.
