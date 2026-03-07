import { defineConfig } from "tsup";
import { copyFileSync, mkdirSync } from "fs";
import path from "path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "lucide-react", "@types/react", "@types/react-dom"],
  esbuildOptions(options) {
    options.jsx = "automatic";
    options.alias = {
      "@": path.resolve(import.meta.dirname, "src"),
    };
  },
  async onSuccess() {
    mkdirSync("dist/styles", { recursive: true });
    copyFileSync("src/styles/index.css", "dist/styles/index.css");
  },
});
