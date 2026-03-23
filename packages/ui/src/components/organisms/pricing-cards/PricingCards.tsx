import * as React from "react";
import { cn } from "../../../lib/utils";
import { Button } from "../../atoms/button";
import { Card } from "../../atoms/card";
import { FeatureList } from "../../molecules/list";

export interface PricingTier {
  /**
   * Unique identifier for the plan
   */
  id: string;
  /**
   * Display name of the plan
   */
  name: string;
  /**
   * Short description of the plan
   */
  description: string;
  /**
   * Price display (e.g., "Free", "$29/month", "Contact Sales")
   */
  price: string;
  /**
   * List of features included in this plan
   */
  features: string[];
  /**
   * Whether this plan is recommended/highlighted
   */
  recommended?: boolean;
  /**
   * CTA button text
   */
  ctaText?: string;
  /**
   * CTA button variant
   */
  ctaVariant?: "default" | "primary" | "secondary";
  /**
   * Optional callback when CTA is clicked
   */
  onCtaClick?: () => void;
}

export interface PricingCardsProps {
  /**
   * Array of pricing tiers to display
   */
  tiers: PricingTier[];
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
 * Pricing Cards Component
 *
 * Displays pricing tiers in a responsive grid layout.
 * Perfect for SaaS pricing pages, subscription plans, and feature comparisons.
 *
 * **Features:**
 * - Responsive grid (1 col mobile → 2/3/4 cols desktop)
 * - Highlighted "Recommended" plan
 * - Feature lists with checkmarks
 * - Customizable CTA buttons
 * - Glass morphism cards
 *
 * **Use Cases:**
 * - SaaS pricing pages
 * - Subscription plan selection
 * - Product tier comparison
 * - Service package displays
 *
 * @example
 * ```tsx
 * const tiers = [
 *   {
 *     id: 'free',
 *     name: 'Free',
 *     description: 'Perfect for trying out',
 *     price: '$0/month',
 *     features: ['Feature 1', 'Feature 2'],
 *     ctaText: 'Get Started',
 *   },
 *   {
 *     id: 'pro',
 *     name: 'Professional',
 *     description: 'For growing teams',
 *     price: '$29/month',
 *     features: ['Everything in Free', 'Feature 3', 'Feature 4'],
 *     recommended: true,
 *     ctaText: 'Start Trial',
 *   },
 * ]
 *
 * <PricingCards tiers={tiers} columns={3} />
 * ```
 */
export const PricingCards = React.forwardRef<HTMLDivElement, PricingCardsProps>(
  ({ tiers, columns = 3, className }, ref) => {
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
        {tiers.map((tier) => (
          <Card
            key={tier.id}
            variant="highlight"
            className="w-full p-fluid-md md:p-fluid-lg"
          >
            <div className="mb-6">
              <h3 className="text-h3 font-h3 leading-h3 tracking-h3 mb-2">
                {tier.name}
              </h3>
              <p className="text-p font-p leading-p text-[hsl(var(--muted-foreground))] mb-4">
                {tier.description}
              </p>
              <div className="text-h2 font-h2 leading-h2 tracking-h2">
                {tier.price}
              </div>
            </div>

            <Button
              className="w-full mb-6"
              variant={
                tier.ctaVariant || (tier.recommended ? "primary" : "default")
              }
              onClick={tier.onCtaClick}
            >
              {tier.ctaText || "Get Started"}
            </Button>

            <FeatureList items={tier.features} variant="bullet" />
          </Card>
        ))}
      </div>
    );
  },
);
PricingCards.displayName = "PricingCards";
