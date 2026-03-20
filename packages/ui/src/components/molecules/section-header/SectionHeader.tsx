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

          <h1 className="text-h1-mobile md:text-h1-tablet lg:text-h1 font-h1-mobile md:font-h1-tablet lg:font-h1 leading-h1-mobile md:leading-h1-tablet lg:leading-h1 tracking-h1-mobile md:tracking-h1-tablet lg:tracking-h1">
            {title}
          </h1>

          {description && (
            <h3 className="text-h3-mobile md:text-h3-tablet lg:text-h3 font-h3-mobile md:font-h3-tablet lg:font-h3 leading-h3-mobile md:leading-h3-tablet lg:leading-h3 tracking-h3-mobile md:tracking-h3-tablet lg:tracking-h3 text-muted-foreground">
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
