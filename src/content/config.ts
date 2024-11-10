import { defineCollection, z } from "astro:content";

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    year: z.number(),
    //date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const ricerca = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    place: z.string(),
    year: z.number(),
    annoTesto: z.string().optional(),
    typology: z.string().optional(),
    link: z.string().optional(),
    client: z.string().optional(),
    team: z.string().optional(),
    note: z.string().optional(),
    fotodi: z.string().optional(),
    importo: z.string().optional(),
    prize: z.string().optional(),
    status: z.string().optional(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

const progetti = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    place: z.string(),
    year: z.number(),
    annoTesto: z.string().optional(),
    typology: z.string().optional(),
    link: z.string().optional(),
    client: z.string().optional(),
    team: z.string().optional(),
    note: z.string().optional(),
    fotodi: z.string().optional(),
    importo: z.string().optional(),
    prize: z.string().optional(),
    status: z.string().optional(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

const disegni = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    author: z.string().optional(),
    typology: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { news, ricerca, progetti, disegni };
