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
    tags: z.array(z.string()).optional(),
    seoTitle: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalUrl: z.string().optional(),
  }),
});

export const collections = { writing };
