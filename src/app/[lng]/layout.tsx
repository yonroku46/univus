import type { Metadata } from 'next';
import { dir } from 'i18next'
import { AvailableLanguages, languages } from '@/i18n/settings'
import { Noto_Sans_JP, Noto_Sans_KR, Noto_Sans } from 'next/font/google';
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

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME}`,
  description: 'Univusはサービスを通じて社会的貢献を実現したいと思います',
  icons: {
    icon: '/assets/icon/favicon.svg'
  }
};

export async function generateStaticParams() {
  return languages.map((lng: AvailableLanguages) => ({ lng }))
}

export default function MainLayout(
  { children, params: { lng } }: { children: React.ReactNode, params: { lng: AvailableLanguages } }
) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_ADDRESS;
  const bodyClassName =
  lng === 'ja' ? notoSansJP.className :
  lng === 'ko' ? notoSansKR.className :
  notoSansEn.className

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <link rel='alternate' href={`${baseUrl}/ja/`} hrefLang='ja' />
        <link rel='alternate' href={`${baseUrl}/ko/`} hrefLang='ko' />
        <link rel='alternate' href={`${baseUrl}/en/`} hrefLang='en' />
        <link rel='alternate' href={`${baseUrl}/`} hrefLang='x-default' />
        <link rel='icon' href='/assets/icon/favicon.svg' sizes='any' />
      </head>
      <body className={bodyClassName}>
        <Header lng={lng} />
        <main>
          {children}
        </main>
        <Footer lng={lng} />
      </body>
    </html>
  );
}
