import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { Textarea as TextareaPrimitive } from "../../../primitives/textarea";

const textareaVariants = cva(
  "rounded-xl bg-card px-4 py-3 transition-colors duration-200 focus-visible:border-berget-brand-moss/40 focus-visible:ring-0 focus-visible:ring-offset-0 resize-y",
  {
    variants: {
      variant: {
        default:
          "border-berget-brand-cloud/20 hover:bg-berget-brand-cloud/[0.02]",
        primary:
          "border-berget-brand-moss/50 bg-berget-brand-moss/10 hover:bg-berget-brand-cloud/[0.02]",
        subtle:
          "border-berget-brand-cloud/10 hover:bg-berget-brand-cloud/[0.02]",
        muted: "border-berget-brand-cloud/5 hover:bg-berget-brand-cloud/[0.02]",
      },
      size: {
        sm: "px-fluid-sm py-fluid-sm text-xs",
        default: "px-fluid-md py-fluid-md text-sm",
        lg: "px-fluid-lg py-fluid-lg text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface TextareaProps
  extends
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  description?: string;
  error?: string;
  placeholder?: string;
  maxLength?: number;
  showCount?: boolean;
  rows?: number;
  icon?: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  actionButton?: React.ReactNode;
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
    ref,
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const errorId = `${textareaId}-error`;
    const descriptionId = `${textareaId}-description`;
    const characterCount = typeof value === "string" ? value.length : 0;

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              "text-sm  leading-none",
              disabled
                ? "text-muted-foreground cursor-not-allowed"
                : "text-foreground",
              error && "text-berget-destructive-foreground",
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
              description && descriptionId,
            )}
            className={cn(
              textareaVariants({ variant, size }),
              error &&
                "border-berget-destructive-foreground/50 bg-berget-destructive",
              disabled && "cursor-not-allowed",
              icon && "pl-11",
              secondaryIcon && "pr-20",
              actionButton && !secondaryIcon && "pr-12",
              secondaryIcon && actionButton && "pr-20",
              className,
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
                        ? "text-berget-destructive-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {characterCount}/{maxLength}
                  </span>
                )}
                {error && (
                  <p
                    id={errorId}
                    className="text-xs text-berget-destructive-foreground"
                  >
                    {error}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
