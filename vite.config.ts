import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GITHUB_PAGES=1 builds a fully static site (HTML files) for GitHub Pages.
const isGithubPages = !!process.env.GITHUB_PAGES;

export default defineConfig({
  vite: {
    base: "/",
  },
  ...(isGithubPages
    ? {
        nitro: false,
        tanstackStart: {
          prerender: { enabled: true, failOnError: false },
        },
      }
    : {}),
});
