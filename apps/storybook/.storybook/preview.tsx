import type { Preview } from "@storybook/react";
import React from "react";
import "../src/styles.css";

// Force dark background on Storybook wrapper elements
const style = document.createElement("style");
style.innerHTML = `
  .sb-main-padded {
    max-width: none !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    background: hsl(0 0% 4%) !important;
  }

  .sb-main-padded:has([data-layout="centered"]) {
    padding: 2rem !important;
    background: hsl(0 0% 4%) !important;
    background-image:
      linear-gradient(to bottom, rgba(229, 221, 213, 0.02) 1px, transparent 1px),
      linear-gradient(to right, rgba(229, 221, 213, 0.02) 1px, transparent 1px) !important;
    background-size: 24px 24px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    min-height: 100vh !important;
  }

  .sb-show-main {
    background: hsl(0 0% 4%) !important;
    width: 100% !important;
    max-width: none !important;
  }

  #storybook-root {
    width: 100% !important;
    max-width: none !important;
    min-height: 100vh !important;
    background: hsl(0 0% 4%);
    color: hsl(0 0% 100%);
  }

  body, .sb-show-main, #storybook-root {
    font-family: 'DM Sans', sans-serif !important;
    color: hsl(0 0% 100%) !important;
  }

  /* Light mode overrides for Storybook wrapper */
  html.light .sb-main-padded,
  html.light .sb-show-main,
  html.light #storybook-root {
    background: hsl(0 0% 96%) !important;
    color: hsl(0 0% 10%) !important;
  }

  html.light body,
  html.light .sb-show-main,
  html.light #storybook-root {
    color: hsl(0 0% 10%) !important;
  }
`;
document.head.appendChild(style);

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    backgrounds: {
      default: "berget-dark",
      values: [
        { name: "berget-dark", value: "transparent" },
        { name: "light", value: "#f5f5f5" },
      ],
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Foundations",
          "Atoms",
          "Molecules",
          "Organisms",
          "Templates",
          "Utilities",
          "*",
        ],
      },
    },
  },

  globalTypes: {
    darkMode: {
      name: "Dark Mode",
      description: "Toggle dark mode",
      defaultValue: true,
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: true, icon: "circlehollow", title: "Dark" },
          { value: false, icon: "circle", title: "Light" },
        ],
      },
    },
  },

  initialGlobals: {
    darkMode: true,
  },

  decorators: [
    (Story, context) => {
      const isDark = context.globals["darkMode"] !== false;
      document.documentElement.classList.toggle("light", !isDark);
      return <Story />;
    },
  ],
};

export default preview;
