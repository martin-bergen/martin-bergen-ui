import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../atoms/button";
import { Typography } from "../atoms/typography";
import { GradientBackground } from "./backgrounds/gradient-background";
import type { GradientBackgroundVariant } from "./backgrounds/gradient-background";
import { NetworkBackground } from "./backgrounds/network-background";
import { GrainyBackground } from "./backgrounds/grainy-background";
import type {
  EllipseConfig,
  EllipseColor,
} from "./backgrounds/grainy-background";
import { GridBackground } from "./backgrounds/grid-background";
import { ParticleBackground } from "./backgrounds/particle-background";
import type { ParticleColor } from "./backgrounds/particle-background";
import { VideoBackground } from "./backgrounds/video-background";
import { ImageBackground } from "./backgrounds/image-background";
import type {
  ImagePosition,
  ImageFit,
  OverlayType,
} from "./backgrounds/image-background";

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
          "Background components for the Berget Design System: Gradient, Grid, Network, Grainy, Particle, Video, and Image backgrounds.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const GradientBackgroundDemo: StoryObj<{
  variant?: GradientBackgroundVariant;
  rotation?: number;
}> = {
  name: "Gradient Background",
  args: {
    variant: "fjord-slate",
    rotation: 0,
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: gradientOptions,
      description: "Gradient variant to display",
    },
    rotation: {
      control: { type: "range", min: 0, max: 360, step: 1 },
      description: "Gradient rotation (0-360 degrees)",
    },
  },
  render: (args) => (
    <GradientBackground
      variant={args.variant}
      rotation={args.rotation}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center max-w-2xl px-6">
        <Typography variant="h1" className="mb-4 text-white">
          Gradient Background
        </Typography>
        <Typography variant="large" color="muted">
          Variant: {args.variant}
        </Typography>
        <Typography variant="small" color="muted" className="mb-8 block">
          Rotation: {args.rotation}°
        </Typography>
      </div>
    </GradientBackground>
  ),
};

export const GridBackgroundStory: StoryObj<{
  size: "sm" | "md" | "lg";
  lineOpacity: number;
  dotOpacity: number;
}> = {
  name: "Grid Background",
  args: {
    size: "md",
    lineOpacity: 0.04,
    dotOpacity: 0.04,
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Grid tile size",
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
    <GridBackground
      size={args.size}
      lineOpacity={args.lineOpacity}
      dotOpacity={args.dotOpacity}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center max-w-2xl px-6">
        <Typography variant="h1" className="mb-4 text-white">
          Grid Background
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
    </GridBackground>
  ),
};

