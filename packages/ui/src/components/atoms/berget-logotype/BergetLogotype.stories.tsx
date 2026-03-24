import type { Meta, StoryObj } from "@storybook/react";
import { BergetLogotype } from ".";
import { Typography } from "../typography";

const meta: Meta<typeof BergetLogotype> = {
  title: "Atoms/BergetLogotype",
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
      options: ["white", "black"],
      description: "Color variant for different backgrounds",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BergetLogotype>;

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
      <BergetLogotype {...args} />
    </div>
  ),
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <Typography variant="small" color="muted" className="mb-3 block">
          White variant (white logotype on dark background)
        </Typography>
        <div className="bg-berget-brand-night p-6 rounded-lg border border-berget-brand-cloud/20">
          <BergetLogotype size={48} variant="white" />
        </div>
      </div>
      <div>
        <Typography variant="small" color="muted" className="mb-3 block">
          Black variant (black logotype on light background)
        </Typography>
        <div className="bg-berget-brand-cloud p-6 rounded-lg border border-berget-brand-cloud/20">
          <BergetLogotype size={48} variant="black" />
        </div>
      </div>
      <div>
        <Typography variant="small" color="muted" className="mb-3 block">
          Sizes
        </Typography>
        <div className="flex items-end gap-8 bg-berget-brand-night p-6 rounded-lg border border-berget-brand-cloud/20">
          <div className="text-center">
            <BergetLogotype size={24} variant="white" />
            <Typography variant="xs" color="muted" className="mt-2 block">
              24px
            </Typography>
          </div>
          <div className="text-center">
            <BergetLogotype size={32} variant="white" />
            <Typography variant="xs" color="muted" className="mt-2 block">
              32px
            </Typography>
          </div>
          <div className="text-center">
            <BergetLogotype size={48} variant="white" />
            <Typography variant="xs" color="muted" className="mt-2 block">
              48px
            </Typography>
          </div>
          <div className="text-center">
            <BergetLogotype size={96} variant="white" />
            <Typography variant="xs" color="muted" className="mt-2 block">
              96px
            </Typography>
          </div>
        </div>
      </div>
    </div>
  ),
};
