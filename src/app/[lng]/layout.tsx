import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next';
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

  const appAddress = process.env.NEXT_PUBLIC_APP_ADDRESS || 'https://www.univus.jp';
  const appName = process.env.NEXT_PUBLIC_APP_NAME || '株式会社Univus';
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${appAddress}/#website`,
        "url": appAddress,
        "name": appName,
        "alternateName": ["Univus Inc.", "ユニバス", "株式会社Univus"],
        "description": "福岡市博多区のIT企業。中小企業やスタートアップ向けのWeb受託開発、業務システム構築、DX推進伴走支援、自社プロダクトの企画運営。",
        "inLanguage": lng
      },
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": `${appAddress}/#organization`,
        "name": appName,
        "alternateName": ["Univus Inc.", "ユニバス"],
        "url": appAddress,
        "logo": `${appAddress}/assets/icon/logo.svg`,
        "image": `${appAddress}/assets/img/og-image.png`,
        "description": "福岡県福岡市博多区を拠点とするIT企業。中小企業・スタートアップの頼れる開発パートナーとして、Webサイト・業務システム受託開発、伴走型DX推進支援、自社プロダクト（ヒルクル・レジゼロ）を提供。",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "博多駅前1丁目23番2号 ParkFront博多駅前1丁目5F-B",
          "addressLocality": "福岡市博多区",
          "addressRegion": "福岡県",
          "postalCode": "812-0011",
          "addressCountry": "JP"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 33.5902,
          "longitude": 130.4195
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "福岡県"
          },
          {
            "@type": "AdministrativeArea",
            "name": "九州地方"
          },
          {
            "@type": "Country",
            "name": "日本"
          }
        ],
        "knowsAbout": [
          "Webシステム開発",
          "受託開発",
          "DX推進伴走支援",
          "業務効率化・自動化",
          "クラウド構築",
          "UI/UX設計",
          "スマートオーダー決済",
          "ITコンサルティング"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Univus サービス事業一覧",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web・システム受託開発",
                "description": "オーダーメイドのWebアプリケーション・業務システム開発、公開後の安心運用サポート"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "DX・デジタル化伴走支援",
                "description": "新規事業立ち上げ、手作業や紙が残る業務のデジタル化、IT専任不在企業の伴走型支援"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "自社プロダクト企画・運営",
                "description": "スマートテイクアウト「Hirukuru（ヒルクル）」、次世代型スマート店舗決済「RegiZERO（レジゼロ）」"
              }
            }
          ]
        },
        "foundingDate": "2025-04-18",
        "founder": {
          "@type": "Person",
          "name": "河 伶録",
          "jobTitle": "代表取締役 CEO"
        },
        "taxID": "T3290001109800"
      }
    ]
  };

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        {googleAdsId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${googleAdsId}');
                `,
              }}
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
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
