'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { AvailableLanguages } from '@/i18n/settings';
import '@/styles/pages/ideology.scss';

const breadcrumbs: Breadcrumb[] = [
  { label: '企業理念', href: '/company/ideology', active: true },
];

export default function IdeologyPage({
  params,
}: {
  params: Promise<{ lng: AvailableLanguages }>;
}) {
  const { lng } = use(params);

  const values = [
    {
      num: '01',
      title: '個性の尊重と発揮',
      desc: '一人ひとりの違いを力に変える。お互いの専門性と個性を尊重し、強みを最大限に発揮できる環境を育みます。',
    },
    {
      num: '02',
      title: '共創と伴走',
      desc: '得意を掛け合わせ、枠組みを超える。クライアントや仲間と真摯に伴走し、個の力だけでは届かない確かな価値を共創します。',
    },
    {
      num: '03',
      title: '本質と体験の追求',
      desc: '常にユーザーの期待の一歩先へ。現状に満足することなく、本質的な課題解決と心地よいデジタル体験を追求し続けます。',
    },
  ];

  return (
    <article>
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="container content-top">
        <div className="ideology-page-wrapper">
          {/* Header */}
          <div className="page-header">
            <h1 className="page-slogan">つなぐ、ひろげる、つぎの日常を創る。</h1>
            <p className="page-lead">
              一人ひとりの得意や想いを重ね合わせ、まだ見ぬ可能性をかたちに。<br />
              テクノロジーを通じて人と人、ビジネスと未来を心地よくつなぎ、新しい日常の豊かさを共創します。
            </p>
          </div>

          {/* Values Section */}
          <section className="values-section">
            <div className="values-list">
              {values.map((v) => (
                <div key={v.num} className="value-item">
                  <span className="item-num">{v.num}</span>
                  <h3 className="item-title">{v.title}</h3>
                  <p className="item-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stories Section */}
          <section className="stories-section">
            <div className="story-block">
              <div className="story-content">
                <h2 className="story-title">サービスを通じて、社会に心地よい循環を</h2>
                <p className="story-text">
                  ユニバスは、日々のちょっとした不便や業務の課題に寄り添い、確かな技術で解決することで、社会により良い循環をもたらします。<br /><br />
                  日常のふとした瞬間に生まれるゆとりや安心感を大切に、関わるすべての人の力になるサービスを追求し続けます。
                </p>
              </div>
              <div className="story-photo">
                <Image
                  src="/assets/img/company1.jpeg"
                  alt="サービスを通じて社会貢献を実現"
                  width={500}
                  height={375}
                  priority
                />
              </div>
            </div>

            <div className="story-block is-reversed">
              <div className="story-content">
                <h2 className="story-title">技術でビジネスと未来をつなぐ</h2>
                <p className="story-text">
                  ITの専任担当がいない中小企業やスタートアップの頼れるパートナーとして、要件定義からWeb受託開発、業務DX推進までを一貫して伴走。<br /><br />
                  人と人、企業と技術が自然につながり、新しい価値を生み出し続ける土台を築きます。
                </p>
              </div>
              <div className="story-photo">
                <Image
                  src="/assets/img/company2.jpg"
                  alt="技術で繋がるより良い未来"
                  width={500}
                  height={375}
                  priority
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}