# Berget Design System — Agent Guidelines

## Key Rules

- **Primitives are upstream shadcn/ui.** Minimize divergence. Never use Berget brand colors (`moss`, `cloud`, `slate`, `night`, `peak`, `lichen`, `spruce`, `fjord`) in `packages/ui/src/primitives/` — only standard shadcn tokens (`--primary`, `--secondary`, `--border`, etc.).
- **Brand colors belong in the design system layer only** (`packages/ui/src/components/`).
- **Keycloak theme should use `@berget-ai/ui` components.** Only keep a custom component in `apps/keycloak-theme/` if the shared one breaks the Keycloak theme without substantial rework.

## Using Brand Colors

In `src/components/`, always reference brand colors through their design tokens — never hardcode raw HSL values.

- **Tailwind utilities** (className): use `bg-berget-brand-moss`, `text-berget-brand-peak`, etc.
- **Inline `style=` props**: use `hsl(var(--berget-brand-moss))`, not `hsl(151 44% 52%)`.
- **CSS custom properties** (in `.css` files): `hsl(var(--berget-brand-moss))`.

## CSS Tokens Are the Source of Truth

Design values defined as CSS custom properties in `packages/ui/src/styles/index.css` must not be duplicated in TypeScript/JavaScript. Components should reference tokens directly:

```tsx
// Wrong — duplicates what index.css already defines
const gradientMap = { "moss-lichen": "linear-gradient(...)" };
style={{ backgroundImage: gradientMap[variant] }}

// Correct — reference the CSS token
style={{ backgroundImage: `var(--bg-image-gradient-${variant})` }}
```

## File Hygiene

- Never commit `.bak`, `.tmp`, or other scratch files. Use git stash or a local branch for work-in-progress snapshots.

## Changing Shared Layout Components

Changes to shared layout primitives (`Section`, `Container`, etc.) affect every consumer. If you modify layout behaviour (e.g. `container` → `max-w-7xl`), call it out explicitly in the PR description with the rationale, even if the change is intentional.

## Adding a New Component

1. Add the shadcn primitive from `packages/ui/`:
   ```sh
   npx shadcn@latest add <component>
   ```
2. Create the design system wrapper in the appropriate level under `src/components/` (`atoms/`, `molecules/`, or `foundations/`).
3. Export from `src/index.ts`.
4. Add a Storybook story co-located with the component.
