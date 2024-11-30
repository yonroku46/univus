import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '@/app/[lng]/loading';

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Contact`,
  description: 'ご質問やご意見がありましたら、お気軽にお問い合わせください',
  icons: {
    icon: '/assets/icon/favicon.svg'
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
