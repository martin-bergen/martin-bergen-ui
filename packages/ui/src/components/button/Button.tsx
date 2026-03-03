import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl",
        primary:
          "bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 hover:shadow-xl",
        secondary:
          "bg-accent text-accent-foreground shadow hover:bg-accent/80 hover:shadow-lg",
        outline:
          "border-2 border-border bg-transparent hover:bg-accent/20 hover:border-accent",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground",
        destructive:
          "!bg-[#D1392E] !text-white shadow-sm hover:!bg-[#D1392E]/80 hover:shadow",
        link: "text-primary underline-offset-4 hover:underline",
        highlight:
          "relative overflow-hidden bg-[rgba(26,26,26,0.4)] border border-[rgba(26,26,26,0.4)] backdrop-blur-[5px] text-white hover:bg-[rgba(26,26,26,0.8)] hover:border-[rgba(26,26,26,0.6)] hover:shadow-lg",
        stone:
          "!bg-[#E5DDD5] !text-[#1a1a1a] shadow-lg hover:!bg-[#E5DDD5]/90 hover:shadow-xl",
        icon: "!flex !flex-row !justify-center !items-center !p-0 !w-[32px] !h-[32px] !bg-[#E5DDD5] !text-[#1a1a1a] shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] !rounded-[20px]",
      },
      size: {
        default: "h-8 px-8 py-2",
      },
      width: {
        default: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      width: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, width, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const isHighlight = variant === "highlight"

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, width, className }))}
        ref={ref}
        {...props}
      >
        {isHighlight && (
          <>
            <div className="absolute inset-0 top-[1px] h-[calc(100%-1px)] w-full bg-[radial-gradient(100%_100%_at_49.87%_0%,rgba(229,221,213,0.04)_0%,rgba(26,26,26,0)_100%)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-[radial-gradient(55.66%_112.5%_at_50%_0%,#E5DDD5_0%,rgba(229,221,213,0)_92.4%)] opacity-[0.3] pointer-events-none" />
          </>
        )}
        <span className={cn("inline-flex items-center gap-2", isHighlight && "relative z-10")}>
          {children}
        </span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
