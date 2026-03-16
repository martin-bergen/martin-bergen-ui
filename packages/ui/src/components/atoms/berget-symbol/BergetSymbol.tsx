import * as React from "react";
import { cn } from "../../../lib/utils";

export interface BergetSymbolProps extends React.SVGAttributes<SVGSVGElement> {
  /** Size (height) of the symbol in pixels */
  size?: number;
  /** Color variant */
  variant?: "white" | "black";
}

const BergetSymbol = React.forwardRef<SVGSVGElement, BergetSymbolProps>(
  ({ size = 48, variant = "white", className, ...props }, ref) => {
    const aspectRatio = 463 / 419;
    const width = size * aspectRatio;
    const height = size;
    const fillColor =
      variant === "white" ? "hsl(var(--berget-brand-peak))" : "#000000";

    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox="0 0 463 419"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("inline-block", className)}
        {...props}
      >
        <path
          d="M208.739 17L255.261 17L446 403L398 403L313.5 255L261.5 176L233.163 96.1677L237.815 98.6522H226.185L230.837 96.1677L113 331L64.5 403L18 403L208.739 17Z"
          fill={fillColor}
        />
      </svg>
    );
  },
);
BergetSymbol.displayName = "BergetSymbol";

export { BergetSymbol };
