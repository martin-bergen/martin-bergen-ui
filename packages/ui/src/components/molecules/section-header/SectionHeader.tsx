import * as React from "react";
import { cn } from "../../../lib/utils";
import { Badge } from "../../atoms/badge";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  tagline?: string;
  action?: React.ReactNode;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, description, tagline, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 text-center",
          className,
        )}
        {...props}
      >
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {tagline && (
            <Badge variant="default" className="text-sm">
              {tagline}
            </Badge>
          )}

          <h1 className="text-[var(--berget-text-h1)] font-[var(--berget-font-h1)] leading-[var(--berget-leading-h1)] tracking-[var(--berget-tracking-h1)]">
            {title}
          </h1>

          {description && (
            <h3 className="text-[var(--berget-text-h3)] font-[var(--berget-font-h3)] leading-[var(--berget-leading-h3)] tracking-[var(--berget-tracking-h3)] text-muted-foreground">
              {description}
            </h3>
          )}

          {action && <div className="mt-4">{action}</div>}
        </div>
      </div>
    );
  },
);
SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
