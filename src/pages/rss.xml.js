import rss from '@astrojs/rss';
import { getPublishedPosts, getPostDescription } from '../lib/blog';
import { SITE_DESCRIPTION, SITE_NAME } from '../consts';

export async function GET(context) {
	const posts = await getPublishedPosts();
	return rss({
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			description: getPostDescription(post),
			link: `/blog/${post.id}/`,
		})),
	});
}
