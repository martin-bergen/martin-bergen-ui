import type { Meta, StoryObj } from "@storybook/react";
import { BergetSymbol } from ".";

const meta: Meta<typeof BergetSymbol> = {
  title: "Atoms/BergetSymbol",
  component: BergetSymbol,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "range", min: 24, max: 200, step: 8 },
      description: "Height of the symbol in pixels",
    },
    variant: {
      control: "select",
      options: ["white", "black"],
      description: "Color variant for different backgrounds",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BergetSymbol>;

export const Interactive: Story = {
  args: {
    size: 48,
    variant: "white",
  },
  render: (args) => (
    <div
      className={`p-8 rounded-lg border border-berget-brand-cloud/20 ${
        args.variant === "white"
          ? "bg-berget-brand-night"
          : "bg-berget-brand-cloud"
      }`}
    >
      <BergetSymbol {...args} />
    </div>
  ),
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm  text-muted-foreground mb-3">
          White variant (white symbol on dark background)
        </p>
        <div className="bg-berget-brand-night p-6 rounded-lg border border-berget-brand-cloud/20">
          <BergetSymbol size={48} variant="white" />
        </div>
      </div>
      <div>
        <p className="text-sm  text-muted-foreground mb-3">
          Black variant (black symbol on light background)
        </p>
        <div className="bg-berget-brand-cloud p-6 rounded-lg border border-berget-brand-cloud/20">
          <BergetSymbol size={48} variant="black" />
        </div>
      </div>
      <div>
        <p className="text-sm  text-muted-foreground mb-3">Sizes</p>
        <div className="flex items-end gap-8 bg-berget-brand-night p-6 rounded-lg border border-berget-brand-cloud/20">
          <div className="text-center">
            <BergetSymbol size={24} variant="white" />
            <p className="text-xs text-muted-foreground mt-2">24px</p>
          </div>
          <div className="text-center">
            <BergetSymbol size={32} variant="white" />
            <p className="text-xs text-muted-foreground mt-2">32px</p>
          </div>
          <div className="text-center">
            <BergetSymbol size={48} variant="white" />
            <p className="text-xs text-muted-foreground mt-2">48px</p>
          </div>
          <div className="text-center">
            <BergetSymbol size={96} variant="white" />
            <p className="text-xs text-muted-foreground mt-2">96px</p>
          </div>
        </div>
      </div>
    </div>
  ),
};
