import * as React from "react";
import { Globe } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Icon } from "../../atoms/icon";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "../../../primitives/select";

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
  React.ElementRef<typeof SelectTrigger>,
  LanguageSelectorProps
>(({ className, options, value, onValueChange }, ref) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        ref={ref}
        className={cn(
          "h-8 w-8 p-0 rounded-full",
          "border border-berget-brand-cloud/10",
          "bg-transparent hover:bg-berget-brand-cloud/[0.02]",
          "transition-all duration-200",
          // Hide any span children (value text and dropdown arrow)
          "[&>span]:hidden",
          // Remove focus ring completely
          "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
          "flex items-center justify-center",
          className,
        )}
      >
        <div className="flex items-center justify-center w-full h-full">
          <Icon icon={Globe} size={16} />
        </div>
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
    </Select>
  );
});

LanguageSelector.displayName = "LanguageSelector";

export { LanguageSelector };
