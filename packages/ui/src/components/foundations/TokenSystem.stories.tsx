import type { Meta, StoryObj } from "@storybook/react";
import { getColorValue, getSpacingValue, getTypographyValue, getBorderRadiusValue, type ColorPath } from "../../lib/token-utils";

const meta = {
  title: "Foundations/TokenSystem",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ExampleCard = ({ title, description, color }: { title: string; description: string; color: ColorPath }) => (
  <div
    className="p-6 rounded-2xl border border-white/10"
    style={{
      backgroundColor: `hsl(${getColorValue("brand.night")})`,
      borderColor: `hsl(${getColorValue(color)})`,
    }}
  >
    <h3 className="text-xl font-serif mb-2" style={{ color: `hsl(${getColorValue("brand.peak")})` }}>
      {title}
    </h3>
    <p className="text-sm" style={{ color: `hsl(${getColorValue("brand.cloud")})` }}>
      {description}
    </p>
  </div>
);

export const TokenSystemExample: Story = {
  render: () => (
    <div className="min-h-screen" style={{ backgroundColor: `hsl(${getColorValue("brand.night")})` }}>
      <div className="max-w-7xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif mb-4" style={{ color: `hsl(${getColorValue("brand.peak")})` }}>
            Token System Demo
          </h1>
          <p className="text-lg" style={{ color: `hsl(${getColorValue("brand.cloud")})` }}>
            All colors and spacing values come from the token system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExampleCard
            title="Moss Color"
            description="Primary brand color from tokens"
            color="brand.moss"
          />
          <ExampleCard
            title="Lichen Color"
            description="Secondary brand color from tokens"
            color="brand.lichen"
          />
          <ExampleCard
            title="Fjord Color"
            description="Accent color from tokens"
            color="brand.fjord"
          />
          <ExampleCard
            title="Success Color"
            description="Semantic success color from tokens"
            color="semantic.success"
          />
          <ExampleCard
            title="Warning Color"
            description="Semantic warning color from tokens"
            color="semantic.warning"
          />
          <ExampleCard
            title="Error Color"
            description="Semantic error color from tokens"
            color="semantic.error"
          />
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-white/10" style={{ backgroundColor: `hsl(${getColorValue("brand.slate")})` }}>
          <h2 className="text-2xl font-serif mb-4" style={{ color: `hsl(${getColorValue("brand.peak")})` }}>
            Token Usage Examples
          </h2>
          <div className="space-y-4 text-sm font-mono" style={{ color: `hsl(${getColorValue("brand.cloud")})` }}>
            <div>
              <strong>Color:</strong> getColorValue("brand.moss") = "{getColorValue("brand.moss")}"
            </div>
            <div>
              <strong>Spacing:</strong> getSpacingValue("featureCard.paddingVertical") = "{getSpacingValue("featureCard.paddingVertical")}"
            </div>
            <div>
              <strong>Typography:</strong> getTypographyValue("heading.h1") = {JSON.stringify(getTypographyValue("heading.h1"))}
            </div>
            <div>
              <strong>Border Radius:</strong> getBorderRadiusValue("full") = "{getBorderRadiusValue("full")}"
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-2xl border border-white/10" style={{ backgroundColor: `hsl(${getColorValue("brand.slate")})` }}>
          <h2 className="text-2xl font-serif mb-4" style={{ color: `hsl(${getColorValue("brand.peak")})` }}>
            How to Use Tokens
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-serif mb-2" style={{ color: `hsl(${getColorValue("brand.moss")})` }}>
                In React Components
              </h3>
              <pre className="p-4 rounded-lg overflow-x-auto text-xs" style={{ backgroundColor: `hsl(${getColorValue("brand.night")})`, color: `hsl(${getColorValue("brand.cloud")})` }}>
{`import { getColorValue } from "@berget-ai/ui/tokens";

function MyComponent() {
  return (
    <div style={{ color: \`hsl(\${getColorValue("brand.moss")})\` }}>
      Text with moss color
    </div>
  );
}`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-serif mb-2" style={{ color: `hsl(${getColorValue("brand.moss")})` }}>
                In Tailwind CSS
              </h3>
              <pre className="p-4 rounded-lg overflow-x-auto text-xs" style={{ backgroundColor: `hsl(${getColorValue("brand.night")})`, color: `hsl(${getColorValue("brand.cloud")})` }}>
{`<div className="bg-brand-moss text-peak">
  Using token colors
</div>

// Or with CSS variables
<div className="bg-[hsl(var(--brand-moss))]">
  Using CSS variables
</div>`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-serif mb-2" style={{ color: `hsl(${getColorValue("brand.moss")})` }}>
                Adding New Tokens
              </h3>
              <pre className="p-4 rounded-lg overflow-x-auto text-xs" style={{ backgroundColor: `hsl(${getColorValue("brand.night")})`, color: `hsl(${getColorValue("brand.cloud")})` }}>
{`// 1. Edit src/tokens.ts
brand: {
  newColor: { hue: 200, saturation: 50, lightness: 50 },
}

// 2. Run npm run generate:css
// 3. Use as bg-brand-newColor or getColorValue("brand.newColor")`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};