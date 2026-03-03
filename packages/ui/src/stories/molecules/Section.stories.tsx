import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "../../components/molecules/section";

const meta: Meta<typeof Section> = {
  title: "Molecules/Section",
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
      <h2 className="text-3xl font-medium mb-4">Section Title</h2>
      <p className="text-muted-foreground">
        This is the section content area with automatic container and padding.
      </p>
    </Section>
  ),
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div>
      <Section padding="sm">
        <p className="text-sm text-muted-foreground">padding=&quot;sm&quot;</p>
        <h3 className="text-xl font-medium">Small Padding Section</h3>
      </Section>
      <Section padding="md" background="muted">
        <p className="text-sm text-muted-foreground">
          padding=&quot;md&quot; background=&quot;muted&quot;
        </p>
        <h3 className="text-xl font-medium">
          Medium Padding with Muted Background
        </h3>
      </Section>
      <Section padding="lg">
        <p className="text-sm text-muted-foreground">
          padding=&quot;lg&quot; (default)
        </p>
        <h3 className="text-xl font-medium">Large Padding Section</h3>
      </Section>
      <Section padding="xl" background="muted">
        <p className="text-sm text-muted-foreground">
          padding=&quot;xl&quot; background=&quot;muted&quot;
        </p>
        <h3 className="text-xl font-medium">Extra Large Padding Section</h3>
      </Section>
    </div>
  ),
};
