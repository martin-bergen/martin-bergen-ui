import type { Meta, StoryObj } from '@storybook/react'
import { SectionHeader } from '.'

const meta: Meta<typeof SectionHeader> = {
  title: 'Molecules/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alignment: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Heading size',
    },
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Maximum content width',
    },
  },
}

export default meta
type Story = StoryObj<typeof SectionHeader>

export const Interactive: Story = {
  args: {
    title: 'European AI Infrastructure',
    description:
      'Deploy and scale AI models with data residency in Europe. GDPR compliant, sovereign, and powerful.',
    alignment: 'center',
    size: 'md',
    maxWidth: 'md',
  },
}

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="space-y-16 w-[700px]">
      <SectionHeader
        title="Center Aligned (Default)"
        description="This is the default center-aligned section header."
      />

      <SectionHeader
        title="With Tagline"
        description="Section header with a tagline badge above the title."
        tagline="Built for Europe"
      />

      <SectionHeader
        title="Left Aligned"
        description="Left-aligned section header for content sections."
        alignment="left"
      />

      <SectionHeader
        title="Small Size"
        description="Smaller heading for subsections."
        size="sm"
      />

      <SectionHeader
        title="Large Size"
        description="Larger heading for hero sections."
        size="lg"
      />

      <SectionHeader title="Title Only" />
    </div>
  ),
}
