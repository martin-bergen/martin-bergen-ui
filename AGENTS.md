# Berget Design System — Agent Guidelines

## Key Rules

- **Primitives are upstream shadcn/ui.** Minimize divergence. Never use Berget brand colors (`moss`, `cloud`, `slate`, `night`, `peak`, `lichen`, `spruce`, `fjord`) in `packages/ui/src/primitives/` — only standard shadcn tokens (`--primary`, `--secondary`, `--border`, etc.).
- **Brand colors belong in the design system layer only** (`packages/ui/src/components/`).
- **Keycloak theme should use `@berget-ai/ui` components.** Only keep a custom component in `apps/keycloak-theme/` if the shared one breaks the Keycloak theme without substantial rework.

## Token System

- **Every Tailwind class in a Berget component must resolve through a `--berget-*` CSS variable.** Never use bare brand utilities (`bg-moss`, `text-cloud`, etc.) — use `bg-berget-brand-moss`, `text-berget-brand-cloud`, etc.
- **Two tiers of `--berget-*` vars:** `--berget-brand-*` are raw HSL channels (e.g. `151 44% 52%`). `--berget-*` semantic tokens are full `hsl(...)` values. Only brand primitives support Tailwind opacity modifiers (`/20`, `/90`); semantic tokens do not.
- **`@theme` uses `hsl(var(--berget-brand-*))`.** Tailwind v4 generates `color-mix()` rules at build time, which resolve the `var()` at browser runtime — opacity modifiers work correctly even though the value is not a literal.
- **After editing `packages/ui/src/styles/index.css`, run `pnpm --filter @berget-ai/ui build`.** Storybook imports `@berget-ai/ui/styles` which resolves to `dist/styles/index.css` (the compiled output), not the source file. Changes are invisible in Storybook until the package is rebuilt.
- **Tokens derive from Figma.** The source of truth is `tokens.json` exported from Figma (sets: `brand-colors/shadcn`, `semantic-colors/shadcn`, `shadows/shadcn`, `chart-colors/shadcn`, `typography/shadcn`, `border-radii/shadcn`). Update `index.css` from that export, never invent values by hand.
- **Berget is dark-first only.** The `.light / [data-theme="light"]` block was intentionally removed. Do not re-add it.
- **Berget components never use shadcn vars directly.** Do not write `bg-primary`, `border-border`, `text-muted-foreground` etc. in `src/components/`. The shadcn vars (`--primary`, `--border`, …) exist only as a bridge for shadcn primitives. Berget wrappers must use `--berget-*` utilities.
- **Button variants use component-scoped tokens** (`--berget-button-<variant>-bg/fg`), not the raw brand or semantic tokens directly. Follow this pattern for any new button variant.
- **Inline `style=` props must also use `--berget-brand-*`.** Write `hsl(var(--berget-brand-cloud) / 0.3)`, not `hsl(var(--cloud)/0.3)`.
- **`GrainyGradientBackground` `EllipseColor` type and `colorClassMap` must stay in sync.** Both use the full `"berget-brand-*"` string keys. Adding a new color requires updating both.

## Adding a New Component

1. Add the shadcn primitive from `packages/ui/`:
   ```sh
   npx shadcn@latest add <component>
   ```
2. Create the design system wrapper in the appropriate level under `src/components/` (`atoms/`, `molecules/`, or `foundations/`).
3. Export from `src/index.ts`.
4. Add a Storybook story co-located with the component.