export const NetworkBackgroundStory: StoryObj = {
  name: "Network Background",
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

export const GrainyBackgroundStory: StoryObj<{
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
  name: "Grainy Background",
  args: {
    blur: 99,
    grain: 0.11,
    motionEnabled: true,
    ellipse1Color: "berget-brand-moss",
    ellipse1Left: 49,
    ellipse1Top: 7,
    ellipse1Rotation: 4,
    ellipse1SizeX: 70,
    ellipse1SizeY: 85,
    ellipse2Color: "berget-brand-spruce",
    ellipse2Left: 14,
    ellipse2Top: 10,
    ellipse2Rotation: 0,
    ellipse2SizeX: 68,
    ellipse2SizeY: 73,
    ellipse3Color: "berget-brand-fjord",
    ellipse3Left: 20,
    ellipse3Top: 73,
    ellipse3Rotation: 11,
    ellipse3SizeX: 60,
    ellipse3SizeY: 68,
    ellipse4Color: "berget-brand-spruce",
    ellipse4Left: 91,
    ellipse4Top: 32,
    ellipse4Rotation: 0,
    ellipse4SizeX: 58,
    ellipse4SizeY: 86,
    ellipse5Color: "berget-brand-spruce",
    ellipse5Left: 68,
    ellipse5Top: 81,
    ellipse5Rotation: 0,
    ellipse5SizeX: 64,
    ellipse5SizeY: 82,
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
      control: { type: "range", min: 40, max: 100, step: 1 },
      description: "Ellipse 1 horizontal size (vw)",
    },
    ellipse1SizeY: {
      control: { type: "range", min: 40, max: 100, step: 1 },
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
      control: { type: "range", min: 40, max: 100, step: 1 },
      description: "Ellipse 2 horizontal size (vw)",
    },
    ellipse2SizeY: {
      control: { type: "range", min: 40, max: 100, step: 1 },
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
      control: { type: "range", min: 40, max: 100, step: 1 },
      description: "Ellipse 3 horizontal size (vw)",
    },
    ellipse3SizeY: {
      control: { type: "range", min: 40, max: 100, step: 1 },
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
      control: { type: "range", min: 40, max: 100, step: 1 },
      description: "Ellipse 4 horizontal size (vw)",
    },
    ellipse4SizeY: {
      control: { type: "range", min: 40, max: 100, step: 1 },
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
      control: { type: "range", min: 40, max: 100, step: 1 },
      description: "Ellipse 5 horizontal size (vw)",
    },
    ellipse5SizeY: {
      control: { type: "range", min: 40, max: 100, step: 1 },
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
      <GrainyBackground
        blur={args.blur}
        grain={args.grain}
        ellipses={ellipses}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center max-w-2xl px-6">
          <Typography variant="h1" className="mb-4 text-white">
            Grainy Background
          </Typography>
          <Typography variant="large" color="muted" className="mb-4 block">
            Artistic grainy background with multiple colored ellipses and blur
            overlay.
          </Typography>
          <Typography variant="small" color="muted" className="block">
            Blur: {args.blur}px • Grain: {args.grain} • Motion:{" "}
            {args.motionEnabled ? "Enabled" : "Disabled"}
          </Typography>
          <Button className="mt-6">Explore</Button>
        </div>
      </GrainyBackground>
    );
  },
};

export const ParticleBackgroundStory: StoryObj<{
  particleCount: number;
  particleColor: ParticleColor;
  particleOpacity: number;
  particleSize: number;
  particleInteractionRadius: number;
  opacity: number;
}> = {
  name: "Particle Background",
  args: {
    particleCount: 80,
    particleColor: "moss",
    particleOpacity: 0.6,
    particleSize: 2,
    particleInteractionRadius: 150,
    opacity: 1,
  },
  argTypes: {
    particleCount: {
      control: { type: "range", min: 10, max: 200, step: 1 },
      description: "Number of particles",
    },
    particleColor: {
      control: { type: "select" },
      options: [
        "moss",
        "lichen",
        "spruce",
        "fjord",
        "cloud",
      ] as ParticleColor[],
      description: "Color of particles",
    },
    particleOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
      description: "Opacity of particles (0-1)",
    },
    particleSize: {
      control: { type: "range", min: 1, max: 10, step: 0.5 },
      description: "Size of particles",
    },
    particleInteractionRadius: {
      control: { type: "range", min: 50, max: 300, step: 10 },
      description: "Interaction radius for mouse repulsion",
    },
    opacity: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
      description: "Overall opacity of the overlay (0-1)",
    },
  },
  render: (args) => (
    <div className="relative min-h-screen bg-berget-brand-night flex items-center justify-center">
      <ParticleBackground
        particleCount={args.particleCount}
        particleColor={args.particleColor}
        particleOpacity={args.particleOpacity}
        particleSize={args.particleSize}
        particleInteractionRadius={args.particleInteractionRadius}
        opacity={args.opacity}
      />
      <div className="text-center max-w-2xl px-6 relative z-10">
        <Typography variant="h1" className="mb-4 text-white">
          Particle Background
        </Typography>
        <Typography variant="large" color="muted" className="mb-4 block">
          Interactive particle overlay with mouse repulsion effect.
        </Typography>
        <Typography variant="small" color="muted" className="block">
          Particles: {args.particleCount} • Color: {args.particleColor} •
          Interaction: {args.particleInteractionRadius}px
        </Typography>
        <Button className="mt-6">Explore</Button>
      </div>
    </div>
  ),
};

