'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import CustomImg from '@/components/custom/CustomImg';
import { TabMenu } from '@/components/layout/TabMenu';
import { useTranslation } from '@/i18n/client';
import { AvailableLanguages } from '@/i18n/settings';
import Loading from '@/app/[lng]/loading';

export default function ProjectPage(
  { params: { lng } }: { params: { lng: AvailableLanguages } }
) {
  const { t } = useTranslation(lng, 'navigation');

  useEffect(() => {
  }, []);

  return (
    <article>
      <div className='container'>
        project
      </div>
    </article>
  )
}
