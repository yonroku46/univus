'use client'

import Image from 'next/image';
import { AvailableLanguages } from '@/i18n/settings';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import { TabMenu } from '@/components/layout/TabMenu';

import { styled } from '@mui/material';

const IdeologySection = styled('section')(({ theme }) => ({
  padding: '1rem 0',
  '.ideology-intro': {
    textAlign: 'center',
    marginBottom: '3rem',
    width: '100%',
    '.main-title': {
      fontSize: '3rem',
      fontWeight: 700,
      color: 'var(--main-color)',
      marginBottom: '1.5rem',
      marginTop: '0',
    },
    '.sub-title': {
      fontSize: '1.25rem',
      color: 'var(--text-sub-color)',
      lineHeight: 1.6,
    }
  },
  '.value-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    marginBottom: '6rem',
    width: '100%',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
    },
    '.value-card': {
      padding: '2.5rem',
      borderRadius: '1.5rem',
      backgroundColor: '#fff',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      transition: 'transform 0.2s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
      },
      '.card-title': {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem',
        '.number': {
          fontSize: '1rem',
          fontWeight: 600,
          color: '#fff',
          backgroundColor: 'var(--main-color)',
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        'h3': {
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--main-color)',
        }
      },
      '.card-desc': {
        fontSize: '1.1rem',
        lineHeight: 1.6,
        color: 'var(--text-sub-color)',
        whiteSpace: 'pre-line',
      }
    }
  },
  '.vision-section': {
    backgroundColor: '#f8f9fa',
    padding: '4rem 0',
    borderRadius: '2rem',
    marginBottom: '2rem',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
    '.vision-content': {
      display: 'flex',
      alignItems: 'center',
      gap: '3rem',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '2rem',
        padding: '0 1.5rem',
        '.text-content': {
          order: -1,
        }
      },
      '.text-content': {
        flex: 1,
        paddingLeft: '1rem',
        '@media (max-width: 768px)': {
          paddingLeft: '0'
        },
        '.section-title': {
          fontSize: '2.25rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          color: 'var(--main-color)',
          lineHeight: 1.3,
        },
        '.description': {
          fontSize: '1.1rem',
          lineHeight: 1.6,
          color: 'var(--text-sub-color)',
          whiteSpace: 'pre-line',
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
  }
}));

export default function IdeologyPage({
  params: { lng }
}: {
  params: { lng: AvailableLanguages }
}) {
  const tabItems = [
    { title: '会社概要', href: getLocalizedPath('/company', lng) },
    { title: '企業理念', href: getLocalizedPath('/company/ideology', lng) },
    { title: 'アクセス', href: getLocalizedPath('/company/location', lng) }
  ];

  const values = [
    { title: 'Innovation', description: `絶え間ないイノベーションで\n新しい価値を創造します。\n技術とサービスの発展を通じて\nより良い未来を築きます。` },
    { title: 'Trust', description: `信頼を基盤として\n持続可能な関係を構築します。\n誠実さと透明性に基づいて\n社会的責任を果たします。` },
    { title: 'Collaboration', description: `協力を通じてより大きなシナジーを生み出します。\n共に成長し発展する\n共生の価値を追求します。` }
  ];

  return (
    <article>
      <div className='container'>
        <TabMenu items={tabItems} />
      </div>
      <IdeologySection>
        <div className='container'>
          <div className='ideology-intro'>
            <h1 className='main-title'>
              {`企業理念`}
            </h1>
            <p className='sub-title'>
              {`私たちの価値観とビジョンを通じて\n社会にポジティブな変化をもたらします`}
            </p>
          </div>

          <div className='value-grid'>
            {values.map((value, idx) => (
              <div key={idx} className='value-card'>
                <div className='card-title'>
                  <span className='number'>{idx + 1}</span>
                  <h3>{value.title}</h3>
                </div>
                <p className='card-desc'>{value.description}</p>
              </div>
            ))}
          </div>

          <div className='vision-section'>
            <div className='vision-content'>
              <div className='text-content'>
                <h2 className='section-title'>
                  {'Our Vision\nInnovate for Better Tomorrow'}
                </h2>
                <p className='description'>
                  {`ユニバスは技術とサービスのイノベーションを通じて\nより良い未来を創造します。\n\nユーザー中心のサービスで日常の不便を解消し、\n新しい価値を創造することで社会の発展に貢献することが\n私たちのビジョンです。`}
                </p>
              </div>
              <div className='img-content'>
                <Image
                  src='/assets/img/ideology.jpg'
                  alt='company vision'
                  width={500}
                  height={350}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </IdeologySection>
    </article>
  );
}