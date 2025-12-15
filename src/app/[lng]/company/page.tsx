'use client'

import { use } from 'react';
import Image from 'next/image';
import { AvailableLanguages } from '@/i18n/settings';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import { TabMenu } from '@/components/layout/TabMenu';

import { styled } from '@mui/material';

const CompanySection = styled('section')(({ theme }) => ({
  padding: '2rem 0',
  '.section-title': {
    fontSize: '2.25rem',
    fontWeight: 700,
    marginBottom: '2rem',
    color: 'var(--main-color)',
    lineHeight: 1.3,
  },
  '.section-content': {
    display: 'flex',
    gap: '4rem',
    alignItems: 'center',
    marginBottom: '4rem',
    padding: '0 1rem',
    '@media (max-width: 768px)': {
      textAlign: 'center',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: '2rem',
      '&.reverse': {
        flexDirection: 'column-reverse',
      },
    },
    '.text-content': {
      flex: 1,
      '.highlight': {
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '1rem',
        color: 'var(--sub-color)',
      },
      '.description': {
        fontSize: '1.1rem',
        lineHeight: 1.6,
        color: 'var(--text-sub-color)',
      }
    },
    '.img-content': {
      flex: 1,
      display: 'flex',
      borderRadius: '1rem',
      overflow: 'hidden',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }
    }
  }
}));

export default function CompanyPage({
  params
}: {
  params: Promise<{ lng: AvailableLanguages }>
}) {
  const { lng } = use(params);
  const tabItems = [
    { title: '会社概要', href: getLocalizedPath('/company', lng) },
    { title: '企業理念', href: getLocalizedPath('/company/ideology', lng) },
    { title: 'アクセス', href: getLocalizedPath('/company/location', lng) }
  ];

  return (
    <article>
      <div className='container'>
        <TabMenu items={tabItems} />
      </div>
      <CompanySection>
        <div className='container'>
          <div className='section-content reverse'>
            <div className='text-content'>
              <h2 className='section-title'>
                {`サービスを通じて\n社会貢献を実現`}
              </h2>
              <p className='highlight'>
                {`ユニバスは、革新的なサービスで\nより良い世界を創り出します`}
              </p>
              <p className='description'>
                {`忙しい現代人の日常の中で、小さな余裕と便利さを提供することから始めて、徐々により多くの分野で肯定的な変化を引き起こしたいと考えています。\n私たちのサービスが社会貢献できるという信念により、続々と革新と発展を追求します。`}
              </p>
            </div>
            <div className='img-content'>
              <Image
                src='/assets/img/company1.jpeg'
                alt='company vision'
                width={500}
                height={350}
                priority
              />
            </div>
          </div>

          <div className='section-content'>
            <div className='img-content'>
              <Image
                src='/assets/img/company2.jpg'
                alt='company mission'
                width={500}
                height={350}
                priority
              />
            </div>
            <div className='text-content'>
              <h2 className='section-title'>
                {`技術で繋がる\nより良い未来`}
              </h2>
              <p className='highlight'>
                {`最新の技術と創造的なアイデアで\n新しい価値を生み出します`}
              </p>
              <p className='description'>
                {`ユニバスは、技術を通じて人と人、サービスと価値を繋ぎ合うことで、新しい価値を生み出します。\nヒルクルを始め、より多くの革新的なサービスを提供する予定です。\n私たちの挑戦が創り出す未来を期待しています。`}
              </p>
            </div>
          </div>
        </div>
      </CompanySection>
    </article>
  );
}