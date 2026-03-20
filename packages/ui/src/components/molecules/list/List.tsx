import * as React from "react";
import { cn } from "../../../lib/utils";
import { Icon } from "../../atoms/icon/Icon";
import { Divider } from "../../atoms/divider";
import { Check } from "lucide-react";

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ className, children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    return (
      <div ref={ref} className={cn("flex flex-col", className)} {...props}>
        {childrenArray.map((child, index) => (
          <React.Fragment key={index}>
            {child}
            {index < childrenArray.length - 1 && <Divider variant="subtle" />}
          </React.Fragment>
        ))}
      </div>
    );
  },
);
List.displayName = "List";

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  children: React.ReactNode;
  interactive?: boolean;
}

const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ className, icon, children, interactive = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-4 px-6 py-5",
        interactive &&
          "transition-all duration-200 hover:bg-berget-brand-cloud/[0.02] cursor-pointer",
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="flex-shrink-0 flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  ),
);
ListItem.displayName = "ListItem";

export interface ListHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ListHeader = React.forwardRef<HTMLDivElement, ListHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("px-6 py-4 text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </div>
  ),
);
ListHeader.displayName = "ListHeader";

export interface FeatureListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: string[];
  variant?: "bullet" | "checkmark";
}

const FeatureList = React.forwardRef<HTMLUListElement, FeatureListProps>(
  ({ items, variant = "bullet", className, ...props }, ref) => {
    return (
      <ul ref={ref} className={cn("flex flex-col gap-3", className)} {...props}>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-p font-p leading-p"
          >
            {variant === "bullet" ? (
              <span className="w-1.5 h-1.5 rounded-full bg-berget-brand-cloud/60 flex-shrink-0 mt-2" />
            ) : (
              <div className="flex-shrink-0 mt-0.5">
                <Icon
                  icon={Check}
                  size={24}
                  className="text-berget-brand-peak"
                />
              </div>
            )}
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    );
  },
);
FeatureList.displayName = "FeatureList";

export { List, ListItem, ListHeader, FeatureList };
