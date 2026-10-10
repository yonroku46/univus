'use client';

import { useEffect, useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AvailableLanguages } from '@/i18n/settings';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import HeroSection from '@/components/home/HeroSection';
import GeometricShape from '@/components/common/GeometricShape';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import '@/styles/pages/home.scss';

interface Notice {
  id: string | number;
  date: string;
  title: string;
  type: string;
}

export default function Home({
  params,
}: {
  params: Promise<{ lng: AvailableLanguages }>;
}) {
  const { lng } = use(params);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isNoticesLoading, setIsNoticesLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchNotices() {
      try {
        const response = await fetch(
          'https://univus-jp.s3.ap-northeast-1.amazonaws.com/notices-ja.json'
        );
        if (response.ok) {
          const data = await response.json();
          setNotices(data.notices || []);
        }
      } catch (err) {
        console.error('Failed to fetch notices:', err);
      } finally {
        setIsNoticesLoading(false);
      }
    }
    fetchNotices();
  }, [lng]);

  const techBadges = [
    { name: 'TypeScript', category: 'Language' },
    { name: 'Next.js 15', category: 'Framework' },
    { name: 'AWS Cloud', category: 'Infrastructure' },
    { name: 'React 19', category: 'Modern Frontend' },
    { name: 'PostgreSQL', category: 'Database' },
  ];

  const displayNotices = notices.slice(0, 4);

  return (
    <article className="gl-landing-page">
      {/* 1. Hero Section */}
      <HeroSection lng={lng} />

      {/* 2. Customer / Technology Infrastructure Bar (Gumloop Style) */}
      <section className="gl-proof-section">
        <div className="gl-container">
          <div className="gl-proof-header">
            <span className="gl-proof-kicker">Core Technology</span>
            <div className="gl-proof-title-row">
              <h2 className="gl-proof-title">
                現場の課題を解き<br />
                成長を支えるエンジニアリング基盤
              </h2>
              <div className="gl-proof-metrics">
                <div className="gl-metric-box">
                  <span className="label">プロジェクト累計実績</span>
                  <span className="value">130<span className="unit">+件</span></span>
                </div>
                <div className="gl-metric-box">
                  <span className="label">エンジニアリング歴</span>
                  <span className="value">11<span className="unit">+年</span></span>
                </div>
              </div>
            </div>
            <p className="gl-proof-sub">
              モダンなWebフロントエンドから高可用なクラウドインフラまで、妥協のない技術選定でプロダクトの安定稼働と事業成長を支えます。
            </p>
          </div>

          <div className="gl-tech-grid">
            {techBadges.map((tech, idx) => (
              <div key={idx} className="gl-tech-card">
                <span className="gl-tech-name">{tech.name}</span>
                <span className="gl-tech-cat">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Feature Showcase 1: Hirukuru (Takeout Platform) */}
      <section className="gl-feature-section">
        <div className="gl-container">
          <div className="gl-feature-split">
            <div className="gl-feature-copy-col">
              <span className="gl-feature-badge">テイクアウトプラットフォーム / 01</span>
              <h2 className="gl-feature-title">
                スマートテイクアウトで<br />
                働く人の毎日に心地よさを
              </h2>
              <p className="gl-feature-desc">
                「Hirukuru（ヒルクル）」は、オフィス街のランチ時の混雑を解消するテイクアウト注文プラットフォームです。
                自社でゼロから構想し、現場の店舗と利用者の声を聞きながら、使い心地の良いUIと安定したクラウド基盤を共創しました。
              </p>

              <div className="gl-feature-actions">
                <Link href={getLocalizedPath('/project/hirukuru', lng)} className="gl-btn gl-btn-black">
                  <span>Hirukuru 詳細を見る</span>
                </Link>
              </div>

              <div className="gl-feature-checklist">
                <div className="gl-check-item">
                  <CheckRoundedIcon className="check-icon" />
                  <span>リアルタイム調理状況の可視化</span>
                </div>
                <div className="gl-check-item">
                  <CheckRoundedIcon className="check-icon" />
                  <span>スマホ完結のスムーズな事前決済</span>
                </div>
                <div className="gl-check-item">
                  <CheckRoundedIcon className="check-icon" />
                  <span>店舗側のオーダー管理画面・ダッシュボード</span>
                </div>
                <div className="gl-check-item">
                  <CheckRoundedIcon className="check-icon" />
                  <span>ピーク時にも耐えうる高可用クラウド構成</span>
                </div>
              </div>
            </div>

            <div className="gl-feature-media-col">
              <div className="gl-media-window-box">
                <div className="gl-media-app-badge" aria-hidden="true">
                  <Image
                    src="/assets/icon/hirukuru-icon.svg"
                    alt="Hirukuru App Icon"
                    width={48}
                    height={48}
                    className="badge-icon-img"
                  />
                </div>
                <Image
                  src="/assets/img/hirukuru-kitchen-car.jpg"
                  alt="Hirukuru Kitchen Car Takeout Platform"
                  width={580}
                  height={435}
                  className="gl-feature-image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Feature Showcase 2: RegiZERO (Smart Store Payment) */}
      <section className="gl-feature-section gl-alt-bg">
        <div className="gl-container">
          <div className="gl-feature-split gl-reverse">
            <div className="gl-feature-copy-col">
              <span className="gl-feature-badge">スマート店舗決済ソリューション / 02</span>
              <h2 className="gl-feature-title">
                レジはもっとシンプルに<br />
                スマホ完結のスマート決済
              </h2>
              <p className="gl-feature-desc">
                「RegiZERO（レジゼロ）」は、高額な専用レジ端末を使わずに、スマートフォンひとつで即座にお会計ができるスマート決済ソリューションです。
                会計の手間と初期導入費用を抑え、あらゆる小規模店舗やイベントでの会計をスマートに変革します。
              </p>

              <div className="gl-feature-actions">
                <Link href={getLocalizedPath('/project/regizero', lng)} className="gl-btn gl-btn-black">
                  <span>RegiZERO 詳細を見る</span>
                </Link>
              </div>

              <div className="gl-feature-checklist">
                <div className="gl-check-item">
                  <CheckRoundedIcon className="check-icon" />
                  <span>専用機械不要・スマホひとつで導入</span>
                </div>
                <div className="gl-check-item">
                  <CheckRoundedIcon className="check-icon" />
                  <span>バーコードスキャンと即時集計</span>
                </div>
                <div className="gl-check-item">
                  <CheckRoundedIcon className="check-icon" />
                  <span>現場オペレーションの劇的削減</span>
                </div>
                <div className="gl-check-item">
                  <CheckRoundedIcon className="check-icon" />
                  <span>セキュアな決済トークンアーキテクチャ</span>
                </div>
              </div>
            </div>

            <div className="gl-feature-media-col">
              <div className="gl-media-window-box">
                <div className="gl-media-app-badge" aria-hidden="true">
                  <Image
                    src="/assets/icon/regizero-icon.svg"
                    alt="RegiZERO App Icon"
                    width={48}
                    height={48}
                    className="badge-icon-img"
                  />
                </div>
                <Image
                  src="/assets/img/regizero-restaurant.jpg"
                  alt="RegiZERO Restaurant Smart Payment"
                  width={580}
                  height={435}
                  className="gl-feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Business Capabilities (Gumloop Grid Style) */}
      <section className="gl-capabilities-section">
        <div className="gl-container">
          <div className="gl-section-title-wrap">
            <span className="gl-feature-badge">Capabilities</span>
            <h2 className="gl-capabilities-heading">事業領域</h2>
            <p className="gl-capabilities-desc">
              確かな技術力と丁寧なコミュニケーションで、構想からリリース後の成長まで伴走します。
            </p>
          </div>

          <div className="gl-capabilities-grid">
            <div className="gl-cap-card cap-purple">
              <div className="gl-cap-top">
                <span className="gl-cap-number">01</span>
                <span className="gl-cap-symbol" aria-hidden="true">
                  <GeometricShape type="purple" width={20} height={20} className="gl-cap-svg" />
                </span>
              </div>
              <h3 className="gl-cap-title">Web・システム受託開発</h3>
              <p className="gl-cap-text">
                お客様の事業要件に合わせて、Webアプリケーションや業務システムを設計・開発します。
                使い心地の良いUI/UXから堅牢なクラウドインフラまで、一貫した品質で形にします。
              </p>
              <div className="gl-cap-list">
                <span>・ 業務システム・管理画面構築</span>
                <span>・ Webアプリケーション開発</span>
                <span>・ API連携・データベース設計</span>
              </div>
            </div>

            <div className="gl-cap-card cap-green">
              <div className="gl-cap-top">
                <span className="gl-cap-number">02</span>
                <span className="gl-cap-symbol" aria-hidden="true">
                  <GeometricShape type="green" width={20} height={20} className="gl-cap-svg" />
                </span>
              </div>
              <h3 className="gl-cap-title">DX推進・業務自動化</h3>
              <p className="gl-cap-text">
                手作業や紙、Excelに依存した業務フローを可視化し、デジタル化による効率化を推進します。
                IT専門部署を持たない企業様에도寄り添い、実現可能なペースで伴走支援します。
              </p>
              <div className="gl-cap-list">
                <span>・ 業務プロセスの可視化と改善設計</span>
                <span>・ クラウド移行・ペーパーレス化</span>
                <span>・ 社内運用の定着伴走サポート</span>
              </div>
            </div>

            <div className="gl-cap-card cap-amber">
              <div className="gl-cap-top">
                <span className="gl-cap-number">03</span>
                <span className="gl-cap-symbol" aria-hidden="true">
                  <GeometricShape type="amber" width={20} height={20} className="gl-cap-svg" />
                </span>
              </div>
              <h3 className="gl-cap-title">自社プロダクトの企画・運営</h3>
              <p className="gl-cap-text">
                日常の課題や街のニーズを捉えたWebサービスを自社で企画・開発・運営しています。
                実戦で培ったユーザー体験と運用のノウハウを、受託開発における提案品質へ還元しています。
              </p>
              <div className="gl-cap-list">
                <span>・ BtoC / BtoB Webプラットフォーム</span>
                <span>・ PWA・モバイル最適化</span>
                <span>・ 実戦に基づく継続的な機能改善</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Information News (Gumloop Minimal Feed Style) */}
      <section className="gl-news-section">
        <div className="gl-container">
          <div className="gl-news-header">
            <div>
              <span className="gl-feature-badge">Information</span>
              <h2 className="gl-news-title">お知らせ</h2>
            </div>
            <Link href={getLocalizedPath('/contact/notice', lng)} className="gl-news-all-link">
              <span>一覧を見る</span>
              <ArrowForwardRoundedIcon className="icon" />
            </Link>
          </div>

          <div className="gl-news-feed">
            {displayNotices.length > 0 ? (
              displayNotices.map((notice) => (
                <Link
                  key={notice.id}
                  href={getLocalizedPath('/contact/notice', lng)}
                  className="gl-news-feed-item"
                >
                  <time className="gl-feed-date">{notice.date}</time>
                  <span className={`gl-feed-tag ${notice.type}`}>
                    {notice.type === 'service' ? 'サービス' : 'お知らせ'}
                  </span>
                  <span className="gl-feed-headline">{notice.title}</span>
                  <ArrowForwardRoundedIcon className="gl-feed-arrow" />
                </Link>
              ))
            ) : !isNoticesLoading ? (
              <div className="gl-news-empty">現在、掲載中のお知らせはありません。</div>
            ) : null}
          </div>
        </div>
      </section>

      {/* 7. Bottom High-Impact CTA (Gumloop "Build your team of agents" Style) */}
      <section className="gl-closing-section">
        <div className="gl-container">
          <div className="gl-closing-box">
            <div className="gl-closing-shape" aria-hidden="true">
              <GeometricShape type="blue" width={36} height={36} className="gl-closing-svg" />
            </div>
            <h2 className="gl-closing-title">
              アイデアの壁打ちから、<br />
              まずはお気軽にお話ししませんか？
            </h2>
            <p className="gl-closing-desc">
              Webシステム開発から新規事業の立ち上げ、業務改善まで、丁寧にお伺いします。
            </p>
            <div className="gl-closing-actions">
              <Link href={getLocalizedPath('/contact', lng)} className="gl-btn gl-btn-white">
                <span>お問い合わせフォーム</span>
              </Link>
              <a
                href="https://timerex.net/s/univus/3a845251"
                target="_blank"
                rel="noopener noreferrer"
                className="gl-btn gl-btn-outline-white"
              >
                <span>オンライン日程調整</span>
                <ArrowForwardRoundedIcon className="gl-btn-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
