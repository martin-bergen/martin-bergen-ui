import * as React from "react";
import { cn } from "../../../lib/utils";

const gradientStyles: Record<string, string> = {
  "fjord-slate":
    "linear-gradient(to right, hsl(var(--berget-brand-fjord)), hsl(var(--berget-brand-slate)))",
  "slate-night":
    "linear-gradient(to right, hsl(var(--berget-brand-slate)), hsl(var(--berget-brand-night)))",
  "spruce-fjord":
    "linear-gradient(to right, hsl(var(--berget-brand-spruce)), hsl(var(--berget-brand-fjord)))",
  "spruce-slate":
    "linear-gradient(to right, hsl(var(--berget-brand-spruce)), hsl(var(--berget-brand-slate)))",
  "spruce-night":
    "linear-gradient(to right, hsl(var(--berget-brand-spruce)), hsl(var(--berget-brand-night)))",
  "moss-lichen":
    "linear-gradient(to right, hsl(var(--berget-brand-moss)), hsl(var(--berget-brand-lichen)))",
  "moss-spruce":
    "linear-gradient(to right, hsl(var(--berget-brand-moss)), hsl(var(--berget-brand-spruce)))",
  "lichen-cloud":
    "linear-gradient(to right, hsl(var(--berget-brand-lichen)), hsl(var(--berget-brand-cloud)))",
};

export type GradientBackgroundVariant = keyof typeof gradientStyles;

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
      style={{ backgroundImage: gradientStyles[variant] }}
      {...props}
    >
      {children}
    </div>
  );
});
GradientBackground.displayName = "GradientBackground";

export { GradientBackground };
