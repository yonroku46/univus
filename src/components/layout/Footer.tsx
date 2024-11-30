import Link from 'next/link';
import { useTranslation } from '@/i18n';
import { AvailableLanguages } from '@/i18n/settings';

import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';

interface FooterProps {
  lng: AvailableLanguages;
}

export default async function Footer (
  { lng }: FooterProps
) {
  const { t } = await useTranslation(lng, 'navigation');

  const menuList: Array<MenuItem> = [
    { groupName: '회사소개', groupHref: '/company', unit: [
      { name: '회사개요', href: '/company' },
      { name: '기업이념', href: '/company/philosophy' },
      { name: '오시는 길', href: '/company/location' }
    ]},
    { groupName: '사업내용', groupHref: '/project', unit: [
      { name: '히루쿠루', href: '/project' }
    ]},
    { groupName: '문의/상담', groupHref: '/contact', unit: [
      { name: '문의/상담하기', href: '/contact' },
      { name: '공지사항', href: '/contact/notice' }
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
