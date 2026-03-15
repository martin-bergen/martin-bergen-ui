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
    <div className="max-w-md">
      <Card padding="none">
        <CardHeader>
          <CardTitle>Compound Card</CardTitle>
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
  ),
};
