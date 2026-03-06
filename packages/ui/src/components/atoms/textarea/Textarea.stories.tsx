import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '.'

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'subtle', 'muted'],
      description: 'Visual variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Textarea size',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    description: {
      control: 'text',
      description: 'Description text',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    maxLength: {
      control: 'number',
      description: 'Max character count',
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count',
    },
    rows: {
      control: 'number',
      description: 'Number of rows',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Interactive: Story = {
  args: {
    variant: 'default',
    size: 'default',
    label: 'Message',
    placeholder: 'Write your message here...',
    rows: 4,
  },
  render: (args) => (
    <div className="p-4">
      <Textarea {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="p-4 space-y-6">
      <Textarea
        variant="default"
        label="Default"
        placeholder="Write..."
        rows={3}
      />
      <Textarea
        variant="primary"
        label="Primary"
        placeholder="Write..."
        rows={3}
      />
      <Textarea
        variant="subtle"
        label="Subtle"
        placeholder="Write..."
        rows={3}
      />
      <Textarea variant="muted" label="Muted" placeholder="Write..." rows={3} />
    </div>
  ),
}

export const AllSizes: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="p-4 space-y-6">
      <Textarea size="sm" label="Small" placeholder="Write..." rows={2} />
      <Textarea
        size="default"
        label="Default"
        placeholder="Write..."
        rows={3}
      />
      <Textarea size="lg" label="Large" placeholder="Write..." rows={4} />
    </div>
  ),
}

export const WithError: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="p-4 space-y-6">
      <Textarea
        label="Comment"
        placeholder="Write..."
        rows={3}
        error="Comment cannot be empty"
      />
      <Textarea
        variant="primary"
        label="Description"
        placeholder="Write..."
        rows={3}
        error="Must be at least 10 characters"
      />
    </div>
  ),
}
