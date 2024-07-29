import { z, defineCollection } from "astro:content";

const recipes = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    processwire: z.string().optional(),
    dependencies: z.array(z.string()).optional(),
    authors: z.array(z.string()),
    tags: z.array(z.string()),
    version: z.string().optional(),
    date: z.date(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const pages = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    seotitle: z.string().optional(),
    seodesc: z.string().optional(),
    seorobots: z.string().optional(),
    intro: z.string().optional(),
    excerpt: z.string().optional(),
    toc: z.boolean().optional(),
  }),
});

export const collections = {
  recipes: recipes,
  pages: pages,
};
