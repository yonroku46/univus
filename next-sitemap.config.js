/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_PUBLIC_APP_ADDRESS || 'https://univus.jp';

const sitemapConfig = {
  siteUrl: siteUrl,
  generateRobotsTxt: false,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: [
    '/api/*',
    '/admin/*',
    '/*/[...notFound]',
  ],
};

module.exports = sitemapConfig;