export const VideoBackgroundStory: StoryObj<{
  src: string;
  fallbackImageSrc: string;
  loading: "eager" | "lazy";
  parallax: boolean;
  parallaxSpeed: number;
}> = {
  name: "Video Background",
  args: {
    src: "/backgrounds/videos/hero-particles-01.mp4",
    fallbackImageSrc: "/backgrounds/images/hero-abstract-01.png",
    loading: "eager",
    parallax: false,
    parallaxSpeed: 0.5,
  },
  argTypes: {
    src: {
      control: { type: "select" },
      options: [
        "/backgrounds/videos/hero-particles-01.mp4",
        "/backgrounds/videos/hero-particles-02.mp4",
      ],
      description: "Video source",
    },
    fallbackImageSrc: {
      control: { type: "select" },
      options: [
        "/backgrounds/images/hero-abstract-01.png",
        "/backgrounds/images/hero-abstract-02.png",
        "/backgrounds/images/hero-abstract-03.png",
      ],
      description: "Fallback image source",
    },
    loading: {
      control: { type: "select" },
      options: ["eager", "lazy"] as const,
      description: "Loading strategy",
    },
    parallax: {
      control: { type: "boolean" },
      description: "Enable parallax effect",
    },
    parallaxSpeed: {
      control: { type: "range", min: 0.1, max: 1, step: 0.1 },
      description: "Parallax speed (0.1-1.0)",
      if: { arg: "parallax", eq: true },
    },
  },
  render: (args) => (
    <VideoBackground
      src={args.src}
      fallbackImageSrc={args.fallbackImageSrc}
      loading={args.loading}
      parallax={args.parallax}
      parallaxSpeed={args.parallaxSpeed}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center max-w-2xl px-6">
        <Typography variant="h1" className="mb-4 text-white">
          Video Background
        </Typography>
        <Typography variant="large" color="muted" className="mb-4 block">
          Video background with automatic fallback and parallax effect.
        </Typography>
        <Typography variant="small" color="muted" className="block">
          Loading: {args.loading}
          {args.parallax &&
            ` • Parallax: ${args.parallax ? "Enabled" : "Disabled"}`}
        </Typography>
        <Button className="mt-6">Explore</Button>
      </div>
    </VideoBackground>
  ),
};

