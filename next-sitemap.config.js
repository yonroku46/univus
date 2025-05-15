/** @type {import('next-sitemap').IConfig} */

// const languages = ['ja', 'ko', 'en'];
const languages = ['ja'];
const siteUrl = 'https://univus.jp';

const sitemapConfig = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: [
    '/api/*',
    '/admin/*',
  ],
  alternateRefs: languages.map(lng => ({
    href: `${siteUrl}/${lng}`,
    hreflang: lng
  })),
  additionalPaths: async (config) => {
    const paths = [];
    for (const lng of languages) {
      paths.push({
        loc: `/${lng}`,
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString()
      });
    }
    return paths;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/']
      }
    ]
  }
};

module.exports = sitemapConfig;