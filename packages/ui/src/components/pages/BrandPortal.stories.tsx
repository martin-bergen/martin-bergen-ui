import type { Meta, StoryObj } from "@storybook/react";
import { BrandPortal } from "./brand-portal";

const meta: Meta<typeof BrandPortal> = {
  title: "Pages/BrandPortal",
  component: BrandPortal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BrandPortal>;

export const Default: Story = {
  args: {},
};
