import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Foundations/Typography",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const pangram = "The quick brown fox jumps over the lazy dog"

export const Headings: Story = {
  render: () => (
    <div className="bg-background p-8 space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-foreground mb-1">Headings</h2>
        <p className="text-muted-foreground">
          Serif headings use Ovo, sub-headings use DM Sans
        </p>
      </div>

      <div className="bg-cloud/5 border border-cloud/10 rounded-xl p-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            h1 - Ovo / 5rem / -0.03em
          </div>
          <h1 className="text-5xl text-foreground">{pangram}</h1>
        </div>

        <div className="border-t border-cloud/10" />

        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            h2 - Ovo / 2.5rem / -0.03em
          </div>
          <h2 className="text-4xl text-foreground">{pangram}</h2>
        </div>

        <div className="border-t border-cloud/10" />

        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            h3 - DM Sans / 1.5rem
          </div>
          <h3 className="text-2xl text-foreground">{pangram}</h3>
        </div>

        <div className="border-t border-cloud/10" />

        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            h4 - DM Sans / 1.25rem
          </div>
          <h4 className="text-xl text-foreground">{pangram}</h4>
        </div>
      </div>
    </div>
  ),
}

export const BodyText: Story = {
  render: () => (
    <div className="bg-background p-8 space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-foreground mb-1">Body Text</h2>
        <p className="text-muted-foreground">
          All body and UI text uses DM Sans
        </p>
      </div>

      <div className="bg-cloud/5 border border-cloud/10 rounded-xl p-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            text-lg - 18px
          </div>
          <p className="text-lg text-foreground">{pangram}</p>
        </div>

        <div className="border-t border-cloud/10" />

        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            text-base - 16px (default body)
          </div>
          <p className="text-base text-foreground">{pangram}</p>
        </div>

        <div className="border-t border-cloud/10" />

        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            text-sm - 14px (UI text, labels)
          </div>
          <p className="text-sm text-foreground">{pangram}</p>
        </div>

        <div className="border-t border-cloud/10" />

        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            text-xs - 12px (captions, badges)
          </div>
          <p className="text-xs text-foreground">{pangram}</p>
        </div>
      </div>
    </div>
  ),
}

export const FontWeights: Story = {
  render: () => (
    <div className="bg-background p-8 space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-foreground mb-1">
          Font Weights
        </h2>
        <p className="text-muted-foreground">
          DM Sans weights: 400 (regular), 500 (medium), 600 (semibold)
        </p>
      </div>

      <div className="bg-cloud/5 border border-cloud/10 rounded-xl p-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            font-normal (400) - body text
          </div>
          <p className="text-xl font-normal text-foreground">{pangram}</p>
        </div>

        <div className="border-t border-cloud/10" />

        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            font-medium (500) - labels, buttons
          </div>
          <p className="text-xl font-medium text-foreground">{pangram}</p>
        </div>

        <div className="border-t border-cloud/10" />

        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            font-semibold (600) - card titles, emphasis
          </div>
          <p className="text-xl font-semibold text-foreground">{pangram}</p>
        </div>
      </div>
    </div>
  ),
}

export const TextColors: Story = {
  render: () => (
    <div className="bg-background p-8 space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-foreground mb-1">
          Text Colors
        </h2>
        <p className="text-muted-foreground">
          Semantic text color tokens
        </p>
      </div>

      <div className="bg-cloud/5 border border-cloud/10 rounded-xl p-8 space-y-6">
        <div className="space-y-1">
          <p className="text-foreground text-lg">
            text-foreground - Primary text
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            White (#FFFFFF) on dark, dark (#1A1A1A) on light
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-muted-foreground text-lg">
            text-muted-foreground - Secondary text
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Cloud at 60% opacity
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-moss text-lg">text-moss - Brand accent</p>
          <p className="text-xs text-muted-foreground font-mono">
            Moss green (#52B788)
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-cloud text-lg">text-cloud - Light neutral</p>
          <p className="text-xs text-muted-foreground font-mono">
            Cloud (#E5DDD5)
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-success text-lg">text-success - Success</p>
          <p className="text-xs text-muted-foreground font-mono">#52B788</p>
        </div>

        <div className="space-y-1">
          <p className="text-warning text-lg">text-warning - Warning</p>
          <p className="text-xs text-muted-foreground font-mono">#CFFF8B</p>
        </div>

        <div className="space-y-1">
          <p className="text-error text-lg">text-error - Error</p>
          <p className="text-xs text-muted-foreground font-mono">#D1392E</p>
        </div>

        <div className="space-y-1">
          <p className="text-info text-lg">text-info - Info</p>
          <p className="text-xs text-muted-foreground font-mono">#3975D6</p>
        </div>
      </div>
    </div>
  ),
}
