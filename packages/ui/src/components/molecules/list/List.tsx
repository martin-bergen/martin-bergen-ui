import * as React from 'react'
import { cn } from '../../../lib/utils'

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col', className)} {...props}>
      {children}
    </div>
  ),
)
List.displayName = 'List'

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  children: React.ReactNode
  interactive?: boolean
}

const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ className, icon, children, interactive = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center gap-4 px-6 py-5 border-t border-[hsl(var(--border))]',
        'first:border-t-0',
        interactive &&
          'transition-all duration-200 hover:bg-cloud/[0.02] cursor-pointer',
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
)
ListItem.displayName = 'ListItem'

export interface ListHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const ListHeader = React.forwardRef<HTMLDivElement, ListHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'px-6 py-4 text-sm text-muted-foreground border-b border-[hsl(var(--border))]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
)
ListHeader.displayName = 'ListHeader'

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export interface FeatureListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: string[]
  variant?: 'bullet' | 'checkmark'
}

const FeatureList = React.forwardRef<HTMLUListElement, FeatureListProps>(
  ({ items, variant = 'bullet', className, ...props }, ref) => {
    return (
      <ul ref={ref} className={cn('space-y-3', className)} {...props}>
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            {variant === 'bullet' ? (
              <span className="w-1.5 h-1.5 rounded-full bg-cloud/60 flex-shrink-0 mt-2" />
            ) : (
              <CheckIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-peak" />
            )}
            <span className="text-sm text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    )
  },
)
FeatureList.displayName = 'FeatureList'

export { List, ListItem, ListHeader, FeatureList }
