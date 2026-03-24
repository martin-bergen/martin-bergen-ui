import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  getTokensByCategory,
  TokenTable,
  resolveCSSVariable,
} from "../../lib/token-engine";
import { Typography } from "../atoms/typography";
import {
  Home,
  Settings,
  User,
  Search,
  Bell,
  Heart,
  Star,
  ChevronRight,
  Plus,
  Minus,
  Check,
  X,
  Zap,
  Bot,
  Server,
  Cloud,
  Shield,
  Folder,
  Cog,
  BrainCircuit,
  Layers,
  Leaf,
} from "lucide-react";

const meta = {
  title: "Foundations/DesignTokens",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const VarSwatch = ({ name, varName }: { name: string; varName: string }) => {
  const resolvedValue = React.useMemo(() => {
    return resolveCSSVariable(varName);
  }, [varName]);

  return (
    <div className="flex items-center gap-3">
      <div
        className="w-12 h-12 rounded-lg border border-white/10 flex-shrink-0"
        style={{ backgroundColor: resolvedValue || "transparent" }}
      />
      <div>
        <Typography variant="small">{name}</Typography>
        <Typography variant="code" color="dim">
          {varName}
        </Typography>
      </div>
    </div>
  );
};

const TokenSection = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <div className="mb-12">
    <Typography variant="h2" className="mb-2">
      {title}
    </Typography>
    {description && (
      <Typography variant="body" color="muted" className="mb-6 max-w-2xl">
        {description}
      </Typography>
    )}
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      {children}
    </div>
  </div>
);

