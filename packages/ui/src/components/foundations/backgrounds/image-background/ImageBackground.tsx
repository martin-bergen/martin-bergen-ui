import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../../../../lib/utils";

export type ImagePosition =
  | "center"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "left-top"
  | "right-top"
  | "left-bottom"
  | "right-bottom";

export type ImageFit = "cover" | "contain" | "fill";

export type OverlayType =
  | "none"
  | "dark"
  | "light"
  | "moss"
  | "lichen"
  | "spruce"
  | "slate"
  | "night";

export interface ImageBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;

  position?: ImagePosition;
  fit?: ImageFit;

  overlay?: OverlayType;
  overlayOpacity?: number;

  imageOpacity?: number;

  loading?: "eager" | "lazy";

  parallax?: boolean;
  parallaxSpeed?: number;

  srcSet?: string;
  sizes?: string;

  fadeIn?: boolean;
  fadeInDuration?: number;

  children?: React.ReactNode;
}

const positionMap: Record<ImagePosition, string> = {
  center: "center",
  top: "center top",
  bottom: "center bottom",
  left: "left center",
  right: "right center",
  "left-top": "left top",
  "right-top": "right top",
  "left-bottom": "left bottom",
  "right-bottom": "right bottom",
};

const overlayColorMap: Record<OverlayType, string> = {
  none: "",
  dark: "hsl(var(--berget-brand-night))",
  light: "hsl(var(--berget-brand-peak))",
  moss: "hsl(var(--berget-brand-moss))",
  lichen: "hsl(var(--berget-brand-lichen))",
  spruce: "hsl(var(--berget-brand-spruce))",
  slate: "hsl(var(--berget-brand-slate))",
  night: "hsl(var(--berget-brand-night))",
};

const overlayOpacityDefaults: Record<OverlayType, number> = {
  none: 0,
  dark: 0.5,
  light: 0.3,
  moss: 0.4,
  lichen: 0.3,
  spruce: 0.4,
  slate: 0.5,
  night: 0.7,
};

const ImageBackground = React.forwardRef<
  HTMLDivElement,
  ImageBackgroundProps
>(
  (
    {
      src,
      alt = "",
      position = "center",
      fit = "cover",
      overlay = "none",
      overlayOpacity,
      imageOpacity = 1,
      loading = "lazy",
      parallax = false,
      parallaxSpeed = 0.5,
      srcSet,
      sizes,
      fadeIn = true,
      fadeInDuration = 600,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

    const containerRef = React.useRef<HTMLDivElement>(null);

    const { scrollY } = useScroll();
    const translateY = useTransform(
      scrollY,
      [0, 500],
      [0, 100 * parallaxSpeed],
      { clamp: false },
    );

    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);

      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const shouldParallax = parallax && !isMobile;

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden isolate", className)}
        {...props}
      >
        <motion.div
          ref={containerRef}
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            willChange: shouldParallax ? "transform" : "auto",
            y: shouldParallax ? translateY : 0,
            height: shouldParallax ? "120%" : "100%",
          }}
        >
          <motion.img
            src={src}
            alt={alt}
            className={cn(
              "w-full h-full",
              fit === "cover" && "object-cover",
              fit === "contain" && "object-contain",
              fit === "fill" && "object-fill",
            )}
            style={{
              objectPosition: positionMap[position],
              opacity: imageOpacity,
            }}
            loading={loading}
            srcSet={srcSet}
            sizes={sizes}
            initial={fadeIn ? { opacity: 0 } : undefined}
            animate={fadeIn ? { opacity: isLoaded ? imageOpacity : 0 } : undefined}
            transition={{
              duration: fadeInDuration / 1000,
              ease: "easeOut",
            }}
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>

        {overlay !== "none" && (
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              background: overlayColorMap[overlay],
              opacity: overlayOpacity ?? overlayOpacityDefaults[overlay],
            }}
          />
        )}

        <div className="relative z-0">{children}</div>
      </div>
    );
  },
);

ImageBackground.displayName = "ImageBackground";

export { ImageBackground };
