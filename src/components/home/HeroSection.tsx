'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import { AvailableLanguages } from '@/i18n/settings';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import GeometricShape, { ShapeType } from '@/components/common/GeometricShape';

interface HeroSectionProps {
  lng: AvailableLanguages;
}

// 6 Base Geometric Shapes matching Gumloop exactly (powered by public/assets/shapes)
const BASE_SHAPES: { id: ShapeType; rotate: number; render: () => React.ReactNode }[] = [
  {
    id: 'pink',
    rotate: -13,
    render: () => <GeometricShape type="pink" width={297} height={297} className="gl-svg-shape" />,
  },
  {
    id: 'purple',
    rotate: 0,
    render: () => <GeometricShape type="purple" width={297} height={304} className="gl-svg-shape" />,
  },
  {
    id: 'green',
    rotate: -28,
    render: () => <GeometricShape type="green" width={297} height={300} className="gl-svg-shape" />,
  },
  {
    id: 'blue',
    rotate: 21,
    render: () => <GeometricShape type="blue" width={297} height={297} className="gl-svg-shape" />,
  },
  {
    id: 'amber',
    rotate: -18,
    render: () => <GeometricShape type="amber" width={297} height={297} className="gl-svg-shape" />,
  },
  {
    id: 'orange',
    rotate: 29,
    render: () => <GeometricShape type="orange" width={313} height={300} className="gl-svg-shape" />,
  },
];

// Replicate 5 cycles for continuous seamless sliding
const EXTENDED_SHAPES = [
  ...BASE_SHAPES,
  ...BASE_SHAPES,
  ...BASE_SHAPES,
  ...BASE_SHAPES,
  ...BASE_SHAPES,
];

