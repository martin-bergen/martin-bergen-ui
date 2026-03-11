import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import {
  Select as SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../primitives/select";

const selectVariants = cva(
  "flex w-full items-center justify-between rounded-xl border bg-card px-4 py-3 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:border-berget-brand-moss/40 disabled:cursor-not-allowed disabled:opacity-50",
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
        sm: "px-3 py-2 text-xs",
        default: "px-4 py-3 text-sm",
        lg: "px-5 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends VariantProps<typeof selectVariants> {
  label?: string;
  description?: string;
  error?: string;
  placeholder?: string;
  options: SelectOption[];
  id?: string;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  required?: boolean;
  className?: string;
}

const Select = React.forwardRef<
  React.ElementRef<typeof SelectTrigger>,
  SelectProps
>(
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
      id,
      disabled,
      value,
      defaultValue,
      onValueChange,
      name,
      required,
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const selectId = id || generatedId;
    const errorId = `${selectId}-error`;
    const descriptionId = `${selectId}-description`;

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
              error && "text-berget-destructive-foreground",
            )}
          >
            {label}
          </label>
        )}

        <SelectRoot
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          disabled={disabled}
          name={name}
          required={required}
        >
          <SelectTrigger
            ref={ref}
            id={selectId}
            aria-invalid={!!error}
            aria-describedby={cn(
              error && errorId,
              description && descriptionId,
            )}
            className={cn(
              selectVariants({ variant, size }),
              error &&
                "border-berget-destructive-foreground/50 bg-berget-destructive",
              className,
            )}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>

        {description && (
          <p id={descriptionId} className="text-xs text-muted-foreground">
            {description}
          </p>
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
    );
  },
);
Select.displayName = "Select";

export { Select, selectVariants };
