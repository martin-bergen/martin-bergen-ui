import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  getTokensByCategory,
  TokenTable,
  resolveCSSVariable,
} from "../../lib/token-engine";
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
        <div className="text-white text-sm">{name}</div>
        <div className="text-white/50 text-xs font-mono">{varName}</div>
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
    <h2 className="text-3xl font-serif text-white mb-2">{title}</h2>
    {description && (
      <p className="text-white/60 mb-6 max-w-2xl">{description}</p>
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
            <h1 className="text-5xl font-serif text-white mb-4">
              Design Tokens
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Berget Design System - All design tokens driven by CSS variables
              as single source of truth
            </p>
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
                <div className="text-white/60 text-sm mb-6">
                  Serif (Ovo) - Headings
                </div>
                <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl font-serif text-white mb-2">
                      Heading 1
                    </h1>
                    <div className="text-xs text-white/50 font-mono space-y-1">
                      <div>Size: 5rem (80px)</div>
                      <div>Line Height: 5.5rem (88px)</div>
                      <div>Letter Spacing: -0.03em</div>
                      <div>Font Weight: 400</div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-4xl font-serif text-white mb-2">
                      Heading 2
                    </h2>
                    <div className="text-xs text-white/50 font-mono space-y-1">
                      <div>Size: 2.5rem (40px)</div>
                      <div>Line Height: 3.5rem (56px)</div>
                      <div>Letter Spacing: -0.03em</div>
                      <div>Font Weight: 400</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-white mb-2">
                      Heading 4
                    </h4>
                    <div className="text-xs text-white/50 font-mono space-y-1">
                      <div>Size: 1.5rem (24px)</div>
                      <div>Line Height: 2.5rem (40px)</div>
                      <div>Letter Spacing: -0.01em</div>
                      <div>Font Weight: 400</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-white/60 text-sm mb-6">
                  Sans (DM Sans) - Body & UI
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-sans text-white mb-2">
                      Heading 3
                    </h3>
                    <div className="text-xs text-white/50 font-mono space-y-1">
                      <div>Size: 1.5rem (24px)</div>
                      <div>Line Height: 2rem (32px)</div>
                      <div>Letter Spacing: -0.01em</div>
                      <div>Font Weight: 400</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/50 font-mono space-y-1 mb-4">
                      <div>text-lg - 18px</div>
                    </div>
                    <p className="text-lg text-foreground mb-4">Large text</p>
                    <div className="text-xs text-white/50 font-mono space-y-1 mb-4">
                      <div>text-base - 16px (default body)</div>
                    </div>
                    <p className="text-base text-foreground mb-4">Body text</p>
                    <div className="text-xs text-white/50 font-mono space-y-1 mb-4">
                      <div>text-sm - 14px (UI text, labels)</div>
                    </div>
                    <p className="text-sm text-foreground mb-4">Small text</p>
                    <div className="text-xs text-white/50 font-mono space-y-1 mb-4">
                      <div>text-xs - 12px (captions, badges)</div>
                    </div>
                    <p className="text-xs text-foreground">Extra small text</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-white/60 text-sm mb-6">
                  Monospace (DM Mono) - Code
                </div>
                <div>
                  <div className="text-xs text-white/50 font-mono space-y-1">
                    <div>Size: 1rem (16px)</div>
                    <div>Line Height: 1rem (16px)</div>
                    <div>Letter Spacing: normal</div>
                    <div>Font Weight: 400</div>
                  </div>
                  <p className="text-base font-mono text-foreground">
                    Monospace text
                  </p>
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
                <p className="text-foreground text-lg mb-1">
                  text-foreground - Primary text
                </p>
                <p className="text-xs text-white/50 font-mono">
                  White (#FFFFFF) on dark, dark (#1A1A1A) on light
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-lg mb-1">
                  text-muted-foreground - Secondary text
                </p>
                <p className="text-xs text-white/50 font-mono">
                  Cloud at 60% opacity
                </p>
              </div>
              <div>
                <p
                  className="text-lg mb-1"
                  style={{ color: "hsl(var(--berget-brand-moss))" }}
                >
                  text-moss - Brand accent
                </p>
                <p className="text-xs text-white/50 font-mono">
                  Moss green (#52B788)
                </p>
              </div>
              <div>
                <p
                  className="text-lg mb-1"
                  style={{ color: "hsl(var(--berget-brand-cloud))" }}
                >
                  text-cloud - Light neutral
                </p>
                <p className="text-xs text-white/50 font-mono">
                  Cloud (#E5DDD5)
                </p>
              </div>
              <div>
                <p
                  className="text-lg mb-1"
                  style={{ color: "hsl(var(--berget-brand-lichen))" }}
                >
                  text-lichen - Light green
                </p>
                <p className="text-xs text-white/50 font-mono">
                  Lichen (#74C69D)
                </p>
              </div>
              <div>
                <p
                  className="text-lg mb-1"
                  style={{ color: "hsl(var(--berget-brand-slate))" }}
                >
                  text-slate - Dark neutral (light buttons)
                </p>
                <p className="text-xs text-white/50 font-mono">
                  Slate (#1A1A1A)
                </p>
              </div>
              <div>
                <p
                  className="text-lg mb-1"
                  style={{ color: "hsl(var(--berget-brand-success))" }}
                >
                  text-success - Success
                </p>
                <p className="text-xs text-white/50 font-mono">#52B788</p>
              </div>
              <div>
                <p
                  className="text-lg mb-1"
                  style={{ color: "hsl(var(--berget-brand-warning))" }}
                >
                  text-warning - Warning
                </p>
                <p className="text-xs text-white/50 font-mono">#CFFF8B</p>
              </div>
              <div>
                <p
                  className="text-lg mb-1"
                  style={{ color: "hsl(var(--berget-brand-error))" }}
                >
                  text-error - Error
                </p>
                <p className="text-xs text-white/50 font-mono">#D1392E</p>
              </div>
              <div>
                <p
                  className="text-lg mb-1"
                  style={{ color: "hsl(var(--berget-brand-info))" }}
                >
                  text-info - Info
                </p>
                <p className="text-xs text-white/50 font-mono">#3975D6</p>
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
                <div className="text-white/60 text-sm mb-6">
                  Icon Specifications
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white mb-2">Library</div>
                    <div className="text-white/70">Lucide React (outline)</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white mb-2">Stroke Width</div>
                    <div className="text-white/70">
                      1.25-1.5px (size-dependent)
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white mb-2">Sizes</div>
                    <div className="text-white/70">16px, 24px, 32px</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white mb-2">Default Size</div>
                    <div className="text-white/70">32x32px</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-white/60 text-sm mb-6">Icon Sizes</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center gap-4">
                    <Home strokeWidth={1.25} className="w-4 h-4 text-white" />
                    <div className="text-center">
                      <div className="text-white text-sm">Small</div>
                      <div className="text-white/50 text-xs font-mono">
                        16x16px
                      </div>
                      <div className="text-white/50 text-xs font-mono">
                        Stroke: 1.25px
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Home strokeWidth={1.5} className="w-6 h-6 text-white" />
                    <div className="text-center">
                      <div className="text-white text-sm">Medium</div>
                      <div className="text-white/50 text-xs font-mono">
                        24x24px
                      </div>
                      <div className="text-white/50 text-xs font-mono">
                        Stroke: 1.5px
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Home strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <div className="text-center">
                      <div className="text-white text-sm">Large</div>
                      <div className="text-white/50 text-xs font-mono">
                        32x32px
                      </div>
                      <div className="text-white/50 text-xs font-mono">
                        Stroke: 1.5px
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-white/60 text-sm mb-6">
                  Common Icons (32x32px)
                </div>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <Home strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings
                      strokeWidth={1.5}
                      className="w-8 h-8 text-white"
                    />
                    <span className="text-white/60 text-xs">Settings</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <User strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">User</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Search strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Search</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Bell strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Bell</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Heart strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Heart</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Star strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Star</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <ChevronRight
                      strokeWidth={1.5}
                      className="w-8 h-8 text-white"
                    />
                    <span className="text-white/60 text-xs">Chevron</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Plus strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Plus</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Minus strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Minus</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Check strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Check</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <X strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">X</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Zap strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Zap</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Bot strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Bot</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Server strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Server</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Cloud strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Cloud</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Shield strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Shield</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Folder strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Folder</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Cog strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Cog</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <BrainCircuit
                      strokeWidth={1.5}
                      className="w-8 h-8 text-white"
                    />
                    <span className="text-white/60 text-xs">Brain</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Layers strokeWidth={1.5} className="w-8 h-8 text-white" />
                    <span className="text-white/60 text-xs">Layers</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Leaf
                      strokeWidth={1.5}
                      className="w-8 h-8 text-berget-brand-moss"
                    />
                    <span className="text-white/60 text-xs">Leaf</span>
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
                <div className="text-white/60 text-sm mb-6">Border Radius</div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-berget-brand-moss rounded-full" />
                    <span className="text-white text-sm">
                      rounded-full (Buttons/Badges)
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-berget-brand-lichen rounded-2xl" />
                    <span className="text-white text-sm">
                      rounded-2xl (Cards)
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-berget-brand-spruce rounded-md" />
                    <span className="text-white text-sm">
                      rounded-md (Inputs)
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-white/60 text-sm mb-6">
                  Container Widths
                </div>
                <div className="space-y-3 text-sm">
                  <div className="text-white">sm: max-w-3xl (768px)</div>
                  <div className="text-white">md: max-w-5xl (1024px)</div>
                  <div className="text-white">lg: max-w-7xl (1280px)</div>
                  <div className="text-white">xl: max-w-[1400px]</div>
                  <div className="text-white">full: max-w-full</div>
                </div>
              </div>
              <div>
                <div className="text-white/60 text-sm mb-6">Grid Gaps</div>
                <div className="space-y-3 text-sm">
                  <div className="text-white">sm: gap-4 (1rem)</div>
                  <div className="text-white">md: gap-8 (2rem)</div>
                  <div className="text-white">lg: gap-12 (3rem)</div>
                  <div className="text-white">xl: gap-16 (4rem)</div>
                </div>
              </div>
            </div>
          </TokenSection>

          {/* All CSS Variables */}
          <div className="mt-16">
            <h2 className="text-3xl font-serif text-white mb-8">
              All CSS Variables
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl">
              Complete list of all CSS variables defined in the design system
            </p>
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
