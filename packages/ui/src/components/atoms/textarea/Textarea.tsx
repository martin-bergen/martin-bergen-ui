import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../lib/utils"
import { Textarea as TextareaPrimitive } from "../../../primitives/textarea"

const textareaVariants = cva(
  "rounded-xl bg-card px-4 py-3 transition-colors duration-200 focus-visible:border-moss/40 focus-visible:ring-0 focus-visible:ring-offset-0 resize-y",
  {
    variants: {
      variant: {
        default: "border-cloud/20 hover:bg-cloud/[0.02]",
        primary: "border-moss/50 bg-moss/10 hover:bg-cloud/[0.02]",
        subtle: "border-cloud/10 hover:bg-cloud/[0.02]",
        muted: "border-cloud/5 hover:bg-cloud/[0.02]",
      },
      size: {
        sm: "px-3 py-2 text-xs min-h-[60px]",
        default: "px-4 py-3 text-sm min-h-[80px]",
        lg: "px-5 py-4 text-base min-h-[120px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string
  description?: string
  error?: string
  placeholder?: string
  maxLength?: number
  showCount?: boolean
  rows?: number
  icon?: React.ReactNode
  secondaryIcon?: React.ReactNode
  actionButton?: React.ReactNode
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant,
      size,
      label,
      description,
      error,
      placeholder,
      maxLength,
      showCount,
      rows,
      id,
      disabled,
      value,
      icon,
      secondaryIcon,
      actionButton,
      ...props
    },
    ref
  ) => {
    const textareaId = id || React.useId()
    const errorId = `${textareaId}-error`
    const descriptionId = `${textareaId}-description`
    const characterCount = typeof value === "string" ? value.length : 0

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={textareaId}
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
          {icon && (
            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              {icon}
            </div>
          )}
          <TextareaPrimitive
            ref={ref}
            id={textareaId}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={cn(
              error && errorId,
              description && descriptionId
            )}
            className={cn(
              textareaVariants({ variant, size }),
              error && "border-error/50 bg-error/10",
              disabled && "cursor-not-allowed",
              icon && "pl-11",
              secondaryIcon && "pr-20",
              actionButton && !secondaryIcon && "pr-12",
              secondaryIcon && actionButton && "pr-20",
              className
            )}
            placeholder={placeholder}
            maxLength={maxLength}
            rows={rows}
            value={value}
            {...props}
          />
          {secondaryIcon && (
            <div className="absolute right-12 top-1/2 -translate-y-1/2">
              {secondaryIcon}
            </div>
          )}
          {actionButton && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              {actionButton}
            </div>
          )}
        </div>

        {(description || error || (showCount && maxLength)) && (
          <div className="flex items-center justify-between gap-2">
            {description && (
              <p id={descriptionId} className="text-xs text-muted-foreground">
                {description}
              </p>
            )}
            {(error || (showCount && maxLength)) && (
              <div className="flex items-center gap-2 ml-auto">
                {showCount && maxLength && (
                  <span
                    className={cn(
                      "text-xs",
                      characterCount >= maxLength
                        ? "text-error"
                        : "text-muted-foreground"
                    )}
                  >
                    {characterCount}/{maxLength}
                  </span>
                )}
                {error && (
                  <p id={errorId} className="text-xs text-error">
                    {error}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }
