import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Atoms/Grid",
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
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: "Number of columns (1-12)",
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
  height,
}: {
  color: string;
  label: string;
  height?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg text-sm  text-white ${color}`}
      style={{ minHeight: height || "80px" }}
    >
      {label}
    </div>
  );
}

export const TwoColumns: Story = {
  args: {
    cols: 2,
    gap: 4,
    children: (
      <>
        <Placeholder color="bg-moss" label="Col 1" />
        <Placeholder color="bg-lichen" label="Col 2" />
      </>
    ),
  },
};

export const ThreeColumns: Story = {
  args: {
    cols: 3,
    gap: 4,
    children: (
      <>
        <Placeholder color="bg-moss" label="Col 1" />
        <Placeholder color="bg-lichen" label="Col 2" />
        <Placeholder color="bg-spruce" label="Col 3" />
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    cols: 4,
    gap: 4,
    children: (
      <>
        <Placeholder color="bg-moss" label="1" />
        <Placeholder color="bg-lichen" label="2" />
        <Placeholder color="bg-spruce" label="3" />
        <Placeholder color="bg-fjord" label="4" />
      </>
    ),
  },
};

export const SixColumns: Story = {
  args: {
    cols: 6,
    gap: 2,
    children: (
      <>
        <Placeholder color="bg-moss" label="1" />
        <Placeholder color="bg-lichen" label="2" />
        <Placeholder color="bg-spruce" label="3" />
        <Placeholder color="bg-fjord" label="4" />
        <Placeholder color="bg-cloud" label="5" />
        <Placeholder color="bg-slate" label="6" />
      </>
    ),
  },
};

export const TwelveColumns: Story = {
  args: {
    cols: 12,
    gap: 2,
    children: Array.from({ length: 12 }, (_, i) => (
      <Placeholder
        key={i}
        color={`bg-${i % 2 === 0 ? "moss" : "lichen"}/80`}
        label={`${i + 1}`}
      />
    )),
  },
};

export const WithRows: Story = {
  args: {
    cols: 3,
    rows: 3,
    gap: 4,
    children: Array.from({ length: 9 }, (_, i) => (
      <Placeholder
        key={i}
        color={`bg-${["moss", "lichen", "spruce", "fjord", "cloud", "slate"][i % 6]}`}
        label={`${i + 1}`}
      />
    )),
  },
};

export const Centered: Story = {
  args: {
    cols: 2,
    gap: 8,
    align: "center",
    justify: "center",
    children: (
      <>
        <Placeholder color="bg-moss" label="Col 1" height="120px" />
        <Placeholder color="bg-lichen" label="Col 2" height="80px" />
      </>
    ),
  },
};

export const AsymmetricGaps: Story = {
  args: {
    cols: 3,
    gapX: 8,
    gapY: 4,
    children: Array.from({ length: 6 }, (_, i) => (
      <Placeholder
        key={i}
        color={`bg-${["moss", "lichen", "spruce"][i % 3]}`}
        label={`${i + 1}`}
      />
    )),
  },
};

export const VisualGrid: Story = {
  args: {
    children: (
      <>
        <div className="text-sm text-muted-foreground mb-4">
          Column Variants
        </div>
        <div className="flex flex-col gap-8 mb-8">
          <div>
            <span className="text-xs text-muted-foreground">cols-2</span>
            <Grid cols={2} gap={2} className="mt-2">
              <Placeholder color="bg-moss/20" label="1" />
              <Placeholder color="bg-lichen/20" label="2" />
            </Grid>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">cols-3</span>
            <Grid cols={3} gap={2} className="mt-2">
              <Placeholder color="bg-spruce/20" label="1" />
              <Placeholder color="bg-fjord/20" label="2" />
              <Placeholder color="bg-cloud/20" label="3" />
            </Grid>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">cols-4</span>
            <Grid cols={4} gap={2} className="mt-2">
              <Placeholder color="bg-moss/20" label="1" />
              <Placeholder color="bg-lichen/20" label="2" />
              <Placeholder color="bg-spruce/20" label="3" />
              <Placeholder color="bg-fjord/20" label="4" />
            </Grid>
          </div>
        </div>

        <div className="text-sm text-muted-foreground mb-4">
          Alignment Variants
        </div>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <span className="text-xs text-muted-foreground">align-start</span>
            <Grid cols={2} gap={2} align="start" className="mt-2">
              <Placeholder color="bg-moss/20" label="Short" height="60px" />
              <Placeholder color="bg-lichen/20" label="Tall" height="100px" />
            </Grid>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">align-center</span>
            <Grid cols={2} gap={2} align="center" className="mt-2">
              <Placeholder color="bg-spruce/20" label="Short" height="60px" />
              <Placeholder color="bg-fjord/20" label="Tall" height="100px" />
            </Grid>
          </div>
        </div>

        <div className="text-sm text-muted-foreground mb-4">Gap Scale</div>
        <div className="flex flex-col gap-4 mb-8">
          <div>
            <span className="text-xs text-muted-foreground">gap-2</span>
            <Grid cols={3} gap={2} className="mt-2">
              <Placeholder color="bg-cloud/20" label="2" />
              <Placeholder color="bg-slate/20" label="2" />
              <Placeholder color="bg-moss/20" label="2" />
            </Grid>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">gap-4</span>
            <Grid cols={3} gap={4} className="mt-2">
              <Placeholder color="bg-lichen/20" label="4" />
              <Placeholder color="bg-spruce/20" label="4" />
              <Placeholder color="bg-fjord/20" label="4" />
            </Grid>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">gap-8</span>
            <Grid cols={3} gap={8} className="mt-2">
              <Placeholder color="bg-cloud/20" label="8" />
              <Placeholder color="bg-slate/20" label="8" />
              <Placeholder color="bg-moss/20" label="8" />
            </Grid>
          </div>
        </div>

        <div className="text-sm text-muted-foreground mb-4">
          Asymmetric Gaps
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xs text-muted-foreground">
              gap-x-8 gap-y-2
            </span>
            <Grid cols={3} gapX={8} gapY={2} className="mt-2">
              <Placeholder color="bg-moss/20" label="1" />
              <Placeholder color="bg-lichen/20" label="2" />
              <Placeholder color="bg-spruce/20" label="3" />
              <Placeholder color="bg-fjord/20" label="4" />
              <Placeholder color="bg-cloud/20" label="5" />
              <Placeholder color="bg-slate/20" label="6" />
            </Grid>
          </div>
        </div>
      </>
    ),
  },
};

export const Playground: Story = {
  args: {
    cols: 3,
    gap: 4,
    align: "stretch",
    justify: "start",
    children: (
      <>
        <Placeholder color="bg-moss" label="Col 1" />
        <Placeholder color="bg-lichen" label="Col 2" />
        <Placeholder color="bg-spruce" label="Col 3" />
      </>
    ),
  },
};