export const ImageBackgroundStory: StoryObj<{
  src: string;
  alt: string;
  position: ImagePosition;
  fit: ImageFit;
  overlay: OverlayType;
  overlayOpacity: number;
  imageOpacity: number;
  loading: "eager" | "lazy";
  parallax: boolean;
  parallaxSpeed: number;
  fadeIn: boolean;
  fadeInDuration: number;
}> = {
  name: "Image Background",
  args: {
    src: "/backgrounds/images/hero-abstract-01.png",
    alt: "Hero background image",
    position: "center",
    fit: "cover",
    overlay: "night",
    overlayOpacity: 0.04,
    imageOpacity: 1,
    loading: "lazy",
    parallax: true,
    parallaxSpeed: 0.5,
    fadeIn: true,
    fadeInDuration: 600,
  },
  argTypes: {
    src: {
      control: { type: "select" },
      options: [
        "/backgrounds/images/hero-abstract-01.png",
        "/backgrounds/images/hero-abstract-02.png",
        "/backgrounds/images/hero-abstract-03.png",
        "/backgrounds/images/hero-abstract-04.png",
        "/backgrounds/images/hero-abstract-05.png",
        "/backgrounds/images/hero-abstract-06.png",
      ],
      description: "Image source",
    },
    alt: {
      control: { type: "text" },
      description: "Alt text for image",
    },
    position: {
      control: { type: "select" },
      options: [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "left-top",
        "right-top",
        "left-bottom",
        "right-bottom",
      ] as ImagePosition[],
      description: "Image position",
    },
    fit: {
      control: { type: "select" },
      options: ["cover", "contain", "fill"] as ImageFit[],
      description: "Image fit",
    },
    overlay: {
      control: { type: "select" },
      options: [
        "none",
        "night",
        "moss",
        "lichen",
        "spruce",
        "slate",
        "cloud",
        "peak",
      ] as OverlayType[],
      description: "Overlay type (Night default)",
    },
    overlayOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
      description: "Overlay opacity (0-1)",
      if: { arg: "overlay", neq: "none" },
    },
    imageOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
      description: "Image opacity (0-1)",
    },
    loading: {
      control: { type: "select" },
      options: ["eager", "lazy"] as const,
      description: "Loading strategy",
    },
    parallax: {
      control: { type: "boolean" },
      description: "Enable parallax effect",
    },
    parallaxSpeed: {
      control: { type: "range", min: 0.1, max: 1, step: 0.1 },
      description: "Parallax speed (0.1-1.0)",
      if: { arg: "parallax", eq: true },
    },
    fadeIn: {
      control: { type: "boolean" },
      description: "Enable fade-in animation",
    },
    fadeInDuration: {
      control: { type: "range", min: 200, max: 2000, step: 100 },
      description: "Fade-in duration (ms)",
      if: { arg: "fadeIn", eq: true },
    },
  },
  render: (args) => (
    <ImageBackground
      src={args.src}
      alt={args.alt}
      position={args.position}
      fit={args.fit}
      overlay={args.overlay}
      overlayOpacity={args.overlayOpacity}
      imageOpacity={args.imageOpacity}
      loading={args.loading}
      parallax={args.parallax}
      parallaxSpeed={args.parallaxSpeed}
      fadeIn={args.fadeIn}
      fadeInDuration={args.fadeInDuration}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center max-w-2xl px-6">
        <Typography variant="h1" className="mb-4 text-white">
          Image Background
        </Typography>
        <Typography variant="large" color="muted" className="mb-4 block">
          Image background with overlay, parallax, and fade-in animation.
        </Typography>
        <Typography variant="small" color="muted" className="block">
          Position: {args.position} • Fit: {args.fit} • Overlay: {args.overlay}
          {args.parallax &&
            ` • Parallax: ${args.parallax ? "Enabled" : "Disabled"}`}
          {args.fadeIn && ` • Fade In: ${args.fadeIn ? "Enabled" : "Disabled"}`}
        </Typography>
        <Button className="mt-6">Explore</Button>
      </div>
    </ImageBackground>
  ),
};

