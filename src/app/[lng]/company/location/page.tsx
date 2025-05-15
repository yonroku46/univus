'use client'

import { AvailableLanguages } from '@/i18n/settings';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import { TabMenu } from '@/components/layout/TabMenu';

import { styled } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';

const LocationSection = styled('section')(({ theme }) => ({
  padding: '1rem 0',
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
        minHeight: '280px',
      }
    },
    '.info-content': {
      flex: 1,
      padding: '2rem',
      backgroundColor: 'var(--bg-color)',
      borderLeft: '1px solid var(--border-color)',
      '@media (max-width: 768px)': {
        borderLeft: 'none',
        borderTop: '1px solid var(--border-color)'
      },
      '.info-title': {
        fontSize: '1.25rem',
        fontWeight: 600,
        color: 'var(--main-color)',
        marginTop: '0',
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
              color: 'var(--main-color)',
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
      <LocationSection>
        <div className='container'>
          <div className='location-intro'>
            <h1 className='main-title'>
              {`アクセス`}
            </h1>
            <p className='sub-title'>
              {`Univus本社にご来社いただきありがとうございます。\nアクセスルートをご案内します。`}
            </p>
          </div>

          <div className='info-section'>
            <div className='map-container'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4451007277326!2d130.41336308830793!3d33.5937539730544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354191c68c8db49d%3A0xa714bbe4691285a!2z5pel5pys44CB44CSODEyLTAwMTEg56aP5bKh55yM56aP5bKh5biC5Y2a5aSa5Yy65Y2a5aSa6aeF5YmN77yR5LiB55uu77yS77yT4oiS77yS!5e0!3m2!1sja!2skr!4v1741582070141!5m2!1sja!2skr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className='info-content'>
              <h2 className='info-title'>
                {`本社`}
              </h2>
              <div className='info-list'>
                <div className='info-item'>
                  <PlaceIcon className='icon' />
                  <div className='text'>
                    <div className='label'>
                      {`住所`}
                    </div>
                    <div className='value'>
                      {`〒812-0011\n福岡県福岡市博多区博多駅前1丁目\n23番2号ParkFront博多駅前1丁目5F-B`}
                    </div>
                  </div>
                </div>
                <div className='info-item'>
                  <EmailIcon className='icon' />
                  <div className='text'>
                    <div className='label'>
                      {`メールアドレス`}
                    </div>
                    <div className='value'>
                      {`support@univus.jp`}
                    </div>
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