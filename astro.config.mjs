import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },
  build: {
    inlineStylesheets: "always",
  },
  site: "https://processwire.recipes",
  integrations: [sitemap(), tailwind(), alpinejs()],
});
