import * as React from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "../../../lib/utils";

export interface IconProps extends Omit<LucideProps, "size"> {
  icon: LucideIcon;
  size: 16 | 24 | 32;
  className?: string;
}

const iconStrokeMap: Record<IconProps["size"], number> = {
  16: 1.4,
  24: 1.6,
  32: 1.8,
};

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, size, className, ...props }, ref) => {
    const strokeWidth = iconStrokeMap[size];
    const sizeClass =
      size === 16 ? "w-4 h-4" : size === 24 ? "w-6 h-6" : "w-8 h-8";

    return (
      <IconComponent
        ref={ref}
        className={cn(sizeClass, className)}
        strokeWidth={strokeWidth}
        {...props}
      />
    );
  },
);

Icon.displayName = "Icon";

export { Icon };
