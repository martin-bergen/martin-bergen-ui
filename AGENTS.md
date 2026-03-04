# Berget Design System — Agent Guidelines

## Key Rules

- **Primitives are upstream shadcn/ui.** Minimize divergence. Never use Berget brand colors (`moss`, `cloud`, `slate`, `night`, `peak`, `lichen`, `spruce`, `fjord`) in `packages/ui/src/primitives/` — only standard shadcn tokens (`--primary`, `--secondary`, `--border`, etc.).
- **Brand colors belong in the design system layer only** (`packages/ui/src/components/`).
- **Keycloak theme should use `@berget-ai/ui` components.** Only keep a custom component in `apps/keycloak-theme/` if the shared one breaks the Keycloak theme without substantial rework.

## Adding a New Component

1. Add the shadcn primitive from `packages/ui/`:
   ```sh
   npx shadcn@latest add <component>
   ```
2. Create the design system wrapper in the appropriate level under `src/components/` (`atoms/`, `molecules/`, or `foundations/`).
3. Export from `src/index.ts`.
4. Add a Storybook story co-located with the component.
