import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { Separator } from "../../../primitives/separator";

const dividerVariants = cva("", {
  variants: {
    variant: {
      default: "bg-cloud/10",
      subtle: "bg-cloud/5",
      strong: "bg-cloud/20",
      primary: "bg-moss/50",
      muted: "bg-cloud/5",
    },
    size: {
      thin: "",
      medium: "!h-[2px]",
      thick: "!h-[4px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "thin",
  },
});

export interface DividerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  orientation?: "horizontal" | "vertical";
  label?: string;
  labelPosition?: "center" | "left" | "right";
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      orientation = "horizontal",
      variant,
      size,
      label,
      labelPosition = "center",
      ...props
    },
    ref,
  ) => {
    if (label) {
      return (
        <div
          ref={ref}
          className={cn("flex items-center w-full", className)}
          {...props}
        >
          {labelPosition !== "right" && (
            <Separator
              orientation="horizontal"
              className={cn(dividerVariants({ variant, size }), "flex-1")}
            />
          )}
          <span className="px-4 text-sm text-muted-foreground whitespace-nowrap">
            {label}
          </span>
          {labelPosition !== "left" && (
            <Separator
              orientation="horizontal"
              className={cn(dividerVariants({ variant, size }), "flex-1")}
            />
          )}
        </div>
      );
    }

    return (
      <Separator
        ref={ref as React.Ref<never>}
        orientation={orientation}
        className={cn(
          dividerVariants({ variant, size }),
          orientation === "vertical" && "h-full !w-[1px]",
          className,
        )}
      />
    );
  },
);
Divider.displayName = "Divider";

export { Divider, dividerVariants };
