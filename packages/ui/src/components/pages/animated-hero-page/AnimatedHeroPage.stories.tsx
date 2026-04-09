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
type Story = StoryObj<typeof AnimatedHeroPage>;

export const Default: Story = {
  args: {
    backgroundType: "video",
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
};

export const WithGradient: Story = {
  name: "With Gradient Background",
  args: {
    backgroundType: "gradient",
    gradientVariant: "spruce-fjord",
    showOverlay: false,
    tagline: "Welcome to the Future",
    title: "Animated Hero with Gradient",
    description: "Interactive particles over gradient background",
  },
};

export const WithImage: Story = {
  name: "With Image Background",
  args: {
    backgroundType: "image",
    mediaSrc:
      "/hero/images/freepik__dark-mode-abstract-background-with-grainy-gradient__5239.png",
    showOverlay: true,
    tagline: "Welcome to the Future",
    title: "Animated Hero with Image",
    description: "Image background with overlay",
  },
};

export const WithGrid: Story = {
  name: "With Grid Background",
  args: {
    backgroundType: "grid",
    showOverlay: true,
    overlayColor: "hsl(204 67% 21%)",
    overlayOpacity: 0.4,
    tagline: "Welcome to the Future",
    title: "Animated Hero with Grid",
    description: "Grid pattern with particles overlay",
  },
};

export const WithNetwork: Story = {
  name: "With Network Background",
  args: {
    backgroundType: "network",
    showOverlay: true,
    overlayColor: "hsl(204 67% 21%)",
    overlayOpacity: 0.4,
    tagline: "Welcome to the Future",
    title: "Animated Hero with Network",
    description: "Network pattern with particles overlay",
  },
};
