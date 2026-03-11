import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { Button as ButtonPrimitive } from "../../../primitives/button";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-opacity-20 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-berget-button-default-bg text-berget-button-default-fg shadow-lg hover:bg-berget-button-default-bg/90 hover:shadow-xl",
        primary:
          "bg-berget-button-primary-bg text-berget-button-primary-fg shadow-lg hover:bg-berget-button-primary-bg/90 hover:shadow-xl",
        secondary:
          "bg-berget-button-secondary-bg text-berget-button-secondary-fg shadow hover:bg-berget-button-secondary-bg/80 hover:shadow-lg",
        outline:
          "border-2 border-berget-brand-cloud/20 bg-transparent hover:bg-berget-brand-moss/20 hover:border-berget-brand-moss/40",
        ghost: "hover:bg-berget-brand-moss/20 hover:text-foreground",
        destructive:
          "bg-berget-button-destructive-bg text-berget-button-destructive-fg shadow-sm hover:bg-berget-button-destructive-bg/80 hover:shadow",
        link: "text-berget-button-link-fg underline-offset-4 hover:underline",
        highlight:
          "relative overflow-hidden bg-berget-background border border-berget-brand-cloud/20 backdrop-blur-[5px] text-foreground hover:bg-berget-background/80 hover:border-berget-brand-cloud/30 hover:shadow-lg",
        stone:
          "!bg-berget-button-default-bg !text-berget-button-default-fg shadow-lg hover:!bg-berget-button-default-bg/90 hover:shadow-xl",
        icon: "!flex !flex-row !justify-center !items-center !p-0 !w-[32px] !h-[32px] !bg-berget-button-default-bg !text-berget-button-default-fg shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] !rounded-full",
      },
      size: {
        sm: "h-6 px-4 py-1.5 text-xs",
        default: "h-8 px-8 py-2",
        lg: "h-10 px-10 py-2.5 text-base",
        icon: "!w-[32px] !h-[32px] !p-0",
      },
      width: {
        default: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      width: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, width, asChild = false, children, ...props },
    ref,
  ) => {
    const isHighlight = variant === "highlight";

    if (asChild) {
      return (
        <ButtonPrimitive
          className={cn(buttonVariants({ variant, size, width }), className)}
          ref={ref}
          asChild
          {...props}
        >
          {children}
        </ButtonPrimitive>
      );
    }

    return (
      <ButtonPrimitive
        className={cn(buttonVariants({ variant, size, width }), className)}
        ref={ref}
        {...props}
      >
        {isHighlight && (
          <>
            <div className="absolute inset-0 top-[1px] h-[calc(100%-1px)] w-full bg-[radial-gradient(100%_100%_at_49.87%_0%,hsl(var(--berget-brand-cloud)/0.04)_0%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-[radial-gradient(55.66%_112.5%_at_50%_0%,hsl(var(--berget-brand-cloud))_0%,transparent_92.4%)] opacity-[0.3] pointer-events-none" />
          </>
        )}
        <span
          className={cn(
            "inline-flex items-center",
            isHighlight && "relative z-10",
          )}
        >
          {children}
        </span>
      </ButtonPrimitive>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
