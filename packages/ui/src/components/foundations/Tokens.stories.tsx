import type { Meta } from "@storybook/react";
import { getTokensByCategory, TokenTable } from "../../lib/token-engine";

const meta = {
  title: "Foundations/Tokens",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Automatically generated token documentation from CSS variables in index.css",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Tokens: React.FC = () => {
  const categories = getTokensByCategory();

  return (
    <div className="min-h-screen bg-berget-brand-night p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-serif text-white mb-4">Design Tokens</h1>
          <p className="text-white/60">
            Automatiskt genererad dokumentation från CSS-variabler
          </p>
        </div>

        {categories.map((category) => (
          <TokenTable
            key={category.name}
            title={category.name}
            tokens={category.tokens}
          />
        ))}
      </div>
    </div>
  );
};
