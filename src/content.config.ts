import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const changelog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/changelog" }),
  schema: z.object({
    date: z.string(),
    tag: z.enum(["NEW", "IMPROVED", "FIX"]),
    title: z.string(),
  }),
});

export const collections = { changelog };
