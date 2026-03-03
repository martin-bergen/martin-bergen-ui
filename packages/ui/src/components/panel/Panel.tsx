import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const panelVariants = cva(
  "rounded-2xl border bg-slate border-slate/40 backdrop-blur-[12px] relative overflow-hidden",
  {
    variants: {
      padding: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
      radius: {
        default: "rounded-2xl",
        lg: "rounded-3xl",
        xl: "rounded-[2rem]",
      },
    },
    defaultVariants: {
      padding: "md",
      radius: "default",
    },
  }
)

export interface PanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof panelVariants> {
  children: React.ReactNode
}

const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ className, padding, radius, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(panelVariants({ padding, radius }), className)}
      {...props}
    >
      {children}
    </div>
  )
)
Panel.displayName = "Panel"

export { Panel, panelVariants }
