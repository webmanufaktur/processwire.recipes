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
    date: z.coerce.date(),
    created: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
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

const skills = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/skills" }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
  }).catchall(z.any()),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    version: z.string().optional(),
    updated: z.coerce.date().optional(),
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
  skills: skills,
  posts: posts,
  weeklypw: weeklypw,
};
