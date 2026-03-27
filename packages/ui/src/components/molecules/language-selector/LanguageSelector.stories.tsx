// cspell:ignore Français Español
import type { Meta, StoryObj } from "@storybook/react";
import { LanguageSelector } from "./LanguageSelector";
import * as React from "react";

const meta = {
  title: "Molecules/LanguageSelector",
  component: LanguageSelector,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Compact language selector with a globe icon trigger.

**Design Pattern:**
- Icon button trigger (32x32px, rounded-full)
- Globe icon indicates internationalization
- Subtle styling with hover effects
- Dropdown with language options

**When to Use:**
- Site-wide language switching
- Application language preferences
- Multi-language content navigation

**Features:**
- Compact icon trigger (saves space)
- Globe icon (standard UX convention)
- Accessible dropdown selection
- Consistent with Berget design system
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LanguageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const languageOptions = [
  { value: "en", label: "English" },
  { value: "sv", label: "Svenska" },
  { value: "de", label: "Deutsch" },
  { value: "fr", label: "Français" },
  { value: "es", label: "Español" },
];

/**
 * Default language selector with English selected
 */
export const Default: Story = {
  args: {
    options: languageOptions,
    value: "en",
  },
};

/**
 * With Swedish language selected
 */
export const SwedishSelected: Story = {
  args: {
    options: languageOptions,
    value: "sv",
  },
};

/**
 * With German language selected
 */
export const GermanSelected: Story = {
  args: {
    options: languageOptions,
    value: "de",
  },
};

/**
 * With language change handler
 */
export const WithLanguageChange: Story = {
  args: {
    options: languageOptions,
    value: "en",
  },
  render: (args) => {
    const [currentLanguage, setCurrentLanguage] = React.useState("en");

    return (
      <LanguageSelector
        {...args}
        value={currentLanguage}
        onValueChange={setCurrentLanguage}
      />
    );
  },
};

/**
 * With disabled option
 */
export const WithDisabledOption: Story = {
  args: {
    options: [
      { value: "en", label: "English" },
      { value: "sv", label: "Svenska" },
      { value: "de", label: "Deutsch", disabled: true },
      { value: "fr", label: "Français" },
    ],
    value: "en",
  },
};

/**
 * Minimal language options
 */
export const MinimalOptions: Story = {
  args: {
    options: [
      { value: "en", label: "English" },
      { value: "sv", label: "Svenska" },
    ],
    value: "en",
  },
};

/**
 * With custom className
 */
export const WithCustomClass: Story = {
  args: {
    options: languageOptions,
    value: "en",
    className: "border-berget-brand-moss/30",
  },
};
