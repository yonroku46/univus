import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next';
import { dir } from 'i18next'
import { AvailableLanguages, languages } from '@/i18n/settings'
import { Noto_Sans_JP, Noto_Sans_KR, Noto_Sans } from 'next/font/google';
import type { Viewport } from 'next';
import { generatePageMetadata } from '@/common/utils/MetaUtils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.scss';
import 'aos/dist/aos.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
  const gtmId = gaId || googleAdsId;

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
      },
      {
        "@type": "FAQPage",
        "@id": `${appAddress}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "仕様書や要件定義が固まっていない初期構想の段階でも相談できますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、大歓迎です。株式会社Univusでは、「こんな仕組みが欲しい」「社内業務を効率化したい」という初期の構想やお困りごとのヒアリングから伴走します。課題整理から画面設計、要件定義まで丁寧にサポートしますので、IT専門部署のない企業様もお気軽にご相談ください。"
            }
          },
          {
            "@type": "Question",
            "name": "福岡以外の地域（東京・関西など）からの開発・DX支援依頼も可能ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、日本全国からご依頼いただけます。福岡本社での対面ミーティングはもちろん、ZoomやGoogle Meet、Slackなどを活用したオンラインでの円滑なコミュニケーション体制を整えております。"
            }
          },
          {
            "@type": "Question",
            "name": "開発後の保守・運用や継続的な機能改修も依頼できますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、納品・公開後も安心してサービスを運用いただけるよう、サーバー保守・死活監視、セキュリティ対策、追加機能開発まで継続的に伴走サポートいたします。"
            }
          },
          {
            "@type": "Question",
            "name": "どのような開発案件に対応していますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "オーダーメイドのWebアプリケーション・業務システム開発、手作業や紙業務のDX・デジタル化支援、クラウドインフラ（AWS/GCP/Vercel）構築、店舗向け決済やテイクアウトなどの自社プロダクト企画・運営まで幅広く対応しています。"
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        {gtmId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ''}
                  ${gaId ? `gtag('config', '${gaId}');` : ''}
                `,
              }}
            />
          </>
        )}
        {clarityId && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${clarityId}");
              `,
            }}
          />
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
