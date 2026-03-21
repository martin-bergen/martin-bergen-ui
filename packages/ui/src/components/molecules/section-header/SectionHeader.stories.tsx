import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from ".";
import { Button } from "../../atoms/button";

const meta: Meta<typeof SectionHeader> = {
  title: "Molecules/SectionHeader",
  component: SectionHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Interactive: Story = {
  args: {
    title: "European AI Infrastructure",
    description:
      "Deploy and scale AI models with data residency in Europe. GDPR compliant, sovereign, and powerful.",
  },
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="space-y-16">
      <SectionHeader
        title="European AI Infrastructure"
        description="Deploy and scale AI models with data residency in Europe. GDPR compliant, sovereign, and powerful."
      />

      <SectionHeader
        title="Built for Europe"
        description="Deploy and scale AI models with data residency in Europe. GDPR compliant, sovereign, and powerful."
        tagline="New Feature"
      />

      <SectionHeader
        title="Get Started Today"
        description="Deploy and scale AI models with data residency in Europe. GDPR compliant, sovereign, and powerful."
        tagline="New Feature"
        action={<Button variant="primary">Get Started</Button>}
      />
    </div>
  ),
};
