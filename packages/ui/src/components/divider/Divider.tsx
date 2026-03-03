import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const dividerVariants = cva("w-full border-0", {
  variants: {
    orientation: {
      horizontal: "border-t",
      vertical: "h-full border-l",
    },
    variant: {
      default: "border-cloud/10",
      subtle: "border-cloud/5",
      strong: "border-cloud/20",
      primary: "border-moss/50",
      muted: "border-cloud/5",
    },
    size: {
      thin: "border-t",
      medium: "border-t-2",
      thick: "border-t-4",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    variant: "default",
    size: "thin",
  },
})

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  label?: string
  labelPosition?: "center" | "left" | "right"
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      orientation,
      variant,
      size,
      label,
      labelPosition = "center",
      ...props
    },
    ref
  ) => {
    if (label) {
      return (
        <div
          ref={ref}
          className={cn("flex items-center w-full", className)}
          {...props}
        >
          {labelPosition !== "right" && (
            <div
              className={cn(
                dividerVariants({
                  orientation: "horizontal",
                  variant,
                  size,
                }),
                "flex-1"
              )}
            />
          )}
          <span className="px-4 text-sm text-muted-foreground whitespace-nowrap">
            {label}
          </span>
          {labelPosition !== "left" && (
            <div
              className={cn(
                dividerVariants({
                  orientation: "horizontal",
                  variant,
                  size,
                }),
                "flex-1"
              )}
            />
          )}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          dividerVariants({ orientation, variant, size }),
          className
        )}
        {...props}
      />
    )
  }
)
Divider.displayName = "Divider"

export { Divider, dividerVariants }
