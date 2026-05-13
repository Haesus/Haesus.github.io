export const SITE_TITLE = 'Tag | Haesu Youn';
export const SITE_DESCRIPTION = '함께 일하는 것을 제일 좋아합니다.';
export const SITE_URL = 'https://haesus.github.io';
export const SITE_AUTHOR = 'Haesu Youn';
export const SITE_EMAIL = 'sea15510@gmail.com';
export const SITE_AVATAR = '/images/avatar.jpeg';

export const NAV_ITEMS = [
	{ label: 'Home', href: '/' },
	{ label: 'iOS', href: '/ios/' },
	{ label: 'Coding Test', href: '/coding-test/' },
	{ label: 'Daily', href: '/daily/' },
	{ label: 'About', href: '/about/' },
];

export const ARCHIVE_ITEMS = [
	{ label: 'All Posts', href: '/blog/' },
	{ label: 'Tags', href: '/tags/' },
];

export const SOCIAL_LINKS = [
	{ label: 'Email', href: 'mailto:sea15510@gmail.com' },
	{ label: 'GitHub', href: 'https://github.com/Haesus' },
	{ label: 'Instagram', href: 'https://www.instagram.com/haesu.tag/' },
];

export const CATEGORY_META = {
	IOS: { label: 'iOS', href: '/ios/' },
	'Coding-Test': { label: 'Coding Test', href: '/coding-test/' },
	daily: { label: 'Daily', href: '/daily/' },
} as const;
