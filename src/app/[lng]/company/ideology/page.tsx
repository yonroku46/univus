'use client'

import { useTranslation } from '@/i18n/client';
import { AvailableLanguages } from '@/i18n/settings';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import { TabMenu } from '@/components/layout/TabMenu';
import CustomImg from '@/components/custom/CustomImg';

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
    padding: '3rem 0',
    borderRadius: '2rem',
    marginBottom: '2rem',
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
  const { t } = useTranslation(lng, 'company');

  const tabItems = [
    { title: t('company.tab.overview'), href: getLocalizedPath('/company', lng) },
    { title: t('company.tab.ideology'), href: getLocalizedPath('/company/ideology', lng) },
    { title: t('company.tab.location'), href: getLocalizedPath('/company/location', lng) }
  ];

  const values = [
    { title: 'Innovation', description: t('company.ideology.value1') },
    { title: 'Trust', description: t('company.ideology.value2') },
    { title: 'Collaboration', description: t('company.ideology.value3') }
  ];

  return (
    <article>
      <div className='company-header'>
        <div className='container'>
          <TabMenu items={tabItems} />
        </div>
      </div>
      <IdeologySection>
        <div className='container'>
          <div className='ideology-intro'>
            <h1 className='main-title'>
              {t('company.ideology.title')}
            </h1>
            <p className='sub-title'>
              {t('company.ideology.highlight')}
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
                  {t('company.ideology.vision')}
                </p>
              </div>
              <div className='img-content'>
                <CustomImg
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