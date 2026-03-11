import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const gradientBackgroundVariants = cva(
  "relative min-h-screen overflow-hidden bg-gradient-to-br",
  {
    variants: {
      variant: {
        berget:
          "from-berget-brand-spruce via-berget-brand-moss to-berget-brand-lichen",
        subtle:
          "from-berget-brand-night via-berget-brand-slate to-berget-brand-night",
        night:
          "from-berget-brand-slate via-berget-brand-night to-berget-brand-slate",
      },
    },
    defaultVariants: {
      variant: "berget",
    },
  },
);

export interface GradientBackgroundProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gradientBackgroundVariants> {
  children?: React.ReactNode;
}

const GradientBackground = React.forwardRef<
  HTMLDivElement,
  GradientBackgroundProps
>(({ variant, children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(gradientBackgroundVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  );
});
GradientBackground.displayName = "GradientBackground";

export { GradientBackground, gradientBackgroundVariants };
