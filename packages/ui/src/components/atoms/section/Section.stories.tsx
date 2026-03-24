import type { Meta, StoryObj } from "@storybook/react";
import { Section } from ".";
import { Typography } from "../typography";

const meta: Meta<typeof Section> = {
  title: "Atoms/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Vertical padding",
    },
    background: {
      control: "select",
      options: ["transparent", "muted"],
      description: "Background style",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Interactive: Story = {
  args: {
    padding: "lg",
    background: "transparent",
  },
  render: (args) => (
    <Section {...args}>
      <Typography variant="h2" className="mb-4">
        Section Title
      </Typography>
      <Typography variant="body" color="muted">
        This is the section content area with automatic container and padding.
      </Typography>
    </Section>
  ),
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div>
      <Section padding="sm">
        <Typography variant="small" color="muted" className="block">
          padding=&quot;sm&quot;
        </Typography>
        <Typography variant="h5">Small Padding Section</Typography>
      </Section>
      <Section padding="md" background="muted">
        <Typography variant="small" color="muted" className="block">
          padding=&quot;md&quot; background=&quot;muted&quot;
        </Typography>
        <Typography variant="h5">
          Medium Padding with Muted Background
        </Typography>
      </Section>
      <Section padding="lg">
        <Typography variant="small" color="muted" className="block">
          padding=&quot;lg&quot; (default)
        </Typography>
        <Typography variant="h5">Large Padding Section</Typography>
      </Section>
      <Section padding="xl" background="muted">
        <Typography variant="small" color="muted" className="block">
          padding=&quot;xl&quot; background=&quot;muted&quot;
        </Typography>
        <Typography variant="h5">Extra Large Padding Section</Typography>
      </Section>
    </div>
  ),
};
