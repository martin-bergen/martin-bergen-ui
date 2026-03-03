import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  actionButton?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, actionButton, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-moss/40 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-cloud/[0.02] transition-colors duration-200",
            icon && "pl-10",
            actionButton && "pr-12",
            className
          )}
          ref={ref}
          {...props}
        />
        {actionButton && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            {actionButton}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
