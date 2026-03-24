import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { Typography } from "../typography";

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
      <Typography variant="body" color="muted">
        Sidebar content placeholder
      </Typography>
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
          <Typography variant="h5" className="mb-2">
            Highlight
          </Typography>
          <Typography variant="small" color="muted">
            Semi-transparent, blends into background with sharp edge
          </Typography>
        </div>
      </Sidebar>
      <Sidebar variant="glass" className="w-64">
        <div>
          <Typography variant="h5" className="mb-2">
            Glass
          </Typography>
          <Typography variant="small" color="muted">
            Lighter, ethereal feel with cloud/5
          </Typography>
        </div>
      </Sidebar>
      <Sidebar variant="solid" className="w-64">
        <div>
          <Typography variant="h5" className="mb-2">
            Solid
          </Typography>
          <Typography variant="small" color="muted">
            Most authoritative, no transparency
          </Typography>
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
        <Typography variant="h5" className="mb-2">
          Small
        </Typography>
        <Typography variant="small" color="muted">
          p-4 (16px)
        </Typography>
      </Sidebar>
      <Sidebar variant="highlight" padding="md" className="w-64">
        <Typography variant="h5" className="mb-2">
          Medium
        </Typography>
        <Typography variant="small" color="muted">
          p-6 (24px)
        </Typography>
      </Sidebar>
      <Sidebar variant="highlight" padding="lg" className="w-64">
        <Typography variant="h5" className="mb-2">
          Large
        </Typography>
        <Typography variant="small" color="muted">
          p-8 (32px)
        </Typography>
      </Sidebar>
    </div>
  ),
};