export default function HeroSection({ lng }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<'flow' | 'hirukuru' | 'regizero'>('flow');
  const [step, setStep] = useState<number>(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState<boolean>(true);
  const totalShapes = BASE_SHAPES.length; // 6

  // Seamless infinite timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitionEnabled(true);
      setStep((prev) => prev + 1);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  // When step reaches 2 cycles (12), smoothly reset back to 0 without jump
  useEffect(() => {
    if (step >= totalShapes * 2) {
      const resetTimeout = setTimeout(() => {
        setIsTransitionEnabled(false);
        setStep((prev) => prev % totalShapes);
      }, 520); // wait until 500ms transition finishes
      return () => clearTimeout(resetTimeout);
    }
  }, [step, totalShapes]);

  return (
    <section className="gl-hero-section">
      <div className="gl-hero-container">
        {/* Exact Gumloop Geometric Motion Shape Track with Seamless Infinite Loop & Focus Scale */}
        <div className="gl-hero-shape-track-wrapper" aria-hidden="true">
          <div
            className="gl-hero-shape-track"
            style={{
              transform: `translateX(-${step * 34}px)`,
              transition: isTransitionEnabled
                ? 'transform 500ms cubic-bezier(0.77, 0, 0.175, 1)'
                : 'none',
            }}
          >
            {EXTENDED_SHAPES.map((shape, idx) => {
              // Calculate focus scale: the middle 2 items in view are large (scale 1.0), edges scale(0.55), outside scale(0)
              const relPos = idx - step;
              let scale = 0;
              let opacity = 0;

              if (relPos === 0) {
                // Left edge leaving
                scale = 0.545;
                opacity = 0.6;
              } else if (relPos === 1 || relPos === 2) {
                // Middle two focused items: full scale 1.0!
                scale = 1.0;
                opacity = 1.0;
              } else if (relPos === 3) {
                // Right edge entering
                scale = 0.545;
                opacity = 0.6;
              }

              return (
                <div
                  key={`${shape.id}-${idx}`}
                  className="gl-shape-item"
                  style={{
                    transformOrigin: relPos <= 1 ? '100% 50%' : '0% 50%',
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    transition: isTransitionEnabled
                      ? 'transform 500ms cubic-bezier(0.77, 0, 0.175, 1), opacity 500ms ease'
                      : 'none',
                  }}
                >
                  <div
                    className="gl-shape-rotator"
                    style={{
                      transform: `rotate(${relPos === 1 || relPos === 2 ? 0 : shape.rotate}deg)`,
                      transition: isTransitionEnabled
                        ? 'transform 500ms cubic-bezier(0.77, 0, 0.175, 1)'
                        : 'none',
                    }}
                  >
                    {shape.render()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Typography */}
        <h1 className="gl-hero-heading">
          アイデアを形に<br />
          ビジネスを前へ
        </h1>

        <p className="gl-hero-subheading">
          自社サービス開発で培ったプロダクト思考と確かなエンジニアリングで、<br className="pc-only" />
          Webシステム構築から業務DXまでを一気通貫で伴走します。
        </p>

        {/* CTA Buttons */}
        <div className="gl-hero-cta-group">
          <Link href={getLocalizedPath('/contact', lng)} className="gl-btn gl-btn-black">
            <span>お問い合わせ・ご相談</span>
          </Link>
          <Link href={getLocalizedPath('/project', lng)} className="gl-btn gl-btn-outline">
            <span>事業・プロダクトを見る</span>
            <ArrowForwardRoundedIcon className="gl-btn-icon" />
          </Link>
        </div>

        {/* Grand Canvas Preview Frame (Gumloop 1440/900 Aspect Frame) */}
        <div className="gl-hero-canvas-frame">
          {/* Canvas Top Bar */}
          <div className="gl-canvas-top-bar">
            <div className="gl-canvas-dots" aria-hidden="true">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>

            <div className="gl-canvas-tabs">
              <button
                type="button"
                className={`gl-tab-item ${activeTab === 'flow' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('flow')}
              >
                <span>アジャイル開発フロー</span>
              </button>
              <button
                type="button"
                className={`gl-tab-item ${activeTab === 'hirukuru' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('hirukuru')}
              >
                <span>Hirukuru（テイクアウトプラットフォーム）</span>
              </button>
              <button
                type="button"
                className={`gl-tab-item ${activeTab === 'regizero' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('regizero')}
              >
                <span>RegiZERO（店舗決済）</span>
              </button>
            </div>
          </div>

          {/* Canvas Workspace Body */}
          <div className="gl-canvas-body">
            {activeTab === 'flow' && (
              <div className="gl-flow-workspace">
                <div className="gl-flow-node-col">
                  {/* Node 1: Input & Planning */}
                  <div className="gl-node-card">
                    <div className="gl-node-header">
                      <span className="gl-node-step">01. 構想 & 課題整理</span>
                    </div>
                    <h4 className="gl-node-title">ビジネス要件のヒアリング</h4>
                    <p className="gl-node-desc">課題と目的を紐解き、実現性の高い画面仕様とロードマップを策定</p>
                    <div className="gl-node-badge">Figma UI設計</div>
                  </div>

                  {/* Flow Connector Arrow */}
                  <div className="gl-node-connector" aria-hidden="true">
                    <span className="line" />
                    <span className="arrow">↓</span>
                  </div>

                  {/* Node 2: Engineering */}
                  <div className="gl-node-card active-border">
                    <div className="gl-node-header">
                      <span className="gl-node-step">02. プロダクト開発</span>
                    </div>
                    <h4 className="gl-node-title">モダンスポーティ開発基盤</h4>
                    <p className="gl-node-desc">Next.js・TypeScript・クラウドAPIによる堅牢かつ高速な実装</p>
                    <div className="gl-node-badge">クリーンアーキテクチャ</div>
                  </div>

                  {/* Flow Connector Arrow */}
                  <div className="gl-node-connector" aria-hidden="true">
                    <span className="line" />
                    <span className="arrow">↓</span>
                  </div>

                  {/* Node 3: Deployment & Output */}
                  <div className="gl-node-card">
                    <div className="gl-node-header">
                      <span className="gl-node-step">03. 運用・改善伴走</span>
                    </div>
                    <h4 className="gl-node-title">本番稼働 & 継続的成長支援</h4>
                    <p className="gl-node-desc">自社サービスの運用ノウハウに基づき、リリース後の拡張・保守までサポート</p>
                    <div className="gl-node-badge">AWS / Cloudflare</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hirukuru' && (
              <div className="gl-product-workspace">
                <div className="gl-product-split">
                  <div className="gl-product-text">
                    <span className="gl-product-kicker">テイクアウトプラットフォーム</span>
                    <h3 className="gl-product-heading">Hirukuru（ヒルクル）</h3>
                    <p className="gl-product-summary">
                      オフィス街のランチ難民と飲食店をつなぐテイクアウト注文プラットフォーム。
                      待ち時間をなくし、働く人の休憩時間を豊かにする自社企画・運営サービスです。
                    </p>
                    <div className="gl-tech-pills">
                      <span>Next.js 15</span>
                      <span>TypeScript</span>
                      <span>PostgreSQL</span>
                      <span>AWS Cloud</span>
                    </div>
                    <Link href={getLocalizedPath('/project/hirukuru', lng)} className="gl-product-link">
                      <span>サービス詳細を見る</span>
                      <ArrowForwardRoundedIcon className="icon" />
                    </Link>
                  </div>
                  <div className="gl-product-preview-box">
                    <Image
                      src="/assets/lp/hero.png"
                      alt="Hirukuru Preview"
                      width={520}
                      height={340}
                      className="gl-preview-image"
                      priority
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'regizero' && (
              <div className="gl-product-workspace">
                <div className="gl-product-split">
                  <div className="gl-product-text">
                    <span className="gl-product-kicker">Store DX Solution</span>
                    <h3 className="gl-product-heading">RegiZERO（レジゼロ）</h3>
                    <p className="gl-product-summary">
                      専用機器不要。スマートフォンひとつでお会計が完結する次世代型店舗決済システム。
                      現場のオペレーション負荷を軽減し、会計の手間と導入コストを劇的に削減します。
                    </p>
                    <div className="gl-tech-pills">
                      <span>PWA / Web App</span>
                      <span>Stripe Connect</span>
                      <span>Realtime API</span>
                    </div>
                    <Link href={getLocalizedPath('/project/regizero', lng)} className="gl-product-link">
                      <span>サービス詳細を見る</span>
                      <ArrowForwardRoundedIcon className="icon" />
                    </Link>
                  </div>
                  <div className="gl-product-preview-box">
                    <Image
                      src="/assets/lp2/hero.png"
                      alt="RegiZERO Preview"
                      width={520}
                      height={340}
                      className="gl-preview-image"
                      priority
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
