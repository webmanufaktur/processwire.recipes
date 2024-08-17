import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import remarkBreaks from "remark-breaks";
import rehypeExternalLinks from "rehype-external-links";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },
  // build: {
  //   inlineStylesheets: "always",
  // },
  experimental: {
    contentLayer: true,
  },
  site: "https://processwire.recipes",
  integrations: [alpinejs(), sitemap(), tailwind(), mdx()],
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
});
