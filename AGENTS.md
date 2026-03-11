# Berget Design System — Agent Guidelines

## Key Rules

- **Primitives are upstream shadcn/ui.** Minimize divergence. Never use Berget brand colors (`moss`, `cloud`, `slate`, `night`, `peak`, `lichen`, `spruce`, `fjord`) in `packages/ui/src/primitives/` — only standard shadcn tokens (`--primary`, `--secondary`, `--border`, etc.).
- **Brand colors belong in the design system layer only** (`packages/ui/src/components/`).
- **Keycloak theme should use `@berget-ai/ui` components.** Only keep a custom component in `apps/keycloak-theme/` if the shared one breaks the Keycloak theme without substantial rework.

## Token System

- **Two tiers of `--berget-*` vars:** `--berget-brand-*` are raw HSL channels (`151 44% 52%`); semantic tokens (`--berget-*`) are full `hsl(...)` values. Only brand primitives support Tailwind opacity modifiers (`/20`, `/90`).
- **Always use `--berget-*` utilities in `src/components/`.** Never bare brand names (`bg-moss`) or shadcn vars (`bg-primary`, `border-border`). Shadcn vars exist only as a bridge for primitives.
- **Button variants use component-scoped tokens** (`--berget-button-<variant>-bg/fg`). Follow this pattern for new variants.
- **Inline `style=` props use `--berget-brand-*` with explicit `hsl()`.** Brand tokens are raw HSL channels, so `hsl()` is required: write `hsl(var(--berget-brand-cloud) / 0.3)`, not `hsl(var(--cloud)/0.3)`.
- **`GrainyGradientBackground` `EllipseColor` type and `colorClassMap` must stay in sync.** Adding a color requires updating both.
- **Tokens derive from Figma.** Source of truth is `tokens.json` (sets: `brand-colors/shadcn`, `semantic-colors/shadcn`, `shadows/shadcn`, `chart-colors/shadcn`, `typography/shadcn`, `border-radii/shadcn`). Never invent values by hand.
- **After editing `index.css`, run `pnpm --filter @berget-ai/ui build`.** `@berget-ai/ui/styles` resolves to `dist/styles/index.css`, not the source — changes are invisible in Storybook until rebuilt.
- **Dark-first only.** The `.light / [data-theme="light"]` block was intentionally removed. Do not re-add it.

## Adding a New Component

1. Add the shadcn primitive from `packages/ui/`:
   ```sh
   npx shadcn@latest add <component>
   ```
2. Create the design system wrapper in the appropriate level under `src/components/` (`atoms/`, `molecules/`, or `foundations/`).
3. Export from `src/index.ts`.
4. Add a Storybook story co-located with the component.
