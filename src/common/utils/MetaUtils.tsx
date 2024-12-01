import { Metadata } from 'next';
import { AvailableLanguages } from '@/i18n/settings';
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from '@/i18n/settings';

type MetadataType = 'home' | 'company' | 'project' | 'contact';

async function initI18next(lng: AvailableLanguages, ns: string) {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) =>
      import(`@/i18n/locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns));

  return i18nInstance;
}

export async function generatePageMetadata(type: MetadataType, lng: AvailableLanguages): Promise<Metadata> {
  const i18n = await initI18next(lng, 'metadata');
  const t = i18n.getFixedT(lng, 'metadata');

  const appName = process.env.NEXT_PUBLIC_APP_NAME || '';

  const baseMetadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_ADDRESS || ''),
    title: {
      template: `${appName} | %s`,
      default: appName || '',
    },
    description: t('common.description'),
    keywords: t('common.keywords').split(','),
    authors: [{ name: 'Univus Inc.' }],
    creator: 'Univus Inc.',
    publisher: 'Univus Inc.',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      siteName: appName,
      title: `${appName} | ${t(`${type}.title`)}`,
      description: t(`${type}.description`),
      url: `${process.env.NEXT_PUBLIC_APP_ADDRESS}/${lng}/${type !== 'home' ? type : ''}`,
      locale: lng,
      alternateLocale: ['ja', 'ko', 'en'],
      images: [
        {
          url: new URL('/assets/img/og-image.png', process.env.NEXT_PUBLIC_APP_ADDRESS).toString(),
          width: 1200,
          height: 630,
          alt: t(`${type}.ogImageAlt`),
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${appName} | ${t(`${type}.title`)}`,
      description: t(`${type}.description`),
      images: [new URL('/assets/img/og-image.png', process.env.NEXT_PUBLIC_APP_ADDRESS).toString()],
      creator: '@univus',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_ADDRESS}/${lng}`,
      languages: {
        'ja': `${process.env.NEXT_PUBLIC_APP_ADDRESS}/ja`,
        'ko': `${process.env.NEXT_PUBLIC_APP_ADDRESS}/ko`,
        'en': `${process.env.NEXT_PUBLIC_APP_ADDRESS}/en`,
      },
    },
    icons: {
      icon: [
        { url: '/assets/icon/favicon.ico' },
        { url: '/assets/icon/favicon.svg', type: 'image/svg+xml' }
      ],
      apple: [
        { url: '/assets/icon/apple-touch-icon.png' }
      ],
    },
    manifest: '/manifest.json',
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
  };

  const pageMetadata: Record<MetadataType, Metadata> = {
    home: {
      ...baseMetadata,
      title: appName,
    },
    company: {
      ...baseMetadata,
      title: t('company.title'),
    },
    project: {
      ...baseMetadata,
      title: t('project.title'),
    },
    contact: {
      ...baseMetadata,
      title: t('contact.title'),
    },
  };

  return pageMetadata[type];
}