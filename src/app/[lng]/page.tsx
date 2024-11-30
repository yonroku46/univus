'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/i18n/client';
import { AvailableLanguages } from '@/i18n/settings';
import ContentsTitle from '@/components/layout/ContentsTitle';
import ContentsCard from '@/components/layout/ContentsCard';
import ProfileCard from '@/components/layout/ProfileCard';
import CustomImg from '@/components/custom/CustomImg';
import { getLocalizedPath } from '@/common/utils/LngUtils';

export default function Home(
  { params: { lng } }: { params: { lng: AvailableLanguages } }
) {
  const { t } = useTranslation(lng, 'home');

  const aboutCardList = [
    { img: '/assets/img/home1.jpg', title: 'Enjoy', description: t('home.about.description1') },
    { img: '/assets/img/home2.avif', title: 'Experience', description: t('home.about.description2') },
    { img: '/assets/img/home3.jpg', title: 'Each other', description: t('home.about.description3') }
  ]
  const crewCardList = [
    { nickname: t('home.crew1.nickname'), color: 'var(--main-color)', title: t('home.crew1.title'), subTitle: t('home.crew1.from'), intro: t('home.crew1.intro') },
    { nickname: t('home.crew2.nickname'), color: 'var(--sub-color)', title: t('home.crew2.title'), subTitle: t('home.crew2.from'), intro: t('home.crew2.intro') },
    { nickname: t('home.crew3.nickname'), color: 'var(--main-color)', title: t('home.crew3.title'), subTitle: t('home.crew3.from'), intro: t('home.crew3.intro') },
    { nickname: t('home.crew4.nickname'), color: 'var(--sub-color)', title: t('home.crew4.title'), subTitle: t('home.crew4.from'), intro: t('home.crew4.intro') }
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
      <div className='home background'>
        <div className='bg-video'>
          <video className='bg-video-content' autoPlay loop muted>
            <source src='/assets/img/background.mp4' type='video/mp4' />
            Your browser does not support the video tag
          </video>
        </div>
        <div className='container main'>
          <div className='main-title'>
            <div className='main' data-aos='fade' data-aos-duration='800'>
              {t('home.mainTitle')}
            </div>
            <div className='sub' data-aos='fade' data-aos-delay='600' data-aos-duration='1200'>
              {t('home.subTitle')}
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
      <div className='home-contents'>
        <div className='container'>
          <ContentsTitle
            description={'About Us'}
            title={t('home.about.title')}
          />
          <div className='contents'>
            <ContentsCard items={aboutCardList} />
          </div>
        </div>
        <div className='container'>
          <ContentsTitle
            description={'Project'}
            title={t('home.project.title')}
          />
          <div className='contents project'>
            <div className='project-main'>
              <div className='project-text' data-aos='fade-right'>
                <h1>
                  {t('home.project.text')}
                  <div className='title-accent' data-aos='fade-right'/>
                </h1>
                <p className='highlight'>
                  {t('home.project.highlight')}
                </p>
                <p className='description'>
                  {t('home.project.description')}
                </p>
                <Link href={getLocalizedPath('/project', lng)} className='service-btn'>
                  {t('home.project.more')}
                  <span className='arrow'>→</span>
                </Link>
              </div>
              <div className='project-img' data-aos='fade-left'>
                <div className='image-wrapper back'>
                  <CustomImg
                    src='/assets/img/lunch1.jpg'
                    alt='lunch1'
                    width={340}
                    height={250}
                    priority
                  />
                </div>
                <div className='image-wrapper front'>
                  <CustomImg
                    src='/assets/img/lunch2.jpg'
                    alt='lunch2'
                    width={340}
                    height={250}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <ContentsTitle
            description={'Crew'}
            title={t('home.crew.title')}
          />
          <div className='contents crew'>
            {crewCardList.map((crew, idx) => (
              <ProfileCard
                key={idx}
                nickname={crew.nickname}
                color={crew.color}
                title={crew.title}
                subTitle={crew.subTitle}
                intro={crew.intro}
              />
            ))}
          </div>
        </div>
        <div className='contents-inquary'>
          <div className='container'>
            <div className='inquary'>
              <div className='intro'>
                {t('home.inquary.title')}
              </div>
              <Link className='more-btn' href={getLocalizedPath('/company', lng)}>
                {t('home.inquary.more')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
