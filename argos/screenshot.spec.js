import * as fs from 'fs';
import { test } from '@playwright/test';
import { argosScreenshot } from '@argos-ci/playwright';
import { extractSitemapPathnames, pathnameToArgosName } from './utils';

// Constants
const siteUrl = 'https://uptane.github.io';
const sitemapPath = './build/sitemap.xml';
const stylesheetPath = './argos/screenshot.css';
const stylesheet = fs.readFileSync(stylesheetPath).toString();

// Wait for hydration, requires Docusaurus v2.4.3+
// Docusaurus adds a <html data-has-hydrated="true"> once hydrated
// See https://github.com/facebook/docusaurus/pull/9256
function waitForDocusaurusHydration() {
    return document.documentElement.dataset.hasHydrated === 'true';
}

function screenshotPathname(pathname) {
    test(`pathname ${pathname}`, async ({ page }) => {
        const url = siteUrl + pathname;
        await page.goto(url);
        await page.waitForFunction(waitForDocusaurusHydration);
        await page.addStyleTag({ content: stylesheet });
        await argosScreenshot(page, pathnameToArgosName(pathname));
    });
}

test.describe('Docusaurus site screenshots', () => {
    const pathnames = extractSitemapPathnames(sitemapPath);
    console.log('Pathnames to screenshot:', pathnames);
    pathnames.forEach(screenshotPathname);
});