import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next';
import Head from 'next/head';
import { dir } from 'i18next'
import { AvailableLanguages, languages } from '@/i18n/settings'
import { Noto_Sans_JP, Noto_Sans_KR, Noto_Sans } from 'next/font/google';
import { generatePageMetadata } from '@/common/utils/MetaUtils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.scss';
import 'aos/dist/aos.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900']
});
const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900']
});
const notoSansEn = Noto_Sans ({
  subsets: ['latin'],
  weight: ['300', '400', '700','900'],
})

export async function generateMetadata({ params }: { params: Promise<{ lng: AvailableLanguages }> }) {
  const { lng } = await params;
  return generatePageMetadata('home', lng);
}

export async function generateStaticParams() {
  return languages.map((lng: AvailableLanguages) => ({ lng }))
}

export default async function MainLayout(
  { children, params }: { children: React.ReactNode, params: Promise<{ lng: AvailableLanguages }> }
) {
  const { lng } = await params;
  const bodyClassName =
    lng === 'ja' ? notoSansJP.className :
    lng === 'ko' ? notoSansKR.className :
    notoSansEn.className

  return (
    <html lang={lng} dir={dir(lng)}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": process.env.NEXT_PUBLIC_APP_NAME,
              "url": process.env.NEXT_PUBLIC_APP_ADDRESS,
              "alternateName": process.env.NEXT_PUBLIC_APP_NAME
            }),
          }}
        />
      </Head>
      <body className={bodyClassName}>
        <Header lng={lng} />
        <main>
          {children}
        </main>
        <Footer lng={lng} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
