import { copyFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { join } from 'node:path';

const distDir = new URL('../dist/', import.meta.url);
const primarySitemap = join(distDir.pathname, 'sitemap-0.xml');
const aliasSitemap = join(distDir.pathname, 'sitemap.xml');

try {
	await access(primarySitemap, constants.F_OK);
	await copyFile(primarySitemap, aliasSitemap);
	console.log('Synced dist/sitemap-0.xml -> dist/sitemap.xml');
} catch (error) {
	console.error('Failed to sync sitemap alias:', error);
	process.exitCode = 1;
}
