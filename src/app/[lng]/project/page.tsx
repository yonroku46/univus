'use client';

import { use, useEffect } from 'react';
import { AvailableLanguages } from '@/i18n/settings';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SmePartnerSection from '@/components/home/SmePartnerSection';
import '@/styles/pages/project.scss';

const breadcrumbs: Breadcrumb[] = [
  { label: '事業内容', href: '/project', active: true },
];

export default function ProjectPage(
  { params }: { params: Promise<{ lng: AvailableLanguages }> }
) {
  const { lng } = use(params);

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({
        once: true,
        duration: 650,
        easing: 'ease-out-cubic',
        offset: 80,
      });
    });
  }, []);

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <article className='project-page'>
        {/* Web Development & DX Support Solution Section */}
        <SmePartnerSection lng={lng} />
      </article>
    </>
  );
}