import { getServerSideSitemap } from 'next-sitemap';
import { ISitemapField } from 'next-sitemap';

const staticPaths = [
  { path: '', priority: 1.0, changefreq: 'daily' },
  { path: 'company', priority: 0.8, changefreq: 'weekly' },
  { path: 'project', priority: 0.8, changefreq: 'weekly' },
  { path: 'contact', priority: 0.7, changefreq: 'weekly' },
] as const;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ lng: string }> }
) {
  const { lng } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_APP_ADDRESS;

  const staticUrls: ISitemapField[] = staticPaths.map(({ path, priority, changefreq }) => ({
    loc: `${baseUrl}/${lng}${path ? `/${path}` : ''}`,
    lastmod: new Date().toISOString(),
    changefreq,
    priority
  }));

  return getServerSideSitemap([
    ...staticUrls,
  ]);
}