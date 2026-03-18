import * as React from "react";
import type { Preview } from "@storybook/react";
import "../src/styles.css";

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
          "Pages",
          "Templates",
          "Utilities",
          "login",
          "email",
          "*",
        ],
      },
    },
    viewport: {
      defaultViewport: "desktop",
      viewports: {
        desktop: {
          name: "Desktop",
          styles: { width: "1280px", height: "900px" },
          type: "desktop",
        },
        tablet: {
          name: "Tablet",
          styles: { width: "768px", height: "1024px" },
          type: "tablet",
        },
        mobile: {
          name: "Mobile",
          styles: { width: "375px", height: "812px" },
          type: "mobile",
        },
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
