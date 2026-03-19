---
name: add-component
description: Step-by-step workflow for adding a new UI component to the Berget design system. Use this skill whenever the user wants to add a component, create a new UI element, scaffold a shadcn primitive, or build a design system wrapper. Trigger on phrases like "add a component", "create a new component", "add shadcn component", "scaffold a component", or "I need a new UI component".
metadata:
  author: berget-ai
  version: "1.0"
  audience: maintainers
---

# Adding a New Component to the Berget Design System

Follow these steps in order when adding any new UI component.

## Step 1: Add the shadcn primitive

Run from `packages/ui/`:

```sh
npx shadcn@latest add <component>
```

The primitive lives in `packages/ui/src/primitives/`. Do not modify it with Berget brand colors — primitives must only use standard shadcn tokens (`--primary`, `--secondary`, `--border`, etc.).

## Step 2: Create the design system wrapper

Create a wrapper component in `packages/ui/src/components/` at the appropriate atomic level:

| Level          | Path                          | Use for                                                       |
| -------------- | ----------------------------- | ------------------------------------------------------------- |
| `atoms/`       | `src/components/atoms/`       | Single-purpose, indivisible elements (buttons, badges, icons) |
| `molecules/`   | `src/components/molecules/`   | Combinations of atoms (form fields, cards, nav items)         |
| `foundations/` | `src/components/foundations/` | Layout and structural patterns (grids, containers, sections)  |

The wrapper is where Berget brand tokens, variants, and design decisions live. Apply brand colors here, not in the primitive.

## Step 3: Export from the package index

Add the new component export to `packages/ui/src/index.ts`.

## Step 4: Add a Storybook story

Create a `.stories.tsx` file co-located with the component (same directory). The story should cover the main variants and states.

## Checklist

- [ ] `npx shadcn@latest add <component>` run from `packages/ui/`
- [ ] Primitive untouched (no brand colors)
- [ ] Wrapper created at the correct atomic level
- [ ] Exported from `src/index.ts`
- [ ] Storybook story co-located with the component
- [ ] No raw HSL values hardcoded (see the `use-brand-colors` skill)
