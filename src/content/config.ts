import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(), // YYYY-MM format
    readTime: z.string(),
    category: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
