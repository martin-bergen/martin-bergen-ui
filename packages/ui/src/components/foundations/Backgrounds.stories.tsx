import type { Meta, StoryObj } from "@storybook/react";

import { GradientBackground } from "./gradient-background";
import type { GradientBackgroundProps } from "./gradient-background";
import { NetworkBackground } from "./network-background";
import { GrainyGradientBackground } from "./grainy-gradient-background";
import type {
  EllipseAnimation,
  EllipseConfig,
} from "./grainy-gradient-background";
import { PatternBackground } from "./pattern-background";
import { Button } from "../atoms/button";

const gradientOptions = [
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

export const GradientBackgroundDemo: StoryObj<
  Pick<GradientBackgroundProps, "variant" | "rotation">
> = {
  name: "Gradient Background",
  args: {
    variant: "fjord-slate",
    rotation: 90,
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: gradientOptions,
      description: "Gradient variant to display",
    },
    rotation: {
      control: { type: "range", min: 0, max: 360, step: 1 },
      description: "Rotation angle for the gradient",
    },
  },
  render: (args) => (
    <GradientBackground
      variant={args.variant}
      rotation={args.rotation}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl mb-4 text-white">
          Gradient Background
        </h1>
        <p className="text-white/80 text-lg">
          Variant: {args.variant} • Rotation: {args.rotation}deg
        </p>
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
        <h1 className="text-5xl mb-4 text-white">Grid Pattern</h1>
        <p className="text-white/90 text-lg mb-4">
          Grid pattern with small dots in corners.
        </p>
        <p className="text-white/60 text-sm mb-8">
          Size: {args.size} (
          {args.size === "sm" ? "24px" : args.size === "md" ? "34px" : "48px"})
          • Lines: {args.lineOpacity} • Dots: {args.dotOpacity}
        </p>
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
        <h1 className="text-5xl mb-4 text-white">Network Background</h1>
        <p className="text-white/80 text-lg mb-8">
          Animated network of connected nodes with flowing particles. Perfect
          for tech/SaaS platforms and enterprise products.
        </p>
      </div>
    </div>
  ),
};

export const GrainyGradient: StoryObj<{
  blur: number;
  grain: number;
  animationSpeed: EllipseAnimation;
  ellipse1Left: number;
  ellipse1Top: number;
  ellipse1Rotation: number;
  ellipse2Left: number;
  ellipse2Top: number;
  ellipse2Rotation: number;
  ellipse3Left: number;
  ellipse3Top: number;
  ellipse3Rotation: number;
  ellipse4Left: number;
  ellipse4Top: number;
  ellipse4Rotation: number;
  ellipse5Left: number;
  ellipse5Top: number;
  ellipse5Rotation: number;
}> = {
  name: "Grainy Gradient",
  args: {
    blur: 130,
    grain: 0.1,
    animationSpeed: "medium",
    ellipse1Left: 60,
    ellipse1Top: 45,
    ellipse1Rotation: -30,
    ellipse2Left: -3,
    ellipse2Top: 10,
    ellipse2Rotation: 10,
    ellipse3Left: 35,
    ellipse3Top: -32,
    ellipse3Rotation: 20,
    ellipse4Left: -23,
    ellipse4Top: -21,
    ellipse4Rotation: -15,
    ellipse5Left: 30,
    ellipse5Top: 70,
    ellipse5Rotation: 30,
  },
  argTypes: {
    blur: {
      control: { type: "range", min: 0, max: 300, step: 1 },
      description: "Blur amount in pixels",
    },
    grain: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
      description: "Grain overlay opacity (0-1)",
    },
    animationSpeed: {
      control: { type: "select" },
      options: ["slow", "medium", "fast"],
      description: "Animation speed for all ellipses",
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
      control: { type: "range", min: -180, max: 180, step: 1 },
      description: "Ellipse 1 rotation (degrees)",
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
      control: { type: "range", min: -180, max: 180, step: 1 },
      description: "Ellipse 2 rotation (degrees)",
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
      control: { type: "range", min: -180, max: 180, step: 1 },
      description: "Ellipse 3 rotation (degrees)",
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
      control: { type: "range", min: -180, max: 180, step: 1 },
      description: "Ellipse 4 rotation (degrees)",
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
      control: { type: "range", min: -180, max: 180, step: 1 },
      description: "Ellipse 5 rotation (degrees)",
    },
  },
  render: (args) => {
    const toMatrix = (deg: number) => {
      const rad = (deg * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return `matrix(${cos.toFixed(2)}, ${sin.toFixed(2)}, ${(-sin).toFixed(2)}, ${cos.toFixed(2)}, 0, 0)`;
    };

    const createEllipse = (
      overrides: Partial<EllipseConfig> = {},
    ): EllipseConfig => ({
      color: "berget-brand-moss",
      position: { left: "0%", right: "0%", top: "50%", bottom: "-50%" },
      transform: "matrix(1, 0, 0, 1, 0, 0)",
      animation: "slow",
      opacity: 0.8,
      size: 100,
      ...overrides,
    });

    const ellipses: EllipseConfig[] = [
      {
        ...createEllipse({
          color: "berget-brand-moss",
          position: {
            left: `${args.ellipse1Left}%`,
            right: "-33%",
            top: `${args.ellipse1Top}%`,
            bottom: "9%",
          },
          transform: toMatrix(args.ellipse1Rotation),
          animation: args.animationSpeed as EllipseAnimation,
          opacity: 1,
          size: 100,
        }),
      },
      {
        ...createEllipse({
          color: "berget-brand-moss",
          position: {
            left: `${args.ellipse2Left}%`,
            right: "-14%",
            top: `${args.ellipse2Top}%`,
            bottom: "28%",
          },
          transform: toMatrix(args.ellipse2Rotation),
          animation: args.animationSpeed as EllipseAnimation,
          opacity: 1,
          size: 100,
        }),
      },
      {
        ...createEllipse({
          color: "berget-brand-lichen",
          position: {
            left: `${args.ellipse3Left}%`,
            right: "-16%",
            top: `${args.ellipse3Top}%`,
            bottom: "64%",
          },
          transform: toMatrix(args.ellipse3Rotation),
          animation: args.animationSpeed as EllipseAnimation,
          opacity: 0.9,
          size: 100,
        }),
      },
      {
        ...createEllipse({
          color: "berget-brand-spruce",
          position: {
            left: `${args.ellipse4Left}%`,
            right: "41%",
            top: `${args.ellipse4Top}%`,
            bottom: "75%",
          },
          transform: toMatrix(args.ellipse4Rotation),
          animation: args.animationSpeed as EllipseAnimation,
          opacity: 0.7,
          size: 100,
        }),
      },
      {
        ...createEllipse({
          color: "berget-brand-fjord",
          position: {
            left: `${args.ellipse5Left}%`,
            right: "-20%",
            top: `${args.ellipse5Top}%`,
            bottom: "-10%",
          },
          transform: toMatrix(args.ellipse5Rotation),
          animation: args.animationSpeed as EllipseAnimation,
          opacity: 0.8,
          size: 120,
        }),
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
          <h1 className="text-5xl mb-4 text-white">Grainy Gradient</h1>
          <p className="text-white/90 text-lg mb-4">
            Artistic grainy gradient with multiple colored ellipses and blur
            overlay.
          </p>
          <p className="text-white/60 text-sm">
            Blur: {args.blur}px • Grain: {args.grain} • Speed:{" "}
            {args.animationSpeed}
          </p>
          <Button className="mt-6">Explore</Button>
        </div>
      </GrainyGradientBackground>
    );
  },
};
