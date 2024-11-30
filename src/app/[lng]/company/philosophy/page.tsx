'use client'

import { useRouter } from 'next/navigation';
import { TabMenu } from '@/components/layout/TabMenu';
import { useTranslation } from '@/i18n/client';
import { AvailableLanguages } from '@/i18n/settings';
import CustomImg from '@/components/custom/CustomImg';
import { Box, styled } from '@mui/material';

const PhilosophySection = styled('section')(({ theme }) => ({
  padding: '3rem 0',
  '.philosophy-intro': {
    textAlign: 'center',
    marginBottom: '5rem',
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
    '.vision-content': {
      display: 'flex',
      alignItems: 'center',
      gap: '4rem',
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
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }
      }
    }
  }
}));

export default function PhilosophyPage({
  params: { lng }
}: {
  params: { lng: AvailableLanguages }
}) {
  const { t } = useTranslation(lng, 'navigation');
  const router = useRouter();

  const tabItems = [
    { title: '회사개요', href: '/company' },
    { title: '기업이념', href: '/company/philosophy' },
    { title: '오시는 길', href: '/company/location' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: '끊임없는 혁신으로\n새로운 가치를 창출합니다.\n기술과 서비스의 발전을 통해\n더 나은 미래를 만들어갑니다.'
    },
    {
      title: 'Trust',
      description: '신뢰를 바탕으로\n지속 가능한 관계를 구축합니다.\n정직과 투명성을 기반으로\n사회적 책임을 다합니다.'
    },
    {
      title: 'Collaboration',
      description: '협력을 통해\n더 큰 시너지를 만들어냅니다.\n함께 성장하고 발전하는\n상생의 가치를 추구합니다.'
    }
  ];

  return (
    <article>
      <div className='company-header'>
        <div className='container'>
          <TabMenu items={tabItems} />
        </div>
      </div>
      <PhilosophySection>
        <div className='container'>
          <div className='philosophy-intro'>
            <h1 className='main-title'>기업이념</h1>
            <p className='sub-title'>
              {'유니버스는 혁신적인 서비스로 더 나은 세상을 만들어갑니다.\n' +
              '우리의 가치와 비전을 통해 사회에 긍정적인 변화를 이끌어내겠습니다.'}
            </p>
          </div>

          <div className='value-grid'>
            {values.map((value, index) => (
              <div key={index} className='value-card'>
                <div className='card-title'>
                  <span className='number'>{index + 1}</span>
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
                  {'유니버스는 기술과 서비스의 혁신을 통해\n더 나은 미래를 만들어갑니다.\n\n' +
                  '사용자 중심의 서비스로 일상의 불편함을 해소하고,\n' +
                  '새로운 가치를 창출하여 사회 발전에 기여하는 것이\n' +
                  '우리의 비전입니다.'}
                </p>
              </div>
              <div className='img-content'>
                <CustomImg
                  src='/assets/img/lunch2.jpg'
                  alt='company vision'
                  width={500}
                  height={350}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </PhilosophySection>
    </article>
  );
}