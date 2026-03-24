import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from ".";
import { Typography } from "../typography";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Divider orientation",
    },
    variant: {
      control: "select",
      options: ["default", "subtle", "strong", "primary", "muted"],
      description: "Visual variant",
    },
    size: {
      control: "select",
      options: ["thin", "medium", "thick"],
      description: "Divider thickness",
    },
    label: {
      control: "text",
      description: "Label text in the middle",
    },
    labelPosition: {
      control: "select",
      options: ["center", "left", "right"],
      description: "Label position",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    orientation: "horizontal",
    variant: "default",
    size: "thin",
  },
  render: (args) => (
    <div className="p-4">
      <Divider {...args} />
    </div>
  ),
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="p-4 space-y-8">
      <div>
        <Typography variant="body" as="h3" className="text-white mb-4">
          Default
        </Typography>
        <Divider variant="default" />
      </div>
      <div>
        <Typography variant="body" as="h3" className="text-white mb-4">
          Subtle
        </Typography>
        <Divider variant="subtle" />
      </div>
      <div>
        <Typography variant="body" as="h3" className="text-white mb-4">
          Strong
        </Typography>
        <Divider variant="strong" />
      </div>
      <div>
        <Typography variant="body" as="h3" className="text-white mb-4">
          Primary
        </Typography>
        <Divider variant="primary" />
      </div>
      <div>
        <Typography variant="body" as="h3" className="text-white mb-4">
          Muted
        </Typography>
        <Divider variant="muted" />
      </div>
    </div>
  ),
};

export const WithLabels: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="p-4 space-y-8">
      <Divider label="Or" />
      <Divider label="Left" labelPosition="left" />
      <Divider label="Right" labelPosition="right" />
      <Divider label="Primary" variant="primary" />
    </div>
  ),
};

export const Orientations: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="p-4 space-y-8">
      <div>
        <Typography variant="body" as="h3" className="text-white mb-4">
          Horizontal
        </Typography>
        <Divider orientation="horizontal" />
      </div>
      <div>
        <Typography variant="body" as="h3" className="text-white mb-4">
          Vertical
        </Typography>
        <div className="flex h-32 items-center">
          <div className="flex-1 text-white/60">Left content</div>
          <Divider orientation="vertical" />
          <div className="flex-1 text-white/60">Right content</div>
        </div>
      </div>
    </div>
  ),
};
