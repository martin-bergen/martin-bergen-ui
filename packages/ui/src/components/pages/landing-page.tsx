import * as React from "react";
import { cn } from "@/lib/utils";
import { HeroBlock } from "../organisms/hero-block";
import { FeatureCards } from "../organisms/feature-cards";
import { PricingCards } from "../organisms/pricing-cards";
import { Section } from "../molecules/section";
import { Button } from "../atoms/button";
import { SectionHeader } from "../molecules/section-header";
import { LucideIcon } from "lucide-react";

export type LandingPageProps = React.HTMLAttributes<HTMLDivElement>;

export interface LandingPageData {
  hero: {
    tagline?: string;
    title: string;
    description: string;
    actions?: React.ReactNode;
  };
  features?: {
    title?: string;
    description?: string;
    items: Array<{
      icon?: LucideIcon;
      title: string;
      description: string;
      badge?: string;
      linkText?: string;
      linkHref?: string;
      items?: string[];
    }>;
    columns?: 1 | 2 | 3 | 4;
  };
  pricing?: {
    title?: string;
    description?: string;
    tiers: Array<{
      id: string;
      name: string;
      description: string;
      price: string;
      features: string[];
      recommended?: boolean;
      ctaText?: string;
      ctaVariant?: "default" | "primary" | "secondary";
      onCtaClick?: () => void;
    }>;
    columns?: 1 | 2 | 3 | 4;
  };
}

export const defaultLandingPageData: LandingPageData = {
  hero: {
    tagline: "Built for Europe",
    title: "European AI Infrastructure",
    description:
      "Deploy and scale AI models with data residency in Europe. Fast, secure, and compliant.",
    actions: (
      <>
        <Button size="lg" variant="primary">
          Get Started
        </Button>
        <Button size="lg" variant="default">
          Learn More
        </Button>
      </>
    ),
  },
  features: {
    title: "Why Berget?",
    description: "Everything you need to deploy and scale AI models in Europe",
    items: [
      {
        icon: undefined,
        title: "Data Residency",
        description:
          "Your data stays in Europe with full GDPR compliance and data sovereignty.",
        items: ["GDPR compliant", "Data sovereignty", "EU data centers"],
      },
      {
        icon: undefined,
        title: "Dedicated Inference",
        description:
          "Run and scale any model, including your own fine-tuned models on dedicated capacity.",
        badge: "Coming Soon",
        items: [
          "Customizable instances",
          "High-demand workloads",
          "Dedicated resources",
        ],
      },
      {
        icon: undefined,
        title: "Swedish Language",
        description:
          "Native Swedish language models optimized for Scandinavian use cases.",
        items: ["Swedish LLMs", "Cultural alignment", "Local context"],
      },
    ],
    columns: 3,
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    description: "Start small, scale as you grow. No hidden fees.",
    tiers: [
      {
        id: "free",
        name: "Free",
        description: "Perfect for trying out",
        price: "€0/month",
        features: [
          "1M tokens/month",
          "Community support",
          "Standard models",
          "EU data residency",
        ],
        ctaText: "Get Started",
        ctaVariant: "default",
      },
      {
        id: "pro",
        name: "Professional",
        description: "For growing teams",
        price: "€29/month",
        features: [
          "10M tokens/month",
          "Priority support",
          "All models",
          "Dedicated capacity",
          "Custom fine-tuning",
        ],
        recommended: true,
        ctaText: "Start Trial",
        ctaVariant: "primary",
      },
      {
        id: "enterprise",
        name: "Enterprise",
        description: "For large organizations",
        price: "Custom",
        features: [
          "Unlimited tokens",
          "24/7 support",
          "SLA guarantee",
          "On-premise deployment",
          "Custom integrations",
        ],
        ctaText: "Contact Sales",
        ctaVariant: "default",
      },
    ],
    columns: 3,
  },
};

const LandingPage = React.forwardRef<HTMLElement, LandingPageProps>(
  ({ className, ...props }, ref) => {
    const data = defaultLandingPageData;

    return (
      <main ref={ref} className={cn("min-h-screen", className)} {...props}>
        <HeroBlock
          tagline={data.hero.tagline}
          title={data.hero.title}
          description={data.hero.description}
          actions={data.hero.actions}
          variant="moss"
        />

        {data.features && (
          <Section padding="xl">
            {data.features.title && (
              <SectionHeader
                title={data.features.title}
                description={data.features.description}
                alignment="center"
                className="mb-12"
              />
            )}
            <FeatureCards
              features={data.features.items}
              columns={data.features.columns}
            />
          </Section>
        )}

        {data.pricing && (
          <Section padding="xl" background="muted">
            {data.pricing.title && (
              <SectionHeader
                title={data.pricing.title}
                description={data.pricing.description}
                alignment="center"
                className="mb-12"
              />
            )}
            <PricingCards
              tiers={data.pricing.tiers}
              columns={data.pricing.columns}
            />
          </Section>
        )}
      </main>
    );
  },
);
LandingPage.displayName = "LandingPage";

export { LandingPage };
