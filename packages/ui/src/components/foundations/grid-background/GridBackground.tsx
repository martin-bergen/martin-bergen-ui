import * as React from "react";
import { cn } from "../../../lib/utils";

export interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Grid size in pixels @default 24 */
  gridSize?: number;
  /** Grid line opacity (0-1) @default 0.02 */
  opacity?: number;
  /** Grid line color in RGB format @default "229, 221, 213" (Cloud) */
  color?: string;
  children?: React.ReactNode;
}

const GridBackground = React.forwardRef<HTMLDivElement, GridBackgroundProps>(
  (
    {
      gridSize = 24,
      opacity = 0.02,
      color = "229, 221, 213",
      children,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("relative min-h-screen bg-night", className)}
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(${color}, ${opacity}) 1px, transparent 1px),
            linear-gradient(to right, rgba(${color}, ${opacity}) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
);
GridBackground.displayName = "GridBackground";

export { GridBackground };
