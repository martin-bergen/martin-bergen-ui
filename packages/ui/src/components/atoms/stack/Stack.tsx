import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { Slot } from "@radix-ui/react-slot";

const stackVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    wrap: {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
      "wrap-reverse": "flex-wrap-reverse",
    },
  },
  defaultVariants: {
    direction: "column",
    align: "start",
    justify: "start",
    wrap: "nowrap",
  },
});

export type SpacingScale =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80
  | 96;

export interface StackProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof stackVariants> {
  children: React.ReactNode;
  gap?: SpacingScale;
  asChild?: boolean;
}

const Stack = React.forwardRef<HTMLElement, StackProps>(
  (
    {
      className,
      direction,
      align,
      justify,
      wrap,
      gap,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "div";

    return (
      <Component
        ref={ref as React.RefObject<HTMLDivElement>}
        className={cn(
          stackVariants({ direction, align, justify, wrap }),
          gap !== undefined && `gap-${gap}`,
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
Stack.displayName = "Stack";

export { Stack, stackVariants };
