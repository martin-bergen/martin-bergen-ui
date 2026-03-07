import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../lib/utils"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconComponent = React.ComponentType<any>

const badgeVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-full font-normal transition-colors focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 focus:ring-opacity-20",
  {
    variants: {
      variant: {
        default: "px-8",
        tag: "px-4",
        semantic: "px-3",
      },
      status: {
        default: "bg-spruce text-warning",
        active: "bg-spruce text-peak/80",
        tagDefault: "bg-cloud text-slate/80",
        tagActive: "bg-slate text-cloud",
        tagGhost: "bg-cloud/30 text-slate/60",
        info: "bg-info/20 text-info",
        success: "bg-success/20 text-success",
        warning: "bg-warning/20 text-warning",
        error: "bg-error/20 text-error",
      },
      size: {
        sm: "text-xs h-5",
        md: "text-sm h-6",
      },
      iconGap: {
        none: "gap-0",
        sm: "gap-1",
        md: "gap-2",
      },
    },
    defaultVariants: {
      variant: "default",
      status: "default",
      size: "md",
      iconGap: "md",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: IconComponent
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, status, size, iconGap, icon: Icon, children, ...props }, ref) => {
    const iconSize = size === "sm" ? "size-3" : "size-4"

    return (
      <div
        className={cn(badgeVariants({ variant, status, size, iconGap: children ? iconGap : "none" }), className)}
        ref={ref}
        {...props}
      >
        {Icon && (
          <Icon
            className={iconSize}
            strokeWidth={1.5}
          />
        )}
        {children}
      </div>
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
