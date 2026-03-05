import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../lib/utils"
import {
  Card as CardPrimitive,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../../primitives/card"

const cardVariants = cva(
  "rounded-2xl relative overflow-hidden transition-colors duration-200",
  {
    variants: {
      variant: {
        highlight:
          "bg-slate/20 border-slate/40 hover:border-slate/50 backdrop-blur-[12px]",
        glass:
          "bg-cloud/5 border-cloud/10 hover:border-cloud/15 backdrop-blur-[24px] shadow-xl",
        solid: "bg-slate border-slate/40 hover:border-slate/50",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "highlight",
      padding: "md",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, children, ...props }, ref) => {
    return (
      <CardPrimitive
        ref={ref}
        className={cn(cardVariants({ variant, padding }), className)}
        {...props}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(229,221,213,0.04)_0%,_transparent_50%)] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[radial-gradient(55.66%_112.5%_at_50%_0%,var(--color-cloud)_0%,transparent_90%)] opacity-30 pointer-events-none" />
        <div className="relative z-10 h-full">{children}</div>
      </CardPrimitive>
    )
  }
)
Card.displayName = "Card"

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
}
