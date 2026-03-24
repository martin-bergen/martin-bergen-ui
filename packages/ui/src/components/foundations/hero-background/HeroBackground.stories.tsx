import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import { HeroBackground } from ".";
import type {
  HeroBackgroundProps,
  MediaType,
  ParticleColor,
  GradientBackgroundVariant,
} from ".";
import { SectionHeader } from "../../molecules/section-header";

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const HERO_IMAGES = [
  "freepik__dark-mode-abstract-background-with-grainy-gradient__5239.png",
  "freepik__generate-9-different-angles-of-this-image-medium-l__5211.png",
  "freepik__muted-grainy-out-of-focus-photo-of-rock-surface-wi__5273.png",
  "freepik__muted-grainy-outoffocus-dark-abstract-backdrop-wit__5283.png",
  "freepik__muted-grainy-outoffocus-dark-abstract-backdrop-wit__5287.png",
  "freepik__muted-grainy-outoffocus-photo-of-a-rock-surface-so__5276.png",
];

const HERO_VIDEOS = [
  "freepik_slow-motion-macroshot-of-particles-and-waves-soft-_kling_720p_16-9_24fps_94815.mp4",
  "freepik_slow-motion-macroshot-of-particles-and-waves-soft-_kling_720p_16-9_24fps_94815_2.mp4",
];

const meta = {
  title: "Foundations/HeroBackground",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Layered hero background with media (image/video/gradient), interactive particles, gradient overlay, and content slot. Features proportional particle repositioning on resize and video fallback.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<HeroBackgroundProps>;

export default meta;

export const WithImage: StoryObj<HeroBackgroundProps> = {
  args: {
    mediaType: "image",
    mediaSrc: `/hero/images/${HERO_IMAGES[0]}`,
    particleCount: 80,
    particleColor: "moss",
    particleOpacity: 0.6,
    particleSize: 2,
    particleInteractionRadius: 150,
    showOverlay: true,
    overlayColor: "hsl(0 0% 0%)",
    overlayOpacity: 0.3,
  },
  argTypes: {
    mediaType: {
      control: { type: "select" },
      options: ["image", "video", "gradient"] as MediaType[],
    },
    mediaSrc: {
      control: { type: "select" },
      options: HERO_IMAGES.map((img) => `/hero/images/${img}`),
      if: { arg: "mediaType", eq: "image" },
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
      ] as GradientBackgroundVariant[],
      if: { arg: "mediaType", eq: "gradient" },
    },
    particleCount: {
      control: { type: "range", min: 10, max: 200, step: 1 },
      description: "Debounced (300ms) to prevent main thread blocking",
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
    },
    particleOpacity: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
    particleSize: { control: { type: "range", min: 1, max: 10, step: 0.5 } },
    particleInteractionRadius: {
      control: { type: "range", min: 50, max: 300, step: 10 },
    },
    showOverlay: { control: { type: "boolean" } },
    overlayColor: {
      control: { type: "color" },
      if: { arg: "showOverlay", eq: true },
    },
    overlayOpacity: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
  },
  render: (args) => {
    const debouncedParticleCount = useDebounce(args.particleCount || 80, 300);

    return (
      <HeroBackground {...args} particleCount={debouncedParticleCount}>
        <div className="min-h-screen flex items-center justify-center">
          <SectionHeader
            title="Hero Background with Image"
            description="Interactive particles with gradient overlay"
            tagline={`Local Image Media (${HERO_IMAGES.length} images)`}
          />
        </div>
      </HeroBackground>
    );
  },
};

