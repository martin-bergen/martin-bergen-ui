import type { ThemeRegistration } from "shiki";

export const bergetShikiTheme: ThemeRegistration = {
  name: "berget",
  type: "dark",
  colors: {
    "editor.background": "#1a1a1a",
    "editor.foreground": "#d6cdc5",
  },
  settings: [
    {
      settings: {
        foreground: "#d6cdc5", // --cloud
      },
    },
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#d6cdc580",
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "keyword.operator.new",
        "storage",
        "storage.type",
      ],
      settings: {
        foreground: "#52B788", // --moss
      },
    },
    {
      scope: ["string", "string.quoted", "string.template"],
      settings: {
        foreground: "#74C69D", // --lichen
      },
    },
    {
      scope: ["entity.name.function", "support.function", "meta.function-call"],
      settings: {
        foreground: "#4A90D9", // --info
      },
    },
    {
      scope: [
        "entity.name.type",
        "entity.name.class",
        "support.type",
        "support.class",
      ],
      settings: {
        foreground: "#c4ff99", // --warning
      },
    },
    {
      scope: ["constant.numeric", "constant.language"],
      settings: {
        foreground: "#74C69D", // --lichen
      },
    },
    {
      scope: ["variable", "variable.other"],
      settings: {
        foreground: "#d6cdc5", // --cloud
      },
    },
    {
      scope: ["variable.parameter"],
      settings: {
        foreground: "#d6cdc5e6",
      },
    },
    {
      scope: ["punctuation", "keyword.operator", "keyword.operator.assignment"],
      settings: {
        foreground: "#d6cdc5b3",
      },
    },
    {
      scope: ["entity.name.tag", "support.type.property-name"],
      settings: {
        foreground: "#52B788", // --moss (for YAML keys, HTML tags)
      },
    },
    {
      scope: ["meta.object-literal.key"],
      settings: {
        foreground: "#4A90D9", // --info
      },
    },
  ],
};
