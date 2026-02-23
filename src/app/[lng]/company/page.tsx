'use client'

import { use } from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { AvailableLanguages } from '@/i18n/settings';

import { styled } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';

const CompanySection = styled('section')(({ theme }) => ({
  padding: '4rem 0 2rem 0',
  '.section-title': {
    fontSize: '2.25rem',
    fontWeight: 700,
    marginBottom: '3rem',
    color: 'var(--main-color)',
    lineHeight: 1.3,
    minWidth: '10rem',
  },
  '.company-info': {
    display: 'flex',
    gap: '6rem',
    width: '100%',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '0',
      '.section-title': {
        textAlign: 'center',
      },
    },
    '.info-table': {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'var(--bg-color)',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08), var(--info-inset-shadow)',
      'tr': {
        borderBottom: '1px solid var(--border-color)',
        '&:last-child': {
          borderBottom: 'none',
        },
      },
      'th': {
        padding: '1.25rem 1.5rem',
        textAlign: 'left',
        backgroundColor: 'var(--bg-sub-color)',
        fontWeight: 600,
        color: 'var(--main-color)',
        fontSize: '1rem',
        width: '30%',
        '@media (max-width: 768px)': {
          width: '33%',
          padding: '1rem',
          fontSize: '1rem',
        },
      },
      'td': {
        padding: '1.25rem 1.5rem',
        color: 'var(--text-color)',
        fontSize: '1rem',
        '@media (max-width: 768px)': {
          padding: '1rem',
          fontSize: '1rem',
        },
      },
    },
  },
}));

const LocationSection = styled('section')(({ theme }) => ({
  padding: '2rem 0 4rem 0',
  '.location-info': {
    display: 'flex',
    gap: '6rem',
    width: '100%',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '0',
      '.main-title': {
        textAlign: 'center',
        marginBottom: '2rem',
      },
    },
  },
  '.main-title': {
    fontSize: '2.25rem',
    fontWeight: 700,
    color: 'var(--main-color)',
    marginBottom: '0',
    marginTop: '0',
    lineHeight: 1.3,
    minWidth: '10rem',
  },
  '.info-section': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '100%',
    backgroundColor: 'var(--bg-color)',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08), var(--info-inset-shadow)',
    '.map-container': {
      display: 'flex',
      width: '100%',
      overflow: 'hidden',
      iframe: {
        minHeight: '260px',
      }
    },
    '.info-content': {
      padding: '2rem 1.5rem',
      borderTop: '1px solid var(--border-color)',
      '@media (max-width: 768px)': {
        padding: '1.5rem 1rem',
      },
      '.info-title': {
        fontSize: '1.25rem',
        fontWeight: 600,
        color: 'var(--main-color)',
        marginTop: '0',
        marginBottom: '1.5rem',
      },
      '.info-list': {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        paddingLeft: '0.5rem',
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
              fontSize: '1rem',
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

const breadcrumbs: Breadcrumb[] = [
  { label: '会社概要', href: '/company', active: true },
];

export default function CompanyPage({
  params
}: {
  params: Promise<{ lng: AvailableLanguages }>
}) {
  const { lng } = use(params);

  return (
    <article>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <CompanySection>
        <div className='container'>
          <div className='company-info'>
            <h2 className='section-title'>会社概要</h2>
            <table className='info-table'>
              <tbody>
                <tr>
                  <th>会社名</th>
                  <td>株式会社Univus (Univus Inc.)</td>
                </tr>
                <tr>
                  <th>設立日</th>
                  <td>2025年4月18日</td>
                </tr>
                <tr>
                  <th>代表者</th>
                  <td>代表取締役 CEO 河 伶録</td>
                </tr>
                <tr>
                  <th>本社所在地</th>
                  <td>福岡県福岡市博多区博多駅前1丁目23番2号<br className='pc-only' />ParkFront博多駅前1丁目5F-B</td>
                </tr>
                <tr>
                  <th>事業内容</th>
                  <td>Web制作・開発、システム構築、<br />デジタルサービス開発・運営、企業向けシステム開発</td>
                </tr>
                <tr>
                  <th>主要サービス</th>
                  <td>ヒルクル、レジゼロ</td>
                </tr>
                <tr>
                  <th>適格請求書発行<br />事業者登録番号</th>
                  <td>T3290001109800</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CompanySection>
      <LocationSection>
        <div className='container'>
          <div className='location-info'>
            <h1 className='main-title'>
              {`アクセス`}
            </h1>
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
                  {`福岡本社`}
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
        </div>
      </LocationSection>
    </article>
  );
}