export const WithVideo: StoryObj<HeroBackgroundProps> = {
  args: {
    mediaType: "video",
    mediaSrc:
      "/hero/videos/freepik_slow-motion-macroshot-of-particles-and-waves-soft-_kling_720p_16-9_24fps_94815_2.mp4",
    fallbackImageSrc: `/hero/images/${HERO_IMAGES[0]}`,
    particleCount: 100,
    particleColor: "lichen",
    particleOpacity: 0.5,
    particleSize: 2,
    particleInteractionRadius: 150,
    showOverlay: false,
    overlayColor: "hsl(204 67% 21%)",
    overlayOpacity: 0.4,
  },
  argTypes: {
    mediaType: {
      control: { type: "select" },
      options: ["image", "video", "gradient"] as MediaType[],
    },
    mediaSrc: {
      control: { type: "select" },
      options: HERO_VIDEOS.map((video) => `/hero/videos/${video}`),
      if: { arg: "mediaType", eq: "video" },
    },
    fallbackImageSrc: {
      control: { type: "select" },
      options: HERO_IMAGES.map((img) => `/hero/images/${img}`),
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
      ] as GradientBackgroundVariant[],
      if: { arg: "mediaType", eq: "gradient" },
    },
    particleCount: {
      control: { type: "range", min: 10, max: 200, step: 1 },
      description: "Debounced (300ms) to prevent main thread blocking",
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
    },
    particleOpacity: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
    particleSize: { control: { type: "range", min: 1, max: 10, step: 0.5 } },
    particleInteractionRadius: {
      control: { type: "range", min: 50, max: 300, step: 10 },
    },
    showOverlay: { control: { type: "boolean" } },
    overlayColor: {
      control: { type: "color" },
      if: { arg: "showOverlay", eq: true },
    },
    overlayOpacity: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
  },
  render: (args) => {
    const debouncedParticleCount = useDebounce(args.particleCount || 100, 300);

    return (
      <HeroBackground {...args} particleCount={debouncedParticleCount}>
        <div className="min-h-screen flex items-center justify-center">
          <SectionHeader
            title="Hero Background with Video"
            description="Video with particle overlay and fallback"
            tagline={`Local Video Media (${HERO_VIDEOS.length} videos)`}
          />
        </div>
      </HeroBackground>
    );
  },
};

export const WithGradient: StoryObj<HeroBackgroundProps> = {
  args: {
    mediaType: "gradient",
    gradientVariant: "spruce-fjord",
    particleCount: 80,
    particleColor: "moss",
    particleOpacity: 0.7,
    particleSize: 2.5,
    particleInteractionRadius: 150,
    showOverlay: false,
    overlayColor: "hsl(0 0% 0%)",
    overlayOpacity: 0.2,
  },
  argTypes: {
    mediaType: {
      control: { type: "select" },
      options: ["image", "video", "gradient"] as MediaType[],
    },
    mediaSrc: {
      control: { type: "select" },
      options: HERO_IMAGES.map((img) => `/hero/images/${img}`),
      if: { arg: "mediaType", eq: "image" },
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
      ] as GradientBackgroundVariant[],
      if: { arg: "mediaType", eq: "gradient" },
    },
    particleCount: {
      control: { type: "range", min: 10, max: 200, step: 1 },
      description: "Debounced (300ms) to prevent main thread blocking",
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
    },
    particleOpacity: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
    particleSize: { control: { type: "range", min: 1, max: 10, step: 0.5 } },
    particleInteractionRadius: {
      control: { type: "range", min: 50, max: 300, step: 10 },
    },
    showOverlay: { control: { type: "boolean" } },
    overlayColor: {
      control: { type: "color" },
      if: { arg: "showOverlay", eq: true },
    },
    overlayOpacity: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
  },
  render: (args) => {
    const debouncedParticleCount = useDebounce(args.particleCount || 80, 300);

    return (
      <HeroBackground {...args} particleCount={debouncedParticleCount}>
        <div className="min-h-screen flex items-center justify-center">
          <SectionHeader
            title="Hero Background with Gradient"
            description="Interactive particles over gradient background"
            tagline="Gradient Media"
          />
        </div>
      </HeroBackground>
    );
  },
};

