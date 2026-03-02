import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { feedLoader } from "@ascorbic/feed-loader";

const recipes = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    tags: z.array(z.string()),
    date: z.date(),
    created: z.date().optional(),
    updated: z.date().optional(),
    version: z.string().optional(),
    processwire: z.string().optional(),
    dependencies: z.array(z.string()).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    intro: z.string().optional(),
    excerpt: z.string().optional(),
    toc: z.boolean().optional(),
    seotitle: z.string().optional(),
    seodesc: z.string().optional(),
    seorobots: z.string().optional(),
  }),
});

const weeklypw = defineCollection({
  loader: feedLoader({
    url: "https://weekly.pw/rss/",
  }),
  schema: z.object({
    title: z.string(),
    link: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = {
  recipes: recipes,
  pages: pages,
  weeklypw: weeklypw,
};
