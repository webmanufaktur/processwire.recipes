import { z, defineCollection } from "astro:content";
import { feedLoader } from "@ascorbic/feed-loader";

const recipes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    tags: z.array(z.string()),
    date: z.date(),
    version: z.string().optional(),
    processwire: z.string().optional(),
    dependencies: z.array(z.string()).optional(),
  }),
});

const pages = defineCollection({
  type: "content",
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
    link: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  recipes: recipes,
  pages: pages,
  weeklypw: weeklypw,
};
