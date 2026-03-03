import type { Meta, StoryObj } from "@storybook/react"
import { BergetLogotype } from "../components/atoms/berget-logotype"

const meta: Meta<typeof BergetLogotype> = {
  title: "Components/BergetLogotype",
  component: BergetLogotype,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "range", min: 24, max: 200, step: 8 },
      description: "Height of the logotype in pixels",
    },
    variant: {
      control: "select",
      options: ["light", "dark"],
      description: "Color variant for different backgrounds",
    },
  },
}

export default meta
type Story = StoryObj<typeof BergetLogotype>

export const Interactive: Story = {
  args: {
    size: 48,
    variant: "light",
  },
  render: (args) => (
    <div
      className={args.variant === "light" ? "bg-background p-8" : "bg-white p-8"}
    >
      <BergetLogotype {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Light (for dark backgrounds)
        </p>
        <div className="bg-background p-6 rounded-md">
          <BergetLogotype size={48} variant="light" />
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Dark (for light backgrounds)
        </p>
        <div className="bg-white p-6 rounded-md">
          <BergetLogotype size={48} variant="dark" />
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Sizes
        </p>
        <div className="flex items-end gap-8 bg-background p-6 rounded-md">
          <div className="text-center">
            <BergetLogotype size={24} variant="light" />
            <p className="text-xs text-muted-foreground mt-2">24px</p>
          </div>
          <div className="text-center">
            <BergetLogotype size={32} variant="light" />
            <p className="text-xs text-muted-foreground mt-2">32px</p>
          </div>
          <div className="text-center">
            <BergetLogotype size={48} variant="light" />
            <p className="text-xs text-muted-foreground mt-2">48px</p>
          </div>
          <div className="text-center">
            <BergetLogotype size={96} variant="light" />
            <p className="text-xs text-muted-foreground mt-2">96px</p>
          </div>
        </div>
      </div>
    </div>
  ),
}
