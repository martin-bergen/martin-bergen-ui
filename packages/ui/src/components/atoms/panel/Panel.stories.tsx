import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from ".";
import { Typography } from "../typography";

const meta: Meta<typeof Panel> = {
  title: "Atoms/Panel",
  component: Panel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    padding: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Internal padding",
    },
    radius: {
      control: "select",
      options: ["default", "lg", "xl"],
      description: "Border radius",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    padding: "md",
    radius: "default",
    children: (
      <div className="relative z-10">
        <Typography variant="body" as="h3" className="mb-2">
          Panel Component
        </Typography>
        <Typography variant="small" color="muted">
          Base container with rounded corners, backdrop blur, and border.
        </Typography>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as React.ReactNode },
  render: () => (
    <div className="flex flex-col gap-4 w-[600px]">
      <Panel padding="sm">
        <Typography variant="small">Small padding</Typography>
      </Panel>
      <Panel padding="md">
        <Typography variant="small">Medium padding (default)</Typography>
      </Panel>
      <Panel padding="lg">
        <Typography variant="small">Large padding</Typography>
      </Panel>
    </div>
  ),
};

export const RadiusVariants: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as React.ReactNode },
  render: () => (
    <div className="flex flex-col gap-6 w-[600px]">
      <Panel radius="default" padding="lg">
        <Typography variant="body" className="mb-1 block">
          Default (rounded-2xl)
        </Typography>
        <Typography variant="small" color="muted">
          Standard border radius
        </Typography>
      </Panel>
      <Panel radius="lg" padding="lg">
        <Typography variant="body" className="mb-1 block">
          Large (rounded-3xl)
        </Typography>
        <Typography variant="small" color="muted">
          Larger border radius
        </Typography>
      </Panel>
      <Panel radius="xl" padding="lg">
        <Typography variant="body" className="mb-1 block">
          XL (rounded-[2rem])
        </Typography>
        <Typography variant="small" color="muted">
          Extra large border radius
        </Typography>
      </Panel>
    </div>
  ),
};
