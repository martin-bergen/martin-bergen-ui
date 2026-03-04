# @berget-ai/ui

A React component library for Berget AI built using Tailwind CSS v4, Radix UI, and shadcn.

## Installation

```bash
npm install @berget-ai/ui
```

The package is published to the GitHub Package Registry. Configure your `.npmrc`:

```
@berget-ai:registry=https://npm.pkg.github.com
```

## Setup

Import the stylesheet in your app entry point:

```tsx
import "@berget-ai/ui/styles";
```

The stylesheet provides CSS custom properties for theming (colors, radii, etc.). You need Tailwind CSS v4 configured in your project for the utility classes to work.

## Usage

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@berget-ai/ui";

function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">Click me</Button>
      </CardContent>
    </Card>
  );
}
```

## Architecture

Components are organized using [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles:

- **Foundations** - Low-level visual primitives like backgrounds and gradients
- **Atoms** - Basic UI elements (Button, Input, Badge, Card, etc.)
- **Molecules** - Compositions of atoms (Alert, Tabs, Section, List, etc.)

## Development

```bash
# Build the package
pnpm build

# Watch mode
pnpm dev

# Type check
pnpm typecheck
```
