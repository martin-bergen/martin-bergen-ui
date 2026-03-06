import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const gradientBackgroundVariants = cva(
  "relative min-h-screen overflow-hidden bg-gradient-to-br",
  {
    variants: {
      variant: {
        berget: "from-spruce via-moss to-lichen",
        subtle: "from-night via-slate to-night",
        night: "from-slate via-night to-slate",
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
