import NextImage from 'next/image';
import Image from 'next/image';
import { SectionNav } from '@/components/layout/SectionNav';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { getLandingContent, getLandingNavItems } from '@/common/contents/content.hirukuru';
import '@/styles/pages/project.hirukuru.scss';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BarChartIcon from '@mui/icons-material/BarChart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const breadcrumbs: Breadcrumb[] = [
  { label: 'プロジェクト', href: '/project' },
  { label: 'ヒルクル', href: '/project/hirukuru', active: true },
];

export default function ProjectHirukuru() {
  const { reasons, problems, comparison, testimonials, processSteps, faqs, useCases, features } = getLandingContent();
  const navItems = getLandingNavItems();
  const officialUrl = "https://lin.ee/ioEqwUM";

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} style={{ marginBottom: 'calc(var(--breadcrumbs-height) * -1)' }} />
      <div className="hirukuru-landing">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background" aria-hidden="true">
            <div className="hero-media">
              <NextImage
                className="hero-media-img"
                src="/assets/lp/hero.png"
                alt=""
                fill
                priority
                sizes="100vw"
              />
            </div>
            <div className="hero-gradient"></div>
            <div className="hero-pattern"></div>
          </div>
          <div className="landing-container">
            <div className="hero-content">
              <div className="hero-copy">
                <Image src="/assets/lp/hero-badge.svg" alt="加盟店募集" width={180} height={90} className="hero-badge" />
                <h1 className="hero-title">
                  <span className="title-main">待たず迷わず<br />テイクアウト</span>
                  <span className="title-accent">ヒルクル</span>
                </h1>
                <p className="hero-subtitle">
                  ピークタイムでも崩れない<br />
                  回転率と売上を伸ばすランチオペレーションへ
                </p>
                <div className="hero-buttons">
                  <a className="cta-button primary" target="_blank" href={officialUrl}>
                    <span>導入相談する</span>
                    <ArrowForwardIcon />
                  </a>
                  <a className="cta-button secondary" target="_blank" href="https://img.hirukuru.com/public/service_info.pdf">
                    <span>サービス資料（PDF）</span>
                    <ArrowForwardIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Bar */}
        <SectionNav items={navItems} />

        {/* Problem Section */}
        <section id="problem" className="problem-section">
          <div className="landing-container">
            <div className="section-header">
              <span className="section-eyebrow">PROBLEM</span>
              <h2 className="section-title">
                ランチが回らない本当の理由
              </h2>
              <p className="section-subtitle">
                それでもランチの売上が伸びない理由は明確です
              </p>
            </div>
            <div className="problem-content">
              <div className="problem-intro">
                <p className="intro-quote">「味には自信がある」</p>
                <p className="intro-quote">「常連もいる」</p>
                <p className="intro-quote">「立地も悪くない」</p>
              </div>
              <div className="problem-grid">
                {problems.map((problem) => {
                  const IconComponent = problem.icon;
                  return (
                    <div key={problem.text} className="problem-card">
                      <div className="problem-icon">
                        <IconComponent />
                      </div>
                      <div className="problem-content-text">
                        <p className="problem-text">{problem.text}</p>
                        <p className="problem-detail">{problem.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="problem-solution">
                <div className="solution-badge">
                  <CloseIcon />
                </div>
                <p>
                  つまり問題は、料理でも、接客でもなく<br />
                  <strong>オペレーション</strong>です
                </p>
              </div>
            </div>
          </div>
          <NextImage src="/assets/lp/seller2.png" width={160} height={160} className="problem-img left" alt="店頭の様子" />
          <NextImage src="/assets/lp/customer1.png" width={160} height={160} className="problem-img right" alt="お客様の様子" />
        </section>

        {/* Stats Section */}
        <section id="stats" className="stats-section">
          <div className="landing-container">
            <div className="stats-intro">
              <h2 className="stats-title">ランチは本来</h2>
              <div className="stats-description-wrapper">
                <p className="stats-description">
                  「短時間で満足できる体験」であるべきです。<br />
                  それなのに現実は、並ぶ、迷う、時間が足りない。
                </p>
                <p className="stats-highlight">ヒルクルは、そんなランチの当たり前を変えるために生まれました</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="solution-section">
          <div className="landing-container">
            <div className="section-header">
              <span className="section-eyebrow">SOLUTION</span>
              <h2 className="section-title">
                「ランチの構造」を変える
              </h2>
              <p className="section-subtitle">
                テイクアウトの面倒な工程を<br />
                来店前にまとめて完了させます
              </p>
            </div>
            <div className="solution-content">
              <div className="solution-diagram" aria-label="事前完結の仕組み">
                <div className="lane lane-customer">
                  <div className="lane-icon customer" aria-hidden="true">
                    <PersonIcon />
                  </div>
                  <div className="lane-header">
                    <div className="lane-heading">
                      <p className="lane-eyebrow">お客様</p>
                      <h3 className="lane-title">来店前にスマホでここまで完了</h3>
                    </div>
                  </div>
                  <ol className="lane-steps" aria-label="お客様の流れ">
                    <li className="lane-step">
                      <span className="step-index">01</span>
                      <span className="step-label">探す</span>
                    </li>
                    <li className="lane-step">
                      <span className="step-index">02</span>
                      <span className="step-label">選ぶ</span>
                    </li>
                    <li className="lane-step">
                      <span className="step-index">03</span>
                      <span className="step-label">注文</span>
                    </li>
                    <li className="lane-step">
                      <span className="step-index">04</span>
                      <span className="step-label">決済</span>
                    </li>
                  </ol>
                </div>

                <div className="lane-core" aria-hidden="true">
                  <p className="core-copy">
                    注文〜決済を事前に完了し
                  </p>
                  <div className="core-rail">
                    <span className="rail-dot"></span>
                    <span className="rail-line"></span>
                    <span className="rail-dot"></span>
                  </div>
                  <p className="core-copy">
                    店頭を「受け渡し」中心に
                  </p>
                </div>

                <div className="lane lane-store">
                  <div className="lane-icon store" aria-hidden="true">
                    <StoreIcon />
                  </div>
                  <div className="lane-header">
                    <div className="lane-heading">
                      <p className="lane-eyebrow">お店</p>
                      <h3 className="lane-title">店頭は、作って渡すだけ</h3>
                    </div>
                  </div>
                  <ul className="lane-benefits" aria-label="お店側のメリット">
                    <li className="lane-benefit">
                      <CheckCircleIcon />
                      <span>注文内容を事前に把握</span>
                    </li>
                    <li className="lane-benefit">
                      <CheckCircleIcon />
                      <span>受け取り時間が見える</span>
                    </li>
                    <li className="lane-benefit">
                      <CheckCircleIcon />
                      <span>調理に集中できる</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="solution-result">
                <p>
                  並びも、迷いも、会計もない<br />
                  だからピークタイムでも崩れません
                </p>
                <div className="result-badge">
                  <CheckIcon />
                </div>
              </div>
            </div>
          </div>
          <NextImage src="/assets/lp/seller3.png" width={160} height={160} className="solution-img left" alt="店頭の様子" />
          <NextImage src="/assets/lp/customer2.png" width={160} height={160} className="solution-img right" alt="お客様の様子" />
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="comparison-section">
          <div className="landing-container">
            <div className="section-header">
              <span className="section-eyebrow">COMPARISON</span>
              <h2 className="section-title">
                従来の方式と<br className="mobile-only" />
                ヒルクルの違い
              </h2>
            </div>
            <div className="comparison-table">
              <div className="comparison-header">
                <div className="comparison-col">項目</div>
                <div className="comparison-col">従来の方式</div>
                <div className="comparison-col">ヒルクル</div>
                <div className="comparison-col">効果</div>
              </div>
              {comparison.map((item) => (
                <div key={item.item} className="comparison-row">
                  <div className="comparison-col" data-label="項目">{item.item}</div>
                  <div className="comparison-col traditional" data-label="従来の方式">
                    <CloseIcon className="comparison-icon" />
                    <span>{item.traditional}</span>
                  </div>
                  <div className="comparison-col hirukuru" data-label="ヒルクル">
                    <CheckCircleIcon className="comparison-icon" />
                    <span>{item.hirukuru}</span>
                  </div>
                  <div className="comparison-col benefit" data-label="効果">
                    <div className="benefit-badge">
                      <span>{item.benefit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <div className="landing-container">
            <div className="section-header">
              <span className="section-eyebrow">FEATURES</span>
              <h2 className="section-title">
                ヒルクルの主要機能
              </h2>
            </div>
            <div className="features-grid">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="feature-card">
                    <div className="feature-content">
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                    <div className="feature-screenshot">
                      <div className="screenshot-wrapper">
                        <div className="feature-icon-badge">
                          <IconComponent className="feature-icon" />
                        </div>
                        <Image
                          src={feature.screenshot}
                          alt={feature.title}
                          width={400}
                          height={400}
                          className="screenshot-image"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="usecases" className="usecases-section">
          <div className="landing-container">
            <div className="section-header">
              <span className="section-eyebrow">USE CASES</span>
              <h2 className="section-title">
                こんなシーンで<br className="mobile-only" />
                効果を発揮します
              </h2>
            </div>
            <div className="usecases-grid">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="usecase-card">
                  <div className="usecase-image-wrapper">
                    <NextImage src={useCase.image} alt={useCase.title} width={400} height={240} className="usecase-image" />
                  </div>
                  <h3 className="usecase-title">{useCase.title}</h3>
                  <div className="usecase-scenario">
                    <span className="scenario-label">シーン</span>
                    <p>{useCase.scenario}</p>
                  </div>
                  <div className="usecase-comparison" aria-label="導入前後の比較">
                    <div className="comparison-panel before">
                      <div className="comparison-header">
                        <span className="comparison-label">導入前</span>
                      </div>
                      <p className="comparison-text">{useCase.before}</p>
                    </div>
                    <div className="comparison-panel after">
                      <div className="comparison-header">
                        <span className="comparison-label">導入後</span>
                      </div>
                      <p className="comparison-text">{useCase.after}</p>
                    </div>
                  </div>
                  <div className="usecase-result">
                    <BarChartIcon />
                    <span>{useCase.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reasons Section */}
        <section id="reasons" className="reasons-section">
          <div className="landing-container">
            <div className="section-header">
              <span className="section-eyebrow">WHY US</span>
              <h2 className="section-title">
                ヒルクルが選ばれる<br className="mobile-only" />
                4つの理由
              </h2>
            </div>
            <div className="reasons-bento-grid">
              {reasons.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div key={reason.number} className={`bento-card bento-card-${index + 1}`}>
                    <div className="bento-content">
                      <div className="bento-header">
                        <span className="bento-number">0{reason.number}</span>
                        <div className="bento-icon-wrapper">
                          <IconComponent />
                        </div>
                      </div>
                      <h3 className="bento-title">{reason.title}</h3>
                      <p className="bento-description">{reason.description}</p>
                    </div>
                    <div className="bento-footer">
                      <div className="bento-stats">
                        <TrendingUpIcon />
                        <span>{reason.stats}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials-section">
          <div className="landing-container">
            <div className="section-header">
              <span className="section-eyebrow">VOICE</span>
              <h2 className="section-title">実際に導入した方の声</h2>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => {
                return (
                  <div key={testimonial.name} className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="testimonial-img">
                        <NextImage src={testimonial.image} alt={testimonial.name} width={80} height={80} />
                      </div>
                      <div className="testimonial-info">
                        <p className="testimonial-type">{testimonial.type}</p>
                        <p className="testimonial-name">{testimonial.name}</p>
                      </div>
                    </div>
                    <div className="testimonial-quote">
                      <span className="quote-mark left">「</span>
                      <p>{testimonial.quote}</p>
                      <span className="quote-mark right">」</span>
                    </div>
                    <div className="testimonial-result">
                      <TrendingUpIcon />
                      <span>{testimonial.result}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="process-section">
          <div className="landing-container">
            <div className="section-header">
              <span className="section-eyebrow">PROCESS</span>
              <h2 className="section-title">
                導入までの流れ<br className="mobile-only" />
              </h2>
              <p className="section-subtitle">
                <span className="highlight-number">最短3日</span>で運用開始
              </p>
            </div>
            <div className="process-stepper-list">
              {processSteps.map((step) => {
                return (
                  <div key={step.step} className="process-step-item">
                    <div className="process-step-indicator">{step.step}</div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">{step.title}</h4>
                      <p className="process-step-desc">{step.description}</p>
                      <ul className="process-step-bullets">
                        {step.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq-section">
          <div className="landing-container">
            <div className="section-header">
              <span className="section-eyebrow">FAQ</span>
              <h2 className="section-title">よくある質問</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary className="faq-question">
                    <span>{faq.question}</span>
                    <span className="faq-expand" aria-hidden="true">
                      <ExpandMoreIcon />
                    </span>
                  </summary>
                  <div className="faq-answer">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}