import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { LucideIcon } from "lucide-react";
import { Card } from "../../atoms/card";
import { FeatureList } from "../../molecules/list";
import { Typography } from "../../atoms/typography";

const featureCardVariants = cva("", {
  variants: {
    variant: {
      default: "",
      highlight: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface FeatureCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureCardVariants> {
  /**
   * Icon to display
   */
  icon?: LucideIcon;
  /**
   * Custom color for the icon (e.g., "#52B788" or "text-[#52B788]")
   */
  iconColor?: string;
  /**
   * Title of the feature
   */
  title: string;
  /**
   * Description of the feature
   */
  description: string;
  /**
   * Optional badge text
   */
  badge?: string;
  /**
   * Optional link text
   */
  linkText?: string;
  /**
   * Optional link href
   */
  linkHref?: string;
  /**
   * Optional list items to display below description
   */
  items?: string[];
  /**
   * Number of columns in the grid
   * @default 3
   */
  columns?: 1 | 2 | 3 | 4;
}

/**
 * Feature Card Component
 *
 * Feature card with icon, badge, title, description, and optional list items.
 * Based on Card highlight variant.
 *
 * **Use Cases:**
 * - Feature showcases
 * - Product highlights
 * - Service descriptions
 * - Benefits sections
 *
 * @example
 * ```tsx
 * <FeatureCard
 *   icon={Cpu}
 *   title="Dedicated Inference"
 *   description="Run and scale any model, including your own fine-tuned models on dedicated capacity."
 *   badge="Coming Soon"
 *   items={[
 *     "Customizable instances",
 *     "High-demand workloads",
 *     "Dedicated resources"
 *   ]}
 * />
 * ```
 */
const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      className,
      variant: _variant,
      icon: Icon,
      iconColor,
      title,
      description,
      badge,
      linkText,
      linkHref,
      items,
      columns: _columns,
      ...props
    },
    ref,
  ) => {
    return (
      <Card
        ref={ref}
        variant="highlight"
        className={cn("w-full py-fluid-lg px-fluid-md", className)}
        {...props}
      >
        <div className="flex flex-col items-start gap-fluid-md">
          {/* Icon and badge on same row */}
          {(Icon || badge) && (
            <div className="flex items-center justify-between w-full">
              {Icon && (
                <div className="flex h-7 w-7 items-center justify-center">
                  <Icon
                    className={cn("h-7 w-7", iconColor || "text-foreground")}
                    strokeWidth={1.5}
                  />
                </div>
              )}

              {badge && (
                <div className="flex h-6 items-center justify-start px-6 bg-berget-brand-spruce rounded-full">
                  <Typography
                    variant="body"
                    as="span"
                    className="text-berget-warning-foreground"
                  >
                    {badge}
                  </Typography>
                </div>
              )}
            </div>
          )}

          <Typography variant="h2" className="text-foreground">
            {title}
          </Typography>

          <Typography variant="body" className="text-foreground/80">
            {description}
          </Typography>

          {items && items.length > 0 && (
            <FeatureList items={items} variant="bullet" />
          )}

          {linkText && linkHref && (
            <a
              href={linkHref}
              className="text-p font-p leading-p text-berget-accent"
            >
              {linkText} →
            </a>
          )}
        </div>
      </Card>
    );
  },
);
FeatureCard.displayName = "FeatureCard";

export interface FeatureCardsProps {
  /**
   * Array of feature cards to display
   */
  features: FeatureCardProps[];
  /**
   * Number of columns in the grid
   * @default 3
   */
  columns?: 1 | 2 | 3 | 4;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Feature Cards Component
 *
 * Displays multiple feature cards in a responsive grid layout.
 * Perfect for feature showcases, product highlights, and benefits sections.
 *
 * @example
 * ```tsx
 * const features = [
 *   {
 *     icon: Cpu,
 *     title: "Dedicated Inference",
 *     description: "Run and scale any model on dedicated capacity.",
 *     badge: "Coming Soon",
 *     items: ["Customizable instances", "High-demand workloads", "Dedicated resources"]
 *   },
 *   {
 *     icon: Zap,
 *     title: "Lightning Fast",
 *     description: "Optimized for speed and performance.",
 *     badge: "New"
 *   },
 * ]
 *
 * <FeatureCards features={features} columns={3} />
 * ```
 */
export const FeatureCards = React.forwardRef<HTMLDivElement, FeatureCardsProps>(
  ({ features, columns = 3, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid gap-fluid-lg p-fluid-md",
          // Explicit classes so Tailwind compiles them
          columns === 1 && "grid-cols-1 max-w-md mx-auto",
          columns === 2 && "grid-cols-1 md:grid-cols-2",
          columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
          className,
        )}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    );
  },
);
FeatureCards.displayName = "FeatureCards";

export { FeatureCard, featureCardVariants };
