'use client';

import React from 'react';
import Link from 'next/link';
import { AvailableLanguages } from '@/i18n/settings';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import EastIcon from '@mui/icons-material/East';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import '@/styles/pages/sme-partner.scss';

interface SmePartnerSectionProps {
  lng: AvailableLanguages;
}

export default function SmePartnerSection({ lng }: SmePartnerSectionProps) {
  const strengths = [
    {
      icon: SupportAgentIcon,
      title: '仕様書なしでも安心の「伴走型ヒアリング」',
      desc: '「今の業務を効率化したい」「新しいWeb事業を立ち上げたい」という漠然とした構想からご相談いただけます。専任担当が課題を丁寧に紐解き、無理のない現実的な仕様へと落とし込みます。',
    },
    {
      icon: CodeIcon,
      title: 'デザインと技術の内製ワンストップ',
      desc: 'デザイン会社と開発会社を分ける必要はありません。使い心地の良いUI/UX設計から、クラウドインフラ、将来の拡張を見据えた高品質なコードまで、一貫して社内体制で対応します。',
    },
    {
      icon: TrendingUpIcon,
      title: '小さく始めて育てる「柔軟なアジャイル開発」',
      desc: '初めから莫大な予算を投じるのではなく、まずは核となる最小限の機能（MVP）からスピーディに立ち上げ。実際の利用者の反響や事業の成長に合わせて、段階的に拡張・改善できます。',
    },
  ];

  const solutions = [
    {
      tag: '業務効率化・DX',
      title: '社内業務システム・Webアプリ化',
      desc: 'Excelや紙で属人化している受発注、顧客管理、在庫・予約管理などを、誰でも直感的に操作できるWebシステムへと刷新します。',
    },
    {
      tag: '新規事業・サービス',
      title: 'Webサービス・会員ポータル開発',
      desc: '自社のノウハウを活かした新規Web事業、顧客向けマイページ、予約・決済連携プラットフォームを企画段階から形にします。',
    },
    {
      tag: '信頼性向上',
      title: 'コーポレートサイト刷新・Webブランディング',
      desc: '自社の強みや魅力を正確に伝え、問い合わせ獲得や採用力の向上に直結する、高品質で洗練されたWebサイトを構築します。',
    },
    {
      tag: '保守・改善',
      title: 'リリース後の運用保守・継続アップデート',
      desc: '納品して終わりではなく、システムの安定稼働監視やセキュリティ対策、事業フェーズに合わせた機能追加まで伴走します。',
    },
  ];

  const caseStudies = [
    {
      id: 'case-1',
      num: '01',
      category: '業務効率化・DX',
      title: '受発注・在庫管理の属人化を解消し、月次集計工数を「3日 → 半日」へ短縮',
      impact: '集計工数 80%削減',
      before: 'Excelと紙伝票で受発注や在庫を個別管理。月次集計に毎月3日以上かかり、転記ミスや在庫のズレが常態化していました。',
      after: '誰でも直感的に使える社内Web管理システムを構築。受発注・在庫・売上がリアルタイムに自動連動し、集計が半日で完了するように。',
      duration: '約3ヶ月',
      budget: '250〜350万円',
      scope: 'Web業務管理システム / 在庫・受発注の一元化',
    },
    {
      id: 'case-2',
      num: '02',
      category: 'Webサービス開発',
      title: '電話受付の取りこぼしを脱却。スマホ予約・事前決済で注文数「2.4倍」を達成',
      impact: '注文数 2.4倍に増加',
      before: 'テイクアウト注文を電話のみで受付。ランチの混雑時に電話を取りきれず、注文の機会損失と店内オペレーションの混乱が起きていました。',
      after: 'スマホから30秒で注文・決済できるWebプラットフォームを構築。注文対応の負担が激減し、ピーク時もスムーズな受け渡しが可能に。',
      duration: '約5ヶ月',
      budget: '400〜600万円',
      scope: 'スマホ向けWeb注文・決済システム / 店舗用受注画面',
    },
    {
      id: 'case-3',
      num: '03',
      category: 'コーポレートWeb刷新',
      title: '外注依存の静的サイトを刷新。採用・お知らせを「自社で即日更新」できる体制へ',
      impact: '更新スピード 即日化',
      before: '自社内でサイトを修正できず、軽微な採用情報やニュースの変更でも外部業者に依頼。更新完了までに1〜2週間かかっていました。',
      after: '専門知識がなくても管理画面から簡単に編集できるモダンWebサイトへ全面リニューアル。即日発信が可能になり、採用応募数も向上。',
      duration: '約2ヶ月',
      budget: '120〜180万円',
      scope: 'Webサイト全面リニューアル / かんたん更新管理機能（CMS）',
    },
  ];

  const steps = [
    {
      step: 'STEP 01',
      title: '無料ヒアリング',
      desc: '課題や大まかなご要望をお伺いします。オンライン（Zoom / Meet）で全国対応可能です。',
    },
    {
      step: 'STEP 02',
      title: 'ご提案・概算お見積り',
      desc: '実現に向けた最適な開発手法、スケジュール、概算予算を分かりやすくご提示します。',
    },
    {
      step: 'STEP 03',
      title: 'UI設計・アジャイル開発',
      desc: '実際の画面イメージを共有しながら、進捗をこまめに確認いただける体制で開発を進めます。',
    },
    {
      step: 'STEP 04',
      title: '納品・運用サポート',
      desc: 'テスト・公開後も、操作レクチャーや日々のシステム保守で長期的にサポートします。',
    },
  ];

  return (
    <section className="gd-section gd-sme-partner-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head">
          <span className="section-sub-label">福岡発・中小企業向けWeb開発＆DX伴走支援</span>
          <h2 className="head-title">
            「ITの専任がいない」「仕様書が書けない」<br />
            そんな企業の、頼れる開発パートナーとして。
          </h2>
          <p className="head-desc">
            大掛かりなIT投資や複雑な専門知識は必要ありません。<br className="pc-only" />
            福岡・博多を拠点に、企画・設計からUIデザイン、受託開発、納品後の運用保守まで、貴社のビジネスに寄り添ってワンストップで伴走します。
          </p>
        </div>

        {/* 3 Pillars of Strengths (Icon-Based Feature Pillars) */}
        <div className="sme-strengths-grid">
          {strengths.map((item, idx) => {
            const IconComponent = item.icon;
            const stepNum = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={item.title}
                className="strength-card"
                data-aos="fade-up"
                data-aos-delay={idx * 120}
                data-aos-duration="600"
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

        {/* Development Solutions */}
        <div className="sme-solutions-wrap">
          <div className="solutions-header">
            <h3 className="solutions-main-title">中小企業のお悩みに応える対応領域</h3>
            <p className="solutions-sub-desc">
              日常のちょっとした不便の解消から、会社の将来を担う新規Web事業まで柔軟に対応します。
            </p>
          </div>
          <div className="solutions-grid">
            {solutions.map((sol, idx) => (
              <div
                key={idx}
                className="solution-box"
                data-aos="fade-up"
                data-aos-delay={(idx % 2) * 100}
                data-aos-duration="550"
              >
                <span className="solution-tag">{sol.tag}</span>
                <h4 className="solution-name">{sol.title}</h4>
                <p className="solution-text">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies (Before -> After Transformation Stories) */}
        <div className="sme-case-wrap">
          <div className="case-header-wrap">
            <h3 className="case-title">実際の開発・支援事例</h3>
            <p className="case-sub">
              「自社の課題をどう解決できるのか？」実際のBefore/Afterと、期間・概算予算の目安をご紹介します。
            </p>
          </div>
          <div className="case-list">
            {caseStudies.map((c, idx) => (
              <div
                key={c.id}
                className="case-story-card"
                data-aos="fade-up"
                data-aos-delay={idx * 90}
                data-aos-duration="550"
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

                {/* Clear Narrative Headline */}
                <h4 className="story-headline">{c.title}</h4>

                {/* Visual Before -> After Transformation Flow */}
                <div className="transformation-flow">
                  <div className="trans-box before">
                    <div className="trans-header">
                      <span className="trans-badge">Before（導入前の課題）</span>
                    </div>
                    <p className="trans-text">{c.before}</p>
                  </div>

                  <div className="trans-arrow-wrapper">
                    <EastIcon className="trans-arrow pc-arrow" />
                    <EastIcon className="trans-arrow sp-arrow" />
                  </div>

                  <div className="trans-box after">
                    <div className="trans-header">
                      <span className="trans-badge">After（導入後の成果）</span>
                    </div>
                    <p className="trans-text">{c.after}</p>
                  </div>
                </div>

                {/* Practical Project Specs (Non-tech friendly) */}
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
        </div>

        {/* Workflow Steps */}
        <div className="sme-workflow-wrap">
          <div className="workflow-header">
            <h3 className="workflow-title">ご相談から納品までの流れ</h3>
            <p className="workflow-sub">初めてのWeb外注でもご安心いただけるよう、ステップごとに丁寧にご案内します。</p>
          </div>
          <div className="workflow-steps-grid">
            {steps.map((item, sIdx) => (
              <div
                key={sIdx}
                className="workflow-step-item"
                data-aos="fade-right"
                data-aos-delay={sIdx * 80}
                data-aos-duration="500"
              >
                <div className="step-badge">{item.step}</div>
                <h4 className="step-title">{item.title}</h4>
                <p className="step-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="sme-consultation-callout" data-aos="zoom-in" data-aos-duration="600">
          <div className="callout-text">
            <h4>「こんなことWebでできる？」という段階から歓迎です</h4>
            <p>概算費用の確認や実現可能性の壁打ちなど、まずはお気軽にお話しをお聞かせください。</p>
          </div>
          <div className="callout-action">
            <Link href={"https://timerex.net/s/univus/3a845251"} className="consultation-btn">
              <span>Web開発・DXの無料相談をする</span>
              <EastIcon className="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
