import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Atoms/Sidebar",
  component: Sidebar,
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
    <Sidebar {...args} className="w-64">
      <p className="text-muted-foreground">Sidebar content placeholder</p>
    </Sidebar>
  ),
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as React.ReactNode },
  render: () => (
    <div className="flex gap-6">
      <Sidebar variant="highlight" className="w-64">
        <div>
          <h3 className="text-lg mb-2">Highlight</h3>
          <p className="text-muted-foreground text-sm">
            Semi-transparent, blends into background with sharp edge
          </p>
        </div>
      </Sidebar>
      <Sidebar variant="glass" className="w-64">
        <div>
          <h3 className="text-lg mb-2">Glass</h3>
          <p className="text-muted-foreground text-sm">
            Lighter, ethereal feel with cloud/5
          </p>
        </div>
      </Sidebar>
      <Sidebar variant="solid" className="w-64">
        <div>
          <h3 className="text-lg mb-2">Solid</h3>
          <p className="text-muted-foreground text-sm">
            Most authoritative, no transparency
          </p>
        </div>
      </Sidebar>
    </div>
  ),
};

export const PaddingVariants: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as React.ReactNode },
  render: () => (
    <div className="flex gap-6">
      <Sidebar variant="highlight" padding="sm" className="w-64">
        <h3 className="text-lg mb-2">Small</h3>
        <p className="text-muted-foreground text-sm">p-4 (16px)</p>
      </Sidebar>
      <Sidebar variant="highlight" padding="md" className="w-64">
        <h3 className="text-lg mb-2">Medium</h3>
        <p className="text-muted-foreground text-sm">p-6 (24px)</p>
      </Sidebar>
      <Sidebar variant="highlight" padding="lg" className="w-64">
        <h3 className="text-lg mb-2">Large</h3>
        <p className="text-muted-foreground text-sm">p-8 (32px)</p>
      </Sidebar>
    </div>
  ),
};
