import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const Swatch = ({
  name,
  cssVar,
  hex,
  className,
}: {
  name: string
  cssVar: string
  hex: string
  className: string
}) => (
  <div className="flex items-center gap-3">
    <div
      className={`w-12 h-12 rounded-lg border border-white/10 ${className}`}
    />
    <div>
      <div className="text-sm font-medium text-foreground">{name}</div>
      <div className="text-xs text-muted-foreground">{hex}</div>
      <div className="text-xs text-muted-foreground font-mono">{cssVar}</div>
    </div>
  </div>
)

const Section = ({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) => (
  <div className="space-y-4">
    <div>
      <h3 className="text-lg font-medium text-foreground">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
    <div className="bg-cloud/5 border border-cloud/10 rounded-xl p-6">
      {children}
    </div>
  </div>
)

export const BrandColors: Story = {
  render: () => (
    <div className="bg-background p-8 space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-foreground mb-1">
          Brand Colors
        </h2>
        <p className="text-muted-foreground">
          Scandinavian-inspired natural palette
        </p>
      </div>

      <Section
        title="Primary Palette"
        description="Core brand greens used for actions and emphasis"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Swatch
            name="Moss"
            cssVar="--moss"
            hex="#52B788"
            className="bg-moss"
          />
          <Swatch
            name="Lichen"
            cssVar="--lichen"
            hex="#74C69D"
            className="bg-lichen"
          />
          <Swatch
            name="Spruce"
            cssVar="--spruce"
            hex="#2D6A4F"
            className="bg-spruce"
          />
          <Swatch
            name="Fjord"
            cssVar="--fjord"
            hex="#0F405A"
            className="bg-fjord"
          />
        </div>
      </Section>

      <Section
        title="Neutral Palette"
        description="Background, text, and surface colors"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Swatch
            name="Peak"
            cssVar="--peak"
            hex="#FFFFFF"
            className="bg-peak"
          />
          <Swatch
            name="Cloud"
            cssVar="--cloud"
            hex="#E5DDD5"
            className="bg-cloud"
          />
          <Swatch
            name="Slate"
            cssVar="--slate"
            hex="#1A1A1A"
            className="bg-slate"
          />
          <Swatch
            name="Night"
            cssVar="--night"
            hex="#0A0A0A"
            className="bg-night"
          />
        </div>
      </Section>
    </div>
  ),
}

export const SemanticColors: Story = {
  render: () => (
    <div className="bg-background p-8 space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-foreground mb-1">
          Semantic Colors
        </h2>
        <p className="text-muted-foreground">Status and feedback colors</p>
      </div>

      <Section
        title="Status Colors"
        description="Used for alerts, badges, and feedback"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Swatch
            name="Success"
            cssVar="--success"
            hex="#52B788"
            className="bg-success"
          />
          <Swatch
            name="Warning"
            cssVar="--warning"
            hex="#CFFF8B"
            className="bg-warning"
          />
          <Swatch
            name="Error"
            cssVar="--error"
            hex="#D1392E"
            className="bg-error"
          />
          <Swatch
            name="Info"
            cssVar="--info"
            hex="#3975D6"
            className="bg-info"
          />
        </div>
      </Section>

      <Section
        title="UI Colors"
        description="Mapped semantic tokens for surfaces and text"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <Swatch
            name="Background"
            cssVar="--background"
            hex="#0A0A0A"
            className="bg-background border !border-cloud/20"
          />
          <Swatch
            name="Foreground"
            cssVar="--foreground"
            hex="#FFFFFF"
            className="bg-foreground"
          />
          <Swatch
            name="Card"
            cssVar="--card"
            hex="#121212"
            className="bg-card border !border-cloud/20"
          />
          <Swatch
            name="Primary"
            cssVar="--primary"
            hex="Moss"
            className="bg-primary"
          />
          <Swatch
            name="Secondary"
            cssVar="--secondary"
            hex="Lichen"
            className="bg-secondary"
          />
          <Swatch
            name="Accent"
            cssVar="--accent"
            hex="Fjord"
            className="bg-accent"
          />
          <Swatch
            name="Muted"
            cssVar="--muted"
            hex="#1A1A1A"
            className="bg-muted border !border-cloud/20"
          />
          <Swatch
            name="Destructive"
            cssVar="--destructive"
            hex="#D1392E"
            className="bg-destructive"
          />
          <Swatch
            name="Input"
            cssVar="--input"
            hex="#262626"
            className="bg-input border !border-cloud/20"
          />
        </div>
      </Section>
    </div>
  ),
}

export const BorderColors: Story = {
  render: () => (
    <div className="bg-background p-8 space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-foreground mb-1">
          Border Tokens
        </h2>
        <p className="text-muted-foreground">
          Opacity-based border system using brand colors
        </p>
      </div>

      <Section
        title="Base Borders"
        description="Subtle borders for containers and dividers"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-cloud/5 bg-cloud/5" />
            <div>
              <div className="text-sm font-medium text-foreground">Base</div>
              <div className="text-xs text-muted-foreground">Cloud at 5%</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-cloud/10 bg-cloud/5" />
            <div>
              <div className="text-sm font-medium text-foreground">Hover</div>
              <div className="text-xs text-muted-foreground">Cloud at 10%</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-cloud/20 bg-cloud/5" />
            <div>
              <div className="text-sm font-medium text-foreground">Strong</div>
              <div className="text-xs text-muted-foreground">Cloud at 20%</div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Themed Borders"
        description="Brand-colored borders for emphasis"
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-moss/20 bg-moss/5" />
            <div>
              <div className="text-sm font-medium text-foreground">Moss</div>
              <div className="text-xs text-muted-foreground">20%</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-lichen/20 bg-lichen/5" />
            <div>
              <div className="text-sm font-medium text-foreground">Lichen</div>
              <div className="text-xs text-muted-foreground">20%</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-spruce/20 bg-spruce/5" />
            <div>
              <div className="text-sm font-medium text-foreground">Spruce</div>
              <div className="text-xs text-muted-foreground">20%</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-fjord/20 bg-fjord/5" />
            <div>
              <div className="text-sm font-medium text-foreground">Fjord</div>
              <div className="text-xs text-muted-foreground">20%</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-cloud/20 bg-cloud/5" />
            <div>
              <div className="text-sm font-medium text-foreground">Cloud</div>
              <div className="text-xs text-muted-foreground">20%</div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Alert Borders"
        description="Higher opacity for status feedback"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-success/50 bg-success/10" />
            <div>
              <div className="text-sm font-medium text-foreground">Success</div>
              <div className="text-xs text-muted-foreground">50%</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-warning/50 bg-warning/10" />
            <div>
              <div className="text-sm font-medium text-foreground">Warning</div>
              <div className="text-xs text-muted-foreground">50%</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-error/50 bg-error/10" />
            <div>
              <div className="text-sm font-medium text-foreground">Error</div>
              <div className="text-xs text-muted-foreground">50%</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-info/50 bg-info/10" />
            <div>
              <div className="text-sm font-medium text-foreground">Info</div>
              <div className="text-xs text-muted-foreground">50%</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  ),
}
