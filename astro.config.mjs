import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";
import remarkBreaks from "remark-breaks";
import rehypeExternalLinks from "rehype-external-links";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import Compress from "astro-compress";

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

  // astro-compress uses Lightning CSS for CSS minification by default, which is
  // safe for Tailwind v4's responsive media range syntax (@media (width>=...)).
  // With its default legacy-browser targets the minified CSS is not smaller than
  // the already-minified Astro/Tailwind output, so the CSS is left untouched here.
  // All other assets (HTML, images, JS, SVG) are compressed.
  integrations: [alpinejs(), sitemap(), mdx(), Compress()],

  markdown: {
    // Astro v7: remark/rehype plugins must run through the unified() pipeline.
    processor: unified({
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
    }),
  },

  vite: {
    plugins: [tailwindcss()],
  },
});