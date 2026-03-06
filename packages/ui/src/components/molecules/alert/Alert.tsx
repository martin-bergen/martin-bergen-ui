import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../../lib/utils'
import {
  Alert as AlertPrimitive,
  AlertTitle,
  AlertDescription,
} from '../../../primitives/alert'

const alertVariants = cva('', {
  variants: {
    variant: {
      default: 'border-[hsl(var(--border))]',
      info: 'border-[hsl(var(--border-info))] bg-[hsl(var(--info))]/10 text-[hsl(var(--info))] [&>svg]:text-[hsl(var(--info))]',
      success:
        'border-[hsl(var(--border-success))] bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] [&>svg]:text-[hsl(var(--success))]',
      warning:
        'border-[hsl(var(--border-warning))] bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))] [&>svg]:text-[hsl(var(--warning))]',
      destructive:
        'border-[hsl(var(--border-destructive))] bg-[hsl(var(--destructive))]/10 text-[hsl(var(--destructive))] [&>svg]:text-[hsl(var(--destructive))]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

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
)
Alert.displayName = 'Alert'

export type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>

export type AlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>

export { Alert, AlertTitle, AlertDescription, alertVariants }
