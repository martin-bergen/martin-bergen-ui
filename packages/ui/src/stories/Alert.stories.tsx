import type { Meta, StoryObj } from "@storybook/react";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "../components/molecules/alert";

const meta: Meta<typeof Alert> = {
  title: "Molecules/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "success", "warning", "destructive"],
      description: "Visual style variant",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Interactive: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Alert {...args} className="w-[400px]">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="space-y-4 w-[500px]">
      <Alert variant="default">
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>This is a default alert.</AlertDescription>
      </Alert>

      <Alert variant="info">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>This is an informational alert.</AlertDescription>
      </Alert>

      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>This is a success alert.</AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This is a warning alert.</AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>This is a destructive alert.</AlertDescription>
      </Alert>
    </div>
  ),
};

export const TitleOnly: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <Alert variant="info" className="w-[400px]">
      <AlertTitle>Maintenance scheduled for January 25, 2026</AlertTitle>
    </Alert>
  ),
};

export const DescriptionOnly: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <Alert variant="warning" className="w-[400px]">
      <AlertDescription>
        Your trial period ends in 3 days. Upgrade now to continue using all
        features.
      </AlertDescription>
    </Alert>
  ),
};
