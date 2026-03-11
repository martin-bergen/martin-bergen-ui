import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import {
  Alert as AlertPrimitive,
  AlertTitle,
  AlertDescription,
} from "../../../primitives/alert";

const alertVariants = cva("", {
  variants: {
    variant: {
      default: "border-berget-border",
      info: "border-berget-info-border bg-berget-info text-berget-info-foreground [&>svg]:text-berget-info-foreground",
      success:
        "border-berget-success-border bg-berget-success text-berget-success-foreground [&>svg]:text-berget-success-foreground",
      warning:
        "border-berget-warning-border bg-berget-warning text-berget-warning-foreground [&>svg]:text-berget-warning-foreground",
      destructive:
        "border-berget-destructive-border bg-berget-destructive text-berget-destructive-foreground [&>svg]:text-berget-destructive-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface AlertProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <AlertPrimitive
      ref={ref}
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  ),
);
Alert.displayName = "Alert";

export type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export type AlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export { Alert, AlertTitle, AlertDescription, alertVariants };
