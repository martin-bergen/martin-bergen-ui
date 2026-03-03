import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { GridBackground } from "../../components/foundations/grid-background"
import { GradientBackground } from "../../components/foundations/gradient-background"
import { NetworkBackground } from "../../components/foundations/network-background"
import { GrainyGradientBackground } from "../../components/foundations/grainy-gradient-background"
import { PatternBackground } from "../../components/foundations/pattern-background"
import { Card, CardContent } from "../../components/atoms/card"
import { Button } from "../../components/atoms/button"
import { Badge } from "../../components/atoms/badge"

const meta = {
  title: "Foundations/Backgrounds",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Background components for the Berget Design System:

1. **Grid** — Subtle grid pattern for structure
2. **Gradient** — Colorful gradients for marketing/hero sections
3. **Network** — Animated network for tech/enterprise feel
4. **Grainy Gradient** — Artistic grainy gradient with colored ellipses
5. **Pattern** — L-shaped pattern with dots
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta

export default meta

export const GridDefault: StoryObj = {
  name: "Grid — Default",
  parameters: { controls: { hide: true } },
  render: () => (
    <GridBackground className="flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl mb-4">Grid Background</h1>
        <p className="text-muted-foreground mb-8">
          Subtle 24x24px grid with 2% opacity. Adds technical structure while
          staying minimal and focused.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <Card variant="highlight">
            <CardContent className="p-6">
              <div className="text-sm text-white/60">Sample Card 1</div>
            </CardContent>
          </Card>
          <Card variant="highlight">
            <CardContent className="p-6">
              <div className="text-sm text-white/60">Sample Card 2</div>
            </CardContent>
          </Card>
          <Card variant="highlight">
            <CardContent className="p-6">
              <div className="text-sm text-white/60">Sample Card 3</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </GridBackground>
  ),
}

export const GridVisible: StoryObj = {
  name: "Grid — Visible",
  parameters: { controls: { hide: true } },
  render: () => (
    <GridBackground opacity={0.05} className="flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl mb-4">Visible Grid</h1>
        <p className="text-muted-foreground mb-8">
          Same grid but with 5% opacity — more visible structure.
        </p>
      </div>
    </GridBackground>
  ),
}

export const GradientBerget: StoryObj = {
  name: "Gradient — Berget",
  parameters: { controls: { hide: true } },
  render: () => (
    <GradientBackground variant="berget" className="flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl mb-4 text-white">Berget Gradient</h1>
        <p className="text-white/90 text-lg mb-8">
          Green gradient with Berget brand colors. Creates strong visual impact
          for hero sections and landing pages.
        </p>
        <Button>Call to Action</Button>
      </div>
    </GradientBackground>
  ),
}

export const GradientSubtle: StoryObj = {
  name: "Gradient — Subtle",
  parameters: { controls: { hide: true } },
  render: () => (
    <GradientBackground variant="subtle" className="flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl mb-4">Subtle Gradient</h1>
        <p className="text-muted-foreground mb-8">
          Barely-there gradient from very dark to slightly less dark. Perfect
          for pricing sections, FAQ, or footer areas.
        </p>
      </div>
    </GradientBackground>
  ),
}

export const GradientNight: StoryObj = {
  name: "Gradient — Night",
  parameters: { controls: { hide: true } },
  render: () => (
    <GradientBackground variant="night" className="flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl mb-4">Night Gradient</h1>
        <p className="text-muted-foreground mb-8">
          Dark gradient from slate through night and back. Elegant section
          separation.
        </p>
      </div>
    </GradientBackground>
  ),
}

export const NetworkAnimated: StoryObj = {
  name: "Network — Animated",
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="relative min-h-screen bg-background flex items-center justify-center">
      <NetworkBackground opacity={0.4} nodeCount={50} />
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-5xl mb-4 text-white">Network Background</h1>
        <p className="text-white/80 text-lg mb-8">
          Animated network of connected nodes with flowing particles. Perfect
          for tech/SaaS platforms and enterprise products.
        </p>
      </div>
    </div>
  ),
}

