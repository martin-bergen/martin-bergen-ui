import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import {
  Checkbox as CheckboxBase,
  CheckboxIndicator,
} from "../../../primitives/checkbox";

const checkboxVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-berget-brand-cloud/20 bg-berget-brand-cloud/5 hover:bg-berget-brand-cloud/10",
        error:
          "border border-berget-destructive-border bg-berget-destructive text-berget-destructive-foreground hover:bg-berget-destructive/90",
        success:
          "border border-berget-success-border bg-berget-success text-berget-success-foreground hover:bg-berget-success/90",
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
  },
);

export interface CheckboxProps
  extends
    Omit<
      React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
      "className"
    >,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  description?: string;
  error?: string;
  checkedIcon?: React.ReactNode;
  className?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
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
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;
    const errorId = `${checkboxId}-error`;

    return (
      <div className="flex items-start gap-3">
        <div className="relative flex items-start pt-0.5">
          <CheckboxBase
            ref={ref}
            id={checkboxId}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={cn(
              checkboxVariants({ variant, size }),
              error &&
                "border border-berget-destructive-border bg-berget-destructive text-berget-destructive-foreground",
              "cursor-pointer",
              disabled && "cursor-not-allowed pointer-events-none",
              className,
            )}
            {...props}
          >
            <CheckboxIndicator>
              {checkedIcon || (
                <svg
                  className={cn(
                    size === "sm" && "w-3 h-3",
                    size === "default" && "w-3.5 h-3.5",
                    size === "lg" && "w-4 h-4",
                  )}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={
                    size === "sm" ? 1.2 : size === "default" ? 1.5 : 1.6
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </CheckboxIndicator>
          </CheckboxBase>
        </div>

        {(label || description || error) && (
          <div className="flex flex-col gap-1">
            {label && (
              <label
                htmlFor={checkboxId}
                className={cn(
                  "text-sm  leading-none",
                  disabled
                    ? "text-white/40 cursor-not-allowed"
                    : variant === "error"
                      ? "text-berget-destructive-foreground cursor-pointer"
                      : variant === "success"
                        ? "text-berget-success-foreground cursor-pointer"
                        : "text-white cursor-pointer",
                  error && "text-berget-destructive-foreground",
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-xs text-white/60">{description}</p>
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
    );
  },
);
Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
