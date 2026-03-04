import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "."

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
      options: ["default", "primary", "subtle", "muted"],
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
}

export default meta
type Story = StoryObj<typeof meta>

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
}

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="p-4 space-y-4">
      <Checkbox variant="default" label="Default" description="Default variant" />
      <Checkbox variant="primary" label="Primary" description="Primary variant" />
      <Checkbox variant="subtle" label="Subtle" description="Subtle variant" />
      <Checkbox variant="muted" label="Muted" description="Muted variant" />
    </div>
  ),
}

export const AllSizes: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="p-4 space-y-4">
      <Checkbox size="sm" label="Small" description="Compact size" />
      <Checkbox size="default" label="Default" description="Standard size" />
      <Checkbox size="lg" label="Large" description="Large size" />
    </div>
  ),
}

export const States: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="p-4 space-y-4">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Checked and disabled" defaultChecked disabled />
    </div>
  ),
}

export const WithError: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="p-4 space-y-4">
      <Checkbox
        label="Accept terms"
        error="You must accept the terms to continue"
      />
      <Checkbox
        variant="primary"
        label="Confirm email"
        defaultChecked
        error="Email address is invalid"
      />
    </div>
  ),
}
