'use client';

import { use, useEffect, useState } from 'react';
import { AvailableLanguages } from '@/i18n/settings';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SmePartnerSection from '@/components/home/SmePartnerSection';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import '@/styles/pages/project.scss';

const breadcrumbs: Breadcrumb[] = [
  { label: '事業内容', href: '/project', active: true },
];

export default function ProjectPage(
  { params }: { params: Promise<{ lng: AvailableLanguages }> }
) {
  const { lng } = use(params);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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

  const faqs = [
    {
      q: '仕様書や要件定義が固まっていない初期構想の段階でも相談できますか？',
      a: 'はい、大歓迎です。株式会社Univusでは、「こんな仕組みが欲しい」「社内業務を効率化したい」という初期の構想やお困りごとのヒアリングから伴走します。課題整理から画面設計、要件定義まで丁寧にサポートしますので、IT専門部署のない企業様もお気軽にご相談ください。',
    },
    {
      q: '福岡以外の地域（東京・関西など）からの開発・DX支援依頼も可能ですか？',
      a: 'はい、日本全国からご依頼いただけます。福岡本社での対面ミーティングはもちろん、ZoomやGoogle Meet、Slackなどを活用したオンラインでの円滑なコミュニケーション体制を整えております。',
    },
    {
      q: '開発後の保守・運用や継続的な機能改修も依頼できますか？',
      a: 'はい、納品・公開後も安心してサービスを運用いただけるよう、サーバー保守・死活監視、セキュリティ対策、追加機能開発まで継続的に伴走サポートいたします。',
    },
    {
      q: 'どのような開発案件に対応していますか？',
      a: 'オーダーメイドのWebアプリケーション・業務システム開発、手作業や紙業務のDX・デジタル化支援、クラウドインフラ（AWS/GCP/Vercel）構築、店舗向け決済やテイクアウトなどの自社プロダクト企画・運営まで幅広く対応しています。',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <article className="project-page">
        {/* Web Development & DX Support Solution Section */}
        <SmePartnerSection lng={lng} />

        {/* Project & Development FAQ Section (AEO & Customer Clarity) */}
        <section className="project-faq-section" id="faq">
          <div className="container">
            <div className="faq-header" data-aos="fade-up">
              <span className="eyebrow">FAQ</span>
              <h2 className="title">事業・開発に関するよくあるご質問</h2>
              <p className="subtitle">
                Web受託開発・DX伴走支援のご依頼や開発プロセスについて、多くいただくご質問をまとめました。
              </p>
            </div>

            <div className="faq-accordion-list" data-aos="fade-up" data-aos-delay="100">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`faq-card ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="faq-toggle-btn"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-question-content">
                        <span className="badge-q">Q</span>
                        <span className="question-text">{faq.q}</span>
                      </div>
                      <div className="faq-arrow-wrapper">
                        <ExpandMoreRoundedIcon className={`icon ${isOpen ? 'rotate' : ''}`} />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="faq-panel">
                        <div className="faq-panel-inner">
                          <span className="badge-a">A</span>
                          <p className="answer-text">{faq.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}