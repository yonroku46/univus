import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '@/app/[lng]/loading';

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Project`,
  description: '유니버스의 프로젝트를 소개합니다',
  icons: {
    icon: '/assets/icon/app-icon.svg'
  }
};

export default async function ProjectLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  )
}
