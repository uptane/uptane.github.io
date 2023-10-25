import * as cheerio from 'cheerio';
import * as fs from 'fs';

// Extract a list of pathnames, given a fs path to a sitemap.xml file
// Docusaurus generates a build/sitemap.xml file for you!
export function extractSitemapPathnames(sitemapPath) {
    const sitemap = fs.readFileSync(sitemapPath).toString();
    const $ = cheerio.load(sitemap, { xmlMode: true });
    const urls = [];
    $('loc').each(function handleLoc() {
        urls.push($(this).text());
    });
    return urls.map((url) => new URL(url).pathname);
}

// Converts a pathname to a decent screenshot name
export function pathnameToArgosName(pathname) {
    return pathname.replace(/^\/|\/$/g, '') || 'index';
}