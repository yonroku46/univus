'use client';

import React, { use } from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { AvailableLanguages } from '@/i18n/settings';
import '@/styles/pages/company.scss';

const breadcrumbs: Breadcrumb[] = [
  { label: '会社概要', href: '/company', active: true },
];

export default function CompanyPage({
  params,
}: {
  params: Promise<{ lng: AvailableLanguages }>;
}) {
  const { lng } = use(params);

  return (
    <article>
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="container content-top">
        <div className="company-page-wrapper">
          {/* Header */}
          <div className="page-header">
            <h1 className="page-title">会社概要</h1>
            <p className="page-subtitle">
              人々の日常とビジネスを心地よく変えるテクノロジーとパートナーシップを提供します。
            </p>
          </div>

          {/* Company Profile Table */}
          <section className="company-block">
            <h2 className="block-title">会社情報</h2>
            <table className="company-table">
              <tbody>
                <tr>
                  <th>会社名</th>
                  <td>株式会社Univus（Univus Inc.）</td>
                </tr>
                <tr>
                  <th>設立日</th>
                  <td>2025年4月18日</td>
                </tr>
                <tr>
                  <th>代表者</th>
                  <td>代表取締役 CEO 河 伶録</td>
                </tr>
                <tr>
                  <th>本社所在地</th>
                  <td>
                    〒812-0011<br />
                    福岡県福岡市博多区博多駅前1丁目23番2号 ParkFront博多駅前1丁目5F-B
                  </td>
                </tr>
                <tr>
                  <th>事業内容</th>
                  <td>
                    Web受託開発・業務システム受託開発<br />
                    中小企業・スタートアップ向けDX伴走支援<br />
                    自社デジタルプロダクト（Hirukuru・RegiZERO）の企画・開発・運営
                  </td>
                </tr>
                <tr>
                  <th>主要プロダクト</th>
                  <td>
                    Hirukuru（スマートテイクアウト）<br />
                    RegiZERO（次世代型店舗決済）
                  </td>
                </tr>
                <tr>
                  <th>適格請求書発行<br />事業者登録番号</th>
                  <td>T3290001109800</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Access / Location */}
          <section className="company-block">
            <h2 className="block-title">アクセス</h2>
            <div className="access-layout">
              <div className="access-info">
                <div className="office-name">福岡本社</div>

                <div className="access-item">
                  <span className="item-label">所在地</span>
                  <p className="item-value">
                    〒812-0011<br />
                    福岡県福岡市博多区博多駅前1丁目23番2号<br />
                    ParkFront博多駅前1丁目5F-B
                  </p>
                </div>

                <div className="access-item">
                  <span className="item-label">交通アクセス</span>
                  <p className="item-value">
                    JR各線・山陽新幹線「博多駅」博多口より徒歩約5分<br />
                    福岡市営地下鉄空港線「祇園駅」より徒歩約6分
                  </p>
                </div>

                <div className="access-item">
                  <span className="item-label">メールアドレス</span>
                  <p className="item-value">support@univus.jp</p>
                </div>
              </div>

              <div className="map-frame">
                <iframe
                  title="株式会社Univus 本社所在地マップ"
                  src="https://maps.google.com/maps?q=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E5%8D%9A%E5%A4%9A%E5%8C%BA%E5%8D%9A%E5%A4%9A%E9%A7%85%E5%89%8D1%E4%B8%81%E7%9B%AE23-2&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}