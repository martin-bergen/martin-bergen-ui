import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../../../../lib/utils";

export type EllipseColor =
  | "berget-brand-moss"
  | "berget-brand-lichen"
  | "berget-brand-spruce"
  | "berget-brand-fjord"
  | "berget-brand-slate"
  | "berget-brand-cloud"
  | "berget-brand-night"
  | "berget-brand-peak";

export interface EllipseConfig {
  color: EllipseColor;
  rotation?: number;
  opacity?: number;
  /** Size in viewport width units (vw). @default 40 */
  sizeX?: number;
  /** Size in viewport height units (vh). @default 40 */
  sizeY?: number;
  duration?: number;
  delay?: number;
  xPath?: string[];
  yPath?: string[];
  left?: number;
  top?: number;
  motionEnabled?: boolean;
}

export interface GrainyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
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
    color: "berget-brand-moss",
    rotation: 0,
    opacity: 1,
    sizeX: 40,
    sizeY: 40,
    duration: 120,
    delay: 0,
    xPath: ["-5vw", "5vw", "-2vw", "3vw", "-5vw"],
    yPath: ["-8vh", "8vh", "10vh", "-6vh", "-8vh"],
    left: 50,
    top: 30,
    motionEnabled: true,
  },
  {
    color: "berget-brand-moss",
    rotation: 45,
    opacity: 1,
    sizeX: 40,
    sizeY: 40,
    duration: 120,
    delay: 24,
    xPath: ["4vw", "-4vw", "5vw", "-2vw", "4vw"],
    yPath: ["-6vh", "8vh", "-4vh", "6vh", "-6vh"],
    left: 20,
    top: 70,
    motionEnabled: true,
  },
  {
    color: "berget-brand-lichen",
    rotation: 90,
    opacity: 1,
    sizeX: 40,
    sizeY: 40,
    duration: 120,
    delay: 48,
    xPath: ["-3vw", "3vw", "-4vw", "2vw", "-3vw"],
    yPath: ["10vh", "-10vh", "-6vh", "8vh", "10vh"],
    left: 80,
    top: 70,
    motionEnabled: true,
  },
  {
    color: "berget-brand-spruce",
    rotation: 135,
    opacity: 1,
    sizeX: 40,
    sizeY: 40,
    duration: 120,
    delay: 72,
    xPath: ["2vw", "-2vw", "3vw", "-4vw", "2vw"],
    yPath: ["-4vh", "4vh", "-10vh", "6vh", "-4vh"],
    left: 30,
    top: 20,
    motionEnabled: true,
  },
  {
    color: "berget-brand-fjord",
    rotation: 180,
    opacity: 1,
    sizeX: 40,
    sizeY: 40,
    duration: 120,
    delay: 96,
    xPath: ["-4vw", "4vw", "-2vw", "3vw", "-4vw"],
    yPath: ["6vh", "-6vh", "8vh", "-10vh", "6vh"],
    left: 70,
    top: 50,
    motionEnabled: true,
  },
];

const colorClassMap: Record<EllipseColor, string> = {
  "berget-brand-moss": "bg-berget-brand-moss",
  "berget-brand-lichen": "bg-berget-brand-lichen",
  "berget-brand-spruce": "bg-berget-brand-spruce",
  "berget-brand-fjord": "bg-berget-brand-fjord",
  "berget-brand-slate": "bg-berget-brand-slate",
  "berget-brand-cloud": "bg-berget-brand-cloud",
  "berget-brand-night": "bg-berget-brand-night",
  "berget-brand-peak": "bg-berget-brand-peak",
};

interface BackgroundEllipseProps {
  ellipse: EllipseConfig;
}

const BackgroundEllipse = React.memo<BackgroundEllipseProps>(({ ellipse }) => {
  const prefersReducedMotion = useReducedMotion();
  const isEnabled = ellipse.motionEnabled !== false && !prefersReducedMotion;

  const rotation = ellipse.rotation ?? 0;
  const sizeX = ellipse.sizeX ?? 25;
  const sizeY = ellipse.sizeY ?? 25;

  return (
    <div
      className="absolute -z-10 pointer-events-none"
      style={{
        left: `${ellipse.left ?? 50}%`,
        top: `${ellipse.top ?? 50}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    >
      <div
        style={
          {
            "--ellipse-size-x": sizeX,
            "--ellipse-size-y": sizeY,
            width: "calc(var(--ellipse-size-x, 25) * 1vw)",
            height: "calc(var(--ellipse-size-y, 25) * 1vh)",
          } as React.CSSProperties
        }
      >
        {isEnabled ? (
          <motion.div
            className={cn("absolute inset-0", colorClassMap[ellipse.color])}
            initial={{ x: "0%", y: "0%" }}
            animate={{
              x: ellipse.xPath || ["-10vw", "10vw", "-10vw"],
              y: ellipse.yPath || ["-8vh", "8vh", "-8vh"],
            }}
            transition={{
              type: "tween",
              duration: ellipse.duration || 120,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: ellipse.delay || 0,
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
            style={{
              opacity: ellipse.opacity ?? 1,
              borderRadius: "50%",
              transformOrigin: "center center",
            }}
          />
        ) : (
          <div
            className={cn("absolute inset-0", colorClassMap[ellipse.color])}
            style={{
              opacity: ellipse.opacity ?? 1,
              borderRadius: "50%",
            }}
          />
        )}
      </div>
    </div>
  );
});

BackgroundEllipse.displayName = "BackgroundEllipse";

const GrainyBackground = React.forwardRef<
  HTMLDivElement,
  GrainyBackgroundProps
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
        className={cn(
          "relative overflow-hidden bg-berget-brand-night isolate",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={
            {
              filter: `blur(${blur}px)`,
              "--blur-amount": `${blur}px`,
            } as React.CSSProperties
          }
        >
          {ellipses.map((ellipse, index) => (
            <BackgroundEllipse key={index} ellipse={ellipse} />
          ))}
        </div>

        {grain > 0 && (
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
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
GrainyBackground.displayName = "GrainyBackground";

export { GrainyBackground };
