import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";
import remarkBreaks from "remark-breaks";
import rehypeExternalLinks from "rehype-external-links";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: false,
  },

  fonts: [
    { name: "Outfit Variable", cssVariable: "--font-outfit", provider: fontProviders.npm(), options: { package: "@fontsource-variable/outfit" }, weights: ["100 900"], fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"] },
  ],
  site: "https://processwire.recipes",

  integrations: [alpinejs(), sitemap(), mdx()],

  markdown: {
    remarkPlugins: [remarkBreaks],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ["external noopener noreferrer"],
          target: ["_blank"],
        },
      ],
      // 2023-11-16 - previous default
      // [rehypeExternalLinks, { rel: ['nofollow noopener noreferrer'], target: ['_blank'] }],
      rehypeAccessibleEmojis,
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});