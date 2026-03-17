import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const sectionVariants = cva("relative", {
  variants: {
    padding: {
      none: "",
      sm: "py-12",
      md: "py-16",
      lg: "py-24",
      xl: "py-32",
    },
    background: {
      transparent: "",
      muted: "bg-muted/10",
    },
  },
  defaultVariants: {
    padding: "lg",
    background: "transparent",
  },
});

export interface SectionProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, padding, background, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ padding, background }), className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4">{children}</div>
      </section>
    );
  },
);
Section.displayName = "Section";

export { Section, sectionVariants };
