'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AvailableLanguages } from '@/i18n/settings';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import EastIcon from '@mui/icons-material/East';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import '@/styles/pages/sme-partner.scss';

interface SmePartnerSectionProps {
  lng: AvailableLanguages;
}

export default function SmePartnerSection({ lng }: SmePartnerSectionProps) {
  const consultationUrl = 'https://timerex.net/s/univus/3a845251';
  const inquiryUrl = getLocalizedPath('/inquiry', lng);

  // Trust Badges for First View (Google Ads landing reassurance)
  const heroTrustBadges = [
    { text: '100% 自社内製（外注丸投げなし）' },
    { text: '仕様書不要・初期壁打ちから無料対応' },
    { text: '福岡拠点・全国オンライン対応' },
    { text: '納品後1ヶ月間 無償バグ保証' },
  ];

  // Core Value Pillars
  const strengths = [
    {
      icon: SupportAgentIcon,
      title: '仕様書なしでも安心の「伴走型ヒアリング」',
      desc: '「今の業務を効率化したい」「新しいWeb事業を立ち上げたい」という漠然とした構想からご相談いただけます。専任担当が課題を丁寧に紐解き、無理のない現実的な仕様へと落とし込みます。',
    },
    {
      icon: CodeIcon,
      title: 'デザインと技術の内製ワンストップ',
      desc: 'デザイン会社と開発会社を分ける必要はありません。使い心地の良いUI/UX設計から、クラウドインフラ、将来の拡張を見据えた高品質なコードまで、一貫して自社チームで対応します。',
    },
    {
      icon: TrendingUpIcon,
      title: '自社SaaS運営で培った「本物の事業目線」',
      desc: '受託開発だけでなく、自社でWebサービス（Hirukuru / RegiZERO）を開発・運営しています。単に作るだけでなく、実際のユーザー体験や収益化を見据えた実践的な開発をご提供します。',
    },
  ];

  // Real In-House & Client Showcase Portfolios
  const portfolioShowcase = [
    {
      id: 'hirukuru',
      category: '自社Webプラットフォーム / SaaS',
      title: 'Hirukuru（ヒルクル）- スマートテイクアウトサービス',
      subtitle: 'ランチ混雑を解消し、回転率と売上を最大化する事前予約・決済システム',
      image: '/assets/lp/hero.png',
      previewImg: '/assets/img/screen1.png',
      tags: ['Next.js', 'TypeScript', 'Stripe決済', 'リアルタイム通知', 'PWA対応'],
      points: [
        'スマホから30秒で事前予約・キャッシュレス決済完了',
        '店舗側のタブレット管理画面でピーク時の注文混乱をゼロに',
        '自社サービスとして企画・UI設計・開発・運営をすべて内製',
      ],
      link: getLocalizedPath('/project/hirukuru', lng),
      isExternal: false,
    },
    {
      id: 'regizero',
      category: '店舗DX / セルフ決済システム',
      title: 'RegiZERO（レジゼロ）- モバイルオーダー＆スマート決済',
      subtitle: 'レジ待ちゼロへ。カウンター不要で席からスマホ完結の注文オペレーション',
      image: '/assets/lp2/cafe.png',
      previewImg: '/assets/lp2/hero.png',
      tags: ['モバイルオーダー', 'React', 'クラウドPOS連動', '店舗オペレーションDX'],
      points: [
        'お客様自身のスマホでQR読取・即時注文・決済',
        '注文取りの人件費を削減し、配膳・接客に集中できる環境を構築',
        '多言語対応やメニュー写真の即時更新も可能',
      ],
      link: getLocalizedPath('/project/regizero', lng),
      isExternal: false,
    },
    {
      id: 'erp-dx',
      category: '受託開発 / 業務DXシステム',
      title: 'クラウド業務統合ダッシュボード・受発注在庫管理ERP',
      subtitle: 'Excel・紙伝票の属人化を完全刷新。全拠点の受発注と在庫データをリアルタイム可視化',
      image: '/assets/img/hero-jp-tablet-phone.png',
      previewImg: null,
      tags: ['業務管理Webアプリ', 'AWSクラウド', 'PostgreSQL', '権限管理・データ分析'],
      points: [
        'バラバラだった受発注と在庫を1つの画面にリアルタイム一元化',
        '月次集計作業が「3日 → 半日」へ大幅短縮（集計工数80%削減）',
        '現場スタッフも迷わず使える直感的なUI設計',
      ],
      link: consultationUrl,
      isExternal: true,
      linkText: '類似システムの開発を相談する',
    },
    {
      id: 'corporate-cms',
      category: 'Webサイト刷新 / ブランディングCMS',
      title: '自社即日更新対応・モダンコーポレートWebリニューアル',
      subtitle: 'デザイン刷新×ヘッドレスCMS導入で、お知らせ・採用情報を自社内で即時発信',
      image: '/assets/img/case-corporate-web.jpg',
      previewImg: null,
      tags: ['Next.js', 'Headless CMS', '高速表示 (Core Web Vitals)', 'レスポンシブ'],
      points: [
        '外注業者への依頼待ちをゼロにし、お知らせや採用情報を即日更新',
        'スマートフォン・タブレット完全最適化のモダンデザイン',
        'SEO最適化・超高速ページ表示で問い合わせCVR向上',
      ],
      link: consultationUrl,
      isExternal: true,
      linkText: 'Webサイト刷新を相談する',
    },
  ];

  // Case Studies with Unique Evidence Visuals (No duplication with portfolio)
  const caseStudies = [
    {
      id: 'case-1',
      num: '01',
      category: '業務効率化・社内DX',
      title: '受発注・在庫管理の属人化を解消し、月次集計工数を「3日 → 半日」へ短縮',
      impact: '集計工数 80%削減',
      image: '/assets/img/case-erp-dashboard.jpg',
      imageAlt: 'PC受発注・在庫管理ダッシュボード画面',
      before: 'Excelと紙伝票で受発注や在庫を個別管理。月次集計に毎月3日以上かかり、転記ミスや在庫のズレが常態化していました。',
      after: '誰でも直感的に使える社内Web管理システムを構築。受発注・在庫・売上がリアルタイムに自動連動し、集計が半日で完了するように。',
      duration: '約3ヶ月',
      budget: '250〜350万円',
      scope: 'Web業務管理システム / 在庫・受発注の一元化 / クラウド構築',
    },
    {
      id: 'case-2',
      num: '02',
      category: 'Webサービス・店舗DX',
      title: '電話受付の取りこぼしを脱却。スマホ予約・事前決済で注文数「2.4倍」を達成',
      impact: '注文数 2.4倍に増加',
      image: '/assets/img/case-pos-kitchen-tablet.jpg',
      imageAlt: '店舗用リアルタイム注文受付・調理管理タブレット画面',
      before: 'テイクアウト注文を電話のみで受付。ランチの混雑時に電話を取りきれず、注文の機会損失と店内オペレーションの混乱が起きていました。',
      after: 'スマホから30秒で注文・決済できるWebプラットフォームを構築。注文対応の負担が激減し、ピーク時もスムーズな受け渡しが可能に。',
      duration: '約5ヶ月',
      budget: '400〜600万円',
      scope: 'スマホ向けWeb注文・決済システム / 店舗用受注画面 / オンライン決済',
    },
    {
      id: 'case-3',
      num: '03',
      category: 'コーポレートWeb刷新',
      title: '外注依存の静的サイトを刷新。採用・お知らせを「自社で即日更新」できる体制へ',
      impact: '更新スピード 即日化',
      image: '/assets/img/case-cms-admin-editor.jpg',
      imageAlt: '自社で記事・採用情報を即日編集できるCMS管理画面',
      before: '自社内でサイトを修正できず、軽微な採用情報やニュースの変更でも外部業者に依頼。更新完了までに1〜2週間かかっていました。',
      after: '専門知識がなくても管理画面から簡単に編集できるモダンWebサイトへ全面リニューアル。即日発信が可能になり、採用応募数も向上。',
      duration: '約2ヶ月',
      budget: '120〜180万円',
      scope: 'Webサイト全面リニューアル / かんたん更新管理機能（CMS） / SEO最適化',
    },
  ];

  // Pricing / Development Menu (Non-tech friendly & High Conversion)
  const pricingPlans = [
    {
      name: '社内業務システム・Excel脱却DX',
      desc: 'Excelや紙の手作業・在庫・受発注・予約管理を、誰でも直感的に使えるWebシステムに一本化',
      price: '250万円〜',
      period: '2〜4ヶ月',
      features: [
        '二重入力や転記ミスをなくす業務フロー設計',
        'PC・タブレットで迷わず使えるかんたん画面',
        'クラウド対応（テレワークや外出先でも確認可能）',
        'Excel（CSV）データ入出力・権限分け機能',
        '納品後の現場スタッフ向け使い方レクチャー',
      ],
      recommended: true,
    },
    {
      name: '新規Webサービス・アプリ立ち上げ',
      desc: '会員制マイページ、オンライン予約、クレジットカード決済など、新しいWeb事業を企画から形に',
      price: '300万円〜',
      period: '3〜6ヶ月',
      features: [
        '「こんな仕組みが欲しい」構想からの企画・画面設計',
        'スマホ・PC両方で快適に動くモダンな操作性',
        'クレジットカード決済（Stripe等）や自動メール連携',
        'まずは最小限（MVP）で早く安く立ち上げるご提案',
        '自社サービス運営で培った実践的なビジネス目線',
      ],
      recommended: false,
    },
    {
      name: '企業ホームページ制作・かんたん自社更新',
      desc: '専門知識ゼロでブログ感覚で自社更新。信頼感を高め、問い合わせ・採用を増やす高品質サイトへリニューアル',
      price: '80万円〜',
      period: '1〜2ヶ月',
      features: [
        '自社内で「お知らせ・採用情報」を即日更新できる管理画面',
        '専門業者への更新依頼コスト・待ち時間をゼロに',
        'スマートフォン・タブレット完全対応の洗練デザイン',
        'お問い合わせ・商談につながる分かりやすい導線',
        'Google検索で見つかりやすいSEO基本設計',
      ],
      recommended: false,
    },
    {
      name: '専任IT・月額開発サポート（社内SE代行）',
      desc: '「専任のIT担当者がいない」企業様へ。エンジニアを1人雇うより低コストで、日々の改善から保守まで丸ごと伴走',
      price: '月額 5万円〜',
      period: '月単位〜',
      features: [
        'サーバーの24時間稼働監視・データ自動バックアップ',
        '毎月の新機能追加・画面修正・バグ対応（月〇時間〜）',
        '他社が作った既存システムの引き継ぎ・トラブル調査OK',
        'Slack / LINE / Zoomで日常のIT相談・壁打ち即日対応',
        'PC設定やツール導入など社内IT全般の「なんでも相談窓口」',
      ],
      recommended: false,
    },
  ];

  // Modern Tech Stack
  const techStack = [
    { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'Java(Spring)'] },
    { category: 'Cloud & DB', items: ['AWS', 'Google Cloud', 'PostgreSQL', 'Supabase', 'Docker'] },
    { category: 'Design & Tools', items: ['Figma', 'Stripe', 'GitHub', 'Vercel'] },
  ];

  // 4 Promises of Trust
  const trustPromises = [
    {
      icon: SecurityRoundedIcon,
      title: 'NDA（秘密保持契約）の即時締結',
      desc: 'お客様の大切なアイデアや事業データをお守りするため、お打ち合わせ前でも速やかに秘密保持契約を締結いたします。',
    },
    {
      icon: VerifiedRoundedIcon,
      title: '納品後1ヶ月間の無償バグ保証',
      desc: '納品・公開後に万が一不具合やバグが見つかった場合でも、1ヶ月間は無償にて迅速に修正対応いたします。',
    },
    {
      icon: CodeIcon,
      title: '著作権・成果物の完全譲渡',
      desc: '開発したシステムのソースコードおよびデザインデータの権利はお客様に完全帰属。将来の他社移行や内製化も自由です。',
    },
    {
      icon: SpeedRoundedIcon,
      title: '見積もり後の追加請求ゼロ',
      desc: '事前に合意した仕様の範囲内で追加費用が発生することはありません。仕様変更が生じる場合も事前に明瞭にご相談します。',
    },
  ];

  // Development Steps
  const steps = [
    {
      step: 'STEP 01',
      title: '無料ヒアリング（30分）',
      desc: '課題や大まかなご要望をお伺いします。仕様書がなくても構いません。オンライン（Google Meet）で全国対応いたします。',
    },
    {
      step: 'STEP 02',
      title: '要件整理・概算お見積り',
      desc: '画面構成のワイヤーフレームや最適な開発技術、現実的なスケジュール、明確なお見積もりをご提示します。',
    },
    {
      step: 'STEP 03',
      title: 'UI設計・アジャイル開発',
      desc: '実際の画面デザインを確認いただきながら、定期的な進捗共有を行い、ブレのない形で開発を進めます。',
    },
    {
      step: 'STEP 04',
      title: 'テスト・納品・運用サポート',
      desc: '動作確認・本番公開後も、操作レクチャーや日々のサーバー保守、継続的な機能改善で長期的に伴走します。',
    },
  ];

  return (
    <section className="gd-section gd-sme-partner-section">
      {/* 1. AD LANDING HERO SECTION (High-Trust First View) */}
      <div className="lp-hero-wrapper">
        <div className="container">
          <div className="lp-hero-grid">
            {/* Left Column: Value Copy & Trust Badges */}
            <div className="lp-hero-copy">
              <div className="eyebrow-pill" data-aos="fade-down">
                <span>中小企業向け開発＆DX伴走パートナー</span>
              </div>

              <h1 className="lp-hero-title" data-aos="fade-up" data-aos-delay="100">
                IT専任・仕様書がなくても<br />
                <span className="highlight-text">事業の成長を形にする</span><br />
                Webシステム開発。
              </h1>

              <p className="lp-hero-desc" data-aos="fade-up" data-aos-delay="200">
                企画・UIデザインからシステム受託開発、自社SaaS運営、納品後の保守運用までワンストップ。
                大掛かりなIT投資や複雑な専門知識は不要です。貴社の課題に寄り添い、最小構成（MVP）からスピーディに伴走します。
              </p>

              {/* 4 Trust Badges */}
              <div className="hero-trust-list" data-aos="fade-up" data-aos-delay="300">
                {heroTrustBadges.map((badge, bIdx) => (
                  <div key={bIdx} className="hero-trust-item">
                    <CheckCircleOutlineRoundedIcon className="check-icon" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Hero Action CTA */}
              <div className="hero-actions" data-aos="fade-up" data-aos-delay="400">
                <Link
                  href={consultationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-hero"
                >
                  <CalendarMonthRoundedIcon className="icon-calendar" />
                  <div className="btn-text-group">
                    <span className="btn-main-label">30分無料オンライン相談を予約する</span>
                    <span className="btn-sub-label">空き日程をカレンダーから選べます（Google Meet対応）</span>
                  </div>
                  <EastIcon className="arrow" />
                </Link>

                <a href="#portfolio" className="btn-secondary-hero">
                  <span>開発実績を見る</span>
                  <ArrowOutwardRoundedIcon className="icon-external" />
                </a>
              </div>
            </div>

            {/* Right Column: Natural Device Visual Stage (No floating card frame) */}
            <div className="lp-hero-visual" data-aos="fade-left" data-aos-delay="250">
              <div className="hero-device-stage">
                <div className="device-glow-backdrop" />
                <div className="device-mockup-wrap">
                  <Image
                    src="/assets/img/hero-jp-tablet-phone.png"
                    alt="クラウド業務統合ダッシュボードのタブレット・スマートフォン画面"
                    width={640}
                    height={640}
                    priority
                    className="hero-mockup-img"
                  />
                </div>
                <div className="device-spec-tag">
                  <DevicesRoundedIcon className="tag-icon" />
                  <span>PC / タブレット / スマホ マルチデバイス対応</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TRUST METRICS STRIP */}
      <div className="trust-metrics-strip">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-box" data-aos="fade-up" data-aos-delay="50">
              <span className="metric-tag">体制</span>
              <span className="metric-val">100% 自社内製</span>
              <span className="metric-sub">中抜き・外注丸投げのない安心の開発</span>
            </div>
            <div className="metric-box" data-aos="fade-up" data-aos-delay="100">
              <span className="metric-tag">実績</span>
              <span className="metric-val">自社SaaS 運営実績</span>
              <span className="metric-sub">テイクアウト＆店舗決済プロダクト展開</span>
            </div>
            <div className="metric-box" data-aos="fade-up" data-aos-delay="150">
              <span className="metric-tag">スピード</span>
              <span className="metric-val">最短2週間〜 プロトタイプ</span>
              <span className="metric-sub">アジャイルで動く画面を早期に確認</span>
            </div>
            <div className="metric-box" data-aos="fade-up" data-aos-delay="200">
              <span className="metric-tag">安心保証</span>
              <span className="metric-val">1ヶ月間 無償バグ保証</span>
              <span className="metric-sub">公開後も万全の保守・サポート体制</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container main-content-wrapper">
        {/* 3. VISUAL PORTFOLIO & PRODUCT SHOWCASE */}
        <section id="portfolio" className="lp-section showcase-section">
          <div className="section-head text-center" data-aos="fade-up">
            <span className="section-sub-label">DEVELOPMENT & PRODUCTS SHOWCASE</span>
            <h2 className="head-title">実際の開発・自社プロダクト実績</h2>
            <p className="head-desc">
              自社で企画・開発・運営を行うサービスと、受託業務システムの画面をご紹介します。
            </p>
          </div>

          <div className="portfolio-showcase-container">
            {portfolioShowcase.map((item, pIdx) => (
              <div
                key={item.id}
                className="portfolio-feature-card"
                data-aos="fade-up"
                data-aos-delay={pIdx * 80}
              >
                <div className="portfolio-media-side">
                  <div className="main-image-wrap">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 560px"
                      className="showcase-main-img"
                    />
                  </div>
                  {item.previewImg && (
                    <div className="floating-preview-wrap">
                      <Image
                        src={item.previewImg}
                        alt="画面プレビュー"
                        width={180}
                        height={260}
                        className="showcase-floating-img"
                      />
                    </div>
                  )}
                </div>

                <div className="portfolio-info-side">
                  <div className="card-top-meta">
                    <span className="card-category-pill">{item.category}</span>
                  </div>
                  <h3 className="portfolio-card-title">{item.title}</h3>
                  <p className="portfolio-card-subtitle">{item.subtitle}</p>

                  <div className="portfolio-tags">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tech-chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="points-list">
                    {item.points.map((pt, ptIdx) => (
                      <li key={ptIdx}>
                        <CheckCircleOutlineRoundedIcon className="pt-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="portfolio-card-action">
                    <Link
                      href={item.link}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      className="card-detail-btn"
                    >
                      <span>{item.linkText || '詳細を見る'}</span>
                      <EastIcon className="arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. CASE STUDIES (Visual Before / After Transformation Stories) */}
        <section className="lp-section sme-case-wrap">
          <div className="section-head text-center" data-aos="fade-up">
            <span className="section-sub-label">BEFORE & AFTER CASE STUDIES</span>
            <h2 className="head-title">課題解決の具体事例</h2>
            <p className="head-desc">
              「自社の課題をどう解決できるのか？」実際のBefore/Afterと、開発期間・概算予算の目安をご紹介します。
            </p>
          </div>

          <div className="case-list">
            {caseStudies.map((c, idx) => (
              <div
                key={c.id}
                className="case-story-card"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Story Top Bar */}
                <div className="story-top-row">
                  <div className="story-meta-tag">
                    <span className="case-num">CASE {c.num}</span>
                    <span className="case-divider" />
                    <span className="case-category">{c.category}</span>
                  </div>
                  <div className="case-impact-chip">
                    <span className="impact-label">導入成果</span>
                    <span className="impact-text">{c.impact}</span>
                  </div>
                </div>

                <h3 className="story-headline">{c.title}</h3>

                {/* Grid with Visual Screenshot + Before/After Flow */}
                <div className="case-content-grid">
                  <div className="case-screenshot-col">
                    <div className="screenshot-window">
                      <div className="window-header">
                        <div className="window-dots">
                          <span className="dot dot-red" />
                          <span className="dot dot-yellow" />
                          <span className="dot dot-green" />
                        </div>
                        <span className="window-label">{c.imageAlt}</span>
                      </div>
                      <div className="screenshot-frame">
                        <Image
                          src={c.image}
                          alt={c.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 420px"
                          className="case-real-img"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="case-transformation-col">
                    <div className="transformation-flow">
                      <div className="trans-box before">
                        <div className="trans-header">
                          <span className="trans-badge">Before（導入前の課題）</span>
                        </div>
                        <p className="trans-text">{c.before}</p>
                      </div>

                      <div className="trans-box after">
                        <div className="trans-header">
                          <span className="trans-badge">After（導入後の成果）</span>
                        </div>
                        <p className="trans-text">{c.after}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practical Project Specs */}
                <div className="story-spec-footer">
                  <div className="spec-item">
                    <span className="spec-label">開発期間</span>
                    <span className="spec-val">{c.duration}</span>
                  </div>
                  <div className="spec-divider" />
                  <div className="spec-item">
                    <span className="spec-label">概算費用</span>
                    <span className="spec-val">{c.budget}</span>
                  </div>
                  <div className="spec-divider" />
                  <div className="spec-item scope">
                    <span className="spec-label">支援内容</span>
                    <span className="spec-val">{c.scope}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PRICING & SCOPE GUIDELINE (Transparency for B2B) */}
        <section className="lp-section pricing-guide-section">
          <div className="section-head text-center" data-aos="fade-up">
            <span className="section-sub-label">PRICING & SCOPE</span>
            <h2 className="head-title">対応領域と料金・期間の目安</h2>
            <p className="head-desc">
              不透明になりがちなシステム開発の費用と期間を明確にご案内します。<br className="pc-only" />
              ご予算や優先順位に合わせて、最小限の機能（MVP）から柔軟にご提案可能です。
            </p>
          </div>

          <div className="pricing-cards-grid">
            {pricingPlans.map((plan, pIdx) => (
              <div
                key={pIdx}
                className={`pricing-plan-card ${plan.recommended ? 'is-recommended' : ''}`}
                data-aos="fade-up"
                data-aos-delay={pIdx * 90}
              >
                {plan.recommended && <div className="recommend-badge">最も選ばれています</div>}
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-desc">{plan.desc}</p>
                </div>
                <div className="plan-price-block">
                  <div className="price-row">
                    <span className="price-label">目安費用</span>
                    <span className="price-number">{plan.price}</span>
                  </div>
                  <div className="period-row">
                    <span className="period-label">開発期間：</span>
                    <span className="period-val">{plan.period}</span>
                  </div>
                </div>

                <div className="plan-features-list">
                  <span className="features-title">含まれる内容：</span>
                  <ul>
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircleOutlineRoundedIcon className="feat-check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="plan-action">
                  <Link
                    href={consultationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="plan-btn"
                  >
                    <span>このプランについて相談する</span>
                    <EastIcon className="arrow" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. WHY UNIVUS (4 Core Reasons) */}
        <section className="lp-section why-univus-section">
          <div className="section-head text-center" data-aos="fade-up">
            <span className="section-sub-label">WHY CHOOSE US</span>
            <h2 className="head-title">Univusが選ばれる4つの理由</h2>
            <p className="head-desc">
              「作って終わり」の制作会社とは違い、ビジネスを深く理解し、持続的に成果を出す体制を整えています。
            </p>
          </div>

          <div className="sme-strengths-grid">
            {strengths.map((item, idx) => {
              const IconComponent = item.icon;
              const stepNum = String(idx + 1).padStart(2, '0');
              return (
                <div
                  key={item.title}
                  className="strength-card"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="card-top">
                    <div className="strength-icon-box">
                      <IconComponent className="strength-icon" />
                    </div>
                    <span className="strength-num">{stepNum}</span>
                  </div>
                  <h3 className="strength-title">{item.title}</h3>
                  <p className="strength-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. MODERN TECH STACK */}
        <section className="lp-section tech-stack-section">
          <div className="section-head text-center" data-aos="fade-up">
            <span className="section-sub-label">MODERN TECHNOLOGY</span>
            <h2 className="head-title">高い開発生産性と将来性を支える技術スタック</h2>
            <p className="head-desc">
              最新のモダンWeb標準を採用し、表示速度、SEO、セキュリティ、将来の機能拡張性を両立します。
            </p>
          </div>

          <div className="tech-grid" data-aos="fade-up">
            {techStack.map((stack, sIdx) => (
              <div key={sIdx} className="tech-category-card">
                <span className="tech-category-name">{stack.category}</span>
                <div className="tech-badge-container">
                  {stack.items.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-name-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. 4 PROMISES OF TRUST & REASSURANCE */}
        <section className="lp-section trust-promises-section">
          <div className="section-head text-center" data-aos="fade-up">
            <span className="section-sub-label">REASSURANCE & GUARANTEE</span>
            <h2 className="head-title">初めての外注でも安心できる4つの約束</h2>
            <p className="head-desc">
              不透明な追加請求や納品後の放置など、システム開発にありがちな不安を徹底的に排除します。
            </p>
          </div>

          <div className="promises-grid">
            {trustPromises.map((p, idx) => {
              const IconComponent = p.icon;
              return (
                <div
                  key={idx}
                  className="promise-card"
                  data-aos="fade-up"
                  data-aos-delay={idx * 90}
                >
                  <div className="promise-icon-box">
                    <IconComponent className="p-icon" />
                  </div>
                  <h3 className="promise-title">{p.title}</h3>
                  <p className="promise-desc">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 9. WORKFLOW (4 STEPS) */}
        <section className="lp-section sme-workflow-wrap">
          <div className="section-head text-center" data-aos="fade-up">
            <span className="section-sub-label">WORKFLOW</span>
            <h2 className="head-title">ご相談から納品までの流れ</h2>
            <p className="head-desc">
              初めてのWeb・システム外注でもご安心いただけるよう、ステップごとに丁寧にご案内します。
            </p>
          </div>

          <div className="workflow-steps-grid">
            {steps.map((item, sIdx) => (
              <div
                key={sIdx}
                className="workflow-step-item"
                data-aos="fade-right"
                data-aos-delay={sIdx * 80}
              >
                <div className="step-badge">{item.step}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. MID-CONVERSION CALLOUT (Sticky / Strong Conversion Magnet) */}
        <div className="sme-consultation-callout" data-aos="zoom-in">
          <div className="callout-text">
            <span className="callout-pill">オンライン壁打ち受付中</span>
            <h3>「こんなことWebでできる？」「他社見積もりと比較したい」段階から大歓迎です</h3>
            <p>
              仕様書や企画書がなくても問題ありません。専門のエンジニア・ディレクターが貴社のビジネス課題を丁寧にヒアリングし、現実的な解決策と概算費用を分かりやすくご案内します。
            </p>
          </div>
          <div className="callout-action">
            <Link
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="consultation-btn primary"
            >
              <CalendarMonthRoundedIcon className="icon-calendar" />
              <span>30分無料オンライン相談を予約する</span>
              <EastIcon className="arrow" />
            </Link>
            <Link href={inquiryUrl} className="consultation-btn secondary">
              <span>お問い合わせフォームから相談</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
