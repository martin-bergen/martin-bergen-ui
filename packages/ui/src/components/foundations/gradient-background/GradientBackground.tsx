import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const gradientBackgroundVariants = cva(
  "relative min-h-screen overflow-hidden",
  {
    variants: {
      variant: {
        "fjord-slate": "",
        "slate-night": "",
        "spruce-fjord": "",
        "spruce-slate": "",
        "spruce-night": "",
        "moss-lichen": "",
        "moss-spruce": "",
        "lichen-cloud": "",
      },
    },
    defaultVariants: {
      variant: "fjord-slate",
    },
  },
);

export interface GradientBackgroundProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gradientBackgroundVariants> {
  children?: React.ReactNode;
  rotation?: number;
}

const GradientBackground = React.forwardRef<
  HTMLDivElement,
  GradientBackgroundProps
>(({ variant, children, className, rotation = 90, style, ...props }, ref) => {
  const gradients = {
    "fjord-slate": "#0f405a 0%, #1a1a1a 100%",
    "slate-night": "#1a1a1a 0%, #0a0a0a 100%",
    "spruce-fjord": "#2d6a4f 0%, #0f405a 100%",
    "spruce-slate": "#2d6a4f 0%, #1a1a1a 100%",
    "spruce-night": "#2d6a4f 0%, #0a0a0a 100%",
    "moss-lichen": "#52b788 0%, #74c69d 100%",
    "moss-spruce": "#52b788 0%, #2d6a4f 100%",
    "lichen-cloud": "#74c69d 0%, #e5ddd5 100%",
  };

  const backgroundImage = variant
    ? `linear-gradient(${rotation}deg, ${gradients[variant]})`
    : undefined;

  return (
    <div
      ref={ref}
      className={cn(gradientBackgroundVariants({ variant }), className)}
      style={{ backgroundImage, ...style }}
      {...props}
    >
      {children}
    </div>
  );
});
GradientBackground.displayName = "GradientBackground";

export { GradientBackground, gradientBackgroundVariants };
