import * as React from "react";
import { cn } from "../../../lib/utils";

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
  children?: React.ReactNode;
}

const GradientBackground = React.forwardRef<
  HTMLDivElement,
  GradientBackgroundProps
>(({ variant = "fjord-slate", children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative min-h-screen overflow-hidden", className)}
      style={{ backgroundImage: `var(--bg-image-gradient-${variant})` }}
      {...props}
    >
      {children}
    </div>
  );
});
GradientBackground.displayName = "GradientBackground";

export { GradientBackground };
