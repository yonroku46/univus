'use client'

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AvailableLanguages } from '@/i18n/settings';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import '@/styles/pages/home.scss';
import { AnimatedText } from '@/components/layout/AnimatedText';
import { useMediaQuery } from 'react-responsive';
// import { useTranslation } from '@/i18n/client';

export default function Home(
  { params: { lng } }: { params: { lng: AvailableLanguages } }
) {
  // const { t } = useTranslation(lng, 'home');
  const isSp = useMediaQuery({ query: '(max-width: 1179px)' });

  const aboutCardList = [
    { img: '/assets/img/home1.avif', title: 'Explore', description: '好きを見つける' },
    { img: '/assets/img/home2.avif', title: 'Creative', description: '夢をカタチに' },
    { img: '/assets/img/home3.avif', title: 'Service', description: '体験をお届け' }
  ]

  const serviceCardList = [
    {
      title: '事業相談',
      description: 'お客様のビジネスを\nサポートいたします。\nまずはご相談ください。',
      link: '/consultation',
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
        <div className='container' style={{ padding: '4rem 1rem' }}>
          <h1 className='about-title' data-aos='fade-right'>Our Mission</h1>
          <h2 className='about-sub-title' data-aos='fade-right'>
            {`一人ひとりの得意を活かし\n可能性をひらく社会へ`}
          </h2>
          <p className='about-highlight' data-aos='fade-right'>
            {'私たちは、一人ひとりの違いを尊重し\n各々の専門性を活かすことで\nより良い価値と体験を社会に提供します'}
          </p>
          <div className='about-box'>
            {aboutCardList.map((item, idx) => (
              <div
                key={idx}
                className='about-card'
                data-aos={'fade-right'}
                data-aos-delay={`${idx * 200}`}
                data-aos-duration='1000'
              >
                <Image
                  className='img'
                  src={item.img}
                  alt={item.title}
                  fill
                />
                <div className='text'>
                  <div className='title'>
                    {item.title}
                  </div>
                  <div className='description'>
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Project1 */}
        <div style={{ backgroundColor: '#fff', position: 'relative', padding: isSp ? '3rem 0 0 0' : '4rem 0' }}>
          <div className='container' style={{ padding: isSp ? '1rem 1rem 0 1rem' : '1rem' }}>
            <div className='project-intro reverse'>
              <div className='project-text' data-aos='fade-right'>
                <h2 className='title'>Web制作</h2>
                <h1>
                  {'A to Z\nビジネスを拡大'}
                </h1>
                <p className='highlight'>
                  {'会社ホームページから\n社内システム構築まで\nビジネスに応じたサービスを提供します。'}
                </p>
                <Link className='service-btn' href={'/contact'}>
                  まずはご相談
                  <span className='arrow'>→</span>
                </Link>
              </div>
              <div className='project-img' data-aos='fade-up'>
                <Image
                  src='/assets/img/project1.jpg'
                  alt='project1'
                  width={400}
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Project2 */}
        <div style={{ backgroundColor: '#f1f7ff', position: 'relative', padding: isSp ? '3rem 0' : '0' }}>
          <div className='container'>
            <div className='project-intro'>
              <div className='project-text' data-aos='fade-right'>
                <h2 className='title'>{`ヒルクル`}</h2>
                <h1>
                  {`忙しい日常\nお昼休みは余裕を持って`}
                </h1>
                <p className='highlight'>
                  {`美味しい食事と余裕を持って楽しむ休憩\nヒルクルと一緒ならさらに特別になります`}
                </p>
                <Link className='service-btn' href={'https://hirukuru.com/service'} target='_blank'>
                  {`サービス紹介`}
                  <span className='arrow'>→</span>
                </Link>
              </div>
              <div className='project-img' data-aos='fade-up'>
                <Image
                  className='view-img'
                  src='/assets/img/screen1.png'
                  alt='screen1'
                  width={400}
                  height={600}
                  priority
                />
                <Image
                  className='iphone'
                  src='/assets/img/iPhone15.png'
                  alt='iPhone15'
                  width={400}
                  height={600}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Service */}
        <div style={{ backgroundColor: '#fff', position: 'relative', padding: isSp ? '3rem 0' : '5rem 0', }}>
          <div className='container'>
            <div className='service-box'>
              {serviceCardList.map((item, idx) => (
                <div key={idx} className='service-card'>
                  <div className='title'>{item.title}</div>
                  <div className='description'>{item.description}</div>
                  <Link className='link-btn' href={item.link}>
                    {item.linkText}
                  </Link>
                </div>
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
