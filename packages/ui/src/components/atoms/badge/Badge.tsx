import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconComponent = React.ComponentType<any>;

const badgeVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-full font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 focus:ring-opacity-20",
  {
    variants: {
      variant: {
        default: "px-8",
        tag: "px-4",
        semantic: "px-3",
      },
      status: {
        default: "bg-berget-brand-spruce text-berget-warning-foreground",
        active: "bg-berget-brand-spruce text-berget-brand-peak/80",
        tagDefault: "bg-berget-primary text-berget-brand-slate/80",
        tagActive: "bg-berget-brand-slate text-berget-brand-cloud",
        tagGhost: "bg-berget-primary/30 text-berget-brand-slate/60",
        info: "bg-berget-info text-berget-info-foreground",
        success: "bg-berget-success text-berget-success-foreground",
        warning: "bg-berget-warning text-berget-warning-foreground",
        error: "bg-berget-destructive text-berget-destructive-foreground",
      },
      size: {
        sm: "text-xs h-5",
        md: "text-sm h-6",
      },
    },
    defaultVariants: {
      variant: "default",
      status: "default",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: IconComponent;
  iconGap?: number;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      variant,
      status,
      size,
      icon: Icon,
      iconGap = 2,
      children,
      ...props
    },
    ref,
  ) => {
    const iconSize = size === "sm" ? "size-3" : "size-4";

    return (
      <div
        className={cn(badgeVariants({ variant, status, size }), className)}
        ref={ref}
        {...props}
      >
        {Icon && (
          <Icon
            className={iconSize}
            strokeWidth={1.5}
            style={{ marginRight: children ? `${iconGap * 0.25}rem` : "0" }}
          />
        )}
        {children}
      </div>
    );
  },
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
