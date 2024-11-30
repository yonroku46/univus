'use client'

import { useRouter } from 'next/navigation';
import { TabMenu } from '@/components/layout/TabMenu';
import { useTranslation } from '@/i18n/client';
import { AvailableLanguages } from '@/i18n/settings';
import CustomImg from '@/components/custom/CustomImg';
import { Box, styled } from '@mui/material';

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
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
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
  const { t } = useTranslation(lng, 'navigation');
  const router = useRouter();

  const tabItems = [
    { title: '회사개요', href: '/company' },
    { title: '기업이념', href: '/company/philosophy' },
    { title: '오시는 길', href: '/company/location' }
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
                {'서비스를 통한\n사회적 가치 실현'}
              </h2>
              <p className='highlight'>
                {'유니버스는 혁신적인 서비스로\n더 나은 세상을 만들어갑니다'}
              </p>
              <p className='description'>
                {'바쁜 현대인의 일상 속에서 작은 여유와 편리함을 제공하는 것으로 시작하여,\n' +
                '점차 더 많은 영역에서 긍정적인 변화를 이끌어내고자 합니다.\n' +
                '우리의 서비스가 사회에 기여할 수 있다는 믿음으로,\n' +
                '끊임없는 혁신과 발전을 추구합니다.'}
              </p>
            </div>
            <div className='img-content'>
              <CustomImg
                src='/assets/img/company1.jpg'
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
                {'기술로 연결되는\n더 나은 미래'}
              </h2>
              <p className='highlight'>
                {'최신 기술과 창의적인 아이디어로\n새로운 가치를 창출합니다'}
              </p>
              <p className='description'>
                {'유니버스는 기술을 통해 사람과 사람, 서비스와 가치를 연결합니다.\n' +
                '히루쿠루를 시작으로, 더 많은 혁신적인 서비스를 선보일 예정입니다.\n' +
                '우리의 도전이 만들어갈 미래를 기대해주세요.'}
              </p>
            </div>
          </div>
        </div>
      </CompanySection>
    </article>
  );
}