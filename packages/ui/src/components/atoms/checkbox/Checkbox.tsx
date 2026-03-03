import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../lib/utils"

const checkboxVariants = cva(
  "inline-flex items-center justify-center rounded-md border transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-cloud/20 bg-cloud/5 hover:bg-cloud/10",
        primary: "border-primary/50 bg-primary/10 hover:bg-primary/20",
        subtle: "border-cloud/10 bg-cloud/5 hover:bg-cloud/10",
        muted: "border-cloud/5 bg-cloud/5 hover:bg-cloud/10",
      },
      size: {
        sm: "w-4 h-4",
        default: "w-5 h-5",
        lg: "w-6 h-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof checkboxVariants> {
  label?: string
  description?: string
  error?: string
  checkedIcon?: React.ReactNode
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      variant,
      size,
      label,
      description,
      error,
      checkedIcon,
      id,
      disabled,
      defaultChecked,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || React.useId()
    const errorId = `${checkboxId}-error`
    const [isChecked, setIsChecked] = React.useState(defaultChecked || false)

    return (
      <div className="flex items-start gap-3">
        <div className="relative flex items-start pt-0.5">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className="peer sr-only"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            {...props}
          />
          <label
            htmlFor={checkboxId}
            className={cn(
              checkboxVariants({ variant, size }),
              isChecked && "border-primary",
              error && "border-red-500/50 bg-red-500/10",
              "cursor-pointer",
              disabled && "cursor-not-allowed pointer-events-none",
              className
            )}
          >
            {checkedIcon ? (
              <span
                className={cn(
                  "transition-opacity",
                  isChecked ? "opacity-100" : "opacity-0"
                )}
              >
                {checkedIcon}
              </span>
            ) : (
              <svg
                className={cn(
                  "transition-opacity",
                  isChecked ? "opacity-100" : "opacity-0",
                  size === "sm" && "w-3 h-3",
                  size === "default" && "w-3.5 h-3.5",
                  size === "lg" && "w-4 h-4",
                  "text-white"
                )}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </label>
        </div>

        {(label || description || error) && (
          <div className="flex flex-col gap-1">
            {label && (
              <label
                htmlFor={checkboxId}
                className={cn(
                  "text-sm font-medium leading-none",
                  disabled
                    ? "text-white/40 cursor-not-allowed"
                    : "text-white cursor-pointer",
                  error && "text-red-400"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-xs text-white/60">{description}</p>
            )}
            {error && (
              <p id={errorId} className="text-xs text-red-400">
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox, checkboxVariants }
