import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../atoms/typography";
import { GradientBackground } from "./backgrounds/gradient-background";
import type { GradientBackgroundVariant } from "./backgrounds/gradient-background";
import { NetworkBackground } from "./backgrounds/network-background";
import { GrainyGradientBackground } from "./backgrounds/grainy-gradient-background";
import type { EllipseConfig, EllipseColor } from "./backgrounds/grainy-gradient-background";
import { PatternBackground } from "./backgrounds/pattern-background";
import { Button } from "../atoms/button";

const gradientOptions: GradientBackgroundVariant[] = [
  "fjord-slate",
  "slate-night",
  "spruce-fjord",
  "spruce-slate",
  "spruce-night",
  "moss-lichen",
  "moss-spruce",
  "lichen-cloud",
];

const meta = {
  title: "Foundations/Backgrounds",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Background components for the Berget Design System: Gradient (8 linear variants), Pattern, Network, and Grainy Gradient.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const GradientBackgroundDemo: StoryObj<{
  variant?: GradientBackgroundVariant;
}> = {
  name: "Gradient Background",
  args: {
    variant: "fjord-slate",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: gradientOptions,
      description: "Gradient variant to display",
    },
  },
  render: (args) => (
    <GradientBackground
      variant={args.variant}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center max-w-2xl px-6">
        <Typography variant="h1" className="mb-4 text-white">
          Gradient Background
        </Typography>
        <Typography variant="large" color="muted">
          Variant: {args.variant}
        </Typography>
      </div>
    </GradientBackground>
  ),
};

export const GridPattern: StoryObj<{
  size: "sm" | "md" | "lg";
  lineOpacity: number;
  dotOpacity: number;
}> = {
  name: "Grid Pattern",
  args: {
    size: "lg",
    lineOpacity: 0.1,
    dotOpacity: 0.1,
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Pattern tile size",
    },
    lineOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
      description: "Grid lines opacity (0-1)",
    },
    dotOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
      description: "Dots opacity (0-1)",
    },
  },
  render: (args) => (
    <PatternBackground
      size={args.size}
      lineOpacity={args.lineOpacity}
      dotOpacity={args.dotOpacity}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center max-w-2xl px-6">
        <Typography variant="h1" className="mb-4 text-white">
          Grid Pattern
        </Typography>
        <Typography variant="large" color="muted" className="mb-4 block">
          Grid pattern with small dots in corners.
        </Typography>
        <Typography variant="small" color="muted" className="mb-8 block">
          Size: {args.size} (
          {args.size === "sm" ? "24px" : args.size === "md" ? "34px" : "48px"})
          • Lines: {args.lineOpacity} • Dots: {args.dotOpacity}
        </Typography>
        <Button>View Details</Button>
      </div>
    </PatternBackground>
  ),
};

export const NetworkAnimated: StoryObj = {
  name: "Network — Animated",
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="relative min-h-screen bg-background flex items-center justify-center">
      <NetworkBackground opacity={0.4} nodeCount={50} />
      <div className="relative z-10 text-center max-w-2xl px-6">
        <Typography variant="h1" className="mb-4 text-white">
          Network Background
        </Typography>
        <Typography variant="large" color="muted" className="mb-8 block">
          Animated network of connected nodes with flowing particles. Perfect
          for tech/SaaS platforms and enterprise products.
        </Typography>
      </div>
    </div>
  ),
};

