import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedHeroPage } from ".";

const meta: Meta<typeof AnimatedHeroPage> = {
  title: "Pages/AnimatedHeroPage",
  component: AnimatedHeroPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
