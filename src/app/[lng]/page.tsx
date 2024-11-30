'use client'

import Link from 'next/link';
import { useTranslation } from '@/i18n/client';
import { AvailableLanguages } from '@/i18n/settings';
import ContentsTitle from '@/components/layout/ContentsTitle';
import ContentsCard from '@/components/layout/ContentsCard';
import ProfileCard from '@/components/layout/ProfileCard';
import CustomImg from '@/components/custom/CustomImg';
import { useEffect } from 'react';

export default function Home(
  { params: { lng } }: { params: { lng: AvailableLanguages } }
) {
  const { t } = useTranslation(lng, 'system');

  const aboutCardList = [
    { img: '/assets/img/home1.jpg', title: 'Enjoy', description: '일상에서의 즐거움' },
    { img: '/assets/img/home2.avif', title: 'Experience', description: '보다 더 나은 방향을 위한 경험' },
    { img: '/assets/img/home3.jpg', title: 'Each other', description: '또다시 함께 할 수 있다는 기쁨' }
  ]
  const crewCardList = [
    { nickname: 'YR', color: 'var(--main-color)', title: 'Ha', subTitle: '부산 출신', thumbnail: '/assets/img/user1.jpg', intro: '일상에서 느낄 수 있는 작은 즐거움을 더 많이 전하고 싶습니다.' },
    { nickname: 'GO', color: 'var(--sub-color)', title: 'Matoba', subTitle: '사이타마 출신', thumbnail: '/assets/img/user2.jpg', intro: '단순히 서비스가 아닌 기억에 남는 경험을 준다는 것. 그것을 현실로 만들어 가기에 기대됩니다.' },
    { nickname: '?', color: 'var(--main-color)', title: 'Anonymous', subTitle: '미정', thumbnail: '/assets/img/user3.avif', intro: '크루가 자기소개를 준비중 입니다' },
    { nickname: '?', color: 'var(--sub-color)', title: 'Anonymous', subTitle: '미정', thumbnail: '/assets/img/user3.avif', intro: '크루가 자기소개를 준비중 입니다' }
  ]

  useEffect(() => {
    // AOS 초기설정
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
              {t('system.home.mainTitle')}
            </div>
            <div className='sub' data-aos='fade' data-aos-delay='600' data-aos-duration='1200'>
              {t('system.home.subTitle')}
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
            title={'Univus는 서비스가 아닌\n경험을 제공합니다'}
          />
          <div className='contents'>
            <ContentsCard items={aboutCardList} />
          </div>
        </div>
        <div className='container'>
          <ContentsTitle
            description={'Project'}
            title={'히루쿠루(Hirukuru)'}
          />
          <div className='contents project'>
            <div className='project-main'>
              <div className='project-text' data-aos='fade-right'>
                <h1>
                  {'바쁜 일상\n점심시간 만큼은 여유롭게'}
                  <div className='title-accent' data-aos='fade-right'/>
                </h1>
                <p className='highlight'>
                  {'하루 8시간 중 1시간,\n소중한 당신의 점심시간'}
                </p>
                <p className='description'>
                  {'맛있는 식사와 여유롭게 즐기는 휴식\n히루쿠루와 함께라면 더욱 특별해집니다'}
                </p>
                <Link href='/project' className='service-btn'>
                  서비스 살펴보기
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
            title={'함께하기 위해\n이자리에 모였습니다'}
          />
          <div className='contents crew'>
            {crewCardList.map((crew, idx) => (
              <ProfileCard
                key={idx}
                nickname={crew.nickname}
                color={crew.color}
                title={crew.title}
                subTitle={crew.subTitle}
                thumbnail={crew.thumbnail}
                intro={crew.intro}
              />
            ))}
          </div>
        </div>
        <div className='contents-inquary'>
          <div className='container'>
            <div className='inquary'>
              <div className='intro'>
                {'저희 유니버스와\n함께하시지 않으시겠어요?'}
              </div>
              <Link className='more-btn' href='/company'>
                더 알아보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