export const Parallax: StoryObj<{
  backgroundType: "video" | "image";
  parallaxSpeed: number;
  videoSrc: string;
  videoFallbackImageSrc: string;
  videoLoading: "eager" | "lazy";
  imageSrc: string;
  imagePosition: ImagePosition;
  imageFit: ImageFit;
  imageOverlay: OverlayType;
}> = {
  name: "Parallax",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    backgroundType: "image",
    parallaxSpeed: 0.5,
    videoSrc: "/backgrounds/videos/hero-particles-01.mp4",
    videoFallbackImageSrc: "/backgrounds/images/hero-abstract-01.png",
    videoLoading: "eager",
    imageSrc: "/backgrounds/images/hero-abstract-01.png",
    imagePosition: "center",
    imageFit: "cover",
    imageOverlay: "night",
  },
  argTypes: {
    backgroundType: {
      control: { type: "select" },
      options: ["video", "image"],
      description: "Choose background type with parallax effect",
    },
    parallaxSpeed: {
      control: { type: "range", min: 0.1, max: 1, step: 0.1 },
      description: "Parallax speed (0.1 = slow, 1.0 = fast)",
    },
    videoSrc: {
      control: { type: "select" },
      options: [
        "/backgrounds/videos/hero-particles-01.mp4",
        "/backgrounds/videos/hero-particles-02.mp4",
      ],
      description: "Video source",
      if: { arg: "backgroundType", eq: "video" },
    },
    videoFallbackImageSrc: {
      control: { type: "select" },
      options: [
        "/backgrounds/images/hero-abstract-01.png",
        "/backgrounds/images/hero-abstract-02.png",
        "/backgrounds/images/hero-abstract-03.png",
      ],
      description: "Fallback image source",
      if: { arg: "backgroundType", eq: "video" },
    },
    videoLoading: {
      control: { type: "select" },
      options: ["eager", "lazy"] as const,
      description: "Loading strategy",
      if: { arg: "backgroundType", eq: "video" },
    },
    imageSrc: {
      control: { type: "select" },
      options: [
        "/backgrounds/images/hero-abstract-01.png",
        "/backgrounds/images/hero-abstract-02.png",
        "/backgrounds/images/hero-abstract-03.png",
        "/backgrounds/images/hero-abstract-04.png",
        "/backgrounds/images/hero-abstract-05.png",
        "/backgrounds/images/hero-abstract-06.png",
      ],
      description: "Image source",
      if: { arg: "backgroundType", eq: "image" },
    },
    imagePosition: {
      control: { type: "select" },
      options: [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "left-top",
        "right-top",
        "left-bottom",
        "right-bottom",
      ] as ImagePosition[],
      description: "Image position",
      if: { arg: "backgroundType", eq: "image" },
    },
    imageFit: {
      control: { type: "select" },
      options: ["cover", "contain", "fill"] as ImageFit[],
      description: "Image fit",
      if: { arg: "backgroundType", eq: "image" },
    },
    imageOverlay: {
      control: { type: "select" },
      options: [
        "none",
        "night",
        "moss",
        "lichen",
        "spruce",
        "slate",
        "cloud",
        "peak",
      ] as OverlayType[],
      description: "Overlay type",
      if: { arg: "backgroundType", eq: "image" },
    },
  },
  render: (args) => {
    const renderContent = () => (
      <div className="relative z-10 h-full">
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-2xl px-6 bg-black/30 backdrop-blur-sm p-8 rounded-2xl">
            <Typography variant="h1" className="mb-4 text-white">
              Parallax Demo
            </Typography>
            <Typography variant="large" color="muted" className="mb-4 block">
              Background: {args.backgroundType} • Speed: {args.parallaxSpeed}
            </Typography>
            <Typography variant="small" color="muted">
              ↓ Scroll down to see parallax effect ↓
            </Typography>
          </div>
        </section>
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-2xl px-6 bg-black/30 backdrop-blur-sm p-8 rounded-2xl">
            <Typography variant="h1" className="mb-4 text-white">
              Content Section
            </Typography>
            <Typography variant="large" color="muted">
              The background moves at a different speed than the content
            </Typography>
            <Typography variant="small" color="muted" className="mt-4 block">
              ↑ Scroll back up ↑
            </Typography>
          </div>
        </section>
      </div>
    );

    switch (args.backgroundType) {
      case "video":
        return (
          <VideoBackground
            src={args.videoSrc}
            fallbackImageSrc={args.videoFallbackImageSrc}
            loading={args.videoLoading}
            parallax={true}
            parallaxSpeed={args.parallaxSpeed}
            className="h-[200vh]"
          >
            {renderContent()}
          </VideoBackground>
        );
      case "image":
        return (
          <ImageBackground
            src={args.imageSrc}
            position={args.imagePosition}
            fit={args.imageFit}
            overlay={args.imageOverlay}
            parallax={true}
            parallaxSpeed={args.parallaxSpeed}
            fadeIn={true}
            className="h-[200vh]"
          >
            {renderContent()}
          </ImageBackground>
        );
    }
  },
};

