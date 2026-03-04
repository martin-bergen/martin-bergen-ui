# Berget Design System

Monorepo for the Berget AI design system and related applications.

## Structure

```
packages/
  ui/             → @berget-ai/ui – shared React component library
apps/
  storybook/      → Storybook for component development and documentation
  keycloak-theme/ → Custom Keycloak login theme using @berget-ai/ui
```

## Getting Started

```bash
pnpm install
```

### Development

```bash
# Run Storybook
pnpm storybook

# Build the component library
pnpm build

# Build the Keycloak theme
pnpm build-keycloak-theme
```

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS v4** for styling
- **Radix UI** for accessible primitives
- **CVA** (Class Variance Authority) for component variants
- **tsup** for library bundling
- **Storybook** for component development
- **Keycloakify** for Keycloak theming

## License

MIT
