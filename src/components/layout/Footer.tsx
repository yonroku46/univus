'use client'

import Link from 'next/link';
import { getLocalizedPath } from '@/common/utils/LngUtils';
import { AvailableLanguages } from '@/i18n/settings';
// import { useTranslation } from '@/i18n/client';

interface FooterProps {
  lng: AvailableLanguages;
}

export default function Footer (
  { lng }: FooterProps
) {
  // const { t } = useTranslation(lng, 'navigation');

  const menuList: Array<MenuItem> = [
    { groupName: '会社紹介', groupHref: getLocalizedPath('/company', lng), unit: [
      { name: '会社概要', href: getLocalizedPath('/company', lng) },
      { name: '企業理念', href: getLocalizedPath('/company/ideology', lng) },
      { name: 'アクセス', href: getLocalizedPath('/company/location', lng) }
    ]},
    { groupName: '事業内容', groupHref: getLocalizedPath('/project', lng), unit: [
      { name: 'プロジェクト', href: getLocalizedPath('/project', lng) }
    ]},
    { groupName: '採用', groupHref: getLocalizedPath('/recruit', lng), unit: [
      { name: '採用情報', href: getLocalizedPath('/recruit', lng) },
    ]},
    { groupName: 'コンタクト', groupHref: getLocalizedPath('/contact', lng), unit: [
      { name: 'お問い合わせ', href: getLocalizedPath('/contact', lng) },
      { name: 'ニュース', href: getLocalizedPath('/contact/notice', lng) }
    ]}
  ]

  return (
    <footer>
      <div className='container footer-group'>
        <div className='corporation'>
          <p className='intro'>
            株式会社Univus
          </p>
          <div className='location'>
            {`〒812-0011\n福岡県福岡市博多区博多駅前1丁目\n23番2号ParkFront博多駅前1丁目5F-B`}
          </div>
          <div className='mail'>
            support@univus.jp
          </div>
        </div>
        <nav className='sp-nav'>
          {menuList.map((menu, idx) => {
            return (
              <div key={idx} className='menu-group'>
                <Link href={menu.groupHref} className='group-name'>
                  {menu.groupName}
                </Link>
                <div className='subnav'>
                  <div className='menu-box'>
                    {menu.unit.map((subMenu, idx) => (
                      <Link
                        key={idx}
                        href={subMenu.href}
                      >
                        {subMenu.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </nav>
      </div>
      <div className='copyright'>
        Copyright ⓒ Univus inc.,Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
