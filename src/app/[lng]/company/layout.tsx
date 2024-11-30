import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '@/app/[lng]/loading';

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Company`,
  description: '(주)유니버스는 서비스가 아닌 경험을 제공합니다',
  icons: {
    icon: '/assets/icon/app-icon.svg'
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
