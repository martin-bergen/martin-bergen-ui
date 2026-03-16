import type { Meta, StoryObj } from "@storybook/react";
import { LandingPage } from "./landing-page";

const meta: Meta<typeof LandingPage> = {
  title: "Pages/LandingPage",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LandingPage>;

export const Default: Story = {
  args: {},
};

export const CustomData: Story = {
  args: {},
  render: () => <LandingPage />,
};

export const WithoutPricing: Story = {
  args: {},
  render: () => (
    <div style={{ minHeight: "200vh" }}>
      <LandingPage />
    </div>
  ),
};
