export const SITE_NAME = 'Tag';
export const SITE_TITLE = 'Tag | Haesu Youn';
export const SITE_DESCRIPTION = '개발 기록과 일상 메모를 함께 쌓아가는 개인 블로그입니다.';
export const SITE_URL = 'https://haesus.github.io';
export const SITE_AUTHOR = 'Haesu Youn';
export const SITE_EMAIL = 'sea15510@gmail.com';
export const SITE_AVATAR = '/images/avatar.jpeg';
export const SITE_COVER = '/images/cover.jpeg';

export function formatPageTitle(pageTitle?: string) {
	return pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_TITLE;
}

export const NAV_ITEMS = [
	{ label: 'Home', href: '/' },
	{ label: 'All Posts', href: '/blog/' },
	{ label: 'About', href: '/about/' },
];

export const SOCIAL_LINKS = [
	{ label: 'Email', href: 'mailto:sea15510@gmail.com' },
	{ label: 'GitHub', href: 'https://github.com/Haesus' },
	{ label: 'Portfolio', href: 'https://www.younhaesu.com/' },
];

export const CATEGORY_META = {
	IOS: {
		label: 'iOS',
		href: '/ios/',
		description: 'Apple, iOS, Swift 관련 기록을 모아둔 카테고리입니다.',
	},
	'Coding-Test': {
		label: 'Coding Test',
		href: '/coding-test/',
		description: '코딩 테스트를 진행하면서 풀이한 내용을 정리해두었습니다.',
	},
	daily: {
		label: 'Daily',
		href: '/daily/',
		description: '일상, 회고 등 삶의 대부분을 차지하는 내용을 적어두려고 합니다.',
	},
} as const;

export const CATEGORY_KEYS = Object.keys(CATEGORY_META) as Array<keyof typeof CATEGORY_META>;

export type CategoryKey = (typeof CATEGORY_KEYS)[number];

export const HOME_CHILD_ITEMS = CATEGORY_KEYS.map((key) => CATEGORY_META[key]);
