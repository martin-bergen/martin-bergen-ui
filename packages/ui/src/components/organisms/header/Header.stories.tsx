import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { Button } from "../../atoms/button";
import type { LanguageSelectorOption } from "../../molecules/language-selector";
import { Home, Star, CreditCard, LogIn } from "lucide-react";

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
- Language selector using Select component

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

const defaultLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
];

const languageOptions: LanguageSelectorOption[] = [
  { value: "en", label: "English" },
  { value: "sv", label: "Svenska" },
  { value: "de", label: "Deutsch" },
];

/**
 * Default header with all elements
 */
export const Default: Story = {
  args: {
    links: defaultLinks,
    languageOptions,
    currentLanguage: "en",
    loginButton: (
      <Button variant="default" size="sm">
        <LogIn size={16} className="mr-2" />
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
 * With icons - navigation links with icons
 */
export const WithIcons: Story = {
  args: {
    links: [
      { label: "Home", href: "/", icon: Home },
      { label: "Features", href: "/features", icon: Star },
      { label: "Pricing", href: "/pricing", icon: CreditCard },
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
 * With active link
 */
export const WithActiveLink: Story = {
  args: {
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features", active: true },
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
 * Without CTA button
 */
export const WithoutCTA: Story = {
  args: {
    links: defaultLinks,
    languageOptions,
    currentLanguage: "en",
    loginButton: (
      <Button variant="default" size="sm">
        Login
      </Button>
    ),
    ctaButton: undefined,
  },
};

/**
 * Minimal - logo and nav only
 */
export const Minimal: Story = {
  args: {
    links: defaultLinks,
    languageOptions: [],
    loginButton: undefined,
    ctaButton: undefined,
  },
};

/**
 * Transparent variant (for hero overlays)
 */
export const Transparent: Story = {
  args: {
    variant: "transparent",
    links: defaultLinks,
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
    backgrounds: {
      default: "dark",
    },
  },
};

/**
 * With Swedish language selected
 */
export const SwedishLanguage: Story = {
  args: {
    links: [
      { label: "Hem", href: "/" },
      { label: "Funktioner", href: "/features" },
      { label: "Priser", href: "/pricing" },
    ],
    languageOptions,
    currentLanguage: "sv",
    loginButton: (
      <Button variant="default" size="sm">
        Logga in
      </Button>
    ),
    ctaButton: (
      <Button variant="primary" size="sm">
        Kom igång
      </Button>
    ),
  },
};

/**
 * With more navigation links
 */
export const MoreLinks: Story = {
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
 * Without language selector
 */
export const WithoutLanguageSelector: Story = {
  args: {
    links: defaultLinks,
    languageOptions: [],
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
 * With custom logo
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
    links: defaultLinks,
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
 * Mobile view - narrow viewport
 */
export const MobileView: Story = {
  args: {
    links: defaultLinks,
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
 * With language change handler example
 */
export const WithLanguageChange: Story = {
  args: {
    links: defaultLinks,
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

import * as React from "react";
