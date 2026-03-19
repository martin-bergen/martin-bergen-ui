# Berget Design System — Agent Guidelines

## Language

- **Conversations:** Respond and reason in the user's preferred language. English and Swedish are both supported — follow the user's lead.
- **Repository files:** All files in this repo must be in English, including source code, comments, and documentation. Do not write Swedish (or any other language) in files committed to the repo.

## Token System

- **Two tiers of `--berget-*` vars:** `--berget-brand-*` are raw HSL channels (`151 44% 52%`); semantic tokens (`--berget-*`) are full `hsl(...)` values. Only brand primitives support Tailwind opacity modifiers (`/20`, `/90`).
- **Always use `--berget-*` utilities in `src/components/`.** Never bare brand names (`bg-moss`) or shadcn vars (`bg-primary`, `border-border`). Shadcn vars exist only as a bridge for primitives.
- **Button variants use component-scoped tokens** (`--berget-button-<variant>-bg/fg`). Follow this pattern for new variants.
- **Inline `style=` props use `--berget-brand-*` with explicit `hsl()`.** Brand tokens are raw HSL channels, so `hsl()` is required: write `hsl(var(--berget-brand-cloud) / 0.3)`, not `hsl(var(--cloud)/0.3)`.
- **`GrainyGradientBackground` `EllipseColor` type and `colorClassMap` must stay in sync.** Adding a color requires updating both.
- **Source of truth for tokens is sections A and B in `packages/ui/src/styles/index.css`.** Never invent values by hand.
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
- **Button variants use component-scoped tokens** (`--berget-button-<variant>-bg/fg`). Follow this pattern for new variants.
- **`GrainyGradientBackground` `EllipseColor` type and `colorClassMap` must stay in sync.** Adding a color requires updating both.
- **After editing `index.css`, run `pnpm --filter @berget-ai/ui build`.** `@berget-ai/ui/styles` resolves to `dist/styles/index.css`, not the source — changes are invisible in Storybook until rebuilt.
- **Dark-first only.** The `.light / [data-theme="light"]` block was intentionally removed. Do not re-add it.
