import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Foundations/Grid",
  component: Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch"],
      description: "Cross-axis alignment",
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "evenly"],
      description: "Main-axis alignment",
    },
    cols: {
      control: "select",
      options: [1, 2, 3, 4, 6, 12],
      description: "Number of columns",
    },
    rows: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
      description: "Number of rows (1-6)",
    },
    gap: {
      control: "select",
      options: [
        0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80,
        96,
      ],
      description: "Gap spacing (Tailwind scale)",
    },
    gapX: {
      control: "select",
      options: [
        0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80,
        96,
      ],
      description: "Horizontal gap spacing",
    },
    gapY: {
      control: "select",
      options: [
        0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80,
        96,
      ],
      description: "Vertical gap spacing",
    },
    asChild: {
      control: "boolean",
      description: "Render as child element (Radix Slot)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

function Placeholder({
  color,
  label,
  className,
  style,
}: {
  color: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg text-sm text-white ${color} ${className || ""}`}
      style={{ minHeight: "120px", ...style }}
    >
      {label}
    </div>
  );
}

export const Basic: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-muted-foreground mb-3">Two Columns</p>
        <Grid cols={2} gap={4}>
          <Placeholder color="bg-moss" label="Column 1" />
          <Placeholder color="bg-lichen" label="Column 2" />
        </Grid>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Three Columns</p>
        <Grid cols={3} gap={4}>
          <Placeholder color="bg-moss" label="Column 1" />
          <Placeholder color="bg-lichen" label="Column 2" />
          <Placeholder color="bg-spruce" label="Column 3" />
        </Grid>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Four Columns</p>
        <Grid cols={4} gap={4}>
          <Placeholder color="bg-moss" label="1" />
          <Placeholder color="bg-lichen" label="2" />
          <Placeholder color="bg-spruce" label="3" />
          <Placeholder color="bg-fjord" label="4" />
        </Grid>
      </div>
    </div>
  ),
};

export const VariableWidths: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-muted-foreground mb-3">
          3-column grid with col-span-2 and col-span-1
        </p>
        <Grid cols={3} gap={4}>
          <Placeholder
            color="bg-moss"
            label="2 cols wide"
            className="col-span-2"
          />
          <Placeholder
            color="bg-lichen"
            label="1 col wide"
            className="col-span-1"
          />
        </Grid>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">
          4-column grid with mixed spans
        </p>
        <Grid cols={4} gap={4}>
          <div className="col-span-2">
            <Placeholder color="bg-spruce" label="2 cols wide" />
          </div>
          <div className="col-span-1">
            <Placeholder color="bg-fjord" label="1 col" />
          </div>
          <div className="col-span-1">
            <Placeholder color="bg-cloud" label="1 col" />
          </div>
          <div className="col-span-1">
            <Placeholder color="bg-slate" label="1 col" />
          </div>
          <div className="col-span-2">
            <Placeholder color="bg-moss" label="2 cols wide" />
          </div>
          <div className="col-span-1">
            <Placeholder color="bg-lichen" label="1 col" />
          </div>
        </Grid>
      </div>
    </div>
  ),
};

export const Alignment: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-muted-foreground mb-3">
          Cross-axis alignment (align)
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <span className="text-xs text-muted-foreground">align-start</span>
            <Grid cols={2} gap={4} align="start" className="mt-2">
              <Placeholder color="bg-moss" label="Short" />
              <Placeholder
                color="bg-lichen"
                label="Tall"
                style={{ minHeight: "180px" }}
              />
            </Grid>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">align-center</span>
            <Grid cols={2} gap={4} align="center" className="mt-2">
              <Placeholder color="bg-spruce" label="Short" />
              <Placeholder
                color="bg-fjord"
                label="Tall"
                style={{ minHeight: "180px" }}
              />
            </Grid>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">align-end</span>
            <Grid cols={2} gap={4} align="end" className="mt-2">
              <Placeholder color="bg-cloud" label="Short" />
              <Placeholder
                color="bg-slate"
                label="Tall"
                style={{ minHeight: "180px" }}
              />
            </Grid>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">
              align-stretch (default)
            </span>
            <Grid cols={2} gap={4} align="stretch" className="mt-2">
              <Placeholder color="bg-moss" label="Stretched" />
              <Placeholder color="bg-lichen" label="Stretched" />
            </Grid>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">
          Main-axis alignment (justify)
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <span className="text-xs text-muted-foreground">justify-start</span>
            <Grid cols={2} gap={4} justify="start" className="mt-2">
              <Placeholder color="bg-spruce" label="1" />
              <Placeholder color="bg-fjord" label="2" />
            </Grid>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">
              justify-center
            </span>
            <Grid cols={2} gap={4} justify="center" className="mt-2">
              <Placeholder color="bg-cloud" label="1" />
              <Placeholder color="bg-slate" label="2" />
            </Grid>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">
              justify-between
            </span>
            <Grid cols={2} gap={4} justify="between" className="mt-2">
              <Placeholder color="bg-moss" label="Left" />
              <Placeholder color="bg-lichen" label="Right" />
            </Grid>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">
              justify-around
            </span>
            <Grid cols={2} gap={4} justify="around" className="mt-2">
              <Placeholder color="bg-spruce" label="1" />
              <Placeholder color="bg-fjord" label="2" />
            </Grid>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Gaps: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-muted-foreground mb-3">Uniform gap</p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <span className="text-xs text-muted-foreground">gap-2</span>
            <Grid cols={3} gap={2} className="mt-2">
              <Placeholder color="bg-cloud" label="2" />
              <Placeholder color="bg-slate" label="2" />
              <Placeholder color="bg-moss" label="2" />
            </Grid>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">gap-4</span>
            <Grid cols={3} gap={4} className="mt-2">
              <Placeholder color="bg-lichen" label="4" />
              <Placeholder color="bg-spruce" label="4" />
              <Placeholder color="bg-fjord" label="4" />
            </Grid>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">gap-8</span>
            <Grid cols={3} gap={8} className="mt-2">
              <Placeholder color="bg-cloud" label="8" />
              <Placeholder color="bg-slate" label="8" />
              <Placeholder color="bg-moss" label="8" />
            </Grid>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">
          Asymmetric gaps (gapX, gapY)
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <span className="text-xs text-muted-foreground">
              gap-x-8 gap-y-2
            </span>
            <Grid cols={3} gapX={8} gapY={2} className="mt-2">
              <Placeholder color="bg-moss" label="1" />
              <Placeholder color="bg-lichen" label="2" />
              <Placeholder color="bg-spruce" label="3" />
              <Placeholder color="bg-fjord" label="4" />
              <Placeholder color="bg-cloud" label="5" />
              <Placeholder color="bg-slate" label="6" />
            </Grid>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">
              gap-x-2 gap-y-8
            </span>
            <Grid cols={3} gapX={2} gapY={8} className="mt-2">
              <Placeholder color="bg-spruce" label="1" />
              <Placeholder color="bg-fjord" label="2" />
              <Placeholder color="bg-cloud" label="3" />
              <Placeholder color="bg-slate" label="4" />
              <Placeholder color="bg-moss" label="5" />
              <Placeholder color="bg-lichen" label="6" />
            </Grid>
          </div>
        </div>
      </div>
    </div>
  ),
};