export const GrainyGradient: StoryObj = {
  name: "Grainy Gradient",
  parameters: { controls: { hide: true } },
  render: () => (
    <GrainyGradientBackground className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl mb-4 text-white">Grainy Gradient</h1>
        <p className="text-white/90 text-lg mb-8">
          Artistic grainy gradient with multiple colored ellipses and blur
          overlay. Creates organic, textured background for creative sections.
        </p>
        <Button>Explore</Button>
      </div>
    </GrainyGradientBackground>
  ),
}

export const Pattern: StoryObj = {
  name: "Pattern — Default (48px)",
  parameters: { controls: { hide: true } },
  render: () => (
    <PatternBackground className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl mb-4 text-white">Pattern Background</h1>
        <p className="text-white/90 text-lg mb-8">
          L-shaped pattern with small dots in corners. Creates a subtle,
          structured grid effect.
        </p>
        <Button>View Details</Button>
      </div>
    </PatternBackground>
  ),
}

export const PatternCompact: StoryObj = {
  name: "Pattern — Compact (32px)",
  parameters: { controls: { hide: true } },
  render: () => (
    <PatternBackground
      tileSize={32}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl mb-4 text-white">
          Pattern Background (Compact)
        </h1>
        <p className="text-white/90 text-lg mb-8">
          Same L-shaped pattern with smaller 32px tiles for a denser, more
          detailed effect.
        </p>
        <Button>View Details</Button>
      </div>
    </PatternBackground>
  ),
}

export const CombinedHero: StoryObj = {
  name: "Combined — Gradient + Network",
  parameters: { controls: { hide: true } },
  render: () => (
    <GradientBackground variant="berget" className="flex items-center justify-center">
      <NetworkBackground opacity={0.3} nodeCount={40} />
      <div className="relative z-10 text-center max-w-3xl px-6">
        <Badge className="mb-6">Maximum Visual Impact</Badge>
        <h1 className="text-6xl mb-6 text-white font-light">
          Gradient + Network
        </h1>
        <p className="text-white/90 text-xl mb-10 leading-relaxed">
          The ultimate hero section background. Combines brand gradient with
          animated network for tech platforms and enterprise SaaS products.
        </p>
        <div className="flex gap-4 justify-center">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </GradientBackground>
  ),
}

export const AllBackgrounds: StoryObj = {
  name: "All Backgrounds",
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="grid grid-cols-2 gap-px bg-white/10">
      <div className="min-h-[50vh] bg-background flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl mb-2">Solid Dark</h2>
          <p className="text-sm text-white/60">Pure focus</p>
        </div>
      </div>

      <GridBackground className="min-h-[50vh] flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl mb-2">Grid</h2>
          <p className="text-sm text-white/60">Structured</p>
        </div>
      </GridBackground>

      <GradientBackground
        variant="berget"
        className="min-h-[50vh] flex items-center justify-center p-8"
      >
        <div className="text-center">
          <h2 className="text-2xl mb-2 text-white">Gradient</h2>
          <p className="text-sm text-white/80">Visual impact</p>
        </div>
      </GradientBackground>

      <div className="relative min-h-[50vh] bg-background flex items-center justify-center p-8">
        <NetworkBackground opacity={0.4} nodeCount={30} />
        <div className="relative z-10 text-center">
          <h2 className="text-2xl mb-2 text-white">Network</h2>
          <p className="text-sm text-white/60">Tech/Enterprise</p>
        </div>
      </div>

      <GrainyGradientBackground className="min-h-[50vh] flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl mb-2 text-white">Grainy Gradient</h2>
          <p className="text-sm text-white/80">Organic texture</p>
        </div>
      </GrainyGradientBackground>

      <PatternBackground className="min-h-[50vh] flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl mb-2 text-white">Pattern</h2>
          <p className="text-sm text-white/80">Dot & cross</p>
        </div>
      </PatternBackground>
    </div>
  ),
}
