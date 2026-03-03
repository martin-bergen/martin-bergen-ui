import type { Meta, StoryObj } from "@storybook/react"
import { Select } from "../components/select"

const defaultOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
]

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
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
      description: "Select size",
    },
    label: {
      control: "text",
      description: "Label text",
    },
    description: {
      control: "text",
      description: "Description text",
    },
    error: {
      control: "text",
      description: "Error message",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Interactive: Story = {
  args: {
    variant: "default",
    size: "default",
    label: "Choose an option",
    placeholder: "Select...",
    options: defaultOptions,
  },
  render: (args) => (
    <div className="p-4">
      <Select {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="p-4 space-y-6">
      <Select variant="default" label="Default" placeholder="Select..." options={defaultOptions} />
      <Select variant="primary" label="Primary" placeholder="Select..." options={defaultOptions} />
      <Select variant="subtle" label="Subtle" placeholder="Select..." options={defaultOptions} />
      <Select variant="muted" label="Muted" placeholder="Select..." options={defaultOptions} />
    </div>
  ),
  args: { options: defaultOptions },
}

export const AllSizes: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="p-4 space-y-6">
      <Select size="sm" label="Small" placeholder="Select..." options={defaultOptions} />
      <Select size="default" label="Default" placeholder="Select..." options={defaultOptions} />
      <Select size="lg" label="Large" placeholder="Select..." options={defaultOptions} />
    </div>
  ),
  args: { options: defaultOptions },
}

export const WithError: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="p-4 space-y-6">
      <Select
        label="Country"
        placeholder="Select country..."
        options={defaultOptions}
        error="You must select a country"
      />
      <Select
        variant="primary"
        label="Language"
        placeholder="Select..."
        options={defaultOptions}
        description="Choose your preferred language"
      />
    </div>
  ),
  args: { options: defaultOptions },
}