export const MultipleLocalImages: StoryObj<HeroBackgroundProps> = {
  name: "Multiple Local Images",
  render: () => {
    const [currentImage, setCurrentImage] = useState(0);
    const debouncedParticleCount = useDebounce(80, 300);

    const images = HERO_IMAGES.map((filename) => ({
      src: `/hero/images/${filename}`,
      title: filename
        .replace(/\.[^/.]+$/, "")
        .replace(/_/g, " ")
        .replace(/-/g, " "),
      description: "Local hero image",
    }));

    return (
      <div>
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentImage === index
                  ? "bg-berget-brand-moss text-white shadow-lg"
                  : "bg-berget-brand-slate/50 text-white/80 hover:bg-berget-brand-slate/70"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <HeroBackground
          mediaType="image"
          mediaSrc={
            images[currentImage]?.src || `/hero/images/${HERO_IMAGES[0]}`
          }
          particleCount={debouncedParticleCount}
          particleColor="moss"
          showOverlay={true}
          overlayOpacity={0.2}
        >
          <div className="min-h-screen flex items-center justify-center">
            <SectionHeader
              title={images[currentImage]?.title || "Hero Background"}
              description={
                images[currentImage]?.description || "Interactive particles"
              }
              tagline={`Image ${currentImage + 1} of ${images.length}`}
            />
          </div>
        </HeroBackground>
      </div>
    );
  },
};

export const LocalImageGallery: StoryObj<HeroBackgroundProps> = {
  name: "Local Image Gallery",
  parameters: {
    docs: {
      description: {
        component:
          "Grid view of all available local hero images for quick preview and selection",
      },
    },
  },
  render: () => {
    const images = HERO_IMAGES.map((filename) => ({
      src: `/hero/images/${filename}`,
      title: filename
        .replace(/\.[^/.]+$/, "")
        .replace(/_/g, " ")
        .replace(/-/g, " "),
      description: "Local hero image",
    }));

    return (
      <div className="min-h-screen bg-berget-brand-night p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Local Hero Image Gallery
            </h1>
            <p className="text-white/60">
              All available local hero background images ({images.length}{" "}
              images)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group rounded-2xl overflow-hidden aspect-video cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-berget-brand-slate/20 rounded-xl">
            <h2 className="text-xl font-bold text-white mb-4">Usage</h2>
            <pre className="bg-berget-brand-night/50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-berget-brand-cloud">
                {`<HeroBackground
  mediaType="image"
  mediaSrc="${images[0]?.src}"
  particleCount={80}
  particleColor="moss"
>
  <SectionHeader
    title="${images[0]?.title}"
    description="${images[0]?.description}"
    tagline="Local Media"
  />
</HeroBackground>`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  },
};

export const ImageLoadingTest: StoryObj<HeroBackgroundProps> = {
  name: "Image Loading Test",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div className="min-h-screen bg-berget-brand-night p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          Image Loading Test
        </h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Test 1: Direct Image
            </h2>
            <img
              src="/hero/images/freepik__dark-mode-abstract-background-with-grainy-gradient__5239.png"
              alt="Test Image"
              className="w-full max-w-2xl rounded-lg border-2 border-white/20"
            />
            <p className="text-white/60 mt-2 text-sm">
              /hero/images/freepik__dark-mode-abstract-background-with-grainy-gradient__5239.png
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Test 2: All Images
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {HERO_IMAGES.map((filename, index) => (
                <div key={index}>
                  <p className="text-white/60 mb-2 text-xs">{filename}</p>
                  <img
                    src={`/hero/images/${filename}`}
                    alt={filename}
                    className="w-full rounded-lg border border-white/20"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Test 3: All Videos
            </h2>
            <div className="space-y-4">
              {HERO_VIDEOS.map((filename, index) => (
                <div key={index}>
                  <p className="text-white/60 mb-2 text-xs">{filename}</p>
                  <video
                    src={`/hero/videos/${filename}`}
                    controls
                    className="w-full max-w-2xl rounded-lg border-2 border-white/20"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Test 4: HeroBackground Component
            </h2>
            <HeroBackground
              mediaType="image"
              mediaSrc="/hero/images/freepik__dark-mode-abstract-background-with-grainy-gradient__5239.png"
              particleCount={50}
              particleColor="moss"
              showOverlay={false}
            >
              <div className="min-h-[50vh] flex items-center justify-center">
                <p className="text-white text-2xl">HeroBackground Test</p>
              </div>
            </HeroBackground>
          </div>
        </div>
      </div>
    </div>
  ),
};
