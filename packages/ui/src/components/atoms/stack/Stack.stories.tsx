import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "Atoms/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column", "row-reverse", "column-reverse"],
      description: "Flex direction",
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch", "baseline"],
      description: "Cross-axis alignment",
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "evenly"],
      description: "Main-axis alignment",
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
      description: "Flex wrap behavior",
    },
    gap: {
      control: "select",
      options: [
        0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80,
        96,
      ],
      description: "Gap spacing (Tailwind scale)",
    },
    asChild: {
      control: "boolean",
      description: "Render as child element (Radix Slot)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

function Placeholder({ color, label }: { color: string; label: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg text-sm  text-white ${color}`}
      style={{ minWidth: "80px", minHeight: "60px" }}
    >
      {label}
    </div>
  );
}

export const Horizontal: Story = {
  args: {
    direction: "row",
    gap: 4,
    align: "center",
    children: (
      <>
        <Placeholder color="bg-moss" label="Item 1" />
        <Placeholder color="bg-lichen" label="Item 2" />
        <Placeholder color="bg-spruce" label="Item 3" />
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    direction: "column",
    gap: 4,
    align: "start",
    children: (
      <>
        <Placeholder color="bg-moss" label="Item 1" />
        <Placeholder color="bg-lichen" label="Item 2" />
        <Placeholder color="bg-spruce" label="Item 3" />
      </>
    ),
  },
};

export const Centered: Story = {
  args: {
    direction: "row",
    gap: 8,
    align: "center",
    justify: "center",
    children: (
      <>
        <Placeholder color="bg-moss" label="Item 1" />
        <Placeholder color="bg-lichen" label="Item 2" />
        <Placeholder color="bg-spruce" label="Item 3" />
      </>
    ),
  },
};

export const SpaceBetween: Story = {
  args: {
    direction: "row",
    gap: 4,
    justify: "between",
    align: "center",
    children: (
      <>
        <Placeholder color="bg-moss" label="Start" />
        <Placeholder color="bg-lichen" label="Middle" />
        <Placeholder color="bg-spruce" label="End" />
      </>
    ),
  },
};

export const Wrapped: Story = {
  args: {
    direction: "row",
    gap: 4,
    wrap: "wrap",
    children: (
      <>
        <Placeholder color="bg-moss" label="Item 1" />
        <Placeholder color="bg-lichen" label="Item 2" />
        <Placeholder color="bg-spruce" label="Item 3" />
        <Placeholder color="bg-fjord" label="Item 4" />
        <Placeholder color="bg-cloud" label="Item 5" />
      </>
    ),
  },
};

export const VisualGrid: Story = {
  args: {
    direction: "column",
    gap: 6,
    children: (
      <>
        <div className="text-sm text-muted-foreground">Direction Variants</div>
        <div className="grid grid-cols-2 gap-4">
          <Stack direction="row" gap={2}>
            <Placeholder color="bg-moss/20" label="Row" />
            <Placeholder color="bg-moss/20" label="Row" />
          </Stack>
          <Stack direction="column" gap={2}>
            <Placeholder color="bg-lichen/20" label="Col" />
            <Placeholder color="bg-lichen/20" label="Col" />
          </Stack>
        </div>

        <div className="text-sm text-muted-foreground">Alignment Variants</div>
        <div className="grid grid-cols-3 gap-4">
          <Stack direction="row" gap={2} align="start">
            <Placeholder color="bg-spruce/20" label="Start" />
            <Placeholder color="bg-spruce/20" label="Start" />
          </Stack>
          <Stack direction="row" gap={2} align="center">
            <Placeholder color="bg-fjord/20" label="Center" />
            <Placeholder color="bg-fjord/20" label="Center" />
          </Stack>
          <Stack direction="row" gap={2} align="end">
            <Placeholder color="bg-cloud/20" label="End" />
            <Placeholder color="bg-cloud/20" label="End" />
          </Stack>
        </div>

        <div className="text-sm text-muted-foreground">Justify Variants</div>
        <div className="grid grid-cols-3 gap-4">
          <Stack direction="row" gap={2} justify="start">
            <Placeholder color="bg-moss/20" label="Start" />
            <Placeholder color="bg-moss/20" label="Start" />
          </Stack>
          <Stack direction="row" gap={2} justify="center">
            <Placeholder color="bg-lichen/20" label="Center" />
            <Placeholder color="bg-lichen/20" label="Center" />
          </Stack>
          <Stack direction="row" gap={2} justify="between">
            <Placeholder color="bg-spruce/20" label="Between" />
            <Placeholder color="bg-spruce/20" label="Between" />
          </Stack>
        </div>

        <div className="text-sm text-muted-foreground">Gap Scale</div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-8">gap-2</span>
            <Stack direction="row" gap={2}>
              <Placeholder color="bg-fjord/20" label="2" />
              <Placeholder color="bg-fjord/20" label="2" />
            </Stack>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-8">gap-4</span>
            <Stack direction="row" gap={4}>
              <Placeholder color="bg-cloud/20" label="4" />
              <Placeholder color="bg-cloud/20" label="4" />
            </Stack>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-8">gap-8</span>
            <Stack direction="row" gap={8}>
              <Placeholder color="bg-moss/20" label="8" />
              <Placeholder color="bg-moss/20" label="8" />
            </Stack>
          </div>
        </div>
      </>
    ),
  },
};

export const Playground: Story = {
  args: {
    direction: "column",
    gap: 4,
    align: "start",
    justify: "start",
    wrap: "nowrap",
    children: (
      <>
        <Placeholder color="bg-moss" label="Item 1" />
        <Placeholder color="bg-lichen" label="Item 2" />
        <Placeholder color="bg-spruce" label="Item 3" />
      </>
    ),
  },
};
