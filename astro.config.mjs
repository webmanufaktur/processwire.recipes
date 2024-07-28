import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },
  build: {
    inlineStylesheets: "always",
  },
  site: "https://dev.processwire.recipes",
  integrations: [sitemap(), tailwind()],
});
