'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import { AvailableLanguages } from '@/i18n/settings';

interface HeroSectionProps {
  lng: AvailableLanguages;
}

export default function HeroSection({ lng }: HeroSectionProps) {
  return (
    <section className="corporate-hero">
      <div className="hero-container">
        <div className="hero-grid-layout">
          {/* Left: Editorial Copy */}
          <div className="hero-main-block">
            <h1 className="hero-title">
              つなぐ、ひろげる、<br />
              つぎの日常を創る。
            </h1>

            <p className="hero-lead">
              一人ひとりの得意や想いを重ね合わせ、まだ見ぬ可能性をかたちに。<br />
              福岡を拠点に、ITの専任がいない企業やスタートアップの頼れるパートナーとして、<br className="pc-only" />
              Web受託開発からDX支援、日々の業務を心地よく変える仕組みを伴走支援します。
            </p>

            <div className="hero-actions">
              <Link
                href={getLocalizedPath('/contact', lng)}
                className="action-link primary"
              >
                <span>お問い合わせ・ご相談</span>
              </Link>
              <Link
                href={getLocalizedPath('/project', lng)}
                className="action-link secondary"
              >
                <span>事業内容を見る</span>
              </Link>
            </div>
          </div>

          {/* Right: Tangible Web Application & DX Software Showcase */}
          <div className="hero-visual-block">
            <div className="visual-float-wrap">
              <Image
                src="/assets/img/hero-jp-tablet-phone.png"
                alt="クラウド業務統合ダッシュボード・DXソリューション"
                width={540}
                height={530}
                priority
                className="dx-webapp-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
