import { defineConfig } from "vite";
import { defineConfig as defineTanStackConfig } from "@lovable.dev/vite-tanstack-config";

export default defineTanStackConfig({
  vite: {
    base: "/",
    build: {
      outDir: "dist",
      emptyOutDir: true,
    }
  }
});
