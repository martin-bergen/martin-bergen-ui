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
        className={cn("w-full px-fluid-md py-fluid-xl text-center", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-fluid-lg">
          {tagline && (
            <Badge variant="default" className="text-sm">
              {tagline}
            </Badge>
          )}

          <h1 className="text-h1 font-h1 leading-h1 tracking-h1">{title}</h1>

          {description && (
            <h3 className="text-h3 font-h3 leading-h3 tracking-h3 text-muted-foreground">
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
