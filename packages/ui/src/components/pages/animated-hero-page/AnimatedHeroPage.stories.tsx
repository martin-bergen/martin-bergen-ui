import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedHeroPage } from ".";

const meta: Meta<typeof AnimatedHeroPage> = {
  title: "Pages/AnimatedHeroPage",
  component: AnimatedHeroPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mediaType: "video",
    mediaSrc:
      "/hero/videos/freepik_slow-motion-macroshot-of-particles-and-waves-soft-_kling_720p_16-9_24fps_94815.mp4",
    fallbackImageSrc:
      "/hero/images/freepik__dark-mode-abstract-background-with-grainy-gradient__5239.png",
    showOverlay: true,
    overlayColor: "hsl(204 67% 21%)",
    overlayOpacity: 0.4,
    tagline: "Welcome to the Future",
    title: "Animated Hero Experience",
    description:
      "A beautiful hero section with video background and interactive particles",
  },
  argTypes: {
    mediaType: {
      control: { type: "select" },
      options: ["image", "video", "gradient"],
    },
    mediaSrc: {
      control: { type: "select" },
      options: [
        "/hero/images/freepik__dark-mode-abstract-background-with-grainy-gradient__5239.png",
        "/hero/images/freepik__generate-9-different-angles-of-this-image-medium-l__5211.png",
        "/hero/images/freepik__muted-grainy-out-of-focus-photo-of-rock-surface-wi__5273.png",
        "/hero/images/freepik__muted-grainy-outoffocus-dark-abstract-backdrop-wit__5283.png",
        "/hero/images/freepik__muted-grainy-outoffocus-dark-abstract-backdrop-wit__5287.png",
        "/hero/images/freepik__muted-grainy-outoffocus-photo-of-a-rock-surface-so__5276.png",
        "/hero/videos/freepik_slow-motion-macroshot-of-particles-and-waves-soft-_kling_720p_16-9_24fps_94815.mp4",
        "/hero/videos/freepik_slow-motion-macroshot-of-particles-and-waves-soft-_kling_720p_16-9_24fps_94815_2.mp4",
      ],
      if: { arg: "mediaType", neq: "gradient" },
    },
    fallbackImageSrc: {
      control: { type: "select" },
      options: [
        "/hero/images/freepik__dark-mode-abstract-background-with-grainy-gradient__5239.png",
        "/hero/images/freepik__generate-9-different-angles-of-this-image-medium-l__5211.png",
        "/hero/images/freepik__muted-grainy-out-of-focus-photo-of-rock-surface-wi__5273.png",
        "/hero/images/freepik__muted-grainy-outoffocus-dark-abstract-backdrop-wit__5283.png",
        "/hero/images/freepik__muted-grainy-outoffocus-dark-abstract-backdrop-wit__5287.png",
        "/hero/images/freepik__muted-grainy-outoffocus-photo-of-a-rock-surface-so__5276.png",
      ],
      if: { arg: "mediaType", eq: "video" },
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
      if: { arg: "mediaType", eq: "gradient" },
    },
    showOverlay: {
      control: { type: "boolean" },
    },
    overlayColor: {
      control: { type: "color" },
      if: { arg: "showOverlay", eq: true },
    },
    overlayOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
    },
    tagline: {
      control: { type: "text" },
    },
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
  },
};

