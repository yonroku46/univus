'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AvailableLanguages } from '@/i18n/settings';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import '@/styles/pages/project.scss';

export default function InHouseProductsPage(
  { params }: { params: Promise<{ lng: AvailableLanguages }> }
) {
  const { lng } = use(params);

  const breadcrumbs: Breadcrumb[] = [
    { label: '事業内容', href: getLocalizedPath('/project', lng) },
    { label: '自社プロダクト', href: getLocalizedPath('/project/products', lng), active: true },
  ];

  const projects: Project[] = [
    {
      id: 'hirukuru',
      title: 'ヒルクル',
      subtitle: 'Hirukuru',
      description: '美味しい食事と余裕を持って楽しむ休憩\nヒルクルと一緒ならさらに特別になります',
      image: '/assets/lp/hero.png',
      bgColor: '#f1f7ff',
      href: getLocalizedPath('/project/hirukuru', lng)
    },
    {
      id: 'regizero',
      title: 'レジゼロ',
      subtitle: 'RegiZERO',
      description: 'カウンター不要で簡単に決済\nレジゼロでより快適な店舗運営が可能に',
      image: '/assets/lp2/hero.png',
      bgColor: '#e4efff',
      href: getLocalizedPath('/project/regizero', lng)
    }
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <article className='project-list-page'>
        <div className='container'>
          <div className='page-header'>
            <h1 className='page-title'>自社プロダクト</h1>
            <p className='page-subtitle'>
              日常のちょっとした不便を解消し、人々の生活と街の店舗を豊かにする自社サービスを企画・運営しています。
            </p>
          </div>
          <div className='project-grid'>
            {projects.map((project) => (
              <Link key={project.id} href={project.href} className='project-card'>
                <div className='card-image-wrapper'>
                  <div className='card-bg' style={{ backgroundColor: project.bgColor }}/>
                  <div className='card-image'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className='card-overlay' />
                </div>
                <div className='card-content'>
                  <div className='card-header'>
                    <span className='card-title'>{project.title}</span>
                    <h2 className='card-subtitle'>{project.subtitle}</h2>
                  </div>
                  <p className='card-description'>{project.description}</p>
                  <div className='card-footer'>
                    <span className='card-link'>
                      詳細を見る
                      <span className='arrow'>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
