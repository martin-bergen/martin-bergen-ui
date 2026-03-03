# AGENTS.md

The Berget Design System is a React component library built on shadcn/ui and Radix UI primitives, published as `@berget-ai/ui` to GitHub Packages. Monorepo using pnpm workspaces with two packages: the UI library (`packages/ui`) and a Storybook docs app (`apps/storybook`).

## Commands

```bash
# Install dependencies
pnpm install

# Build the component library
pnpm build                          # or: pnpm --filter @berget-ai/ui build

# Run Storybook dev server (port 6006)
pnpm storybook                      # or: pnpm --filter storybook dev

# Type-check the library
pnpm --filter @berget-ai/ui typecheck

# Build Storybook static site
pnpm --filter storybook build
```

## Architecture

**Monorepo layout:**

- `packages/ui/` — the component library (tsup build → ESM + CJS + types)
- `apps/storybook/` — Storybook 10 app that imports from `@berget-ai/ui`

**Component organization** follows atomic design in `packages/ui/src/components/`:

- `atoms/` — primitive components (Button, Input, Badge, Card, etc.)
- `molecules/` — composite components (Alert, Tabs, Section, List)
- `foundations/` — visual/background components (GradientBackground, GridBackground, etc.)

**Each component folder** contains `ComponentName.tsx` + `index.ts`. All components are re-exported from `packages/ui/src/index.ts`.

**Stories** live in `packages/ui/src/stories/` mirroring the atomic design hierarchy.

## Component Patterns

- All components use `React.forwardRef` for ref forwarding
- Variants managed with `class-variance-authority` (CVA)
- `cn()` utility from `src/lib/utils.ts` (clsx + tailwind-merge) for className composition
- Components extend native HTML element props via `React.ComponentPropsWithoutRef`
- Radix UI Slot (`@radix-ui/react-slot`) used for `asChild` composition pattern

## Styling

- Tailwind CSS v4 with CSS custom properties (HSL format) defined in `src/styles/index.css`
- Dark theme is default; light theme via `.light` class or `[data-theme="light"]`
- Consumers import styles via `@berget-ai/ui/styles`

## Publishing

Published to GitHub Packages (`npm.pkg.github.com`) via the `release.yml` workflow (manual dispatch with version bump type). Git tags follow `v{version}` format.
