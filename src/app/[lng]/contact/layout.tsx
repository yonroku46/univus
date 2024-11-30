import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '@/app/[lng]/loading';

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Contact`,
  description: '문의/상담을 위해 연락주세요',
  icons: {
    icon: '/assets/icon/app-icon.svg'
  }
};

export default async function ContactLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  )
}
