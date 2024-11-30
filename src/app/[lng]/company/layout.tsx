import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '@/app/[lng]/loading';

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Company`,
  description: 'Univusはサービスではなく、経験を提供します',
  icons: {
    icon: '/assets/icon/favicon.svg'
  }
};

export default async function CompanyLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  )
}
