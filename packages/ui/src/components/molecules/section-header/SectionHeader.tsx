import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../../lib/utils'
import { Badge } from '../../atoms/badge'

const sectionHeaderVariants = cva('text-center', {
  variants: {
    alignment: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    size: {
      sm: '[&_h2]:text-2xl [&_h2]:md:text-3xl',
      md: '[&_h2]:text-3xl [&_h2]:md:text-4xl',
      lg: '[&_h2]:text-4xl [&_h2]:md:text-5xl',
    },
  },
  defaultVariants: {
    alignment: 'center',
    size: 'md',
  },
})

export interface SectionHeaderProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionHeaderVariants> {
  title: string
  description?: string
  tagline?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const maxWidthClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-3xl',
  lg: 'max-w-4xl',
  xl: 'max-w-5xl',
  full: 'max-w-full',
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      className,
      alignment,
      size,
      title,
      description,
      tagline,
      maxWidth = 'md',
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          sectionHeaderVariants({ alignment, size }),
          maxWidthClasses[maxWidth],
          (alignment === 'center' || alignment === undefined) && 'mx-auto',
          className,
        )}
        {...props}
      >
        {tagline && (
          <Badge variant="default" className="mb-6 text-sm">
            {tagline}
          </Badge>
        )}

        <h2 className="font-medium mb-6 leading-tight">{title}</h2>

        {description && (
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    )
  },
)
SectionHeader.displayName = 'SectionHeader'

export { SectionHeader, sectionHeaderVariants }
