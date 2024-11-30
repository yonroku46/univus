'use client'

import { useRouter } from 'next/navigation';
import { TabMenu } from '@/components/layout/TabMenu';
import { useTranslation } from '@/i18n/client';
import { AvailableLanguages } from '@/i18n/settings';
import { Box, styled } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const LocationSection = styled('section')(({ theme }) => ({
  padding: '2rem 0',
  '.location-intro': {
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
  '.info-section': {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '2rem',
    width: '100%',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: '2rem',
    },
    '.map-container': {
      flex: 1.5,
      display: 'flex',
      height: '400px',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      iframe: {
        minHeight: '300px',
      }
    },
    '.info-content': {
      flex: 1,
      padding: '2rem',
      backgroundColor: '#fff',
      borderRadius: '1rem',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      '.info-title': {
        fontSize: '1.5rem',
        fontWeight: 600,
        color: 'var(--main-color)',
        marginBottom: '2rem',
      },
      '.info-list': {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        '.info-item': {
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
          '.icon': {
            color: 'var(--main-color)',
            marginTop: '0.25rem',
          },
          '.text': {
            flex: 1,
            '.label': {
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
              color: 'var(--sub-color)',
            },
            '.value': {
              fontSize: '1rem',
              color: 'var(--text-sub-color)',
              lineHeight: 1.6,
              whiteSpace: 'pre-line',
            }
          }
        }
      }
    }
  }
}));

export default function LocationPage({
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

      <LocationSection>
        <div className='container'>
          <div className='location-intro'>
            <h1 className='main-title'>오시는 길</h1>
            <p className='sub-title'>
              {'유니버스 본사에 방문하시는 것을 환영합니다.\n찾아오시는 길을 안내해드립니다.'}
            </p>
          </div>

          <div className='info-section'>
            <div className='map-container'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1661.7800288466237!2d130.39290469139814!3d33.59077023583008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35419188d205b021%3A0x6b2ac52dd2d464b6!2sYoka%20Lab%20Tenjin!5e0!3m2!1sko!2skr!4v1732891156478!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            </div>

            <div className='info-content'>
              <h2 className='info-title'>본사 정보</h2>
              <div className='info-list'>
                <div className='info-item'>
                  <PlaceIcon className='icon' />
                  <div className='text'>
                    <div className='label'>주소</div>
                    <div className='value'>
                      {'〒810-0001\n후쿠오카현 후쿠오카시 주오구\n텐진 1-1-1 텐진빌딩 8층'}
                    </div>
                  </div>
                </div>

                <div className='info-item'>
                  <LocalPhoneIcon className='icon' />
                  <div className='text'>
                    <div className='label'>전화번호</div>
                    <div className='value'>+81-92-XXX-XXXX</div>
                  </div>
                </div>

                <div className='info-item'>
                  <EmailIcon className='icon' />
                  <div className='text'>
                    <div className='label'>이메일</div>
                    <div className='value'>info@univus.co.jp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LocationSection>
    </article>
  );
}