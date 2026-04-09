import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Globe } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Icon } from "../../atoms/icon";

export interface LanguageSelectorOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface LanguageSelectorProps {
  options: LanguageSelectorOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

const LanguageSelector = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  LanguageSelectorProps
>(({ className, options, value, onValueChange }, ref) => {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
          // Base styles
          "h-8 w-8 p-0 rounded-full",
          "flex items-center justify-center",
          // Border and background
          "border border-berget-brand-cloud/10",
          "bg-transparent",
          // Hover effect
          "hover:bg-berget-brand-cloud/[0.02]",
          // Transitions
          "transition-all duration-200",
          // Focus styles - remove all focus rings
          "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
          // Disabled state
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
      >
        <Icon icon={Globe} size={16} />
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={cn(
            // Positioning and z-index
            "relative z-50 min-w-[8rem]",
            // Overflow handling
            "overflow-y-auto overflow-x-hidden",
            // Border and background
            "border border-berget-border bg-berget-background",
            "text-berget-foreground",
            // Shadow
            "shadow-berget-lg",
            // Rounded corners
            "rounded-md",
            // Animations
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            // Position-based animations
            "data-[side=bottom]:slide-in-from-top-2",
            "data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2",
            "data-[side=top]:slide-in-from-bottom-2",
            // Origin for transforms
            "origin-[--radix-select-content-transform-origin]",
          )}
          position="popper"
        >
          <SelectPrimitive.Viewport className="p-1">
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                disabled={option.disabled}
                className={cn(
                  // Layout
                  "relative flex w-full cursor-default",
                  "select-none items-center rounded-sm py-2 px-3",
                  // Text
                  "text-sm outline-none",
                  // Focus/hover styles
                  "focus:bg-berget-brand-moss/10 focus:text-berget-foreground",
                  "hover:bg-berget-brand-moss/10",
                  // Disabled state
                  "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                )}
              >
                <SelectPrimitive.ItemText>
                  {option.label}
                </SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
});

LanguageSelector.displayName = "LanguageSelector";

export { LanguageSelector };
