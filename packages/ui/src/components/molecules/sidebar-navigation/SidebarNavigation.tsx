import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { Sidebar, sidebarVariants } from "../../atoms/sidebar";
import { Stack } from "../../atoms/stack";
import { Divider } from "../../atoms/divider";
import { Badge } from "../../atoms/badge";
import { Icon } from "../../atoms/icon";
import { BergetLogotype } from "../../atoms/berget-logotype";
import { BergetSymbol } from "../../atoms/berget-symbol";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SidebarStyleContextValue = {
  variant: VariantProps<typeof sidebarVariants>["variant"];
  padding: VariantProps<typeof sidebarVariants>["padding"];
  isMinimized?: boolean;
  onToggle?: () => void;
  collapsible?: boolean;
};

const SidebarStyleContext = React.createContext<SidebarStyleContextValue>({
  variant: "highlight",
  padding: "md",
});

const useSidebarContext = () => React.useContext(SidebarStyleContext);

export interface SidebarNavigationProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  children: React.ReactNode;
  isMinimized?: boolean;
  onToggle?: () => void;
  collapsible?: boolean;
}

const SidebarNavigation = React.forwardRef<
  HTMLDivElement,
  SidebarNavigationProps
>(
  (
    {
      className,
      variant = "highlight",
      padding = "md",
      children,
      isMinimized,
      onToggle,
      collapsible = false,
      ...props
    },
    ref,
  ) => {
    const width = isMinimized ? "w-16" : "w-64 sm:w-72 lg:w-80";

    return (
      <SidebarStyleContext.Provider
        value={{ variant, padding, isMinimized, onToggle, collapsible }}
      >
        <Sidebar
          ref={ref}
          variant={variant}
          padding="none"
          className={cn(
            width,
            "transition-all duration-400 ease-out",
            className,
          )}
          {...props}
        >
          <Stack
            direction="column"
            align={isMinimized ? "center" : "stretch"}
            className="h-full"
          >
            {children}
          </Stack>
        </Sidebar>
      </SidebarStyleContext.Provider>
    );
  },
);
SidebarNavigation.displayName = "SidebarNavigation";

export type SidebarHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, ...props }, ref) => {
    const { isMinimized, onToggle, collapsible } = useSidebarContext();

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center py-4 mt-6",
          !isMinimized ? "justify-between px-6" : "justify-end px-4",
          className,
        )}
        {...props}
      >
        {!isMinimized ? (
          <BergetLogotype variant="white" size={48} />
        ) : (
          <div
            onClick={onToggle}
            className="cursor-pointer transition-all duration-200 hover:opacity-80"
          >
            <BergetSymbol variant="white" size={32} />
          </div>
        )}
        {collapsible && !isMinimized && <SidebarToggle />}
      </div>
    );
  },
);
SidebarHeader.displayName = "SidebarHeader";

export type SidebarNavProps = React.HTMLAttributes<HTMLDivElement>;

const SidebarNav = React.forwardRef<HTMLDivElement, SidebarNavProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex-1", className)} {...props} />
  ),
);
SidebarNav.displayName = "SidebarNav";

export type SidebarFooterProps = React.HTMLAttributes<HTMLDivElement>;

const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, ...props }, ref) => {
    const { isMinimized } = useSidebarContext();

    return (
      <div
        ref={ref}
        className={cn("py-4 mt-6", !isMinimized && "px-6", className)}
        {...props}
      />
    );
  },
);
SidebarFooter.displayName = "SidebarFooter";

export type SidebarListItemProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  interactive?: boolean;
};

const SidebarListItem = React.forwardRef<HTMLDivElement, SidebarListItemProps>(
  ({ className, icon, badge, interactive = true, children, ...props }, ref) => {
    const { isMinimized } = useSidebarContext();

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center py-5",
          interactive &&
            "transition-all duration-200 hover:bg-berget-brand-cloud/[0.02] cursor-pointer",
          className,
        )}
        {...props}
      >
        {isMinimized ? (
          <div className="w-full flex items-center justify-center">{icon}</div>
        ) : (
          <div className="flex items-center justify-between flex-1 w-full px-6">
            <div className="flex items-center gap-4">
              {icon && (
                <div className="flex-shrink-0 flex items-center justify-center">
                  {icon}
                </div>
              )}
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                {children}
              </span>
            </div>
            {badge && (
              <Badge variant="tag" status="tagActive" className="ml-3">
                {badge}
              </Badge>
            )}
          </div>
        )}
      </div>
    );
  },
);
SidebarListItem.displayName = "SidebarListItem";

export type SidebarListProps = React.HTMLAttributes<HTMLDivElement>;

const SidebarList = React.forwardRef<HTMLDivElement, SidebarListProps>(
  ({ className, children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    return (
      <div ref={ref} className={cn("flex flex-col", className)} {...props}>
        {childrenArray.map((child, index) => (
          <React.Fragment key={index}>
            {child}
            {index < childrenArray.length - 1 && (
              <Divider variant="subtle" className="w-full" />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  },
);
SidebarList.displayName = "SidebarList";

export type SidebarToggleProps = React.HTMLAttributes<HTMLDivElement>;

const SidebarToggle = React.forwardRef<HTMLDivElement, SidebarToggleProps>(
  ({ className, ...props }, ref) => {
    const { isMinimized, onToggle, collapsible } = useSidebarContext();

    if (!collapsible) return null;

    return (
      <div
        ref={ref}
        onClick={onToggle}
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all duration-200 hover:bg-berget-brand-cloud/10 mr-4",
          className,
        )}
        {...props}
      >
        <Icon icon={isMinimized ? ChevronRight : ChevronLeft} size={16} />
      </div>
    );
  },
);
SidebarToggle.displayName = "SidebarToggle";

export {
  SidebarNavigation,
  SidebarHeader,
  SidebarNav,
  SidebarFooter,
  SidebarList,
  SidebarListItem,
  SidebarToggle,
};
