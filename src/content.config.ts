import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_KEYS } from './consts';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string().default(''),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			author: z.string().default('Tag'),
			tags: z.array(z.string()).default([]),
			category: z.enum(CATEGORY_KEYS).optional(),
			published: z.boolean().default(true),
			toc: z.boolean().optional(),
			slug: z.string().optional(),
		}),
});

export const collections = { blog };
