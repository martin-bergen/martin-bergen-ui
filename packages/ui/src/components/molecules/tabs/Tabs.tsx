import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import {
  Tabs as TabsBase,
  TabsList as TabsListBase,
  TabsTrigger as TabsTriggerBase,
  TabsContent as TabsContentBase,
} from "../../../primitives/tabs";

const tabListVariants = cva(
  "inline-flex items-center justify-center rounded-xl border bg-berget-brand-cloud/5 p-1 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-berget-brand-cloud/20",
        primary: "border-berget-brand-moss/50 bg-berget-brand-moss/10",
        subtle: "border-berget-brand-cloud/10",
        muted: "border-berget-brand-cloud/5",
      },
      size: {
        sm: "gap-1",
        default: "gap-1",
        lg: "gap-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const tabTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-muted-foreground hover:text-foreground hover:bg-berget-brand-cloud/10 data-[state=active]:text-foreground data-[state=active]:bg-berget-brand-cloud/10",
        primary:
          "text-berget-brand-moss/60 hover:text-berget-brand-moss hover:bg-berget-brand-moss/20 data-[state=active]:text-berget-brand-moss data-[state=active]:bg-berget-brand-moss/20",
        subtle:
          "text-muted-foreground hover:text-foreground hover:bg-berget-brand-cloud/5 data-[state=active]:text-foreground data-[state=active]:bg-berget-brand-cloud/5",
        muted:
          "text-muted-foreground hover:text-foreground/80 hover:bg-berget-brand-cloud/5 data-[state=active]:text-foreground/80 data-[state=active]:bg-berget-brand-cloud/5",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        default: "px-3 py-2 text-sm",
        lg: "px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const tabContentVariants = cva(
  "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {},
    defaultVariants: {},
  },
);

type TabsStyleContextValue = {
  variant: VariantProps<typeof tabListVariants>["variant"];
  size: VariantProps<typeof tabListVariants>["size"];
};

const TabsStyleContext = React.createContext<TabsStyleContextValue>({
  variant: "default",
  size: "default",
});

export interface TabsProps extends React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Root
> {
  variant?: VariantProps<typeof tabListVariants>["variant"];
  size?: VariantProps<typeof tabListVariants>["size"];
  label?: string;
  description?: string;
}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(
  (
    {
      className,
      variant = "default",
      size = "default",
      label,
      description,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <TabsStyleContext.Provider value={{ variant, size }}>
        <TabsBase
          ref={ref}
          className={cn("flex flex-col gap-2", className)}
          {...props}
        >
          {label && (
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-foreground">
                {label}
              </label>
              {description && (
                <p className="text-xs text-muted-foreground">{description}</p>
              )}
            </div>
          )}
          {children}
        </TabsBase>
      </TabsStyleContext.Provider>
    );
  },
);
Tabs.displayName = "Tabs";

export type TabsListProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.List
>;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, ...props }, ref) => {
  const { variant, size } = React.useContext(TabsStyleContext);

  return (
    <TabsListBase
      ref={ref}
      className={cn(tabListVariants({ variant, size }), className)}
      {...props}
    />
  );
});
TabsList.displayName = "TabsList";

export interface TabsTriggerProps extends React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> {
  icon?: React.ReactNode;
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, icon, children, ...props }, ref) => {
  const { variant, size } = React.useContext(TabsStyleContext);

  return (
    <TabsTriggerBase
      ref={ref}
      className={cn(
        tabTriggerVariants({ variant, size }),
        "flex items-center gap-2",
        className,
      )}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </TabsTriggerBase>
  );
});
TabsTrigger.displayName = "TabsTrigger";

export type TabsContentProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Content
>;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsContentBase
    ref={ref}
    className={cn(tabContentVariants(), className)}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabListVariants,
  tabTriggerVariants,
  tabContentVariants,
};
