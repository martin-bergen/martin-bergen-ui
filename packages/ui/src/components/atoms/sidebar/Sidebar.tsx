import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const sidebarVariants = cva("relative overflow-hidden h-screen", {
  variants: {
    variant: {
      highlight:
        "bg-berget-brand-slate/40 border-berget-brand-slate/40 backdrop-blur-[12px]",
      glass:
        "bg-berget-brand-cloud/5 border-berget-brand-cloud/10 backdrop-blur-[24px] shadow-xl",
      solid: "bg-berget-brand-slate border-berget-brand-slate/40",
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
  },
  defaultVariants: {
    variant: "highlight",
    padding: "md",
  },
});

export interface SidebarProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, variant, padding, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(sidebarVariants({ variant, padding }), className)}
        {...props}
      >
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_right,_hsl(var(--berget-brand-cloud)/0.04)_0%,_transparent_50%)] pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 z-1 w-[3px] bg-[radial-gradient(112.5%_55.66%_at_100%_50%,hsl(var(--berget-brand-cloud))_0%,transparent_90%)] opacity-30 pointer-events-none" />
        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";

export { Sidebar, sidebarVariants };