export const DesignTokens: Story = {
  render: () => {
    const categories = getTokensByCategory();

    return (
      <div className="min-h-screen bg-berget-brand-night p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h1" className="mb-4">
              Design Tokens
            </Typography>
            <Typography
              variant="body"
              color="muted"
              className="max-w-2xl mx-auto"
            >
              Berget Design System - All design tokens driven by CSS variables
              as single source of truth
            </Typography>
          </div>

          {/* Brand Colors */}
          <TokenSection
            title="Brand Colors"
            description="Core brand colors for the Berget Design System"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <VarSwatch name="Moss" varName="--color-berget-brand-moss" />
              <VarSwatch name="Lichen" varName="--color-berget-brand-lichen" />
              <VarSwatch name="Spruce" varName="--color-berget-brand-spruce" />
              <VarSwatch name="Fjord" varName="--color-berget-brand-fjord" />
              <VarSwatch name="Peak" varName="--color-berget-brand-peak" />
              <VarSwatch name="Cloud" varName="--color-berget-brand-cloud" />
              <VarSwatch name="Slate" varName="--color-berget-brand-slate" />
              <VarSwatch name="Night" varName="--color-berget-brand-night" />
              <VarSwatch name="Coal" varName="--color-berget-brand-coal" />
            </div>
          </TokenSection>

          {/* Status Colors */}
          <TokenSection
            title="Status Colors"
            description="Colors for status and feedback"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <VarSwatch name="Info" varName="--color-berget-brand-info" />
              <VarSwatch
                name="Success"
                varName="--color-berget-brand-success"
              />
              <VarSwatch
                name="Warning"
                varName="--color-berget-brand-warning"
              />
              <VarSwatch name="Error" varName="--color-berget-brand-error" />
            </div>
          </TokenSection>

          {/* Semantic Colors */}
          <TokenSection
            title="Semantic Colors"
            description="UI colors for backgrounds, foregrounds, and interactive elements"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <VarSwatch
                name="Background"
                varName="--color-berget-background"
              />
              <VarSwatch
                name="Foreground"
                varName="--color-berget-foreground"
              />
              <VarSwatch name="Card" varName="--color-berget-card" />
              <VarSwatch name="Popover" varName="--color-berget-popover" />
              <VarSwatch name="Muted" varName="--color-berget-muted" />
              <VarSwatch
                name="Muted Foreground"
                varName="--color-berget-muted-foreground"
              />
              <VarSwatch name="Border" varName="--color-berget-border" />
              <VarSwatch name="Input" varName="--color-berget-input" />
              <VarSwatch name="Primary" varName="--color-berget-primary" />
              <VarSwatch name="Secondary" varName="--color-berget-secondary" />
              <VarSwatch name="Accent" varName="--color-berget-accent" />
              <VarSwatch
                name="Destructive"
                varName="--color-berget-destructive"
              />
            </div>
          </TokenSection>

          {/* Status Semantic Colors */}
          <TokenSection
            title="Status Semantic Colors"
            description="Background and foreground colors for status states"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <VarSwatch name="Info (bg)" varName="--color-berget-info" />
              <VarSwatch
                name="Info (fg)"
                varName="--color-berget-info-foreground"
              />
              <VarSwatch
                name="Info (border)"
                varName="--color-berget-info-border"
              />
              <VarSwatch name="Success (bg)" varName="--color-berget-success" />
              <VarSwatch
                name="Success (fg)"
                varName="--color-berget-success-foreground"
              />
              <VarSwatch
                name="Success (border)"
                varName="--color-berget-success-border"
              />
              <VarSwatch name="Warning (bg)" varName="--color-berget-warning" />
              <VarSwatch
                name="Warning (fg)"
                varName="--color-berget-warning-foreground"
              />
              <VarSwatch
                name="Warning (border)"
                varName="--color-berget-warning-border"
              />
            </div>
          </TokenSection>

          {/* Typography */}
          <TokenSection
            title="Typography"
            description="Font families, sizes, line heights, and letter spacing defined in CSS variables. All font weights are locked to 400 (Regular) globally via CSS custom properties."
          >
            <div className="space-y-12">
              <div>
                <Typography
                  variant="small"
                  color="muted"
                  className="mb-6 block"
                >
                  Serif (Ovo) — Headings
                </Typography>
                <div className="space-y-8">
                  <div>
                    <Typography variant="h1" className="mb-2">
                      Heading 1
                    </Typography>
                    <div className="space-y-1">
                      <Typography variant="code" color="dim" className="block">
                        Size: clamp(1.875rem → 5rem)
                      </Typography>
                      <Typography variant="code" color="dim" className="block">
                        Letter Spacing: -0.03em
                      </Typography>
                      <Typography variant="code" color="dim" className="block">
                        Font Weight: 400
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <Typography variant="h2" className="mb-2">
                      Heading 2
                    </Typography>
                    <div className="space-y-1">
                      <Typography variant="code" color="dim" className="block">
                        Size: clamp(1.75rem → 2.5rem)
                      </Typography>
                      <Typography variant="code" color="dim" className="block">
                        Letter Spacing: -0.03em
                      </Typography>
                      <Typography variant="code" color="dim" className="block">
                        Font Weight: 400
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <Typography variant="h4" className="mb-2">
                      Heading 4
                    </Typography>
                    <div className="space-y-1">
                      <Typography variant="code" color="dim" className="block">
                        Size: clamp(1.25rem → 1.5rem)
                      </Typography>
                      <Typography variant="code" color="dim" className="block">
                        Letter Spacing: -0.01em
                      </Typography>
                      <Typography variant="code" color="dim" className="block">
                        Font Weight: 400
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  color="muted"
                  className="mb-6 block"
                >
                  Sans (DM Sans) — Body &amp; UI
                </Typography>
                <div className="space-y-8">
                  <div>
                    <Typography variant="h3" className="mb-2">
                      Heading 3
                    </Typography>
                    <div className="space-y-1">
                      <Typography variant="code" color="dim" className="block">
                        Size: clamp(1.25rem → 1.5rem)
                      </Typography>
                      <Typography variant="code" color="dim" className="block">
                        Letter Spacing: -0.01em
                      </Typography>
                      <Typography variant="code" color="dim" className="block">
                        Font Weight: 400
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <Typography
                      variant="code"
                      color="dim"
                      className="mb-4 block"
                    >
                      text-lg — 18px
                    </Typography>
                    <Typography variant="large" className="mb-4">
                      Large text
                    </Typography>
                    <Typography
                      variant="code"
                      color="dim"
                      className="mb-4 block"
                    >
                      text-p — 16px (default body)
                    </Typography>
                    <Typography variant="body" className="mb-4">
                      Body text
                    </Typography>
                    <Typography
                      variant="code"
                      color="dim"
                      className="mb-4 block"
                    >
                      text-sm — 14px (UI text, labels)
                    </Typography>
                    <Typography variant="small" className="mb-4">
                      Small text
                    </Typography>
                    <Typography
                      variant="code"
                      color="dim"
                      className="mb-4 block"
                    >
                      text-xs — 12px (captions, badges)
                    </Typography>
                    <Typography variant="xs">Extra small text</Typography>
                  </div>
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  color="muted"
                  className="mb-6 block"
                >
                  Monospace (DM Mono) — Code
                </Typography>
                <div>
                  <div className="space-y-1 mb-2">
                    <Typography variant="code" color="dim" className="block">
                      Size: 1rem (16px)
                    </Typography>
                    <Typography variant="code" color="dim" className="block">
                      Line Height: 1rem (16px)
                    </Typography>
                    <Typography variant="code" color="dim" className="block">
                      Letter Spacing: normal
                    </Typography>
                    <Typography variant="code" color="dim" className="block">
                      Font Weight: 400
                    </Typography>
                  </div>
                  <Typography variant="mono">Monospace text</Typography>
                </div>
              </div>
            </div>
          </TokenSection>

          {/* Text Colors */}
          <TokenSection
            title="Text Colors"
            description="Semantic text color tokens"
          >
            <div className="space-y-6">
              <div>
                <Typography variant="large" className="text-foreground mb-1">
                  text-foreground - Primary text
                </Typography>
                <Typography variant="code" color="dim">
                  White (#FFFFFF) on dark, dark (#1A1A1A) on light
                </Typography>
              </div>
              <div>
                <Typography variant="large" color="muted" className="mb-1">
                  text-muted-foreground - Secondary text
                </Typography>
                <Typography variant="code" color="dim">
                  Cloud at 60% opacity
                </Typography>
              </div>
              <div>
                <Typography
                  variant="large"
                  className="mb-1"
                  style={{ color: "hsl(var(--berget-brand-moss))" }}
                >
                  text-moss - Brand accent
                </Typography>
                <Typography variant="code" color="dim">
                  Moss green (#52B788)
                </Typography>
              </div>
              <div>
                <Typography
                  variant="large"
                  className="mb-1"
                  style={{ color: "hsl(var(--berget-brand-cloud))" }}
                >
                  text-cloud - Light neutral
                </Typography>
                <Typography variant="code" color="dim">
                  Cloud (#E5DDD5)
                </Typography>
              </div>
              <div>
                <Typography
                  variant="large"
                  className="mb-1"
                  style={{ color: "hsl(var(--berget-brand-lichen))" }}
                >
                  text-lichen - Light green
                </Typography>
                <Typography variant="code" color="dim">
                  Lichen (#74C69D)
                </Typography>
              </div>
              <div>
                <Typography
                  variant="large"
                  className="mb-1"
                  style={{ color: "hsl(var(--berget-brand-slate))" }}
                >
                  text-slate - Dark neutral (light buttons)
                </Typography>
                <Typography variant="code" color="dim">
                  Slate (#1A1A1A)
                </Typography>
              </div>
              <div>
                <Typography
                  variant="large"
                  className="mb-1"
                  style={{ color: "hsl(var(--berget-brand-success))" }}
                >
                  text-success - Success
                </Typography>
                <Typography variant="code" color="dim">
                  #52B788
                </Typography>
              </div>
              <div>
                <Typography
                  variant="large"
                  className="mb-1"
                  style={{ color: "hsl(var(--berget-brand-warning))" }}
                >
                  text-warning - Warning
                </Typography>
                <Typography variant="code" color="dim">
                  #CFFF8B
                </Typography>
              </div>
              <div>
                <Typography
                  variant="large"
                  className="mb-1"
                  style={{ color: "hsl(var(--berget-brand-error))" }}
                >
                  text-error - Error
                </Typography>
                <Typography variant="code" color="dim">
                  #D1392E
                </Typography>
              </div>
              <div>
                <Typography
                  variant="large"
                  className="mb-1"
                  style={{ color: "hsl(var(--berget-brand-info))" }}
                >
                  text-info - Info
                </Typography>
                <Typography variant="code" color="dim">
                  #3975D6
                </Typography>
              </div>
            </div>
          </TokenSection>

          {/* Icons */}
          <TokenSection
            title="Icons"
            description="Lucide React icons with consistent styling"
          >
            <div className="space-y-8">
              <div>
                <Typography
                  variant="small"
                  color="muted"
                  className="mb-6 block"
                >
                  Icon Specifications
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <Typography variant="small" className="mb-2 block">
                      Library
                    </Typography>
                    <Typography variant="small" color="muted">
                      Lucide React (outline)
                    </Typography>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <Typography variant="small" className="mb-2 block">
                      Stroke Width
                    </Typography>
                    <Typography variant="small" color="muted">
                      1.4-1.8px (size-dependent)
                    </Typography>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <Typography variant="small" className="mb-2 block">
                      Sizes
                    </Typography>
                    <Typography variant="small" color="muted">
                      16px, 24px, 32px
                    </Typography>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <Typography variant="small" className="mb-2 block">
                      Default Size
                    </Typography>
                    <Typography variant="small" color="muted">
                      32x32px
                    </Typography>
                  </div>
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  color="muted"
                  className="mb-6 block"
                >
                  Icon Sizes
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center gap-4">
                    <Home strokeWidth={1.4} className="w-4 h-4 text-white" />
                    <div className="text-center">
                      <Typography variant="small" className="block">
                        Small
                      </Typography>
                      <Typography variant="code" color="dim" className="block">
                        16x16px
                      </Typography>
                      <Typography variant="code" color="dim" className="block">
                        Stroke: 1.4px
                      </Typography>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Home strokeWidth={1.6} className="w-6 h-6 text-white" />
                    <div className="text-center">
                      <Typography variant="small" className="block">
                        Medium
                      </Typography>
                      <Typography variant="code" color="dim" className="block">
                        24x24px
                      </Typography>
                      <Typography variant="code" color="dim" className="block">
                        Stroke: 1.6px
                      </Typography>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Home strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <div className="text-center">
                      <Typography variant="small" className="block">
                        Large
                      </Typography>
                      <Typography variant="code" color="dim" className="block">
                        32x32px
                      </Typography>
                      <Typography variant="code" color="dim" className="block">
                        Stroke: 1.8px
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  color="muted"
                  className="mb-6 block"
                >
                  Common Icons (32x32px)
                </Typography>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <Home strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Home
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings
                      strokeWidth={1.8}
                      className="w-8 h-8 text-white"
                    />
                    <Typography variant="xs" color="muted">
                      Settings
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <User strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      User
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Search strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Search
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Bell strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Bell
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Heart strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Heart
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Star strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Star
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <ChevronRight
                      strokeWidth={1.8}
                      className="w-8 h-8 text-white"
                    />
                    <Typography variant="xs" color="muted">
                      Chevron
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Plus strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Plus
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Minus strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Minus
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Check strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Check
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <X strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      X
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Zap strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Zap
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Bot strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Bot
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Server strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Server
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Cloud strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Cloud
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Shield strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Shield
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Folder strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Folder
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Cog strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Cog
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <BrainCircuit
                      strokeWidth={1.8}
                      className="w-8 h-8 text-white"
                    />
                    <Typography variant="xs" color="muted">
                      Brain
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Layers strokeWidth={1.8} className="w-8 h-8 text-white" />
                    <Typography variant="xs" color="muted">
                      Layers
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Leaf
                      strokeWidth={1.8}
                      className="w-8 h-8 text-berget-brand-moss"
                    />
                    <Typography variant="xs" color="muted">
                      Leaf
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </TokenSection>

          {/* Layout Standards */}
          <TokenSection
            title="Layout Standards"
            description="Border radii, container widths, and spacing"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <Typography
                  variant="small"
                  color="muted"
                  className="mb-6 block"
                >
                  Border Radius
                </Typography>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-berget-brand-moss rounded-full" />
                    <Typography variant="small">
                      rounded-full (Buttons/Badges)
                    </Typography>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-berget-brand-lichen rounded-2xl" />
                    <Typography variant="small">rounded-2xl (Cards)</Typography>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-berget-brand-spruce rounded-md" />
                    <Typography variant="small">rounded-md (Inputs)</Typography>
                  </div>
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  color="muted"
                  className="mb-6 block"
                >
                  Container Widths
                </Typography>
                <div className="space-y-3">
                  <Typography variant="small" className="block">
                    sm: max-w-3xl (768px)
                  </Typography>
                  <Typography variant="small" className="block">
                    md: max-w-5xl (1024px)
                  </Typography>
                  <Typography variant="small" className="block">
                    lg: max-w-7xl (1280px)
                  </Typography>
                  <Typography variant="small" className="block">
                    xl: max-w-[1400px]
                  </Typography>
                  <Typography variant="small" className="block">
                    full: max-w-full
                  </Typography>
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  color="muted"
                  className="mb-6 block"
                >
                  Grid Gaps
                </Typography>
                <div className="space-y-3">
                  <Typography variant="small" className="block">
                    sm: gap-4 (1rem)
                  </Typography>
                  <Typography variant="small" className="block">
                    md: gap-8 (2rem)
                  </Typography>
                  <Typography variant="small" className="block">
                    lg: gap-12 (3rem)
                  </Typography>
                  <Typography variant="small" className="block">
                    xl: gap-16 (4rem)
                  </Typography>
                </div>
              </div>
            </div>
          </TokenSection>

          {/* All CSS Variables */}
          <div className="mt-16">
            <Typography variant="h2" className="mb-8">
              All CSS Variables
            </Typography>
            <Typography variant="body" color="muted" className="mb-8 max-w-2xl">
              Complete list of all CSS variables defined in the design system
            </Typography>
            {categories.map((category) => (
              <TokenTable
                key={category.name}
                title={category.name}
                tokens={category.tokens}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
};
