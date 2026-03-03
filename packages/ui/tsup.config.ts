import { defineConfig } from "tsup";
import { copyFileSync, mkdirSync } from "fs";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
  async onSuccess() {
    mkdirSync("dist/styles", { recursive: true });
    copyFileSync("src/styles/index.css", "dist/styles/index.css");
  },
});
