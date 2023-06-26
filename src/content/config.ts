import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
  }),
});

export const collections = {
  /* "blog-sk": blogCollection, */
  /* "blog-en": blogCollection, */
  "projects-sk": projectsCollection,
  "projects-en": projectsCollection,
};
