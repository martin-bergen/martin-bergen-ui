import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../lib/utils"

const selectVariants = cva(
  "flex w-full items-center justify-between rounded-xl border bg-card px-4 py-3 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:border-moss/40 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-cloud/20 hover:bg-cloud/[0.02]",
        primary: "border-moss/50 bg-moss/10 hover:bg-cloud/[0.02]",
        subtle: "border-cloud/10 hover:bg-cloud/[0.02]",
        muted: "border-cloud/5 hover:bg-cloud/[0.02]",
      },
      size: {
        sm: "px-3 py-2 text-xs",
        default: "px-4 py-3 text-sm",
        lg: "px-5 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {
  label?: string
  description?: string
  error?: string
  placeholder?: string
  options: SelectOption[]
  icon?: React.ReactNode
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      variant,
      size,
      label,
      description,
      error,
      placeholder,
      options,
      icon,
      id,
      disabled,
      value,
      ...props
    },
    ref
  ) => {
    const selectId = id || React.useId()
    const errorId = `${selectId}-error`
    const descriptionId = `${selectId}-description`

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={selectId}
            className={cn(
              "text-sm font-medium leading-none",
              disabled
                ? "text-muted-foreground cursor-not-allowed"
                : "text-foreground",
              error && "text-error"
            )}
          >
            {label}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={cn(
              error && errorId,
              description && descriptionId
            )}
            className={cn(
              selectVariants({ variant, size }),
              "appearance-none pr-10",
              error && "border-error/50 bg-error/10",
              disabled && "cursor-not-allowed",
              className
            )}
            value={value}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {icon || (
              <svg
                className={cn(
                  "text-muted-foreground",
                  size === "sm" && "w-4 h-4",
                  size === "default" && "w-5 h-5",
                  size === "lg" && "w-6 h-6"
                )}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            )}
          </div>
        </div>

        {description && (
          <p id={descriptionId} className="text-xs text-muted-foreground">
            {description}
          </p>
        )}

        {error && (
          <p id={errorId} className="text-xs text-error">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select, selectVariants }
