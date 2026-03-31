import * as React from "react";
import { cn } from "../../../../lib/utils";

export type GridSize = "sm" | "md" | "lg";

export interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Size of the pattern tiles @default "lg" */
  size?: GridSize;
  /** Don't set background color, only show pattern overlay @default false */
  overlayOnly?: boolean;
  /** Opacity of the grid lines (0-1) @default 0.1 */
  lineOpacity?: number;
  /** Opacity of the dots (0-1) @default 0.1 */
  dotOpacity?: number;
  /** Color for pattern elements using CSS variable @default "hsl(var(--berget-brand-cloud))" */
  color?: string;
}

const sizeMap = {
  sm: 24,
  md: 34,
  lg: 48,
};

const GridBackground = React.forwardRef<HTMLDivElement, GridBackgroundProps>(
  (
    {
      children,
      className,
      size = "lg",
      overlayOnly = false,
      lineOpacity = 0.1,
      dotOpacity = 0.1,
      color = "hsl(var(--berget-brand-cloud))",
      ...props
    },
    ref,
  ) => {
    const px = sizeMap[size];

    const gridLines = `
      linear-gradient(${color} 1px, transparent 1px),
      linear-gradient(90deg, ${color} 1px, transparent 1px)
    `;

    const dots = `
      radial-gradient(circle at 0 0, ${color} 3px, transparent 3px),
      radial-gradient(circle at ${px}px ${px}px, ${color} 2px, transparent 2px),
      radial-gradient(circle at ${px}px 0, ${color} 2px, transparent 2px),
      radial-gradient(circle at 0 ${px}px, ${color} 2px, transparent 2px),
      radial-gradient(circle at 0 0, ${color} 1.5px, transparent 1.5px),
      radial-gradient(circle at ${px}px ${px}px, ${color} 1.5px, transparent 1.5px),
      radial-gradient(circle at 0 ${px}px, ${color} 1.5px, transparent 1.5px),
      radial-gradient(circle at 0 0, ${color} 1.5px, transparent 1.5px),
      radial-gradient(circle at ${px}px 0, ${color} 1.5px, transparent 1.5px)
    `;

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          overlayOnly && "absolute inset-0",
          !overlayOnly && "bg-berget-brand-night",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: gridLines,
            backgroundSize: `${px}px ${px}px`,
            backgroundPosition: "0 0",
            opacity: lineOpacity,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: dots,
            backgroundSize: `${px}px ${px}px`,
            backgroundPosition: "0 0",
            opacity: dotOpacity,
          }}
        />

        {children && <div className="relative z-10">{children}</div>}
      </div>
    );
  },
);

GridBackground.displayName = "GridBackground";

export { GridBackground };
