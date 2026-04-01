import * as React from "react";
import { cn } from "../../../../lib/utils";

export type GradientBackgroundVariant =
  | "fjord-slate"
  | "slate-night"
  | "spruce-fjord"
  | "spruce-slate"
  | "spruce-night"
  | "moss-lichen"
  | "moss-spruce"
  | "lichen-cloud";

export interface GradientBackgroundProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "variant"
> {
  variant?: GradientBackgroundVariant;
  rotation?: number;
  children?: React.ReactNode;
}

const gradientColors: Record<GradientBackgroundVariant, [string, string]> = {
  "fjord-slate": ["var(--berget-brand-fjord)", "var(--berget-brand-slate)"],
  "slate-night": ["var(--berget-brand-slate)", "var(--berget-brand-night)"],
  "spruce-fjord": ["var(--berget-brand-spruce)", "var(--berget-brand-fjord)"],
  "spruce-slate": ["var(--berget-brand-spruce)", "var(--berget-brand-slate)"],
  "spruce-night": ["var(--berget-brand-spruce)", "var(--berget-brand-night)"],
  "moss-lichen": ["var(--berget-brand-moss)", "var(--berget-brand-lichen)"],
  "moss-spruce": ["var(--berget-brand-moss)", "var(--berget-brand-spruce)"],
  "lichen-cloud": ["var(--berget-brand-lichen)", "var(--berget-brand-cloud)"],
};

const GradientBackground = React.forwardRef<
  HTMLDivElement,
  GradientBackgroundProps
>(
  (
    { variant = "fjord-slate", rotation = 0, children, className, ...props },
    ref,
  ) => {
    const [color1, color2] = gradientColors[variant];

    return (
      <div
        ref={ref}
        className={cn(
          "relative min-h-screen overflow-hidden isolate",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `linear-gradient(${rotation}deg, hsl(${color1}), hsl(${color2}))`,
          }}
        />
        {children}
      </div>
    );
  },
);
GradientBackground.displayName = "GradientBackground";

export { GradientBackground };
