import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../../../../lib/utils";

export interface VideoBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  fallbackImageSrc?: string;
  loading?: "eager" | "lazy";
  parallax?: boolean;
  parallaxSpeed?: number;
  children?: React.ReactNode;
}

const VideoBackground = React.forwardRef<HTMLDivElement, VideoBackgroundProps>(
  (
    {
      src,
      fallbackImageSrc,
      loading = "eager",
      parallax = false,
      parallaxSpeed = 0.5,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const [videoError, setVideoError] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

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
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            willChange: shouldParallax ? "transform" : "auto",
            y: shouldParallax ? translateY : 0,
            height: shouldParallax ? "120%" : "100%",
          }}
        >
          {videoError && fallbackImageSrc ? (
            <img
              src={fallbackImageSrc}
              alt=""
              className="w-full h-full object-cover"
              loading={loading}
            />
          ) : (
            <video
              src={src}
              muted
              playsInline
              autoPlay
              loop
              className="w-full h-full object-cover"
              onError={() => setVideoError(true)}
            />
          )}
        </motion.div>

        <div className="relative z-10">{children}</div>
      </div>
    );
  },
);

VideoBackground.displayName = "VideoBackground";

export { VideoBackground };
