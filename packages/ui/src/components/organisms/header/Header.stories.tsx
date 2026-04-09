import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { Button } from "../../atoms/button";
import type { LanguageSelectorOption } from "../../molecules/language-selector";
import * as React from "react";

const meta = {
  title: "Organisms/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Responsive header component with logo, navigation links, language selector, login, and CTA button.

**Design Pattern:**
- Sticky header with blur backdrop
- Full layout on desktop (logo left, nav center, actions right)
- Hamburger menu with dropdown on mobile
- Language selector using globe icon trigger

**When to Use:**
- Main site navigation
- Application headers
- Landing page headers

**Features:**
- Responsive design (mobile/desktop)
- Sticky positioning with blur effect
- Accessible navigation
- Dynamic language switching
- Customizable logo, links, and actions
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "transparent"],
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const languageOptions: LanguageSelectorOption[] = [
  { value: "en", label: "English" },
  { value: "sv", label: "Svenska" },
  { value: "de", label: "Deutsch" },
];

/**
 * Full header with all elements - shows all features
 */
export const Full: Story = {
  args: {
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    languageOptions,
    currentLanguage: "en",
    loginButton: (
      <Button variant="default" size="sm">
        Login
      </Button>
    ),
    ctaButton: (
      <Button variant="primary" size="sm">
        Get Started
      </Button>
    ),
  },
};

/**
 * Custom logo example - shows how to replace the default logotype
 */
export const CustomLogo: Story = {
  args: {
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-berget-brand-moss flex items-center justify-center">
          <span className="text-berget-brand-peak font-bold text-sm">B</span>
        </div>
        <span className="text-berget-foreground font-semibold">Berget</span>
      </div>
    ),
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
    languageOptions,
    currentLanguage: "en",
    loginButton: (
      <Button variant="default" size="sm">
        Login
      </Button>
    ),
    ctaButton: (
      <Button variant="primary" size="sm">
        Get Started
      </Button>
    ),
  },
};

/**
 * Mobile view - hamburger menu with dropdown
 */
export const Mobile: Story = {
  args: {
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
    languageOptions,
    currentLanguage: "en",
    loginButton: (
      <Button variant="default" size="sm">
        Login
      </Button>
    ),
    ctaButton: (
      <Button variant="primary" size="sm">
        Get Started
      </Button>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "iphone12",
    },
  },
};

/**
 * Interactive - test different configurations with controls
 */
export const Interactive: Story = {
  args: {
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
    languageOptions,
    currentLanguage: "en",
    loginButton: (
      <Button variant="default" size="sm">
        Login
      </Button>
    ),
    ctaButton: (
      <Button variant="primary" size="sm">
        Get Started
      </Button>
    ),
  },
  render: (args) => {
    const [currentLanguage, setCurrentLanguage] = React.useState("en");

    return (
      <Header
        {...args}
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />
    );
  },
};
