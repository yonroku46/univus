'use client';

import { useEffect, useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AvailableLanguages } from '@/i18n/settings';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import HeroSection from '@/components/home/HeroSection';
import EastIcon from '@mui/icons-material/East';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import AutoModeRoundedIcon from '@mui/icons-material/AutoModeRounded';
import '@/styles/pages/home.scss';

export default function Home({
  params,
}: {
  params: Promise<{ lng: AvailableLanguages }>;
}) {
  const { lng } = use(params);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isNoticesLoading, setIsNoticesLoading] = useState<boolean>(true);

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({
        once: true,
        duration: 650,
        easing: 'ease-out-cubic',
        offset: 80,
      });
    });
  }, []);

  useEffect(() => {
    async function fetchNotices() {
      try {
        const response = await fetch('https://univus-jp.s3.ap-northeast-1.amazonaws.com/notices-ja.json');
        if (response.ok) {
          const data = await response.json();
          setNotices(data.notices || []);
        }
      } catch (error) {
        console.error('Failed to fetch notices:', error);
      } finally {
        setIsNoticesLoading(false);
      }
    }
    fetchNotices();
  }, [lng]);

  const coreValues = [
    {
      tag: '01',
      title: 'それぞれの得意を、そのまま力に',
      body: '人それぞれ違う「得意」や「こだわり」を認め合い、誰もが自分らしく力を発揮できるチームをつくります。ちがう視点が集まるからこそ、新しい答えが見つかります。',
    },
    {
      tag: '02',
      title: '対話を重ね、一緒に創る',
      body: '一人では届かない場所へも、仲間やお客様と想いを交わし合うことでたどり着けます。じっくりと対話を重ね、関わる人みんなにとって本当に喜ばれるものを目指します。',
    },
    {
      tag: '03',
      title: '使う人の毎日に、心地よさを',
      body: '「作って終わり」ではなく、実際に手にする人が使いやすく、ずっと愛着を持てるものを。見えない部分の丁寧さと誠実な技術で、期待の一歩先へお応えします。',
    },
  ];

  const businessDomains = [
    {
      icon: CodeRoundedIcon,
      category: '受託開発',
      categoryJa: 'Web・システム開発',
      desc: '「こんな仕組みがあったら便利なのに」という構想から、画面設計、開発、公開後の運用まで。日々の業務を助け、事業の成長を支える仕組みをオーダーメイドで形にします。',
      tags: ['業務システム構築', 'Webサイト・Webアプリ', '安心の運用サポート'],
    },
    {
      icon: AutoModeRoundedIcon,
      category: 'DX支援',
      categoryJa: 'DX・デジタル化支援',
      desc: '新しい取り組みの立ち上げから、手作業や紙が残る業務のデジタル化まで。「ITの専門部署がない」という企業にも寄り添い、無理のないペースで伴走します。',
      tags: ['新規事業立ち上げ', '業務のデジタル化', '伴走型サポート'],
    },
  ];

  const inHouseProducts = [
    {
      id: 'hirukuru',
      name: 'Hirukuru（ヒルクル）',
      title: '待たず、迷わず、できたての食事を。スマートテイクアウト',
      summary:
        'お昼時の混雑や待ち時間をなくし、働く人にゆったりとした休憩時間を届けるテイクアウトサービス。オフィス街の飲食店と働く人を心地よくつなぎます。',
      image: '/assets/lp/hero.png',
      link: getLocalizedPath('/project/hirukuru', lng),
      bg: '#f1f5f9',
      appIcon: '/assets/icon/hirukuru-icon.svg',
    },
    {
      id: 'regizero',
      name: 'RegiZERO（レジゼロ）',
      title: 'レジはもっとシンプルでいい。次世代型スマート店舗決済',
      summary:
        '専用の大きなレジや機械がなくても、スマホひとつでスムーズにお会計。お店の手間を減らし、お買い物をもっと身近で手軽にします。',
      image: '/assets/lp2/hero.png',
      link: getLocalizedPath('/project/regizero', lng),
      bg: '#f4f4f5',
      appIcon: '/assets/icon/regizero-icon.svg',
    },
  ];

  const displayNotices = notices.slice(0, 3);

  return (
    <article className="gd-home-page">
      {/* 1. Hero Section */}
      <HeroSection lng={lng} />

      {/* 2. Philosophy & Statement */}
      <section className="gd-section gd-statement-section">
        <div className="container">
          <div className="statement-layout" data-aos="fade" data-aos-duration="700">
            <div className="statement-lead-area">
              <h2 className="statement-title">
                個の強みを、<br />
                社会の力へ。
              </h2>
            </div>
            <div className="statement-body-area">
              <p className="body-lead">
                異なる強みや想いが重なり合うところに、<br className="pc-only" />
                これからの社会を動かす、確かな変化が芽生えます。<br />
                誰かひとりの力だけに頼るのではなく、<br className="pc-only" />
                互いの得意を信じ、手を取り合って前へ進むこと。
              </p>
            </div>
          </div>

          <div className="values-row">
            {coreValues.map((val, idx) => (
              <div
                key={val.tag}
                className="value-col"
                data-aos="fade-up"
                data-aos-delay={idx * 130}
                data-aos-duration="600"
              >
                <span className="value-tag">{val.tag}</span>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-text">{val.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Business Domains */}
      <section className="gd-section gd-business-section">
        <div className="container">
          <div className="section-head">
            <h2 className="head-title">事業内容</h2>
            <p className="head-desc">
              福岡・博多を拠点に、使う人の声に耳を傾け、確かな技術で課題を解決します。
            </p>
          </div>

          <div className="domain-grid">
            {businessDomains.map((domain, idx) => {
              const IconComponent = domain.icon;
              return (
                <div
                  key={domain.category}
                  className="domain-item"
                  data-aos="fade-up"
                  data-aos-delay={idx * 120}
                  data-aos-duration="600"
                >
                  <div className="domain-top-bar">
                    <div className="domain-icon-wrapper">
                      <IconComponent className="domain-icon" />
                    </div>
                    <span className="domain-category-pill">{domain.category}</span>
                  </div>

                  <h3 className="domain-title">{domain.categoryJa}</h3>
                  <p className="domain-desc">{domain.desc}</p>

                  <div className="domain-tags-wrap">
                    {domain.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="domain-tag-pill">
                        <span className="dot" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. In-House Products Section */}
      <section className="gd-section gd-projects-section">
        <div className="container">
          <div className="section-head split">
            <div>
              <h2 className="head-title">自社プロダクト</h2>
              <p className="head-desc">
                日々の暮らしや街の店舗を豊かにする、自社企画・運営のサービスです。
              </p>
            </div>
            <Link href={getLocalizedPath('/project/products', lng)} className="link-text-arrow pc-only">
              <span>プロダクト一覧を見る</span>
              <EastIcon className="arrow" />
            </Link>
          </div>

          <div className="projects-grid">
            {inHouseProducts.map((project, idx) => (
              <div
                key={project.id}
                className="project-frame"
                data-aos="fade-up"
                data-aos-delay={idx * 140}
                data-aos-duration="600"
              >
                <div className="project-visual-box" style={{ backgroundColor: project.bg }}>
                  <div className="img-container">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 900px) 100vw, 560px"
                      className="project-cover"
                    />
                  </div>
                  {/* Floating App Icon Badge */}
                  <div className="project-app-badge" aria-hidden="true">
                    <Image
                      src={project.appIcon}
                      alt={`${project.name} icon`}
                      width={52}
                      height={52}
                      className="app-icon-img"
                    />
                  </div>
                </div>
                <div className="project-body">
                  <h3 className="project-name">{project.name}</h3>
                  <h4 className="project-heading">{project.title}</h4>
                  <p className="project-summary">{project.summary}</p>
                  <Link href={project.link} className="project-detail-link">
                    <span>詳細を見る</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="sp-view-all sp-only">
            <Link href={getLocalizedPath('/project/products', lng)} className="link-text-arrow">
              <span>プロダクト一覧を見る</span>
              <EastIcon className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Information News */}
      <section className="gd-section gd-news-section">
        <div className="container">
          <div className="news-card-block">
            <div className="news-block-header">
              <div className="title-group">
                <h3 className="section-title">お知らせ</h3>
              </div>
              <Link href={getLocalizedPath('/contact/notice', lng)} className="news-all-link">
                <span>一覧を見る</span>
                <EastIcon className="arrow" />
              </Link>
            </div>

            <div className="news-list-rows">
              {displayNotices.length > 0 ? (
                displayNotices.map((notice) => (
                  <Link
                    key={notice.id}
                    href={getLocalizedPath('/contact/notice', lng)}
                    className="news-row-item"
                  >
                    <div className="news-row-meta">
                      <time className="news-date">{notice.date}</time>
                      <span className={`news-type-tag ${notice.type}`}>
                        {notice.type === 'service' ? 'サービス' : 'お知らせ'}
                      </span>
                    </div>
                    <div className="news-row-title">
                      <span>{notice.title}</span>
                    </div>
                  </Link>
                ))
              ) : !isNoticesLoading ? (
                <div className="news-empty-row">
                  <span>現在、掲載中のお知らせはありません。</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
