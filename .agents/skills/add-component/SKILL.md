---
name: add-component
description: Step-by-step workflow for adding a new UI component to the Berget design system. Use this skill whenever the user wants to add a component, create a new UI element, scaffold a shadcn primitive, or build a design system wrapper. Trigger on phrases like "add a component", "create a new component", "add shadcn component", "scaffold a component", or "I need a new UI component".
metadata:
  author: berget-ai
  version: "1.2"
  audience: maintainers
---

# Adding a New Component to the Berget Design System

This skill is a **Berget-specific layer** on top of the general `shadcn` skill. It tells you _where things go in this monorepo_ and _what the design system wrapper requires_. The `shadcn` skill governs everything about _how to use shadcn/ui correctly_ — component APIs, form patterns, icon rules, styling rules, and update workflows. Both skills apply when adding a component.

> **Always load the `shadcn` skill alongside this one.** It contains the critical rules for correct shadcn/ui usage (form layout, icon sizing, semantic colors, composition patterns, etc.) that apply to both the primitive and the wrapper.

## The proxy pattern

This design system uses a **proxy (pre-composition) model**, not an overwrite model. All Berget-specific logic — brand tokens, variants, prop APIs, design decisions — lives exclusively in the wrapper component in `src/components/`. The shadcn primitive in `src/primitives/` is **never modified**.

This is intentional: because the primitive is untouched, it can be updated directly from upstream at any time:

```sh
# Safe because the primitive has no local modifications
npx shadcn@latest add <component> --overwrite

# Or update everything at once
npx shadcn@latest add --all --overwrite
```

**Never modify a primitive directly.** If you need to change behavior or styling, do it in the wrapper. If you find yourself wanting to edit the primitive, that is a signal that the wrapper needs a new prop or composition pattern instead.

---

Follow these steps in order when adding any new UI component.

## Step 1: Add the shadcn primitive

Run from `packages/ui/`:

```sh
npx shadcn@latest add <component>
```

The primitive is installed to `packages/ui/src/primitives/`. Leave it exactly as shadcn installs it — no brand colors, no Berget-specific logic, no modifications of any kind.

Before running `add`, check whether the component is already installed (see the `shadcn` skill's workflow step 2) and use `--dry-run` + `--diff` to preview changes for existing components.

## Step 2: Create the design system wrapper

Create a wrapper component in `packages/ui/src/components/` at the appropriate atomic level (see the `atomic-design-fundamentals` skill for the full hierarchy):

| Level          | Path                          | Use for                                                       |
| -------------- | ----------------------------- | ------------------------------------------------------------- |
| `atoms/`       | `src/components/atoms/`       | Single-purpose, indivisible elements (buttons, badges, icons) |
| `molecules/`   | `src/components/molecules/`   | Combinations of atoms (form fields, cards, nav items)         |
| `foundations/` | `src/components/foundations/` | Layout and structural patterns (grids, containers, sections)  |

The wrapper imports from the primitive and re-exports or pre-composes it with Berget brand tokens, variants, and design decisions. This is the only place Berget-specific styling lives.

```tsx
// Example proxy wrapper — all Berget logic here, primitive untouched
import { Tooltip, TooltipTrigger, TooltipContent } from "@/primitives/tooltip";

type BergetTooltipProps = {
  text: string;
  children: React.ReactNode;
};

export const BergetTooltip = ({ text, children }: BergetTooltipProps) => (
  <Tooltip>
    <TooltipTrigger>{children}</TooltipTrigger>
    <TooltipContent className="bg-berget-brand-night text-berget-brand-peak">
      <p>{text}</p>
    </TooltipContent>
  </Tooltip>
);
```

For correct token usage, load the `design-tokens` skill — never hardcode raw HSL values.

## Step 3: Export from the package index

Add the new component export to `packages/ui/src/index.ts`. Export the wrapper, not the primitive directly.

## Step 4: Add a Storybook story

Create a `.stories.tsx` file co-located with the wrapper component (same directory). The story should cover the main variants and states.

## Updating a primitive

Because primitives are never modified, updates are safe and mechanical:

```sh
# Update a single primitive
npx shadcn@latest add <component> --overwrite

# Update all primitives at once
npx shadcn@latest add --all --overwrite
```

Use `--dry-run` and `--diff` first if you want to review what changed before committing. If an upstream update changes a sub-component API that the wrapper depends on, update the wrapper accordingly — but the primitive itself is always the authoritative upstream version.

## Related Skills

| Skill                        | When to use it                                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `shadcn`                     | Always — governs correct shadcn/ui usage: component APIs, form layout, icons, styling, composition, and update workflows             |
| `atomic-design-fundamentals` | When deciding which level (`atoms/`, `molecules/`, `foundations/`) a new component belongs to                                        |
| `design-tokens`              | Whenever the wrapper applies Berget brand tokens (moss, cloud, slate, night, peak, lichen, spruce, fjord, gradients, shadows, radii) |

## Checklist

- [ ] `shadcn` skill loaded and rules applied to both primitive and wrapper
- [ ] `npx shadcn@latest add <component>` run from `packages/ui/`
- [ ] Primitive untouched (no brand colors, no Berget-specific logic)
- [ ] Wrapper created at the correct atomic level, proxying the primitive
- [ ] Brand colors applied via tokens only (see `design-tokens` skill)
- [ ] Wrapper (not primitive) exported from `src/index.ts`
- [ ] Storybook story co-located with the wrapper
- [ ] PR description calls out any layout component changes
