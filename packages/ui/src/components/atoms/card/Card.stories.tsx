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
        <h3 className="text-lg  mb-2">Card Title</h3>
        <p className="text-muted-foreground">
          This is a card with interactive controls. Try changing the variant and
          padding.
        </p>
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
        <p className="text-sm  text-muted-foreground mb-3">Variants</p>
        <div className="flex flex-wrap gap-6">
          <Card variant="highlight" className="max-w-xs">
            <div className="p-6">
              <h3 className="text-lg  mb-2">Highlight</h3>
              <p className="text-muted-foreground text-sm">
                Semi-transparent, blends into background with sharp edge
              </p>
            </div>
          </Card>
          <Card variant="glass" className="max-w-xs">
            <div className="p-6">
              <h3 className="text-lg  mb-2">Glass</h3>
              <p className="text-muted-foreground text-sm">
                Lighter, ethereal feel with cloud/5
              </p>
            </div>
          </Card>
          <Card variant="solid" className="max-w-xs">
            <div className="p-6">
              <h3 className="text-lg  mb-2">Solid</h3>
              <p className="text-muted-foreground text-sm">
                Most authoritative, no transparency
              </p>
            </div>
          </Card>
        </div>
      </div>
      <div className="border-t border-border pt-4">
        <p className="text-sm  text-muted-foreground mb-3">Padding</p>
        <div className="flex flex-wrap gap-6">
          <Card variant="highlight" padding="sm">
            <h3 className="text-lg  mb-2">Small</h3>
            <p className="text-muted-foreground text-sm">p-4 (16px)</p>
          </Card>
          <Card variant="highlight" padding="md">
            <h3 className="text-lg  mb-2">Medium</h3>
            <p className="text-muted-foreground text-sm">p-6 (24px)</p>
          </Card>
          <Card variant="highlight" padding="lg">
            <h3 className="text-lg  mb-2">Large</h3>
            <p className="text-muted-foreground text-sm">p-8 (32px)</p>
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
            <p className="text-sm">
              Main content area of the card. Padding is handled by each
              sub-component.
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">Footer content</p>
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
            <p className="text-sm">
              This card uses the small padding variant (p-4) with minimal
              spacing.
            </p>
          </CardContent>
          <CardFooter className="pt-2">
            <p className="text-sm text-muted-foreground">Footer content</p>
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
            <p className="text-sm mb-4">
              This card uses the large padding variant (p-8) with additional
              spacing between sections.
            </p>
            <p className="text-sm text-muted-foreground">
              Perfect for content-heavy cards that need more breathing room.
            </p>
          </CardContent>
          <CardFooter className="pt-4">
            <p className="text-sm text-muted-foreground">Footer content</p>
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
          <p className="text-sm">
            This is the highlight variant with large padding. Perfect for
            featured content or important information.
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">Highlight footer</p>
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
          <p className="text-sm">
            This is the glass variant with large padding. Creates a subtle,
            modern appearance.
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">Glass footer</p>
        </CardFooter>
      </Card>

      <Card variant="solid" padding="lg" className="max-w-md">
        <CardHeader className="pb-6">
          <CardTitle>Solid Variant</CardTitle>
          <CardDescription>Most authoritative, no transparency</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            This is the solid variant with large padding. Best for
            high-contrast, serious content.
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">Solid footer</p>
        </CardFooter>
      </Card>
    </div>
  ),
};
