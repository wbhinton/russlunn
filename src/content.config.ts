import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const issues = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/issues" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number().optional(),
  }),
});

const pressReleases = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/press-releases" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    excerpt: z.string(),
  }),
});

export const collections = { issues, 'press-releases': pressReleases };
