import * as React from "react";
import { cn } from "../../../lib/utils";
import { Badge } from "../../atoms/badge";
import { Typography } from "../../atoms/typography";

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

          <Typography variant="h2">{title}</Typography>

          {description && (
            <Typography variant="h3" color="muted">
              {description}
            </Typography>
          )}

          {action && <div className="mt-4">{action}</div>}
        </div>
      </div>
    );
  },
);
SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
