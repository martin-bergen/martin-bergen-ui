import type { StorybookConfig } from "@storybook/react-vite";
import type { Plugin } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Resolves `@/` imports based on which package the importing file belongs to.
 * This is needed because both packages/ui and apps/keycloak-theme use `@/`
 * as a path alias pointing to their own `src/` directory.
 */
function monorepoAliasPlugin(): Plugin {
  const packageRoots: Array<{ match: string; src: string }> = [
    {
      match: "packages/ui/",
      src: resolve(__dirname, "../../../packages/ui/src"),
    },
    {
      match: "apps/keycloak-theme/",
      src: resolve(__dirname, "../../../apps/keycloak-theme/src"),
    },
  ];

  return {
    name: "monorepo-alias",
    async resolveId(source, importer, options) {
      if (!source.startsWith("@/") || !importer) return null;

      const root = packageRoots.find((r) => importer!.includes(r.match));
      if (!root) return null;

      const resolved = resolve(root.src, source.slice(2));
      return this.resolve(resolved, importer, { ...options, skipSelf: true });
    },
  };
}

const config: StorybookConfig = {
  stories: [
    "../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../packages/ui/src/**/*.mdx",
    "../../../apps/keycloak-theme/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
      plugins: [
        tailwindcss({
          content: [
            resolve(__dirname, "../../../packages/ui/src/**/*.{js,ts,jsx,tsx}"),
            resolve(
              __dirname,
              "../../../apps/keycloak-theme/src/**/*.{js,ts,jsx,tsx}",
            ),
            resolve(__dirname, "../src/**/*.{js,ts,jsx,tsx}"),
          ],
        }),
        monorepoAliasPlugin(),
      ],
    });
  },
};

export default config;
