import type { Meta, StoryObj } from "@storybook/react";
import { BergetSymbol } from "./berget-symbol";
import { BergetLogotype } from "./berget-logotype";

const meta: Meta = {
  title: "Atoms/Brand Test",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

export const TestBoth: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="bg-berget-brand-night p-8 rounded-lg border border-berget-brand-cloud/20">
        <p className="text-white mb-4">White variant (white on dark):</p>
        <div className="flex items-center gap-8">
          <BergetSymbol size={48} variant="white" />
          <BergetLogotype size={48} variant="white" />
        </div>
      </div>

      <div className="bg-berget-brand-cloud p-8 rounded-lg border border-berget-brand-cloud/20">
        <p className="text-berget-brand-night mb-4">
          Black variant (black on light):
        </p>
        <div className="flex items-center gap-8">
          <BergetSymbol size={48} variant="black" />
          <BergetLogotype size={48} variant="black" />
        </div>
      </div>
    </div>
  ),
};
