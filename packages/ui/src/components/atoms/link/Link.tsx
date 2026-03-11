import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const linkVariants = cva(
  "inline-flex items-center gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-opacity-20 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-foreground hover:text-foreground/80",
        primary: "text-berget-secondary hover:text-berget-secondary/80",
        secondary: "text-berget-accent hover:text-berget-accent/80",
        ghost: "text-muted-foreground hover:text-foreground",
        muted: "text-muted-foreground hover:text-muted-foreground/80",
        code: "text-berget-secondary hover:text-berget-secondary/80 font-mono text-sm bg-berget-brand-moss/10 px-2 py-1 rounded hover:bg-berget-brand-moss/20",
      },
      size: {
        sm: "text-sm",
        default: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface LinkProps
  extends
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  children: React.ReactNode;
  external?: boolean;
  icon?: React.ReactNode;
  showExternalIcon?: boolean;
  disabled?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant,
      size,
      external = false,
      icon,
      showExternalIcon = false,
      disabled = false,
      children,
      ...props
    },
    ref,
  ) => {
    const isExternal =
      external ||
      (typeof props.href === "string" &&
        (props.href.startsWith("http://") ||
          props.href.startsWith("https://") ||
          props.href.startsWith("mailto:") ||
          props.href.startsWith("tel:")));

    return (
      <a
        ref={ref}
        className={cn(linkVariants({ variant, size }), className)}
        {...(disabled && {
          "aria-disabled": true,
          onClick: (e: React.MouseEvent) => e.preventDefault(),
        })}
        {...props}
        {...(isExternal &&
          !disabled && {
            rel: "noopener noreferrer",
            target: "_blank",
          })}
      >
        {children}
        {icon && <span className="inline-flex items-center">{icon}</span>}
        {showExternalIcon && isExternal && !disabled && (
          <span
            className="inline-flex items-center ml-1 opacity-60"
            aria-hidden="true"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </span>
        )}
      </a>
    );
  },
);
Link.displayName = "Link";

export { Link, linkVariants };
