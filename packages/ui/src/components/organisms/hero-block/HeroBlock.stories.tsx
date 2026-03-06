import type { Meta, StoryObj } from "@storybook/react";
import { HeroBlock } from "./HeroBlock";
import { Button } from "../../atoms/button";
import { Shield, Sparkles, Zap } from "lucide-react";

const meta = {
  title: "Organisms/Hero Block",
  component: HeroBlock,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Full-width hero section component based on the pattern from why-berget and landing pages.

**Design Pattern:**
- Full viewport height (min 70vh)
- Optional pattern background
- Tagline badge with icon
- Large centered title
- Description text
- CTA buttons

**When to Use:**
- Page hero sections
- Landing page intros
- Product announcements
- Feature showcases

**Real Usage:**
This is the exact pattern used on /why-berget and other key landing pages.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "moss", "gradient"],
    },
    withPattern: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof HeroBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default hero with pattern
 */
export const Default: Story = {
  args: {
    title: "European AI Infrastructure",

    description:
      "Deploy and scale AI models with data residency in Europe. GDPR compliant, sovereign, and powerful.",

    actions: (
      <>
        <Button>Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </>
    ),

    withPattern: true,
  },
};

/**
 * With Tagline and Icon (Why Berget Pattern)
 */
export const WithTagline: Story = {
  args: {
    taglineIcon: Shield,
    tagline: "Built for Europe",
    title: "AI That Respects Your Data",

    description:
      "The only AI platform designed specifically for European organizations with strict data sovereignty requirements. Your data never leaves the EU.",

    variant: "moss",

    actions: (
      <>
        <Button className="px-8 py-6 text-lg">Get Started</Button>
        <Button variant="outline" className="px-8 py-6 text-lg">
          Book a Demo
        </Button>
      </>
    ),

    withPattern: true,
  },
};

/**
 * Moss Variant - Green gradient
 */
export const MossVariant: Story = {
  args: {
    taglineIcon: Sparkles,
    tagline: "Now Available",
    title: "Serverless AI Inference",

    description:
      "Deploy GPT-4, Claude, and other leading models without managing infrastructure. Auto-scaling, pay-per-use, and EU-based.",

    variant: "moss",

    actions: (
      <>
        <Button>Try for Free</Button>
        <Button variant="outline">View Pricing</Button>
      </>
    ),

    withPattern: true,
  },
};

/**
 * Gradient Variant - Diagonal gradient
 */
export const GradientVariant: Story = {
  args: {
    taglineIcon: Zap,
    tagline: "Lightning Fast",
    title: "Sub-100ms Inference",

    description:
      "Optimized infrastructure for real-time AI applications. Deploy models close to your users across multiple EU regions.",

    variant: "gradient",

    actions: (
      <>
        <Button>Get Started</Button>
        <Button variant="ghost">See Benchmarks →</Button>
      </>
    ),

    withPattern: true,
  },
};

/**
 * Without Pattern Background
 */
export const WithoutPattern: Story = {
  args: {
    title: "Clean and Simple",
    description:
      "Sometimes you want a hero without the pattern background for a cleaner look.",
    withPattern: false,
    actions: (
      <>
        <Button>Get Started</Button>
      </>
    ),
  },
};

/**
 * Without Tagline
 */
export const WithoutTagline: Story = {
  args: {
    title: "Build AI Applications",
    description:
      "The complete platform for deploying, managing, and scaling AI models in Europe with full GDPR compliance.",
    variant: "moss",
    actions: (
      <>
        <Button>Start Building</Button>
        <Button variant="outline">Read Docs</Button>
      </>
    ),
  },
};

/**
 * Single CTA
 */
export const SingleCTA: Story = {
  args: {
    tagline: "Coming Soon",
    title: "Fine-Tuning Platform",

    description:
      "Customize leading AI models with your own data. Enterprise-grade fine-tuning coming Q2 2026.",

    variant: "gradient",
    actions: <Button>Join Waitlist</Button>,
    withPattern: true,
  },
};

/**
 * Three CTAs
 */
export const ThreeCTAs: Story = {
  args: {
    title: "Choose Your Path",

    description:
      "Whether you are a startup, enterprise, or individual developer, we have a solution for you.",

    actions: (
      <>
        <Button>For Startups</Button>
        <Button variant="outline">For Enterprise</Button>
        <Button variant="ghost">For Developers</Button>
      </>
    ),

    withPattern: true,
  },
};

/**
 * Products Page Hero
 */
export const ProductsPageHero: Story = {
  args: {
    title: "Berget AI Products",

    description:
      "Complete infrastructure for deploying and scaling AI models in Europe. From serverless inference to dedicated compute, choose the right solution for your needs.",

    variant: "default",

    actions: (
      <>
        <Button>View All Products</Button>
        <Button variant="outline">Compare Plans</Button>
      </>
    ),

    withPattern: true,
  },
};

/**
 * Why Berget Hero (Full Pattern)
 */
export const WhyBergetHero: Story = {
  args: {
    taglineIcon: Shield,
    tagline: "European Data Sovereignty",
    title: "AI Infrastructure You Can Trust",

    description:
      "Built for European organizations that need to meet strict data protection requirements. Your data stays in the EU, always.",

    variant: "moss",

    actions: (
      <>
        <Button className="px-8 py-6 text-lg">Get Started</Button>
        <Button variant="outline" className="px-8 py-6 text-lg">
          Book Demo
        </Button>
      </>
    ),

    withPattern: true,
  },
};

/**
 * Announcement Hero
 */
export const AnnouncementHero: Story = {
  args: {
    taglineIcon: Sparkles,
    tagline: "Product Launch",
    title: "Introducing Berget Platform",

    description:
      "A complete AI development platform with vector databases, fine-tuning, evaluation tools, and more. Now in private beta.",

    variant: "gradient",

    actions: (
      <>
        <Button>Request Access</Button>
        <Button variant="outline">Read Announcement</Button>
      </>
    ),

    withPattern: true,
  },
};

/**
 * Minimal Hero
 */
export const MinimalHero: Story = {
  args: {
    title: "Welcome to Berget AI",
    description: "European AI infrastructure for modern applications.",
    withPattern: false,
    actions: <Button>Explore</Button>,
  },
};

/**
 * Long Description
 */
export const LongDescription: Story = {
  args: {
    taglineIcon: Shield,
    tagline: "Enterprise Ready",
    title: "AI Platform for European Enterprises",

    description:
      "Berget AI provides a complete infrastructure for deploying and managing AI models at scale. Built on European infrastructure with full GDPR compliance, data sovereignty guarantees, and enterprise-grade SLAs. Deploy leading models like GPT-4, Claude, and Mistral with confidence, knowing your data never leaves the EU and your organization stays compliant.",

    variant: "moss",
    withPattern: true,

    actions: (
      <>
        <Button>Contact Sales</Button>
        <Button variant="outline">Download Whitepaper</Button>
      </>
    ),
  },
};
