import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../lib/utils"
import { Slot } from "@radix-ui/react-slot"

const gridVariants = cva("grid", {
  variants: {
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
  },
  defaultVariants: {
    align: "stretch",
    justify: "start",
  },
})

export type SpacingScale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 96

export type GridColsScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type GridRowsScale = 1 | 2 | 3 | 4 | 5 | 6

export interface GridProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof gridVariants> {
  children: React.ReactNode
  cols?: GridColsScale
  rows?: GridRowsScale
  gap?: SpacingScale
  gapX?: SpacingScale
  gapY?: SpacingScale
  asChild?: boolean
}

const Grid = React.forwardRef<HTMLElement, GridProps>(
  ({ className, align, justify, cols, rows, gap, gapX, gapY, asChild = false, children, ...props }, ref) => {
    const Component = asChild ? Slot : "div"
    
    return (
      <Component
        ref={ref as any}
        className={cn(
          gridVariants({ align, justify }),
          cols !== undefined && `grid-cols-${cols}`,
          rows !== undefined && `grid-rows-${rows}`,
          gap !== undefined && `gap-${gap}`,
          gapX !== undefined && `gap-x-${gapX}`,
          gapY !== undefined && `gap-y-${gapY}`,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Grid.displayName = "Grid"

export { Grid, gridVariants }