import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:      z.string(),
    icon:       z.string(),
    tech:       z.string(),
    techColor:  z.enum(['cyan', 'purple', 'green']),
    summary:    z.string(),
    tools:      z.array(z.string()),
    metrics:    z.array(z.string()),
    github:     z.string(),
    live:       z.string(),
    order:      z.number(),
  }),
});

export const collections = { projects };
