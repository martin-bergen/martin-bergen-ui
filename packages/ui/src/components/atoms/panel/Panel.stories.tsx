import type { Meta, StoryObj } from '@storybook/react'
import { Panel } from '.'

const meta: Meta<typeof Panel> = {
  title: 'Atoms/Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Internal padding',
    },
    radius: {
      control: 'select',
      options: ['default', 'lg', 'xl'],
      description: 'Border radius',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Interactive: Story = {
  args: {
    padding: 'md',
    radius: 'default',
    children: (
      <div className="relative z-10">
        <h3 className="font-medium mb-2">Panel Component</h3>
        <p className="text-sm text-muted-foreground">
          Base container with rounded corners, backdrop blur, and border.
        </p>
      </div>
    ),
  },
}

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as React.ReactNode },
  render: () => (
    <div className="flex flex-col gap-4 w-[600px]">
      <Panel padding="sm">
        <p className="text-sm">Small padding</p>
      </Panel>
      <Panel padding="md">
        <p className="text-sm">Medium padding (default)</p>
      </Panel>
      <Panel padding="lg">
        <p className="text-sm">Large padding</p>
      </Panel>
    </div>
  ),
}

export const RadiusVariants: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as React.ReactNode },
  render: () => (
    <div className="flex flex-col gap-6 w-[600px]">
      <Panel radius="default" padding="lg">
        <p className="text-base font-medium mb-1">Default (rounded-2xl)</p>
        <p className="text-sm text-white/60">Standard border radius</p>
      </Panel>
      <Panel radius="lg" padding="lg">
        <p className="text-base font-medium mb-1">Large (rounded-3xl)</p>
        <p className="text-sm text-white/60">Larger border radius</p>
      </Panel>
      <Panel radius="xl" padding="lg">
        <p className="text-base font-medium mb-1">XL (rounded-[2rem])</p>
        <p className="text-sm text-white/60">Extra large border radius</p>
      </Panel>
    </div>
  ),
}
