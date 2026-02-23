'use client'

import { useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AvailableLanguages } from '@/i18n/settings';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import '@/styles/pages/home.scss';
import { AnimatedText } from '@/components/layout/AnimatedText';
import EastIcon from '@mui/icons-material/East';
// import { useTranslation } from '@/i18n/client';

export default function Home(
  { params }: { params: Promise<{ lng: AvailableLanguages }> }
) {
  const { lng } = use(params);
  // const { t } = useTranslation(lng, 'home');

  const coreValues = [
    { title: 'Individuality', description: `一人ひとりの「違い」を力に変える。\nお互いの専門性と個性を尊重し\n最大限に発揮できる環境を作ります。` },
    { title: 'Synergy', description: `得意を掛け合わせ、限界を超える。\n個人の力だけでは到達できない\n圧倒的なクオリティと価値を共創します。` },
    { title: 'Excellence', description: `常にユーザーの期待の一歩先へ。\n現状に満足することなく、最適な体験と\nより良い未来を追求し続けます。` }
  ]

  const serviceCardList = [
    {
      title: '事業相談',
      description: 'お客様のビジネスを\nサポートいたします。\nまずはご相談ください。',
      link: '/contact',
      linkText: '相談する'
    },
    {
      title: 'プロジェクト',
      description: '現在進行中の\nプロジェクトと\nサービスをご紹介。',
      link: '/project',
      linkText: '内容を見る'
    },
    {
      title: '採用情報',
      description:'共に未来を創る\n仲間を募集しています。\n成長機会が待っています。',
      link: '/recruit',
      linkText: '詳細を見る'
    },
    {
      title: 'ニュース',
      description: '最新の技術動向と\n企業活動の\n最新情報をお届け。',
      link: '/contact/notice',
      linkText: '最新ニュース'
    }
  ]

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({
        once: true,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate'
      });
    });
  }, []);

  return (
    <article>
      {/* Home header */}
      <div className='home background'>
        <div className='container'>
          <div className='main-title'>
            <div className='main'>
              <AnimatedText
                words={['人々を繋げる', '可能性を広げる', '未来を創る']}
                interval={4000}
              />
            </div>
            <div className='sub'>
              Univus
            </div>
          </div>
          <div className='sc-down' data-aos='fade-up' data-aos-easing='ease-out-cubic' data-aos-delay='1200' data-aos-anchor-placement='bottom-bottom'>
            <div className='sc-line' />
            <p className='sc-text'>
              scroll down
            </p>
          </div>
        </div>
      </div>
      <div className='home-wrapper'>
        {/* About */}
        {/* Our Mission & Core Values */}
        <div className='modern-values'>
          <div className='container'>
            <div className='section-header' data-aos='fade-up'>
              <span className='sub-title'>Our Mission</span>
              <h2 className='title'>一人ひとりの得意を<br className='mobile-only' />活かせる社会へ</h2>
            </div>
            <div className='value-list'>
              {coreValues.map((item, idx) => (
                <div
                  key={idx}
                  className='value-item'
                  data-aos='fade-up'
                  data-aos-delay={`${idx * 150}`}
                >
                  <div className='item-number'>0{idx + 1}</div>
                  <div className='item-content'>
                    <h3 className='title'>{item.title}</h3>
                    <p className='description'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Modern Projects Showcase */}
        <div className='modern-projects'>
          <div className='container'>
            <div className='section-header' data-aos='fade-up'>
              <span className='sub-title'>Portfolio & Services</span>
              <h2 className='title'>プロジェクト & サービス</h2>
            </div>
            {/* Project1 */}
            <div className='project-item' data-aos='fade-up'>
              <div className='project-visual'>
                <div className='visual-bg' style={{ backgroundColor: '#f0f4f8' }}></div>
                <div className='project-img'>
                  <Image
                    src='/assets/img/project1.jpg'
                    alt='project1'
                    fill
                    sizes="(max-width: 1179px) 100vw, 500px"
                    priority
                  />
                </div>
              </div>
              <div className='project-content'>
                <span className='project-number'>Consulting</span>
                <span className='tag'>Web制作</span>
                <h3 className='project-title'>{'A to Z\nビジネスを拡大'}</h3>
                <p className='project-desc'>
                  {'会社ホームページから社内システム構築まで\nビジネスに応じたサービスを提供します。'}
                </p>
                <Link className='explore-btn' href={'/contact'}>
                  まずはご相談
                  <span className='arrow'>→</span>
                </Link>
              </div>
            </div>
            {/* Project2 */}
            <div className='project-item reverse' data-aos='fade-up'>
              <div className='project-visual'>
                <div className='visual-bg' style={{ backgroundColor: '#f1f7ff' }}></div>
                <div className='project-img'>
                  <Image
                    src='/assets/lp/hero.png'
                    alt='project2'
                    fill
                    sizes="(max-width: 1179px) 100vw, 500px"
                    priority
                  />
                </div>
              </div>
              <div className='project-content'>
                <span className='project-number'>Hirukuru</span>
                <span className='tag'>ヒルクル</span>
                <h3 className='project-title'>{'待たず迷わず\nテイクアウト'}</h3>
                <p className='project-desc'>
                  {'美味しい食事と余裕を持って楽しむ休憩\nヒルクルと一緒ならさらに特別になります'}
                </p>
                <Link className='explore-btn' href={getLocalizedPath('/project/hirukuru', lng)}>
                  サービス紹介
                  <span className='arrow'>→</span>
                </Link>
              </div>
            </div>
            {/* Project3 */}
            <div className='project-item' data-aos='fade-up'>
              <div className='project-visual'>
                <div className='visual-bg' style={{ backgroundColor: '#eeeeeeff' }}></div>
                <div className='project-img'>
                  <Image
                    src='/assets/lp2/hero.png'
                    alt='project3'
                    fill
                    sizes="(max-width: 1179px) 100vw, 500px"
                    priority
                  />
                </div>
              </div>
              <div className='project-content'>
                <span className='project-number'>RegiZERO</span>
                <span className='tag'>レジゼロ</span>
                <h3 className='project-title'>{'レジをもっと\nシンプルでいい'}</h3>
                <p className='project-desc'>
                  {'カウンター不要で簡単に決済\nレジゼロでより快適な店舗運営が可能に'}
                </p>
                <Link className='explore-btn' href={getLocalizedPath('/project/regizero', lng)}>
                  サービス紹介
                  <span className='arrow'>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className='modern-services'>
          <div className='container'>
            <div className='service-box'>
              {serviceCardList.map((item, idx) => (
                <Link key={idx} className='service-card' href={item.link}>
                  <h3 className='title'>{item.title}</h3>
                  <p className='description'>{item.description}</p>
                  <div className='link-btn'>
                    {item.linkText}
                    <EastIcon className='arrow' />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Inquary */}
        <div className='contents-inquary'>
          <div className='container'>
            <div className='inquary'>
              <div className='intro'>
                {'チーム、\nユニバスについて。'}
              </div>
              <Link className='more-btn' href={getLocalizedPath('/company', lng)}>
                {`詳細はこちら`}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
