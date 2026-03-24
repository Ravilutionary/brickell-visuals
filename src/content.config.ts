import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/services" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    price: z.string(),
    desc: z.string(),
    img: z.string(),
    alt: z.string(),
    highlight: z.boolean().default(false),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/gallery" }),
  schema: z.object({
    cat: z.enum(['portrait', 'product', 'realestate']),
    catLabel: z.string(),
    title: z.string(),
    sm: z.string(),
    lg: z.string(),
    alt: z.string(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/testimonials" }),
  schema: z.object({
    id: z.number(),
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    img: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    cat: z.string(),
    desc: z.string(),
    img: z.string(),
    hideMobile: z.boolean().default(false),
  }),
});

export const collections = {
  services,
  gallery,
  testimonials,
  blog,
};
