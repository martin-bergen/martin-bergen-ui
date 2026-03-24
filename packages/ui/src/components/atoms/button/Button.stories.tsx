import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { Typography } from "../typography";
import { Icon } from "../icon";
import { ArrowRight, Download, Loader2, Mail, Plus } from "lucide-react";
import { cn } from "../../../lib/utils";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The Button component is versatile and accessible with multiple variants and sizes.
It supports all native button attributes and can be used with the \`asChild\` prop for composition.

**Features:**
- Multiple variants (default, primary, secondary, destructive, highlight, icon)
- Multiple sizes (sm, default, lg, icon)
- Icon support via lucide-react
- Loading states
- Disabled states
- Full width option
- Full keyboard accessibility
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "destructive",
        "highlight",
        "icon",
      ],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "icon"],
      description: "Size of the button",
    },
    width: {
      control: "select",
      options: ["default", "full"],
      description: "Width of the button",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    asChild: {
      control: "boolean",
      description: "Render as Slot for composition",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Interactive: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    width: "default",
  },
  render: (args: React.ComponentProps<typeof Button>) => (
    <div className={cn("p-4", args.width === "full" && "w-64")}>
      <Button {...args}>
        {args.variant === "icon" ? (
          <Icon icon={Plus} size={24} />
        ) : (
          args.children
        )}
      </Button>
    </div>
  ),
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as string },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <Typography variant="small" color="muted" className="mb-3 block">
          Variants
        </Typography>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="highlight">Highlight</Button>
          <Button variant="icon">
            <Icon icon={Plus} size={24} />
          </Button>
        </div>
      </div>
      <div className="border-t border-border pt-4">
        <Typography variant="small" color="muted" className="mb-3 block">
          States
        </Typography>
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button>
            <Loader2 className="w-4 h-4 animate-spin" />
            Loading
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as string },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <Typography variant="small" color="muted" className="mb-3 block">
          Sizes
        </Typography>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Icon icon={Plus} size={24} />
          </Button>
        </div>
      </div>
      <div className="border-t border-border pt-4">
        <Typography variant="small" color="muted" className="mb-3 block">
          Sizes with variant &quot;primary&quot;
        </Typography>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="default">
            Default
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="primary" size="icon">
            <Icon icon={Plus} size={24} />
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as string },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button>
        <Icon icon={Mail} size={24} />
        Email
      </Button>
      <Button variant="primary">
        <Icon icon={Plus} size={24} />
        Add New
      </Button>
      <Button variant="secondary">
        Download
        <Icon icon={Download} size={24} />
      </Button>
      <Button variant="icon">
        <Icon icon={Plus} size={24} />
      </Button>
      <Button variant="highlight">
        <Icon icon={Mail} size={24} />
        View Pricing
      </Button>
      <Button variant="highlight">
        View Pricing
        <Icon icon={ArrowRight} size={24} />
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as string },
  render: () => (
    <div className="w-64 space-y-3">
      <Button width="full">Full Width Default</Button>
      <Button variant="primary" width="full">
        <Icon icon={Plus} size={24} />
        Add New
      </Button>
      <Button variant="highlight" width="full">
        View Pricing
        <Icon icon={ArrowRight} size={24} />
      </Button>
    </div>
  ),
};
