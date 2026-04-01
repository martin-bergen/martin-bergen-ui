import * as React from "react";
import { cn } from "../../../lib/utils";
import { SectionHeader } from "../../molecules/section-header";
import { VideoBackground } from "../../foundations/backgrounds/video-background";
import { GradientBackground } from "../../foundations/backgrounds/gradient-background";
import { ParticleBackground } from "../../foundations/backgrounds/particle-background";
import type { ParticleColor } from "../../foundations/backgrounds/particle-background";

export type AnimatedHeroPageProps = React.HTMLAttributes<HTMLDivElement> & {
  mediaType?: "video" | "gradient";
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
  showOverlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  showParticles?: boolean;
  particleCount?: number;
  particleColor?: ParticleColor;
  particleOpacity?: number;
  particleSize?: number;
  particleInteractionRadius?: number;
  particleOverlayOpacity?: number;
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
      showOverlay = true,
      overlayColor = "hsl(204 67% 21%)",
      overlayOpacity = 0.4,
      showParticles = false,
      particleCount = 80,
      particleColor = "cloud",
      particleOpacity = 0.6,
      particleSize = 2,
      particleInteractionRadius = 150,
      particleOverlayOpacity = 1,
      tagline = "Welcome to the Future",
      title = "Animated Hero Experience",
      description = "A beautiful hero section with video background",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <main ref={ref} className={cn("min-h-screen", className)} {...props}>
        {mediaType === "video" ? (
          <VideoBackground
            src={mediaSrc}
            fallbackImageSrc={fallbackImageSrc}
            className="absolute inset-0"
          >
            {showOverlay && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundColor: overlayColor,
                  opacity: overlayOpacity,
                }}
              />
            )}
            {showParticles && (
              <ParticleBackground
                particleCount={particleCount}
                particleColor={particleColor}
                particleOpacity={particleOpacity}
                particleSize={particleSize}
                particleInteractionRadius={particleInteractionRadius}
                opacity={particleOverlayOpacity}
              />
            )}
            <div className="min-h-screen flex items-center justify-center">
              <SectionHeader
                title={title}
                description={description}
                descriptionVariant="h2"
                tagline={tagline}
              />
            </div>
          </VideoBackground>
        ) : (
          <GradientBackground
            variant={gradientVariant}
            className="absolute inset-0"
          >
            {showOverlay && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundColor: overlayColor,
                  opacity: overlayOpacity,
                }}
              />
            )}
            {showParticles && (
              <ParticleBackground
                particleCount={particleCount}
                particleColor={particleColor}
                particleOpacity={particleOpacity}
                particleSize={particleSize}
                particleInteractionRadius={particleInteractionRadius}
                opacity={particleOverlayOpacity}
              />
            )}
            <div className="min-h-screen flex items-center justify-center">
              <SectionHeader
                title={title}
                description={description}
                descriptionVariant="h2"
                tagline={tagline}
              />
            </div>
          </GradientBackground>
        )}
      </main>
    );
  },
);
AnimatedHeroPage.displayName = "AnimatedHeroPage";

export { AnimatedHeroPage };
