import NextImage from 'next/image';
import { SectionNav } from '@/components/layout/SectionNav';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { getRegizeroLandingContent, getRegizeroLandingNavItems } from '@/common/contents/content.regizero';
import { PricingEstimator } from '@/app/[lng]/project/regizero/components/pricing-estimator';
import '@/styles/pages/project.regizero.scss';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const breadcrumbs: Breadcrumb[] = [
  { label: 'プロジェクト', href: '/project' },
  { label: 'レジゼロ', href: '/project/regizero', active: true },
];

export default function ProjectRegizero() {
  const { hero, problems, systemFocus, benefits, features, plans, steps, faqs } = getRegizeroLandingContent();
  const navItems = getRegizeroLandingNavItems();
  const officialUrl = "https://lin.ee/NNzTSY3";

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} style={{ marginBottom: 'calc(var(--breadcrumbs-height) * -1)' }} />
      <div className="rz-landing-v2">
        
        {/* Hero */}
        <section className="rz-hero">
          <div className="rz-hero-bg">
            <div className="rz-hero-gradient"></div>
            <div className="rz-hero-noise"></div>
          </div>
          
          <div className="rz-container">
            <div className="rz-hero-inner">
              <div className="rz-hero-badges">
                {hero.highlights.map((h) => <span key={h}>{h}</span>)}
              </div>
              <h1 className="rz-hero-title">
                <span className="rz-hero-title-top">{hero.titleTop}</span>
                <span className="rz-hero-title-bottom">{hero.titleBottom}</span>
              </h1>
              <p className="rz-hero-desc">{hero.subtitle}</p>
              
              <div className="rz-hero-actions">
                <a href={officialUrl} target="_blank" className="rz-btn-primary">
                  <span>導入相談にすすむ</span>
                  <ArrowForwardIcon />
                </a>
                <a href="/docs/service_info.pdf" target="_blank" className="rz-btn-secondary">
                  <span>サービス資料（PDF）</span>
                  <ArrowForwardIcon />
                </a>
              </div>
            </div>
            
            <div className="rz-hero-visual">
              <div className="rz-visual-wrapper">
                <NextImage
                  src="/assets/lp2/hero.png"
                  alt="RegiZero Interface"
                  fill
                  priority
                  className="rz-visual-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <SectionNav items={navItems} />

        {/* Vision / Problems */}
        <section id="introduction" className="rz-section rz-vision">
          <div className="rz-container">
            <div className="rz-section-header">
              <p className="rz-eyebrow">Vision</p>
              <h2 className="rz-heading">オペレーションの「摩擦」を排除する</h2>
              <p className="rz-lead" style={{ marginTop: '1rem', color: 'var(--gray-400)', maxWidth: '600px', fontSize: '1.125rem' }}>
                飲食店やリテールでの会計業務は、これまで多くのムダとストレスを抱えてきました。私たちが目指すのは、ただシステムを導入することではなく、顧客体験そのものを変革することです。
              </p>
            </div>
            
            <div className="rz-problems-grid">
              {problems.map((prob, i) => {
                const Icon = prob.icon;
                return (
                  <div key={i} className="rz-problem-card">
                    <div className="rz-problem-icon"><Icon /></div>
                    <h3 className="rz-problem-title">{prob.title}</h3>
                    <p className="rz-problem-desc">{prob.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience / System Focus */}
        <section id="experience" className="rz-section rz-experience">
          <div className="rz-container">
            <div className="rz-experience-layout">
              <div className="rz-experience-sticky">
                <p className="rz-eyebrow">Experience</p>
                <h2 className="rz-heading">直感から生まれる<br/>至高の顧客体験</h2>
                <p className="rz-lead">システムが主役ではなく、人と人との繋がりを最大化するためのテクノロジー。</p>
              </div>
              <div className="rz-experience-list">
                {systemFocus.map((focus, i) => (
                  <div key={i} className="rz-experience-item">
                    <div className="rz-experience-num">0{i + 1}</div>
                    <h3 className="rz-experience-title">{focus.title}</h3>
                    <p className="rz-experience-desc">{focus.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle / Scene */}
        <section id="lifestyle" className="rz-section rz-lifestyle">
          <div className="rz-container">
            <div className="rz-lifestyle-inner">
              <div className="rz-lifestyle-visual">
                <NextImage
                  src="/assets/lp2/cafe.png"
                  alt="RegiZero in real life"
                  fill
                  className="rz-lifestyle-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="rz-lifestyle-content">
                <p className="rz-eyebrow">Real World</p>
                <h2 className="rz-lifestyle-title">日常に溶け込む<br/>スマートなオーダー</h2>
                <p className="rz-lifestyle-desc">
                  お客様は席に座ったまま、リラックスした状態で注文と決済を完了できます。<br/><br/>
                  行列に並ぶストレスや、スタッフを呼んでも来ないという不満をゼロにし、上質な空間と時間だけを提供することが可能です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="rz-section rz-benefits">
          <div className="rz-container">
             <div className="rz-section-header rz-center">
              <p className="rz-eyebrow">Expected Benefits</p>
              <h2 className="rz-heading">期待される導入効果</h2>
            </div>
            
            <div className="rz-benefits-grid">
               {benefits.map((bene, i) => (
                  <div key={i} className="rz-benefit-card">
                    <div className="rz-benefit-stats">{bene.stats}</div>
                    <h3 className="rz-benefit-title">{bene.title}</h3>
                    <p className="rz-benefit-desc">{bene.description}</p>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="rz-section rz-features">
          <div className="rz-container">
            <div className="rz-section-header">
              <p className="rz-eyebrow">Capabilities</p>
              <h2 className="rz-heading">洗練された全機能を<br/>すべてのアカウントに。</h2>
              <p className="rz-lead" style={{ marginTop: '1.5rem', maxWidth: '600px', fontSize: '1.125rem' }}>
                必要な機能だけを、最短距離で提供。不要な複雑さは削ぎ落としつつ、現代の店舗運営に必須となるコア機能群を標準搭載しています。
              </p>
            </div>

            <div className="rz-features-grid">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="rz-feature-box">
                    <div className="rz-feature-icon"><Icon /></div>
                    <div className="rz-feature-content">
                      <h3 className="rz-feature-title">{feat.title}</h3>
                      <p className="rz-feature-desc">{feat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="rz-section rz-pricing">
          <div className="rz-container">
            <div className="rz-pricing-header">
              <p className="rz-eyebrow">Fair Pricing</p>
              <h2 className="rz-heading">成長に寄り添う料金体系</h2>
              <p className="rz-lead" style={{ marginTop: '1rem', color: 'var(--gray-400)', maxWidth: '600px', margin: '1rem auto 0', fontSize: '1.125rem' }}>どのアカウントでも使える機能に差はありません。ビジネスのフェーズに合わせて最適なプランをお選びいただけます。</p>
            </div>

            <div className="rz-pricing-cards">
              {plans.map((plan, i) => (
                <div key={i} className={`rz-plan-card`}>
                  <div className="rz-plan-header">
                    <h3 className="rz-plan-name">{plan.name}</h3>
                    <p className="rz-plan-price">{plan.monthlyFee}<span className="rz-plan-duration">/月額</span></p>
                  </div>
                  <div className="rz-plan-body">
                    <div className="rz-plan-stat">
                      <span>決済手数料</span>
                      <strong>{plan.commissionRate}</strong>
                    </div>
                    <div className="rz-plan-stat">
                      <span>対象</span>
                      <strong>{plan.recommendedFor}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rz-pricing-estimator-wrapper">
              <PricingEstimator plans={plans} />
            </div>
          </div>
        </section>

        {/* Rollout & FAQ */}
        <section id="rollout" className="rz-section rz-rollout">
          <div className="rz-container">
            <div className="rz-rollout-layout">
              
              <div className="rz-rollout-steps">
                <div className="rz-section-header">
                  <p className="rz-eyebrow">Rollout</p>
                  <h2 className="rz-heading">最短3日のアジャイル導入</h2>
                </div>
                <div className="rz-steps-list">
                  {steps.map((step, i) => (
                    <div key={i} className="rz-step-item">
                      <div className="rz-step-indicator">{step.step}</div>
                      <div className="rz-step-content">
                        <h4 className="rz-step-title">{step.title}</h4>
                        <p className="rz-step-desc">{step.description}</p>
                        <ul className="rz-step-bullets">
                          {step.bullets.map(b => <li key={b}>{b}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rz-faq-side">
                <div className="rz-section-header">
                  <p className="rz-eyebrow">FAQ</p>
                  <h2 className="rz-heading">よくあるご質問</h2>
                </div>
                <div className="rz-faq-wrapper">
                  {faqs.map((faq, i) => (
                    <details key={i} className="rz-faq-item">
                      <summary className="rz-faq-trigger">
                        <span className="rz-faq-q">{faq.question}</span>
                        <div className="rz-faq-icon">
                           <AddIcon className="ico-plus" />
                           <RemoveIcon className="ico-minus" />
                        </div>
                      </summary>
                      <div className="rz-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
        
        {/* Bottom CTA */}
        <section className="rz-bottom-cta">
          <div className="rz-container">
            <h2 className="rz-cta-title">オペレーションを変革する準備はできましたか？</h2>
            <div className="rz-cta-actions">
               <a href={officialUrl} target="_blank" className="rz-btn-primary rz-btn-large">
                  <span>担当者へ相談する</span>
                  <ArrowForwardIcon />
                </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}