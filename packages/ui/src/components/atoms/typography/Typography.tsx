import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      // Fluid heading scale — use @theme tokens (clamp-based, 390px → 1440px)
      h1: "text-h1 font-h1 leading-h1 tracking-h1",
      h2: "text-h2 font-h2 leading-h2 tracking-h2",
      h3: "text-h3 font-h3 leading-h3 tracking-h3",
      h4: "text-h4 font-h4 leading-h4 tracking-h4",
      // Static sans-serif sub-heading (no fluid token exists for this size)
      h5: "text-xl font-sans",
      // Body and UI text — use @theme tokens where available
      large: "text-lg font-sans",
      body: "text-p font-p leading-p",
      small: "text-sm font-sans",
      xs: "text-xs font-sans",
      // Monospaced — use @theme token
      mono: "text-mono font-mono leading-mono",
      // Inline code / spec labels
      code: "text-xs font-mono",
    },
    color: {
      default: "text-berget-foreground",
      muted: "text-berget-muted-foreground",
      dim: "text-berget-foreground/50",
    },
  },
  defaultVariants: {
    variant: "body",
    color: "default",
  },
});

const defaultElementMap: Record<string, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  large: "p",
  body: "p",
  small: "p",
  xs: "p",
  mono: "p",
  code: "span",
};

export interface TypographyProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  /** Forwarded to `<label>` when as="label" */
  htmlFor?: string;
  /** Forwarded to `<a>` when as="a" */
  href?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    { className, variant = "body", color = "default", as, children, ...props },
    ref,
  ) => {
    const Component = as ?? defaultElementMap[variant ?? "body"] ?? "p";
    return (
      <Component
        className={cn(typographyVariants({ variant, color }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
