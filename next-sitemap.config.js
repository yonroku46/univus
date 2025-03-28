/** @type {import('next-sitemap').IConfig} */

const sitemapConfig = {
  siteUrl: 'https://univus.co.jp',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: [
    '/api/*',
    '/admin/*',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/']
      }
    ],
    additionalSitemaps: [
      'https://univus.co.jp/server-sitemap.xml'
    ]
  }
};

module.exports = sitemapConfig;