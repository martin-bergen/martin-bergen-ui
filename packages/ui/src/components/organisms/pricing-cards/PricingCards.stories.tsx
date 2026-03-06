import type { Meta, StoryObj } from "@storybook/react";
import { PricingCards, type PricingTier } from "./PricingCards";

const meta = {
    title: "Organisms/Pricing Cards",
    component: PricingCards,
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component: `
Pricing Cards component for displaying subscription tiers and service packages.

**Perfect for:**
- SaaS pricing pages
- Subscription plan selection
- Product comparison
- Service tier displays
        `
            }
        }
    },
    tags: ["autodocs"]
} satisfies Meta<typeof PricingCards>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTiers: PricingTier[] = [
    {
        id: "free",
        name: "Free",
        description: "Perfect for trying out our service",
        price: "$0",
        features: ["1 user", "10 projects", "Basic support", "1GB storage"],
        ctaText: "Get Started",
        ctaVariant: "outline"
    },
    {
        id: "pro",
        name: "Professional",
        description: "For growing teams and businesses",
        price: "$29/month",
        features: [
            "Up to 10 users",
            "Unlimited projects",
            "Priority support",
            "100GB storage",
            "Advanced analytics",
            "Custom branding"
        ],
        recommended: true,
        ctaText: "Start Free Trial",
        ctaVariant: "primary"
    },
    {
        id: "enterprise",
        name: "Enterprise",
        description: "For large organizations",
        price: "Contact Sales",
        features: [
            "Unlimited users",
            "Unlimited projects",
            "24/7 dedicated support",
            "Unlimited storage",
            "Advanced security",
            "SLA guarantee",
            "Custom integrations"
        ],
        ctaText: "Contact Us",
        ctaVariant: "default"
    }
];

/**
 * Default single pricing card
 */
export const Default: Story = {
    args: {
        tiers: [
            {
                id: "pro",
                name: "Professional",
                description: "For growing teams and businesses",
                price: "$29/month",
                features: [
                    "Up to 10 users",
                    "Unlimited projects",
                    "Priority support",
                    "100GB storage",
                    "Advanced analytics",
                    "Custom branding"
                ],
                recommended: true,
                ctaText: "Start Free Trial",
                ctaVariant: "primary"
            }
        ],
        columns: 1
    }
};

/**
 * Free tier card
 */
export const FreeTier: Story = {
    args: {
        tiers: [
            {
                id: "free",
                name: "Free",
                description: "Perfect for trying out our service",
                price: "$0",
                features: ["1 user", "10 projects", "Basic support", "1GB storage"],
                ctaText: "Get Started",
                ctaVariant: "outline"
            }
        ],
        columns: 1
    }
};

/**
 * Enterprise tier card
 */
export const EnterpriseTier: Story = {
    args: {
        tiers: [
            {
                id: "enterprise",
                name: "Enterprise",
                description: "For large organizations",
                price: "Contact Sales",
                features: [
                    "Unlimited users",
                    "Unlimited projects",
                    "24/7 dedicated support",
                    "Unlimited storage",
                    "Advanced security",
                    "SLA guarantee",
                    "Custom integrations"
                ],
                ctaText: "Contact Us",
                ctaVariant: "default"
            }
        ],
        columns: 1
    }
};

/**
 * 2-column layout for simpler pricing
 */
export const TwoColumns: Story = {
    args: {
        tiers: [
            {
                id: "basic",
                name: "Basic",
                description: "Essential features",
                price: "$9/month",
                features: [
                    "Up to 3 users",
                    "25 projects",
                    "Email support",
                    "10GB storage"
                ],
                ctaText: "Get Started"
            },
            {
                id: "premium",
                name: "Premium",
                description: "Everything you need",
                price: "$49/month",
                features: [
                    "Unlimited users",
                    "Unlimited projects",
                    "Priority support",
                    "1TB storage",
                    "Advanced features",
                    "API access"
                ],
                recommended: true,
                ctaText: "Start Trial"
            }
        ],
        columns: 2
    }
};

/**
 * Three columns layout
 */
export const ThreeColumns: Story = {
    args: {
        tiers: sampleTiers,
        columns: 3
    }
};

/**
 * 4-column layout with more tiers
 */
export const FourColumns: Story = {
    args: {
        tiers: [
            {
                id: "starter",
                name: "Starter",
                description: "Just getting started",
                price: "Free",
                features: ["1 user", "5 projects", "Community support"],
                ctaText: "Start Free"
            },
            ...sampleTiers
        ],
        columns: 4
    }
};

/**
 * SaaS Pricing Example
 */
export const SaaSPricing: Story = {
    args: {
        tiers: [
            {
                id: "hobby",
                name: "Hobby",
                description: "For personal projects",
                price: "Free forever",
                features: [
                    "1 project",
                    "1,000 API calls/month",
                    "Community support",
                    "Basic analytics"
                ],
                ctaText: "Start Building",
                ctaVariant: "outline"
            },
            {
                id: "startup",
                name: "Startup",
                description: "For small teams",
                price: "$29/month",
                features: [
                    "10 projects",
                    "100,000 API calls/month",
                    "Email support",
                    "Advanced analytics",
                    "Custom domains"
                ],
                recommended: true,
                ctaText: "Start 14-day Trial",
                ctaVariant: "primary"
            },
            {
                id: "business",
                name: "Business",
                description: "For established companies",
                price: "$99/month",
                features: [
                    "Unlimited projects",
                    "1M API calls/month",
                    "Priority support",
                    "Team collaboration",
                    "Advanced security",
                    "SLA"
                ],
                ctaText: "Get Started"
            }
        ],
        columns: 3
    }
};

/**
 * With Custom Click Handlers
 */
export const WithClickHandlers: Story = {
    args: {
        tiers: sampleTiers.map(tier => ({
            ...tier,
            onCtaClick: () => alert(`Clicked: ${tier.name}`)
        })),
        columns: 3
    }
};

/**
 * Dark Background Example
 */
export const OnDarkBackground: Story = {
    args: {
        tiers: sampleTiers,
        columns: 3
    },
    decorators: [
        Story => (
            <div className="bg-[hsl(var(--background))] p-8 rounded-2xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-normal mb-4">Choose Your Plan</h2>
                    <p className="text-white/60">
                        Select the perfect plan for your needs
                    </p>
                </div>
                <Story />
            </div>
        )
    ]
};