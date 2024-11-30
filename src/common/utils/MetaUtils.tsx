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

  const baseMetadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_ADDRESS || ''),
    title: {
      template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
      default: process.env.NEXT_PUBLIC_APP_NAME || '',
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
      siteName: process.env.NEXT_PUBLIC_APP_NAME,
      title: t(`${type}.title`),
      description: t(`${type}.description`),
      locale: lng,
      alternateLocale: ['ja', 'ko', 'en'],
      images: [
        {
          url: '/assets/img/thumbnail.png',
          width: 1200,
          height: 630,
          alt: t(`${type}.ogImageAlt`),
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t(`${type}.title`),
      description: t(`${type}.description`),
      images: ['/assets/img/thumbnail.png'],
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
      title: process.env.NEXT_PUBLIC_APP_NAME || '',
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