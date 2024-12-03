'use client'

import Link from 'next/link';
import { useTranslation } from '@/i18n/client';
import { AvailableLanguages } from '@/i18n/settings';
import { getLocalizedPath } from '@/common/utils/LngUtils';

interface FooterProps {
  lng: AvailableLanguages;
}

export default function Footer (
  { lng }: FooterProps
) {
  const { t } = useTranslation(lng, 'navigation');

  const menuList: Array<MenuItem> = [
    { groupName: t('menu.company.title'), groupHref: getLocalizedPath('/company', lng), unit: [
      { name: t('menu.company.main'), href: getLocalizedPath('/company', lng) },
      { name: t('menu.company.ideology'), href: getLocalizedPath('/company/ideology', lng) },
      { name: t('menu.company.location'), href: getLocalizedPath('/company/location', lng) }
    ]},
    { groupName: t('menu.project.title'), groupHref: getLocalizedPath('/project', lng), unit: [
      { name: t('menu.project.main'), href: getLocalizedPath('/project', lng) }
    ]},
    { groupName: t('menu.contact.title'), groupHref: getLocalizedPath('/contact', lng), unit: [
      { name: t('menu.contact.inquiry'), href: getLocalizedPath('/contact', lng) },
      { name: t('menu.contact.notice'), href: getLocalizedPath('/contact/notice', lng) }
    ]}
  ]

  return (
    <footer>
      <div className='container footer-group'>
        <div className='corporation'>
          <p className='intro'>
            {t('corporation.intro')}
          </p>
          <div className='location'>
            {t('corporation.location')}
          </div>
          <div className='mail'>
            {t('corporation.mail')}
          </div>
        </div>
        <nav className='sp-nav'>
          {menuList.map((menu, idx) => {
            return (
              <div key={idx} className='menu-group'>
                <div className='group-name'>
                  {menu.groupName}
                </div>
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
        {t('corporation.copyright')}
      </div>
    </footer>
  );
}
