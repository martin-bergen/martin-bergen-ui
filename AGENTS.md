# Berget Design System — Agent Guidelines

## Token System

- **Button variants use component-scoped tokens** (`--berget-button-<variant>-bg/fg`). Follow this pattern for new variants.
- **`GrainyGradientBackground` `EllipseColor` type and `colorClassMap` must stay in sync.** Adding a color requires updating both.
- **After editing `index.css`, run `pnpm --filter @berget-ai/ui build`.** `@berget-ai/ui/styles` resolves to `dist/styles/index.css`, not the source — changes are invisible in Storybook until rebuilt.
- **Dark-first only.** The `.light / [data-theme="light"]` block was intentionally removed. Do not re-add it.
