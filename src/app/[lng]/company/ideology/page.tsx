'use client'

import { use } from 'react';
import Image from 'next/image';
import { AvailableLanguages } from '@/i18n/settings';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

import { styled } from '@mui/material';

const IdeologySection = styled('section')(({ theme }) => ({
  padding: '4rem 0',
  '.ideology-intro': {
    textAlign: 'center',
    marginBottom: '3rem',
    width: '100%',
    '.main-title': {
      fontSize: '2.25rem',
      fontWeight: 700,
      color: 'var(--main-color)',
      marginBottom: '1.5rem',
      marginTop: '0',
    },
    '.sub-title': {
      fontSize: '1.125rem',
      color: 'var(--text-sub-color)',
      lineHeight: 1.6,
    }
  },
  '.value-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
    marginBottom: '6rem',
    width: '100%',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '1rem',
    },
    '.value-card': {
      padding: '2rem 2.5rem',
      borderRadius: '1.5rem',
      backgroundColor: '#fff',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
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
      '.section-title': {
        fontSize: '2.25rem',
        fontWeight: 700,
        lineHeight: 1.15,
        marginBottom: '1.5rem',
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
  },
  '.vision-section': {
    position: 'relative',
    padding: '4rem 0',
    borderRadius: '2rem',
    marginTop: '2rem',
    width: '100%',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, var(--main-color) 15%, rgba(35, 49, 66, 0.6) 80%, rgba(248, 249, 250, 0.25) 100%)',
      zIndex: 1,
    },
    '.bg-image': {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '60%',
      height: '100%',
      zIndex: 0,
      '@media (max-width: 768px)': {
        width: '100%',
        height: '50%',
        top: 'auto',
        bottom: 0,
      },
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'right center',
      }
    },
    '.vision-content': {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      gap: '3rem',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
      '.section-title': {
        fontSize: '2.25rem',
        fontWeight: 700,
        color: 'var(--bg-color)',
        lineHeight: 1.15,
      }
    }
  }
}));

const breadcrumbs: Breadcrumb[] = [
  { label: '企業理念', href: '/company/ideology', active: true },
];

export default function IdeologyPage({
  params
}: {
  params: Promise<{ lng: AvailableLanguages }>
}) {
  const { lng } = use(params);

  const values = [
    { title: 'Individuality', description: `一人ひとりの違いを力に変える。\nお互いの専門性と個性を尊重し\n最大限に発揮できる環境を作ります。` },
    { title: 'Synergy', description: `得意を掛け合わせ、限界を超える。\n個人の力だけでは到達できない圧倒的なクオリティと価値を共創します。` },
    { title: 'Excellence', description: `常にユーザーの期待の一歩先へ。\n現状に満足することなく、最適な体験とより良い未来を追求し続けます。` }
  ];

  return (
    <article>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
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

          <div className='section-content reverse'>
            <div className='text-content'>
              <h2 className='section-title'>
                {`サービスを通じて\n社会貢献を実現`}
              </h2>
              <p className='description'>
                {`ユニバスは、革新的なサービスでより良い世界を創り出します。\n小さな余裕と便利さを提供することから始めて、徐々により多くの分野で肯定的な変化を引き起こしたいと考えています。\n私たちのサービスが社会貢献できるという信念により、続々と革新と発展を追求します。`}
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
              <p className='description'>
                {`ユニバスは、技術を通じて人と人、サービスと価値を繋ぎ合うことで、新しい価値を生み出します。\nヒルクルを始め、より多くの革新的なサービスを提供する予定です。\n私たちの挑戦が創り出す未来を期待しています。`}
              </p>
            </div>
          </div>

          <div className='vision-section'>
            <Image
              className='bg-image'
              src='/assets/img/ideology.jpg'
              alt='company vision'
              fill
              priority
            />
            <div className='vision-content'>
              <h2 className='section-title'>
                Innovate for Better <br />Tomorrow
              </h2>
            </div>
          </div>
        </div>
      </IdeologySection>
    </article>
  );
}