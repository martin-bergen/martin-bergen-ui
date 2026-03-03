import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default:
          "bg-background text-foreground border-[hsl(var(--border))]",
        info: "border-[hsl(var(--border-info))] bg-[hsl(var(--info))]/10 text-[hsl(var(--info))] [&>svg]:text-[hsl(var(--info))]",
        success:
          "border-[hsl(var(--border-success))] bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] [&>svg]:text-[hsl(var(--success))]",
        warning:
          "border-[hsl(var(--border-warning))] bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))] [&>svg]:text-[hsl(var(--warning))]",
        destructive:
          "border-[hsl(var(--border-destructive))] bg-[hsl(var(--destructive))]/10 text-[hsl(var(--destructive))] [&>svg]:text-[hsl(var(--destructive))]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
)
Alert.displayName = "Alert"

export interface AlertTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn(
        "mb-1 font-medium leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
)
AlertTitle.displayName = "AlertTitle"

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription, alertVariants }
