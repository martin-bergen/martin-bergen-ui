import * as React from "react";
import { cn } from "../../../lib/utils";
import { SectionHeader } from "../../molecules/section-header";
import { HeroBackground } from "../../foundations/hero-background";

export type AnimatedHeroPageProps = React.HTMLAttributes<HTMLDivElement> & {
  mediaType?: "image" | "video" | "gradient";
  mediaSrc?: string;
  fallbackImageSrc?: string;
  gradientVariant?:
    | "fjord-slate"
    | "slate-night"
    | "spruce-fjord"
    | "spruce-slate"
    | "spruce-night"
    | "moss-lichen"
    | "moss-spruce"
    | "lichen-cloud";
  particleCount?: number;
  particleColor?: "moss" | "lichen" | "spruce" | "fjord" | "cloud";
  particleOpacity?: number;
  particleSize?: number;
  particleInteractionRadius?: number;
  showOverlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  tagline?: string;
  title?: string;
  description?: string;
};

const AnimatedHeroPage = React.forwardRef<
  HTMLDivElement,
  AnimatedHeroPageProps
>(
  (
    {
      mediaType = "video",
      mediaSrc = "/hero/videos/freepik_slow-motion-macroshot-of-particles-and-waves-soft-_kling_720p_16-9_24fps_94815.mp4",
      fallbackImageSrc = "/hero/images/freepik__dark-mode-abstract-background-with-grainy-gradient__5239.png",
      gradientVariant = "moss-lichen",
      particleCount = 100,
      particleColor = "cloud",
      particleOpacity = 0.5,
      particleSize = 1.5,
      particleInteractionRadius = 120,
      showOverlay = true,
      overlayColor = "hsl(204 67% 21%)",
      overlayOpacity = 0.4,
      tagline = "Welcome to the Future",
      title = "Animated Hero Experience",
      description = "A beautiful hero section with video background and interactive particles",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <main ref={ref} className={cn("min-h-screen", className)} {...props}>
        <HeroBackground
          mediaType={mediaType}
          mediaSrc={mediaSrc}
          fallbackImageSrc={fallbackImageSrc}
          gradientVariant={gradientVariant}
          particleCount={particleCount}
          particleColor={particleColor}
          particleOpacity={particleOpacity}
          particleSize={particleSize}
          particleInteractionRadius={particleInteractionRadius}
          showOverlay={showOverlay}
          overlayColor={overlayColor}
          overlayOpacity={overlayOpacity}
        >
          <div className="min-h-screen flex items-center justify-center">
            <SectionHeader
              title={title}
              description={description}
              descriptionVariant="h2"
              tagline={tagline}
            />
          </div>
        </HeroBackground>
      </main>
    );
  },
);
AnimatedHeroPage.displayName = "AnimatedHeroPage";

export { AnimatedHeroPage };
