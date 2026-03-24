import * as React from "react";
import { cn } from "../../../lib/utils";
import { Input as InputPrimitive } from "../../../primitives/input";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  actionButton?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, actionButton, ...props }, ref) => {
    const inputElement = (
      <InputPrimitive
        ref={ref}
        className={cn(
          "isolate bg-card focus-visible:border-berget-brand-moss/40 focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-berget-brand-cloud/[0.02] transition-colors duration-200 px-3 sm:px-4 py-2 sm:py-2.5 text-sm",
          icon && "pl-10",
          actionButton && "pr-12",
          className,
        )}
        {...props}
      />
    );

    if (!icon && !actionButton) {
      return inputElement;
    }

    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</div>
        )}
        {inputElement}
        {actionButton && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            {actionButton}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
