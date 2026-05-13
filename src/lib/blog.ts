import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORY_ROUTES } from '../consts';

export type BlogEntry = CollectionEntry<'blog'>;

export async function getPublishedPosts() {
	const posts = await getCollection('blog', ({ data }) => data.published !== false);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getCategoryHref(category?: string) {
	if (!category) return '/blog/';
	return CATEGORY_ROUTES[category as keyof typeof CATEGORY_ROUTES] ?? '/blog/';
}

export function getTagHref(tag: string) {
	return `/tags/${encodeURIComponent(tag)}/`;
}

export function getPostDescription(post: BlogEntry) {
	if (post.data.description.trim()) return post.data.description;
	return `${post.data.title} 글입니다.`;
}

export function getGroupedTags(posts: BlogEntry[]) {
	const counts = new Map<string, number>();

	for (const post of posts) {
		for (const tag of post.data.tags) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1);
		}
	}

	return [...counts.entries()]
		.sort((a, b) => a[0].localeCompare(b[0], 'ko'))
		.map(([tag, count]) => ({ tag, count }));
}

export function filterPostsByCategory(posts: BlogEntry[], category: string) {
	return posts.filter((post) => post.data.category === category);
}

export function filterPostsByTag(posts: BlogEntry[], tag: string) {
	return posts.filter((post) => post.data.tags.includes(tag));
}
