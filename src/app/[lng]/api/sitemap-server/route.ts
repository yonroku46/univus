import { getServerSideSitemap } from 'next-sitemap';
import { ISitemapField } from 'next-sitemap';

export async function GET() {
  const staticUrls: ISitemapField[] = [
    {
      loc: `${process.env.NEXT_PUBLIC_APP_ADDRESS}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as const,
      priority: 1.0
    },
  ];

  return getServerSideSitemap([
    ...staticUrls,
  ]);
}