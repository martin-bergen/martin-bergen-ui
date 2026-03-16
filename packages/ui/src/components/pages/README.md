# Pages

Page-level components that combine organisms into complete page layouts.

## Components

### LandingPage

A complete landing page template that combines multiple organisms into a cohesive page layout.

**Features:**

- Hero section with tagline, title, description, and CTAs
- Feature cards section showcasing key benefits
- Pricing cards section with tier comparison
- Fully responsive design
- Customizable data through props

**Usage:**

```tsx
import { LandingPage } from "@berget-ai/ui";

function App() {
  return <LandingPage />;
}
```

**Custom Data:**

```tsx
import { LandingPage, type LandingPageData } from "@berget-ai/ui";

const customData: LandingPageData = {
  hero: {
    tagline: "Your Tagline",
    title: "Your Title",
    description: "Your description",
    actions: <Button>Get Started</Button>,
  },
  features: {
    title: "Features",
    description: "Description",
    items: [
      {
        icon: IconComponent,
        title: "Feature 1",
        description: "Description",
        items: ["Item 1", "Item 2"],
      },
    ],
    columns: 3,
  },
  pricing: {
    title: "Pricing",
    description: "Description",
    tiers: [
      {
        id: "free",
        name: "Free",
        description: "Description",
        price: "$0",
        features: ["Feature 1", "Feature 2"],
        ctaText: "Get Started",
      },
    ],
    columns: 3,
  },
};

function App() {
  return <LandingPage />;
}
```

## Design Principles

Pages follow the Atomic Design methodology:

1. **Single Source of Truth** - All styling uses design tokens from `src/styles/index.css`
2. **Composable** - Pages are built from reusable organisms, molecules, and atoms
3. **Consistent** - All pages share the same visual language and spacing scale
4. **Accessible** - Semantic HTML and proper ARIA attributes

## Adding New Pages

1. Create a new component file in `src/components/pages/`
2. Import and compose existing organisms
3. Use design tokens for all styling
4. Add Storybook stories for documentation
5. Export from `src/components/pages/index.ts`
6. Export from `src/index.ts`
