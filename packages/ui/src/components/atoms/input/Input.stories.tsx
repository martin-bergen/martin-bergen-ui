import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import { Typography } from "../typography";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="space-y-4 w-[350px]">
      <div className="space-y-2">
        <Typography variant="small" as="label" className="text-foreground">
          Text
        </Typography>
        <Input placeholder="Enter text..." />
      </div>
      <div className="space-y-2">
        <Typography variant="small" as="label" className="text-foreground">
          Email
        </Typography>
        <Input type="email" placeholder="you@example.com" />
      </div>
      <div className="space-y-2">
        <Typography variant="small" as="label" className="text-foreground">
          Password
        </Typography>
        <Input type="password" placeholder="Enter your password" />
      </div>
      <div className="space-y-2">
        <Typography variant="small" as="label" className="text-foreground">
          Disabled
        </Typography>
        <Input placeholder="Disabled input" disabled value="Cannot edit" />
      </div>
    </div>
  ),
};
