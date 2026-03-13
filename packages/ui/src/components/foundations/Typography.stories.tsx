import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundations/Typography",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
# Typography

All font weights are locked to 400 (Regular) globally via CSS custom properties.
Using font-medium, font-semibold, font-bold, etc. will have no visual effect.

This ensures consistent typography across the entire design system.
`,
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const pangram = "The quick brown fox jumps over the lazy dog";

export const Headings: Story = {
  render: () => (
    <div className="bg-background p-8 space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-foreground mb-1">Headings</h2>
        <p className="text-muted-foreground">
          H1, H2, H4 = Ovo (serif) | H3 = DM Sans (sans)
        </p>
      </div>

      <div className="bg-berget-brand-cloud/5 border border-berget-brand-cloud/10 rounded-xl p-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            h1 - Ovo / 5rem / -0.03em
          </div>
          <h1 className="font-serif text-5xl text-foreground">{pangram}</h1>
        </div>

        <div className="border-t border-berget-brand-cloud/10" />

        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            h2 - Ovo / 2.5rem / -0.03em
          </div>
          <h2 className="font-serif text-4xl text-foreground">{pangram}</h2>
        </div>

        <div className="border-t border-berget-brand-cloud/10" />

        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            h3 - DM Sans / 1.5rem
          </div>
          <h3 className="font-sans text-3xl text-foreground">{pangram}</h3>
        </div>

        <div className="border-t border-berget-brand-cloud/10" />

        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            h4 - Ovo / 1.25rem
          </div>
          <h4 className="font-serif text-xl text-foreground">{pangram}</h4>
        </div>
      </div>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className="bg-background p-8 space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-foreground mb-1">Body Text</h2>
        <p className="text-muted-foreground">
          All body and UI text uses DM Sans
        </p>
      </div>

      <div className="bg-berget-brand-cloud/5 border border-berget-brand-cloud/10 rounded-xl p-8 space-y-8">
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
};

export const FontWeights: Story = {
  render: () => (
    <div className="bg-background p-8 space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-foreground mb-1">
          Font Weights
        </h2>
        <p className="text-muted-foreground">
          All font weights render as 400 (Regular) - see locked weights note
          above
        </p>
      </div>

      <div className="bg-berget-brand-cloud/5 border border-berget-brand-cloud/10 rounded-xl p-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-mono">
            (400) - all text
          </div>
          <p className="text-xl text-foreground">{pangram}</p>
        </div>
      </div>
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div className="bg-background p-8 space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-foreground mb-1">
          Text Colors
        </h2>
        <p className="text-muted-foreground">Semantic text color tokens</p>
      </div>

      <div className="bg-berget-brand-cloud/5 border border-berget-brand-cloud/10 rounded-xl p-8 space-y-6">
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
};
