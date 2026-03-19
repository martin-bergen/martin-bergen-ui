# Berget Design System — Agent Guidelines

## Language

- **Conversations:** Respond and reason in the user's preferred language. English and Swedish are both supported — follow the user's lead.
- **Repository files:** All files in this repo must be in English, including source code, comments, and documentation. Do not write Swedish (or any other language) in files committed to the repo.

## Token System

- **Button variants use component-scoped tokens** (`--berget-button-<variant>-bg/fg`). Follow this pattern for new variants.
- **`GrainyGradientBackground` `EllipseColor` type and `colorClassMap` must stay in sync.** Adding a color requires updating both.
- **After editing `index.css`, run `pnpm --filter @berget-ai/ui build`.** `@berget-ai/ui/styles` resolves to `dist/styles/index.css`, not the source — changes are invisible in Storybook until rebuilt.
- **Dark-first only.** The `.light / [data-theme="light"]` block was intentionally removed. Do not re-add it.
