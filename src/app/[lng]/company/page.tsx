'use client'

import { useTranslation } from '@/i18n/client';
import { AvailableLanguages } from '@/i18n/settings';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import { TabMenu } from '@/components/layout/TabMenu';
import CustomImg from '@/components/custom/CustomImg';

import { styled } from '@mui/material';

const CompanySection = styled('section')(({ theme }) => ({
  padding: '3rem 0',
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
    '@media (max-width: 768px)': {
      textAlign: 'center',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: '2rem',
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

  return (
    <article>
      <div className='company-header'>
        <div className='container'>
          <TabMenu items={tabItems} />
        </div>
      </div>
      <CompanySection>
        <div className='container'>
          <div className='section-content'>
            <div className='text-content'>
              <h2 className='section-title'>
                {t('company.overview1.title')}
              </h2>
              <p className='highlight'>
                {t('company.overview1.highlight')}
              </p>
              <p className='description'>
                {t('company.overview1.description')}
              </p>
            </div>
            <div className='img-content'>
              <CustomImg
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
              <CustomImg
                src='/assets/img/company2.jpg'
                alt='company mission'
                width={500}
                height={350}
                priority
              />
            </div>
            <div className='text-content'>
              <h2 className='section-title'>
                {t('company.overview2.title')}
              </h2>
              <p className='highlight'>
                {t('company.overview2.highlight')}
              </p>
              <p className='description'>
                {t('company.overview2.description')}
              </p>
            </div>
          </div>
        </div>
      </CompanySection>
    </article>
  );
}