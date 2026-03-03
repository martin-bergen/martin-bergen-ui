import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
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
} from "lucide-react"

const meta = {
  title: "Foundations/DesignTokens",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const ColorSwatch = ({
  name,
  value,
  hex,
}: {
  name: string
  value: string
  hex?: string
}) => (
  <div className="flex items-center gap-3">
    <div
      className="w-12 h-12 rounded-md border border-white/10"
      style={{ backgroundColor: value }}
    />
    <div>
      <div className="text-white font-medium">{name}</div>
      <div className="text-white/60 text-sm">{hex || value}</div>
    </div>
  </div>
)

const TokenSection = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <div className="mb-8">
    <h3 className="text-2xl font-serif text-white mb-4">{title}</h3>
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      {children}
    </div>
  </div>
)

export const DesignTokens: Story = {
  render: () => (
    <div className="min-h-screen bg-night p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-white mb-4">
            Design Tokens
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Berget Design System V2 - All foundational design tokens in one
            place
          </p>
        </div>

        {/* Brand Colors */}
        <TokenSection title="Brand Colors">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ColorSwatch name="Moss" value="#52B788" />
            <ColorSwatch name="Lichen" value="#74C69D" />
            <ColorSwatch name="Spruce" value="#2D6A4F" />
            <ColorSwatch name="Fjord" value="#0F405A" />
            <ColorSwatch name="Peak" value="#FFFFFF" />
            <ColorSwatch name="Cloud" value="#E5DDD5" />
            <ColorSwatch name="Slate" value="#1A1A1A" />
            <ColorSwatch name="Night" value="#0A0A0A" />
          </div>
        </TokenSection>

        {/* Semantic Colors */}
        <TokenSection title="Semantic Colors">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ColorSwatch name="Success" value="#52B788" />
            <ColorSwatch name="Warning" value="#CFFF8B" />
            <ColorSwatch name="Error" value="#D1392E" />
            <ColorSwatch name="Info" value="#3975D6" />
          </div>
        </TokenSection>

        {/* Border Tokens */}
        <TokenSection title="Border Tokens">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md border border-cloud/5 bg-white/5" />
              <div>
                <div className="text-white font-medium">Border Base</div>
                <div className="text-white/60 text-sm">Cloud at 5%</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md border border-cloud/10 bg-white/5" />
              <div>
                <div className="text-white font-medium">Border Hover</div>
                <div className="text-white/60 text-sm">Cloud at 10%</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md border border-moss/40 bg-moss/5" />
              <div>
                <div className="text-white font-medium">Border Primary</div>
                <div className="text-white/60 text-sm">Moss at 40%</div>
              </div>
            </div>
          </div>
        </TokenSection>

        {/* Typography */}
        <TokenSection title="Typography">
          <div className="space-y-12">
            <div>
              <div className="text-white/60 text-sm mb-6">
                Serif (Ovo) - Headings
              </div>
              <h1 className="text-5xl font-serif text-white mb-6">
                H1 - 64px / 5rem
              </h1>
              <h2 className="text-4xl font-serif text-white mb-6">
                H2 - 40px / 2.5rem
              </h2>
            </div>
            <div>
              <div className="text-white/60 text-sm mb-6">
                Sans (DM Sans) - Body & UI
              </div>
              <h3 className="text-2xl font-sans text-white mb-4">
                H3 - 24px / 1.5rem
              </h3>
              <p className="text-base font-sans text-white mb-4">
                Body - 16px / 1rem
              </p>
              <p className="text-sm font-sans text-white/70">
                Small - 14px / 0.875rem
              </p>
            </div>
          </div>
        </TokenSection>

        {/* Icons */}
        <TokenSection title="Icons">
          <div className="space-y-8">
            <div>
              <div className="text-white/60 text-sm mb-6">
                Icon Specifications
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-white font-medium mb-2">Library</div>
                  <div className="text-white/70">Lucide React (outline)</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-white font-medium mb-2">
                    Stroke Width
                  </div>
                  <div className="text-white/70">1.5px</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-white font-medium mb-2">
                    Default Size
                  </div>
                  <div className="text-white/70">32x32px</div>
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
                  <Leaf strokeWidth={1.5} className="w-8 h-8 text-moss" />
                  <span className="text-white/60 text-xs">Leaf</span>
                </div>
              </div>
            </div>
          </div>
        </TokenSection>

        {/* Layout Standards */}
        <TokenSection title="Layout Standards">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="text-white/60 text-sm mb-6">Border Radius</div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-moss rounded-full" />
                  <span className="text-white text-sm">
                    rounded-full (Buttons/Badges)
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-lichen rounded-2xl" />
                  <span className="text-white text-sm">
                    rounded-2xl (Cards)
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-spruce rounded-md" />
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
      </div>
    </div>
  ),
}