export const GrainyGradient: StoryObj<{
  blur: number;
  grain: number;
  motionEnabled: boolean;
  ellipse1Color: string;
  ellipse1Left: number;
  ellipse1Top: number;
  ellipse1Rotation: number;
  ellipse1SizeX: number;
  ellipse1SizeY: number;
  ellipse2Color: string;
  ellipse2Left: number;
  ellipse2Top: number;
  ellipse2Rotation: number;
  ellipse2SizeX: number;
  ellipse2SizeY: number;
  ellipse3Color: string;
  ellipse3Left: number;
  ellipse3Top: number;
  ellipse3Rotation: number;
  ellipse3SizeX: number;
  ellipse3SizeY: number;
  ellipse4Color: string;
  ellipse4Left: number;
  ellipse4Top: number;
  ellipse4Rotation: number;
  ellipse4SizeX: number;
  ellipse4SizeY: number;
  ellipse5Color: string;
  ellipse5Left: number;
  ellipse5Top: number;
  ellipse5Rotation: number;
  ellipse5SizeX: number;
  ellipse5SizeY: number;
}> = {
  name: "Grainy Gradient",
  args: {
    blur: 130,
    grain: 0.1,
    motionEnabled: true,
    ellipse1Color: "berget-brand-moss",
    ellipse1Left: 60,
    ellipse1Top: 45,
    ellipse1Rotation: 0,
    ellipse1SizeX: 25,
    ellipse1SizeY: 25,
    ellipse2Color: "berget-brand-moss",
    ellipse2Left: -3,
    ellipse2Top: 10,
    ellipse2Rotation: 45,
    ellipse2SizeX: 25,
    ellipse2SizeY: 25,
    ellipse3Color: "berget-brand-lichen",
    ellipse3Left: 35,
    ellipse3Top: -32,
    ellipse3Rotation: 90,
    ellipse3SizeX: 25,
    ellipse3SizeY: 25,
    ellipse4Color: "berget-brand-spruce",
    ellipse4Left: -23,
    ellipse4Top: -21,
    ellipse4Rotation: 135,
    ellipse4SizeX: 25,
    ellipse4SizeY: 25,
    ellipse5Color: "berget-brand-fjord",
    ellipse5Left: 30,
    ellipse5Top: 70,
    ellipse5Rotation: 180,
    ellipse5SizeX: 25,
    ellipse5SizeY: 25,
  },
  argTypes: {
    blur: {
      control: { type: "range", min: 0, max: 200, step: 1 },
      description: "Blur amount in pixels",
    },
    grain: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
      description: "Grain overlay opacity (0-1)",
    },
    motionEnabled: {
      control: { type: "boolean" },
      description: "Enable/disable motion animations for all ellipses",
    },
    ellipse1Color: {
      control: { type: "select" },
      options: [
        "berget-brand-moss",
        "berget-brand-cloud",
        "berget-brand-slate",
        "berget-brand-night",
        "berget-brand-peak",
        "berget-brand-lichen",
        "berget-brand-spruce",
        "berget-brand-fjord",
      ],
      description: "Ellipse 1 color",
    },
    ellipse1Left: {
      control: { type: "range", min: -50, max: 150, step: 1 },
      description: "Ellipse 1 horizontal position (%)",
    },
    ellipse1Top: {
      control: { type: "range", min: -50, max: 150, step: 1 },
      description: "Ellipse 1 vertical position (%)",
    },
    ellipse1Rotation: {
      control: { type: "range", min: 0, max: 360, step: 1 },
      description: "Ellipse 1 rotation (degrees)",
    },
    ellipse1SizeX: {
      control: { type: "range", min: 10, max: 50, step: 1 },
      description: "Ellipse 1 horizontal size (vw)",
    },
    ellipse1SizeY: {
      control: { type: "range", min: 10, max: 50, step: 1 },
      description: "Ellipse 1 vertical size (vh)",
    },
    ellipse2Color: {
      control: { type: "select" },
      options: [
        "berget-brand-moss",
        "berget-brand-cloud",
        "berget-brand-slate",
        "berget-brand-night",
        "berget-brand-peak",
        "berget-brand-lichen",
        "berget-brand-spruce",
        "berget-brand-fjord",
      ],
      description: "Ellipse 2 color",
    },
    ellipse2Left: {
      control: { type: "range", min: -50, max: 150, step: 1 },
      description: "Ellipse 2 horizontal position (%)",
    },
    ellipse2Top: {
      control: { type: "range", min: -50, max: 150, step: 1 },
      description: "Ellipse 2 vertical position (%)",
    },
    ellipse2Rotation: {
      control: { type: "range", min: 0, max: 360, step: 1 },
      description: "Ellipse 2 rotation (degrees)",
    },
    ellipse2SizeX: {
      control: { type: "range", min: 10, max: 50, step: 1 },
      description: "Ellipse 2 horizontal size (vw)",
    },
    ellipse2SizeY: {
      control: { type: "range", min: 10, max: 50, step: 1 },
      description: "Ellipse 2 vertical size (vh)",
    },
    ellipse3Color: {
      control: { type: "select" },
      options: [
        "berget-brand-moss",
        "berget-brand-cloud",
        "berget-brand-slate",
        "berget-brand-night",
        "berget-brand-peak",
        "berget-brand-lichen",
        "berget-brand-spruce",
        "berget-brand-fjord",
      ],
      description: "Ellipse 3 color",
    },
    ellipse3Left: {
      control: { type: "range", min: -50, max: 150, step: 1 },
      description: "Ellipse 3 horizontal position (%)",
    },
    ellipse3Top: {
      control: { type: "range", min: -50, max: 150, step: 1 },
      description: "Ellipse 3 vertical position (%)",
    },
    ellipse3Rotation: {
      control: { type: "range", min: 0, max: 360, step: 1 },
      description: "Ellipse 3 rotation (degrees)",
    },
    ellipse3SizeX: {
      control: { type: "range", min: 10, max: 50, step: 1 },
      description: "Ellipse 3 horizontal size (vw)",
    },
    ellipse3SizeY: {
      control: { type: "range", min: 10, max: 50, step: 1 },
      description: "Ellipse 3 vertical size (vh)",
    },
    ellipse4Color: {
      control: { type: "select" },
      options: [
        "berget-brand-moss",
        "berget-brand-cloud",
        "berget-brand-slate",
        "berget-brand-night",
        "berget-brand-peak",
        "berget-brand-lichen",
        "berget-brand-spruce",
        "berget-brand-fjord",
      ],
      description: "Ellipse 4 color",
    },
    ellipse4Left: {
      control: { type: "range", min: -50, max: 150, step: 1 },
      description: "Ellipse 4 horizontal position (%)",
    },
    ellipse4Top: {
      control: { type: "range", min: -50, max: 150, step: 1 },
      description: "Ellipse 4 vertical position (%)",
    },
    ellipse4Rotation: {
      control: { type: "range", min: 0, max: 360, step: 1 },
      description: "Ellipse 4 rotation (degrees)",
    },
    ellipse4SizeX: {
      control: { type: "range", min: 10, max: 50, step: 1 },
      description: "Ellipse 4 horizontal size (vw)",
    },
    ellipse4SizeY: {
      control: { type: "range", min: 10, max: 50, step: 1 },
      description: "Ellipse 4 vertical size (vh)",
    },
    ellipse5Color: {
      control: { type: "select" },
      options: [
        "berget-brand-moss",
        "berget-brand-cloud",
        "berget-brand-slate",
        "berget-brand-night",
        "berget-brand-peak",
        "berget-brand-lichen",
        "berget-brand-spruce",
        "berget-brand-fjord",
      ],
      description: "Ellipse 5 color",
    },
    ellipse5Left: {
      control: { type: "range", min: -50, max: 150, step: 1 },
      description: "Ellipse 5 horizontal position (%)",
    },
    ellipse5Top: {
      control: { type: "range", min: -50, max: 150, step: 1 },
      description: "Ellipse 5 vertical position (%)",
    },
    ellipse5Rotation: {
      control: { type: "range", min: 0, max: 360, step: 1 },
      description: "Ellipse 5 rotation (degrees)",
    },
    ellipse5SizeX: {
      control: { type: "range", min: 10, max: 50, step: 1 },
      description: "Ellipse 5 horizontal size (vw)",
    },
    ellipse5SizeY: {
      control: { type: "range", min: 10, max: 50, step: 1 },
      description: "Ellipse 5 vertical size (vh)",
    },
  },
  render: (args) => {
    const ellipses: EllipseConfig[] = [
      {
        color: args.ellipse1Color as EllipseColor,
        rotation: args.ellipse1Rotation,
        opacity: 1,
        sizeX: args.ellipse1SizeX,
        sizeY: args.ellipse1SizeY,
        duration: 120,
        delay: 0,
        xPath: ["-5vw", "5vw", "-2vw", "3vw", "-5vw"],
        yPath: ["-8vh", "8vh", "10vh", "-6vh", "-8vh"],
        left: args.ellipse1Left,
        top: args.ellipse1Top,
        motionEnabled: args.motionEnabled,
      },
      {
        color: args.ellipse2Color as EllipseColor,
        rotation: args.ellipse2Rotation,
        opacity: 1,
        sizeX: args.ellipse2SizeX,
        sizeY: args.ellipse2SizeY,
        duration: 120,
        delay: 24,
        xPath: ["4vw", "-4vw", "5vw", "-2vw", "4vw"],
        yPath: ["-6vh", "8vh", "-4vh", "6vh", "-6vh"],
        left: args.ellipse2Left,
        top: args.ellipse2Top,
        motionEnabled: args.motionEnabled,
      },
      {
        color: args.ellipse3Color as EllipseColor,
        rotation: args.ellipse3Rotation,
        opacity: 1,
        sizeX: args.ellipse3SizeX,
        sizeY: args.ellipse3SizeY,
        duration: 120,
        delay: 48,
        xPath: ["-3vw", "3vw", "-4vw", "2vw", "-3vw"],
        yPath: ["10vh", "-10vh", "-6vh", "8vh", "10vh"],
        left: args.ellipse3Left,
        top: args.ellipse3Top,
        motionEnabled: args.motionEnabled,
      },
      {
        color: args.ellipse4Color as EllipseColor,
        rotation: args.ellipse4Rotation,
        opacity: 1,
        sizeX: args.ellipse4SizeX,
        sizeY: args.ellipse4SizeY,
        duration: 120,
        delay: 72,
        xPath: ["2vw", "-2vw", "3vw", "-4vw", "2vw"],
        yPath: ["-4vh", "4vh", "-10vh", "6vh", "-4vh"],
        left: args.ellipse4Left,
        top: args.ellipse4Top,
        motionEnabled: args.motionEnabled,
      },
      {
        color: args.ellipse5Color as EllipseColor,
        rotation: args.ellipse5Rotation,
        opacity: 1,
        sizeX: args.ellipse5SizeX,
        sizeY: args.ellipse5SizeY,
        duration: 120,
        delay: 96,
        xPath: ["-4vw", "4vw", "-2vw", "3vw", "-4vw"],
        yPath: ["6vh", "-6vh", "8vh", "-10vh", "6vh"],
        left: args.ellipse5Left,
        top: args.ellipse5Top,
        motionEnabled: args.motionEnabled,
      },
    ];

    return (
      <GrainyGradientBackground
        blur={args.blur}
        grain={args.grain}
        ellipses={ellipses}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center max-w-2xl px-6">
          <Typography variant="h1" className="mb-4 text-white">
            Grainy Gradient
          </Typography>
          <Typography variant="large" color="muted" className="mb-4 block">
            Artistic grainy gradient with multiple colored ellipses and blur
            overlay.
          </Typography>
          <Typography variant="small" color="muted" className="block">
            Blur: {args.blur}px • Grain: {args.grain} • Motion:{" "}
            {args.motionEnabled ? "Enabled" : "Disabled"}
          </Typography>
          <Button className="mt-6">Explore</Button>
        </div>
      </GrainyGradientBackground>
    );
  },
};
