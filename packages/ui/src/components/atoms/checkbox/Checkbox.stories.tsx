import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "error", "success"],
      description: "Visual variant",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Checkbox size",
    },
    label: {
      control: "text",
      description: "Label text next to checkbox",
    },
    description: {
      control: "text",
      description: "Description text below label",
    },
    error: {
      control: "text",
      description: "Error message",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    defaultChecked: {
      control: "boolean",
      description: "Initially checked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    variant: "default",
    size: "default",
    label: "Accept terms",
    description: "I have read and accept the terms of service",
  },
  render: (args) => (
    <div className="p-4">
      <Checkbox {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Checkbox size="sm" />
          <span className="text-sm text-white">Small (16px)</span>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox size="default" />
          <span className="text-sm text-white">Default (20px)</span>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox size="lg" />
          <span className="text-sm text-white">Large (24px)</span>
        </div>
      </div>
    </div>
  ),
};
