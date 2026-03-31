import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../../../atoms/typography";
import { ImageBackground } from "./ImageBackground";
import type {
  ImageBackgroundProps,
  ImageFit,
  ImagePosition,
  OverlayType,
} from "./ImageBackground";

const positionOptions: ImagePosition[] = [
  "center",
  "top",
  "bottom",
  "left",
  "right",
  "left-top",
  "right-top",
  "left-bottom",
  "right-bottom",
];

const fitOptions: ImageFit[] = ["cover", "contain", "fill"];

const overlayOptions: OverlayType[] = [
  "none",
  "dark",
  "light",
  "moss",
  "lichen",
  "spruce",
  "slate",
  "night",
];

const BACKGROUND_IMAGES = [
  "hero-abstract-01.png",
  "hero-abstract-02.png",
  "hero-abstract-03.png",
  "hero-abstract-04.png",
  "hero-abstract-05.png",
  "hero-abstract-06.png",
];

const meta = {
  title: "Foundations/ImageBackground",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Image background component with parallax effect, overlay, and fade-in animation. Uses Framer Motion for smooth animations.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Default: StoryObj<ImageBackgroundProps> = {
  name: "Default",
  args: {
    src: `/backgrounds/images/${BACKGROUND_IMAGES[0]}`,
    alt: "Abstract background",
    position: "center",
    fit: "cover",
    overlay: "dark",
    overlayOpacity: 0.5,
    loading: "eager",
    parallax: false,
    fadeIn: true,
    fadeInDuration: 600,
    imageOpacity: 1,
  },
  argTypes: {
    src: {
      control: { type: "select" },
      options: BACKGROUND_IMAGES.map((img) => `/backgrounds/images/${img}`),
      description: "Background image",
    },
    position: {
      control: { type: "select" },
      options: positionOptions,
      description: "Image position",
    },
    fit: {
      control: { type: "select" },
      options: fitOptions,
      description: "Image fit mode",
    },
    overlay: {
      control: { type: "select" },
      options: overlayOptions,
      description: "Overlay color type",
    },
    overlayOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      description: "Overlay opacity (0-1)",
    },
    imageOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      description: "Image opacity (0-1)",
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
    loading: {
      control: { type: "select" },
      options: ["eager", "lazy"],
      description: "Image loading strategy",
    },
  },
  render: (args) => (
    <ImageBackground {...args} className="min-h-screen">
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-2xl">
          <Typography variant="h1" className="mb-4 text-white">
            Image Background
          </Typography>
          <Typography variant="large" color="muted" className="text-white/80">
            Use the controls to change image, position, overlay, and more
          </Typography>
        </div>
      </div>
    </ImageBackground>
  ),
};

export const Parallax: StoryObj<
  ImageBackgroundProps & { parallaxSpeed: number }
> = {
  name: "Parallax",
  args: {
    src: `/backgrounds/images/${BACKGROUND_IMAGES[1]}`,
    position: "center",
    fit: "cover",
    overlay: "dark",
    overlayOpacity: 0.6,
    loading: "eager",
    parallax: true,
    parallaxSpeed: 0.5,
    fadeIn: true,
    fadeInDuration: 600,
    imageOpacity: 1,
  },
  argTypes: {
    parallax: {
      control: { type: "boolean" },
      description: "Enable parallax effect",
    },
    parallaxSpeed: {
      control: { type: "range", min: 0.1, max: 1, step: 0.1 },
      description: "Parallax speed (0.1-1.0)",
      if: { arg: "parallax", eq: true },
    },
    overlay: {
      control: { type: "select" },
      options: overlayOptions,
      description: "Overlay color type",
    },
    overlayOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      description: "Overlay opacity (0-1)",
    },
  },
  render: (args) => (
    <div className="min-h-[200vh]">
      <ImageBackground {...args} className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen px-6">
          <div className="text-center max-w-2xl">
            <Typography variant="h1" className="mb-4 text-white">
              Parallax Effect
            </Typography>
            <Typography variant="large" color="muted" className="text-white/80">
              Scroll down to see parallax in action
              <br />
              Speed: {args.parallaxSpeed}
            </Typography>
          </div>
        </div>
      </ImageBackground>
      <div className="min-h-screen bg-berget-brand-night flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <Typography variant="h1" className="mb-4">
            Section Below
          </Typography>
          <Typography variant="large" color="muted">
            Scroll back up to see parallax again
          </Typography>
        </div>
      </div>
    </div>
  ),
};

