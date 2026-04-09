import type { Meta, StoryObj } from "@storybook/react";
import ShowcasePage from "./ShowcasePage";

const meta: Meta<typeof ShowcasePage> = {
  title: "Pages/ShowcasePage",
  component: ShowcasePage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ShowcasePage>;

export const Default: Story = {
  args: {},
};