export const CombinedBackgrounds: StoryObj<{
  baseBackground: "gradient" | "video" | "image";
  gradientVariant: GradientBackgroundVariant;
  videoSrc: string;
  videoFallbackImageSrc: string;
  imageSrc: string;
  imageOverlay: OverlayType;
  particleCount: number;
  particleColor: ParticleColor;
  particleOpacity: number;
  particleSize: number;
  particleInteractionRadius: number;
  particleOverlayOpacity: number;
}> = {
  name: "Combined Backgrounds",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    baseBackground: "gradient",
    gradientVariant: "spruce-fjord",
    videoSrc: "/backgrounds/videos/hero-particles-01.mp4",
    videoFallbackImageSrc: "/backgrounds/images/hero-abstract-01.png",
    imageSrc: "/backgrounds/images/hero-abstract-01.png",
    imageOverlay: "night",
    particleCount: 80,
    particleColor: "cloud",
    particleOpacity: 0.6,
    particleSize: 2,
    particleInteractionRadius: 150,
    particleOverlayOpacity: 1,
  },
  argTypes: {
    baseBackground: {
      control: { type: "select" },
      options: ["gradient", "video", "image"],
      description: "Choose base background",
    },
    gradientVariant: {
      control: { type: "select" },
      options: [
        "fjord-slate",
        "slate-night",
        "spruce-fjord",
        "spruce-slate",
        "spruce-night",
        "moss-lichen",
        "moss-spruce",
        "lichen-cloud",
      ],
      description: "Gradient variant",
      if: { arg: "baseBackground", eq: "gradient" },
    },
    videoSrc: {
      control: { type: "select" },
      options: [
        "/backgrounds/videos/hero-particles-01.mp4",
        "/backgrounds/videos/hero-particles-02.mp4",
      ],
      description: "Video source",
      if: { arg: "baseBackground", eq: "video" },
    },
    videoFallbackImageSrc: {
      control: { type: "select" },
      options: [
        "/backgrounds/images/hero-abstract-01.png",
        "/backgrounds/images/hero-abstract-02.png",
        "/backgrounds/images/hero-abstract-03.png",
      ],
      description: "Fallback image source",
      if: { arg: "baseBackground", eq: "video" },
    },
    imageSrc: {
      control: { type: "select" },
      options: [
        "/backgrounds/images/hero-abstract-01.png",
        "/backgrounds/images/hero-abstract-02.png",
        "/backgrounds/images/hero-abstract-03.png",
        "/backgrounds/images/hero-abstract-04.png",
        "/backgrounds/images/hero-abstract-05.png",
        "/backgrounds/images/hero-abstract-06.png",
      ],
      description: "Image source",
      if: { arg: "baseBackground", eq: "image" },
    },
    imageOverlay: {
      control: { type: "select" },
      options: [
        "none",
        "night",
        "moss",
        "lichen",
        "spruce",
        "slate",
        "cloud",
        "peak",
      ] as OverlayType[],
      description: "Image overlay type",
      if: { arg: "baseBackground", eq: "image" },
    },
    particleCount: {
      control: { type: "range", min: 10, max: 200, step: 1 },
      description: "Number of particles",
    },
    particleColor: {
      control: { type: "select" },
      options: [
        "moss",
        "lichen",
        "spruce",
        "fjord",
        "cloud",
      ] as ParticleColor[],
      description: "Color of particles",
    },
    particleOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
      description: "Opacity of particles (0-1)",
    },
    particleSize: {
      control: { type: "range", min: 1, max: 10, step: 0.5 },
      description: "Size of particles",
    },
    particleInteractionRadius: {
      control: { type: "range", min: 50, max: 300, step: 10 },
      description: "Interaction radius for mouse repulsion",
    },
    particleOverlayOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
      description: "Overall opacity of particle overlay (0-1)",
    },
  },
  render: (args) => {
    const renderBaseBackground = () => {
      switch (args.baseBackground) {
        case "gradient":
          return (
            <GradientBackground variant={args.gradientVariant} />
          );
        case "video":
          return (
            <VideoBackground
              src={args.videoSrc}
              fallbackImageSrc={args.videoFallbackImageSrc}
            />
          );
        case "image":
          return (
            <ImageBackground
              src={args.imageSrc}
              overlay={args.imageOverlay}
              fadeIn={true}
            />
          );
      }
    };

    return (
      <div className="relative min-h-screen flex items-center justify-center">
        {renderBaseBackground()}
        <ParticleBackground
          particleCount={args.particleCount}
          particleColor={args.particleColor}
          particleOpacity={args.particleOpacity}
          particleSize={args.particleSize}
          particleInteractionRadius={args.particleInteractionRadius}
          opacity={args.particleOverlayOpacity}
        />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <Typography variant="h1" className="mb-4 text-white">
            Combined Backgrounds
          </Typography>
          <Typography variant="large" color="muted" className="mb-4 block">
            Base: {args.baseBackground} + (args.baseBackground === "gradient" ? ` (${args.gradientVariant})` : "") • Particles: {args.particleColor}
          </Typography>
          <Typography variant="small" color="muted">
            Move your mouse to interact with particles
          </Typography>
          <Button className="mt-6">Explore</Button>
        </div>
      </div>
    );
  },
};

