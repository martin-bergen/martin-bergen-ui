---
name: pr-checklist
description: Checklist and guardrails for commits and pull requests in the Berget design system. Use this skill when preparing a PR, reviewing changes before commit, modifying shared layout components, or checking if changes need special callouts in the PR description. Trigger on phrases like "prepare a PR", "create a pull request", "before I commit", "modify layout component", "change Section or Container", or "what do I need to note in the PR".
metadata:
  author: berget-ai
  version: "1.0"
  audience: maintainers
---

# PR Checklist for Berget Design System

## File hygiene

Before committing, ensure:

- [ ] No `.bak`, `.tmp`, or scratch files are staged
- Use `git stash` or a local branch for work-in-progress snapshots instead

## Shared layout component changes

Changes to shared layout primitives (`Section`, `Container`, and similar) affect **every consumer** of the design system.

If you modified layout behaviour (e.g. changed `container` to `max-w-7xl`, adjusted padding, changed flex/grid defaults):

- [ ] Explicitly call out the change in the PR description
- [ ] Include the rationale — even if the change is intentional and correct
- [ ] Consider whether downstream apps (e.g. `apps/keycloak-theme/`) need updates

**PR description template for layout changes:**

```markdown
## Layout changes

- Changed `Section` padding from `py-16` to `py-12` to align with the updated spacing scale.
- Rationale: The previous value was inconsistent with the spacing tokens defined in `index.css`.
```

## Brand color and token checklist

- [ ] No raw HSL values hardcoded (see `use-brand-colors` skill)
- [ ] No brand colors used inside `packages/ui/src/primitives/`
- [ ] CSS tokens in `index.css` not duplicated in TypeScript/JavaScript

## Keycloak theme

- [ ] `apps/keycloak-theme/` uses `@berget-ai/ui` components where possible
- [ ] Any custom override kept only if the shared component breaks the Keycloak theme
