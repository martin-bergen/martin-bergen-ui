import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from ".";
import { Typography } from "../typography";

const meta: Meta<typeof Card> = {
  title: "Atoms/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["highlight", "glass", "solid"],
      description: "Visual style variant",
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Internal padding",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    variant: "highlight",
    padding: "md",
  },
  render: (args) => (
    <div className="max-w-md">
      <Card {...args}>
        <Typography variant="h5" className="mb-2">
          Card Title
        </Typography>
        <Typography variant="body" color="muted">
          This is a card with interactive controls. Try changing the variant and
          padding.
        </Typography>
      </Card>
    </div>
  ),
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as React.ReactNode },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <Typography variant="small" color="muted" className="mb-3 block">
          Variants
        </Typography>
        <div className="flex flex-wrap gap-6">
          <Card variant="highlight" className="max-w-xs">
            <div className="p-6">
              <Typography variant="h5" className="mb-2">
                Highlight
              </Typography>
              <Typography variant="small" color="muted">
                Semi-transparent, blends into background with sharp edge
              </Typography>
            </div>
          </Card>
          <Card variant="glass" className="max-w-xs">
            <div className="p-6">
              <Typography variant="h5" className="mb-2">
                Glass
              </Typography>
              <Typography variant="small" color="muted">
                Lighter, ethereal feel with cloud/5
              </Typography>
            </div>
          </Card>
          <Card variant="solid" className="max-w-xs">
            <div className="p-6">
              <Typography variant="h5" className="mb-2">
                Solid
              </Typography>
              <Typography variant="small" color="muted">
                Most authoritative, no transparency
              </Typography>
            </div>
          </Card>
        </div>
      </div>
      <div className="border-t border-border pt-4">
        <Typography variant="small" color="muted" className="mb-3 block">
          Padding
        </Typography>
        <div className="flex flex-wrap gap-6">
          <Card variant="highlight" padding="sm">
            <Typography variant="h5" className="mb-2">
              Small
            </Typography>
            <Typography variant="small" color="muted">
              p-4 (16px)
            </Typography>
          </Card>
          <Card variant="highlight" padding="md">
            <Typography variant="h5" className="mb-2">
              Medium
            </Typography>
            <Typography variant="small" color="muted">
              p-6 (24px)
            </Typography>
          </Card>
          <Card variant="highlight" padding="lg">
            <Typography variant="h5" className="mb-2">
              Large
            </Typography>
            <Typography variant="small" color="muted">
              p-8 (32px)
            </Typography>
          </Card>
        </div>
      </div>
    </div>
  ),
};

export const WithCompoundComponents: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as React.ReactNode },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="max-w-md">
        <Card padding="none">
          <CardHeader>
            <CardTitle>Compound Card - No Padding</CardTitle>
            <CardDescription>
              Using CardHeader, CardTitle, CardDescription, CardContent, and
              CardFooter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Typography variant="small">
              Main content area of the card. Padding is handled by each
              sub-component.
            </Typography>
          </CardContent>
          <CardFooter>
            <Typography variant="small" color="muted">
              Footer content
            </Typography>
          </CardFooter>
        </Card>
      </div>

      <div className="max-w-md">
        <Card padding="sm">
          <CardHeader className="pb-2">
            <CardTitle>Compact Card - Small Padding</CardTitle>
            <CardDescription>
              Card with padding="sm" for dense layouts
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <Typography variant="small">
              This card uses the small padding variant (p-4) with minimal
              spacing.
            </Typography>
          </CardContent>
          <CardFooter className="pt-2">
            <Typography variant="small" color="muted">
              Footer content
            </Typography>
          </CardFooter>
        </Card>
      </div>

      <div className="max-w-md">
        <Card padding="lg">
          <CardHeader className="pb-8">
            <CardTitle>Large Padding Card</CardTitle>
            <CardDescription>
              Card with padding="lg" plus additional spacing in header
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <Typography variant="small" className="mb-4 block">
              This card uses the large padding variant (p-8) with additional
              spacing between sections.
            </Typography>
            <Typography variant="small" color="muted">
              Perfect for content-heavy cards that need more breathing room.
            </Typography>
          </CardContent>
          <CardFooter className="pt-4">
            <Typography variant="small" color="muted">
              Footer content
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};

export const CompoundAllVariants: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as React.ReactNode },
  render: () => (
    <div className="flex flex-col gap-6">
      <Card variant="highlight" padding="lg" className="max-w-md">
        <CardHeader className="pb-6">
          <CardTitle>Highlight Variant</CardTitle>
          <CardDescription>
            Semi-transparent with radial gradient overlay
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Typography variant="small">
            This is the highlight variant with large padding. Perfect for
            featured content or important information.
          </Typography>
        </CardContent>
        <CardFooter>
          <Typography variant="small" color="muted">
            Highlight footer
          </Typography>
        </CardFooter>
      </Card>

      <Card variant="glass" padding="lg" className="max-w-md">
        <CardHeader className="pb-6">
          <CardTitle>Glass Variant</CardTitle>
          <CardDescription>
            Light, ethereal feel with cloud/5 backdrop
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Typography variant="small">
            This is the glass variant with large padding. Creates a subtle,
            modern appearance.
          </Typography>
        </CardContent>
        <CardFooter>
          <Typography variant="small" color="muted">
            Glass footer
          </Typography>
        </CardFooter>
      </Card>

      <Card variant="solid" padding="lg" className="max-w-md">
        <CardHeader className="pb-6">
          <CardTitle>Solid Variant</CardTitle>
          <CardDescription>Most authoritative, no transparency</CardDescription>
        </CardHeader>
        <CardContent>
          <Typography variant="small">
            This is the solid variant with large padding. Best for
            high-contrast, serious content.
          </Typography>
        </CardContent>
        <CardFooter>
          <Typography variant="small" color="muted">
            Solid footer
          </Typography>
        </CardFooter>
      </Card>
    </div>
  ),
};
