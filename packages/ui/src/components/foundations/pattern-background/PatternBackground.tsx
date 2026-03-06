import * as React from "react";
import { cn } from "../../../lib/utils";

export interface PatternBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Size of the pattern tiles in pixels @default 48 */
  tileSize?: 32 | 48;
  /** Don't set background color, only show pattern overlay @default false */
  overlayOnly?: boolean;
  /** Opacity of the grid lines (0-1) @default 0.04 */
  lineOpacity?: number;
  /** Opacity of the dots in the pattern (0-1) @default 0.02 */
  dotOpacity?: number;
}

const PatternBackground = React.forwardRef<
  HTMLDivElement,
  PatternBackgroundProps
>(
  (
    {
      children,
      className,
      tileSize = 48,
      overlayOnly = false,
      lineOpacity = 0.04,
      dotOpacity = 0.02,
      ...props
    },
    ref,
  ) => {
    const patterns = {
      32: {
        size: "32px 32px",
        backgroundImage: `
        linear-gradient(rgba(255, 255, 255, ${lineOpacity}) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, ${lineOpacity}) 1px, transparent 1px),
        radial-gradient(circle at 0 0, rgba(255, 255, 255, ${dotOpacity}) 3px, transparent 3px),
        radial-gradient(circle at 32px 32px, rgba(255, 255, 255, ${dotOpacity}) 2px, transparent 2px),
        radial-gradient(circle at 32px 0, rgba(255, 255, 255, ${dotOpacity}) 2px, transparent 2px),
        radial-gradient(circle at 0 32px, rgba(255, 255, 255, ${dotOpacity}) 2px, transparent 2px),
        radial-gradient(circle at 0 0, rgba(255, 255, 255, ${dotOpacity}) 1.5px, transparent 1.5px),
        radial-gradient(circle at 32px 32px, rgba(255, 255, 255, ${dotOpacity}) 1.5px, transparent 1.5px),
        radial-gradient(circle at 0 32px, rgba(255, 255, 255, ${dotOpacity}) 1.5px, transparent 1.5px),
        radial-gradient(circle at 0 0, rgba(255, 255, 255, ${dotOpacity}) 1.5px, transparent 1.5px),
        radial-gradient(circle at 32px 0, rgba(255, 255, 255, ${dotOpacity}) 1.5px, transparent 1.5px)
      `,
      },
      48: {
        size: "48px 48px",
        backgroundImage: `
        linear-gradient(rgba(255, 255, 255, ${lineOpacity}) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, ${lineOpacity}) 1px, transparent 1px),
        radial-gradient(circle at 0 0, rgba(255, 255, 255, ${dotOpacity}) 3px, transparent 3px),
        radial-gradient(circle at 48px 48px, rgba(255, 255, 255, ${dotOpacity}) 2px, transparent 2px),
        radial-gradient(circle at 48px 0, rgba(255, 255, 255, ${dotOpacity}) 2px, transparent 2px),
        radial-gradient(circle at 0 48px, rgba(255, 255, 255, ${dotOpacity}) 2px, transparent 2px),
        radial-gradient(circle at 0 0, rgba(255, 255, 255, ${dotOpacity}) 1.5px, transparent 1.5px),
        radial-gradient(circle at 48px 48px, rgba(255, 255, 255, ${dotOpacity}) 1.5px, transparent 1.5px),
        radial-gradient(circle at 0 48px, rgba(255, 255, 255, ${dotOpacity}) 1.5px, transparent 1.5px),
        radial-gradient(circle at 0 0, rgba(255, 255, 255, ${dotOpacity}) 1.5px, transparent 1.5px),
        radial-gradient(circle at 48px 0, rgba(255, 255, 255, ${dotOpacity}) 1.5px, transparent 1.5px)
      `,
      },
    };

    const pattern = patterns[tileSize];

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          overlayOnly && "absolute inset-0",
          !overlayOnly && "bg-night",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: pattern.backgroundImage,
            backgroundSize: pattern.size,
            backgroundPosition: "0 0",
            opacity: 0.8,
          }}
        />

        {children && <div className="relative z-10">{children}</div>}
      </div>
    );
  },
);
PatternBackground.displayName = "PatternBackground";

export { PatternBackground };