export const WithGradient: Story = {
  name: "With Gradient Background",
  args: {
    mediaType: "gradient",
    gradientVariant: "spruce-fjord",
    showOverlay: false,
    tagline: "Welcome to the Future",
    title: "Animated Hero with Gradient",
    description: "Interactive particles over gradient background",
  },
  argTypes: {
    mediaType: {
      control: { type: "select" },
      options: ["image", "video", "gradient"],
    },
    mediaSrc: {
      control: { type: "select" },
      options: [
        "/hero/images/freepik__dark-mode-abstract-background-with-grainy-gradient__5239.png",
        "/hero/images/freepik__generate-9-different-angles-of-this-image-medium-l__5211.png",
        "/hero/images/freepik__muted-grainy-out-of-focus-photo-of-rock-surface-wi__5273.png",
        "/hero/images/freepik__muted-grainy-outoffocus-dark-abstract-backdrop-wit__5283.png",
        "/hero/images/freepik__muted-grainy-outoffocus-dark-abstract-backdrop-wit__5287.png",
        "/hero/images/freepik__muted-grainy-outoffocus-photo-of-a-rock-surface-so__5276.png",
        "/hero/videos/freepik_slow-motion-macroshot-of-particles-and-waves-soft-_kling_720p_16-9_24fps_94815.mp4",
        "/hero/videos/freepik_slow-motion-macroshot-of-particles-and-waves-soft-_kling_720p_16-9_24fps_94815_2.mp4",
      ],
      if: { arg: "mediaType", neq: "gradient" },
    },
    fallbackImageSrc: {
      control: { type: "select" },
      options: [
        "/hero/images/freepik__dark-mode-abstract-background-with-grainy-gradient__5239.png",
        "/hero/images/freepik__generate-9-different-angles-of-this-image-medium-l__5211.png",
        "/hero/images/freepik__muted-grainy-out-of-focus-photo-of-rock-surface-wi__5273.png",
        "/hero/images/freepik__muted-grainy-outoffocus-dark-abstract-backdrop-wit__5283.png",
        "/hero/images/freepik__muted-grainy-outoffocus-dark-abstract-backdrop-wit__5287.png",
        "/hero/images/freepik__muted-grainy-outoffocus-photo-of-a-rock-surface-so__5276.png",
      ],
      if: { arg: "mediaType", eq: "video" },
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
      if: { arg: "mediaType", eq: "gradient" },
    },
    showOverlay: {
      control: { type: "boolean" },
    },
    overlayColor: {
      control: { type: "color" },
      if: { arg: "showOverlay", eq: true },
    },
    overlayOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
    },
    tagline: {
      control: { type: "text" },
    },
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
  },
};

export const WithImage: Story = {
  name: "With Image Background",
  args: {
    mediaType: "gradient",
    mediaSrc:
      "/hero/images/freepik__dark-mode-abstract-background-with-grainy-gradient__5239.png",
    showOverlay: true,
    tagline: "Welcome to the Future",
    title: "Animated Hero with Gradient",
    description: "Gradient background with overlay",
  },
  argTypes: {
    mediaType: {
      control: { type: "select" },
      options: ["image", "video", "gradient"],
    },
    mediaSrc: {
      control: { type: "select" },
      options: [
        "/hero/images/freepik__dark-mode-abstract-background-with-grainy-gradient__5239.png",
        "/hero/images/freepik__generate-9-different-angles-of-this-image-medium-l__5211.png",
        "/hero/images/freepik__muted-grainy-out-of-focus-photo-of-rock-surface-wi__5273.png",
        "/hero/images/freepik__muted-grainy-outoffocus-dark-abstract-backdrop-wit__5283.png",
        "/hero/images/freepik__muted-grainy-outoffocus-dark-abstract-backdrop-wit__5287.png",
        "/hero/images/freepik__muted-grainy-outoffocus-photo-of-a-rock-surface-so__5276.png",
        "/hero/videos/freepik_slow-motion-macroshot-of-particles-and-waves-soft-_kling_720p_16-9_24fps_94815.mp4",
        "/hero/videos/freepik_slow-motion-macroshot-of-particles-and-waves-soft-_kling_720p_16-9_24fps_94815_2.mp4",
      ],
      if: { arg: "mediaType", neq: "gradient" },
    },
    fallbackImageSrc: {
      control: { type: "select" },
      options: [
        "/hero/images/freepik__dark-mode-abstract-background-with-grainy-gradient__5239.png",
        "/hero/images/freepik__generate-9-different-angles-of-this-image-medium-l__5211.png",
        "/hero/images/freepik__muted-grainy-out-of-focus-photo-of-rock-surface-wi__5273.png",
        "/hero/images/freepik__muted-grainy-outoffocus-dark-abstract-backdrop-wit__5283.png",
        "/hero/images/freepik__muted-grainy-outoffocus-dark-abstract-backdrop-wit__5287.png",
        "/hero/images/freepik__muted-grainy-outoffocus-photo-of-a-rock-surface-so__5276.png",
      ],
      if: { arg: "mediaType", eq: "video" },
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
      if: { arg: "mediaType", eq: "gradient" },
    },
    showOverlay: {
      control: { type: "boolean" },
    },
    overlayColor: {
      control: { type: "color" },
      if: { arg: "showOverlay", eq: true },
    },
    overlayOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
    },
    tagline: {
      control: { type: "text" },
    },
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
  },
};
