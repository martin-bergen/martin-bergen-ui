import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../lib/utils"

const tabListVariants = cva(
  "inline-flex items-center justify-center rounded-xl border bg-cloud/5 p-1 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-cloud/20",
        primary: "border-moss/50 bg-moss/10",
        subtle: "border-cloud/10",
        muted: "border-cloud/5",
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
  }
)

const tabTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-muted-foreground hover:text-foreground hover:bg-cloud/10 data-[state=active]:text-foreground data-[state=active]:bg-cloud/10",
        primary:
          "text-moss/60 hover:text-moss hover:bg-moss/20 data-[state=active]:text-moss data-[state=active]:bg-moss/20",
        subtle:
          "text-muted-foreground hover:text-foreground hover:bg-cloud/5 data-[state=active]:text-foreground data-[state=active]:bg-cloud/5",
        muted:
          "text-muted-foreground hover:text-foreground/80 hover:bg-cloud/5 data-[state=active]:text-foreground/80 data-[state=active]:bg-cloud/5",
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
  }
)

const tabContentVariants = cva(
  "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {},
    defaultVariants: {},
  }
)

type TabsContextValue = {
  value: string
  onValueChange: (value: string) => void
  variant: VariantProps<typeof tabListVariants>["variant"]
  size: VariantProps<typeof tabListVariants>["size"]
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined)

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  variant?: VariantProps<typeof tabListVariants>["variant"]
  size?: VariantProps<typeof tabListVariants>["size"]
  label?: string
  description?: string
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      className,
      defaultValue,
      value: controlledValue,
      onValueChange,
      variant = "default",
      size = "default",
      label,
      description,
      children,
      ...props
    },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(
      defaultValue || ""
    )

    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : uncontrolledValue

    const handleValueChange = (newValue: string) => {
      if (!isControlled) {
        setUncontrolledValue(newValue)
      }
      onValueChange?.(newValue)
    }

    return (
      <TabsContext.Provider
        value={{ value, onValueChange: handleValueChange, variant, size }}
      >
        <div
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
        </div>
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = "Tabs"

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(TabsContext)
    if (!context) throw new Error("TabsList must be used within Tabs")

    return (
      <div
        ref={ref}
        className={cn(
          tabListVariants({ variant: context.variant, size: context.size }),
          className
        )}
        role="tablist"
        {...props}
      />
    )
  }
)
TabsList.displayName = "TabsList"

export interface TabsTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  icon?: React.ReactNode
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, icon, children, disabled, ...props }, ref) => {
    const context = React.useContext(TabsContext)
    if (!context) throw new Error("TabsTrigger must be used within Tabs")

    const isActive = context.value === value

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isActive}
        aria-controls={`tabpanel-${value}`}
        id={`tab-${value}`}
        disabled={disabled}
        data-state={isActive ? "active" : "inactive"}
        onClick={() => context.onValueChange(value)}
        className={cn(
          tabTriggerVariants({
            variant: context.variant,
            size: context.size,
          }),
          "flex items-center gap-2",
          className
        )}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </button>
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

export interface TabsContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = React.useContext(TabsContext)
    if (!context) throw new Error("TabsContent must be used within Tabs")

    const isActive = context.value === value

    if (!isActive) return null

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`tabpanel-${value}`}
        aria-labelledby={`tab-${value}`}
        className={cn(tabContentVariants(), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TabsContent.displayName = "TabsContent"

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabListVariants,
  tabTriggerVariants,
  tabContentVariants,
}
