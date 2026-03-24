import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "large",
        "body",
        "small",
        "xs",
        "mono",
        "code",
      ],
    },
    color: {
      control: "select",
      options: ["default", "muted", "dim"],
      description:
        "Text color role. 'default' = foreground, 'muted' = muted-foreground, 'dim' = foreground at 50%",
    },
    as: {
      control: "text",
      description: "Override the rendered HTML element",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: { variant: "h1", children: "Heading 1" },
};

export const H2: Story = {
  args: { variant: "h2", children: "Heading 2" },
};

export const H3: Story = {
  args: { variant: "h3", children: "Heading 3" },
};

export const H4: Story = {
  args: { variant: "h4", children: "Heading 4" },
};

export const H5: Story = {
  args: { variant: "h5", children: "Heading 5" },
};

export const Large: Story = {
  args: { variant: "large", children: "Large text" },
};

export const Body: Story = {
  args: { variant: "body", children: "Body text" },
};

export const Small: Story = {
  args: { variant: "small", children: "Small text" },
};

export const XS: Story = {
  args: { variant: "xs", children: "Extra small text" },
};

export const Mono: Story = {
  args: { variant: "mono", children: "Monospace text" },
};

export const Code: Story = {
  args: { variant: "code", children: "text-xs font-mono" },
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="body" color="default">
        color=&quot;default&quot; — primary foreground
      </Typography>
      <Typography variant="body" color="muted">
        color=&quot;muted&quot; — muted foreground (secondary text,
        descriptions)
      </Typography>
      <Typography variant="body" color="dim">
        color=&quot;dim&quot; — foreground at 50% (spec labels, captions)
      </Typography>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Typography variant="code" color="muted" className="mb-3 block">
          Serif (Ovo) — Headings (fluid: 390px → 1440px)
        </Typography>
        <div className="space-y-4">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
        </div>
      </div>
      <div>
        <Typography variant="code" color="muted" className="mb-3 block">
          Sans (DM Sans) — Body &amp; UI
        </Typography>
        <div className="space-y-4">
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="large">Large text</Typography>
          <Typography variant="body">Body text</Typography>
          <Typography variant="small">Small text</Typography>
          <Typography variant="xs">Extra small text</Typography>
        </div>
      </div>
      <div>
        <Typography variant="code" color="muted" className="mb-3 block">
          Mono (DM Mono) — Code
        </Typography>
        <div className="space-y-4">
          <Typography variant="mono">Monospace text</Typography>
          <Typography variant="code">
            text-xs font-mono — inline code label
          </Typography>
        </div>
      </div>
    </div>
  ),
};
