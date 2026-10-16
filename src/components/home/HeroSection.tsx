'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import { AvailableLanguages } from '@/i18n/settings';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
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
  const [viewMode, setViewMode] = useState<'erp' | 'pos'>('erp');
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
        {/* Left Side Content (Track, Headings, CTA) */}
        <div className="gl-hero-content">
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

          {/* Typography */}
          <h1 className="gl-hero-heading">
            アイデアを形に<br />
            ビジネスを前へ
          </h1>

          <p className="gl-hero-subheading">
            自社サービス開発で培ったプロダクト思考と<br className="pc-only" />
            確かなエンジニアリングで、<br className="pc-only" />
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
        </div>

        {/* Premium Tech Window Frame with Real Product UI */}
        <div className="gl-hero-canvas-frame">
          {/* Window Top Bar (Safari / Chrome Minimalist Style) */}
          <div className="gl-canvas-top-bar">
            <div className="gl-canvas-dots" aria-hidden="true">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
          </div>

          {/* Window Body: Real High-Res Japanese System UI */}
          <div className="gl-canvas-body gl-screen-container">
            {viewMode === 'erp' ? (
              <div className="gl-screen-slide">
                <Image
                  src="/assets/img/case-erp-dashboard.jpg"
                  alt="UNIVUS ERP PRO - 受発注・在庫オペレーション統合管理システム画面"
                  width={1366}
                  height={768}
                  priority
                  className="gl-screen-shot"
                />
              </div>
            ) : (
              <div className="gl-screen-slide">
                <Image
                  src="/assets/img/case-pos-kitchen-tablet.jpg"
                  alt="Hirukuru Store OS - リアルタイム店舗オーダー管理画面"
                  width={1366}
                  height={768}
                  priority
                  className="gl-screen-shot"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