export const Examples: StoryObj = {
  name: "Examples",
  render: () => (
    <div>
      <ImageBackground
        src={`/backgrounds/images/${BACKGROUND_IMAGES[2]}`}
        position="center"
        fit="cover"
        overlay="dark"
        overlayOpacity={0.6}
        loading="eager"
        parallax
        parallaxSpeed={0.5}
        className="min-h-screen"
      >
        <div className="flex items-center justify-center min-h-screen px-6">
          <div className="text-center max-w-4xl">
            <Typography variant="h1" className="mb-6 text-white">
              Hero Section with Parallax
            </Typography>
            <Typography
              variant="large"
              color="muted"
              className="text-white/80 mb-8"
            >
              Full-width hero with dark overlay and smooth parallax effect
            </Typography>
          </div>
        </div>
      </ImageBackground>

      <div className="min-h-screen bg-berget-brand-slate/40 flex items-center justify-center px-6">
        <div className="max-w-2xl">
          <Typography variant="h2" className="mb-4">
            Section Header
          </Typography>
          <Typography variant="large" color="muted">
            Clean section header without background
          </Typography>
        </div>
      </div>

      <ImageBackground
        src={`/backgrounds/images/${BACKGROUND_IMAGES[3]}`}
        position="center"
        fit="cover"
        overlay="moss"
        overlayOpacity={0.4}
        loading="lazy"
        className="min-h-screen"
      >
        <div className="flex items-center justify-center min-h-screen px-6">
          <div className="max-w-2xl">
            <Typography variant="h1" className="mb-4">
              Feature Section with Moss Overlay
            </Typography>
            <Typography variant="large" color="muted">
              Subtle moss overlay for branded section backgrounds
            </Typography>
          </div>
        </div>
      </ImageBackground>

      <div className="min-h-screen bg-berget-brand-night flex items-center justify-center px-6">
        <div className="max-w-2xl">
          <Typography variant="h2" className="mb-4">
            Another Section Header
          </Typography>
          <Typography variant="large" color="muted">
            Alternating between backgrounds and solid colors
          </Typography>
        </div>
      </div>

      <ImageBackground
        src={`/backgrounds/images/${BACKGROUND_IMAGES[4]}`}
        position="center"
        fit="cover"
        overlay="lichen"
        overlayOpacity={0.3}
        loading="lazy"
        className="min-h-screen"
      >
        <div className="flex items-center justify-center min-h-screen px-6">
          <div className="max-w-2xl">
            <Typography variant="h1" className="mb-4">
              Feature Section with Lichen Overlay
            </Typography>
            <Typography variant="large" color="muted">
              Lighter lichen overlay for brighter sections
            </Typography>
          </div>
        </div>
      </ImageBackground>

      <div className="min-h-screen bg-berget-brand-slate/40 flex items-center justify-center px-6">
        <div className="max-w-2xl">
          <Typography variant="h2" className="mb-4">
            Final Section Header
          </Typography>
          <Typography variant="large" color="muted">
            Mix and match overlays for different moods
          </Typography>
        </div>
      </div>

      <ImageBackground
        src={`/backgrounds/images/${BACKGROUND_IMAGES[5]}`}
        position="center"
        fit="cover"
        overlay="spruce"
        overlayOpacity={0.5}
        loading="lazy"
        parallax
        parallaxSpeed={0.3}
        className="min-h-screen"
      >
        <div className="flex items-center justify-center min-h-screen px-6">
          <div className="max-w-2xl">
            <Typography variant="h1" className="mb-4 text-white">
              Final Section with Parallax
            </Typography>
            <Typography variant="large" color="muted" className="text-white/80">
              Spruce overlay with subtle parallax effect
            </Typography>
          </div>
        </div>
      </ImageBackground>
    </div>
  ),
};
