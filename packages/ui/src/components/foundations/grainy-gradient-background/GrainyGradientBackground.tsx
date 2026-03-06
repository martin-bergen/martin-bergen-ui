import * as React from "react";
import { cn } from "../../../lib/utils";

export type EllipseColor =
  | "moss"
  | "lichen"
  | "spruce"
  | "fjord"
  | "slate"
  | "cloud";

export type EllipseAnimation = "slow" | "medium" | "fast";

export interface EllipseConfig {
  color: EllipseColor;
  position: { left: string; right: string; top: string; bottom: string };
  transform: string;
  animation: EllipseAnimation;
  opacity?: number;
  size?: number;
}

export interface GrainyGradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Blur amount in pixels @default 130 */
  blur?: number;
  /** Grain overlay opacity (0-1) @default 0.1 */
  grain?: number;
  /** Custom ellipse configuration */
  ellipses?: EllipseConfig[];
}

const defaultEllipses: EllipseConfig[] = [
  {
    color: "moss",
    position: {
      left: "60.11%",
      right: "-33.49%",
      top: "44.65%",
      bottom: "8.81%",
    },
    transform: "matrix(-0.51, 0.86, -0.85, -0.52, 0, 0)",
    animation: "slow",
    opacity: 1,
    size: 100,
  },
  {
    color: "moss",
    position: {
      left: "-2.66%",
      right: "-14.25%",
      top: "10%",
      bottom: "28.42%",
    },
    transform: "matrix(0.99, 0.11, -0.11, 0.99, 0, 0)",
    animation: "medium",
    opacity: 1,
    size: 100,
  },
  {
    color: "moss",
    position: {
      left: "35.22%",
      right: "-16.46%",
      top: "-32.33%",
      bottom: "63.63%",
    },
    transform: "matrix(0.95, 0.3, -0.29, 0.96, 0, 0)",
    animation: "slow",
    opacity: 1,
    size: 100,
  },
  {
    color: "lichen",
    position: {
      left: "-18.17%",
      right: "38.23%",
      top: "47.92%",
      bottom: "5.34%",
    },
    transform: "matrix(0.91, -0.41, 0.4, 0.92, 0, 0)",
    animation: "medium",
    opacity: 0.9,
    size: 100,
  },
  {
    color: "spruce",
    position: {
      left: "-22.84%",
      right: "40.78%",
      top: "-20.62%",
      bottom: "75.33%",
    },
    transform: "matrix(0.97, -0.25, 0.24, 0.97, 0, 0)",
    animation: "fast",
    opacity: 0.7,
    size: 100,
  },
  {
    color: "spruce",
    position: {
      left: "-23.29%",
      right: "67.49%",
      top: "-12.3%",
      bottom: "39.23%",
    },
    transform: "matrix(0.87, -0.49, 0.48, 0.88, 0, 0)",
    animation: "fast",
    opacity: 0.85,
    size: 100,
  },
  {
    color: "fjord",
    position: {
      left: "30%",
      right: "-20%",
      top: "70%",
      bottom: "-10%",
    },
    transform: "matrix(0.85, 0.52, -0.52, 0.85, 0, 0)",
    animation: "slow",
    opacity: 0.8,
    size: 120,
  },
];

const animationClassMap: Record<EllipseAnimation, string> = {
  slow: "animate-float-slow",
  medium: "animate-float-medium",
  fast: "animate-float-fast",
};

const colorClassMap: Record<EllipseColor, string> = {
  moss: "bg-moss",
  lichen: "bg-lichen",
  spruce: "bg-spruce",
  fjord: "bg-fjord",
  slate: "bg-slate",
  cloud: "bg-cloud",
};

const GrainyGradientBackground = React.forwardRef<
  HTMLDivElement,
  GrainyGradientBackgroundProps
>(
  (
    {
      children,
      className,
      blur = 130,
      grain = 0.1,
      ellipses = defaultEllipses,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden bg-night", className)}
        {...props}
      >
        <div
          className="absolute inset-0"
          style={{
            filter: `blur(${blur}px)`,
          }}
        >
          {ellipses.map((ellipse, index) => (
            <div
              key={index}
              className="absolute"
              style={
                {
                  left: ellipse.position.left,
                  right: ellipse.position.right,
                  top: ellipse.position.top,
                  bottom: ellipse.position.bottom,
                  transform: ellipse.transform,
                } as React.CSSProperties
              }
            >
              <div
                className={cn(
                  "absolute inset-0",
                  animationClassMap[ellipse.animation],
                  colorClassMap[ellipse.color],
                )}
                style={
                  {
                    opacity: ellipse.opacity ?? 1,
                    borderRadius: "50%",
                    transform: `scale(${(ellipse.size ?? 100) / 100})`,
                  } as React.CSSProperties
                }
              />
            </div>
          ))}
        </div>

        {grain > 0 && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              opacity: grain,
            }}
          />
        )}

        <div className="relative z-10">{children}</div>
      </div>
    );
  },
);
GrainyGradientBackground.displayName = "GrainyGradientBackground";

export { GrainyGradientBackground };
