import { Suspense } from 'react';
import { AvailableLanguages } from '@/i18n/settings';
import { generatePageMetadata } from '@/common/utils/MetaUtils';
import Loading from '@/app/[lng]/loading';

export async function generateMetadata({ params }: { params: Promise<{ lng: AvailableLanguages }> }) {
  const { lng } = await params;
  return generatePageMetadata('contact', lng);
}

export default async function ContactLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  )
}
