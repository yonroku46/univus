import { Suspense } from 'react';
import { AvailableLanguages } from '@/i18n/settings';
import { generatePageMetadata } from '@/common/utils/MetaUtils';
import Loading from '@/app/[lng]/loading';

export async function generateMetadata({ params }: { params: { lng: AvailableLanguages } }) {
  return generatePageMetadata('contact/notice', params.lng);
}

export default async function NoticeLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  )
}
