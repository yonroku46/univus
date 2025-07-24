'use client'

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { AvailableLanguages } from '@/i18n/settings';
import { getLocalizedPath, removeLngPrefix } from '@/common/utils/LngUtils';
// import { useTranslation } from '@/i18n/client';
// import LngDialog from '@/components/dialog/LngDialog';

import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, styled } from '@mui/material';
// import PublicSharpIcon from '@mui/icons-material/PublicSharp';

const NavMenu = styled('nav')(() => ({
  display: 'flex',
  gap: '2rem',
  position: 'relative',
  '.menu-item': {
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
      '.submenu': {
        opacity: 1,
        visibility: 'visible',
        transform: 'translateY(0)',
      }
    }
  },
  '.submenu': {
    position: 'absolute',
    top: 'calc(125% + 12px)',
    left: '0',
    right: 'auto',
    background: 'var(--bg-color)',
    borderRadius: '0.5rem',
    padding: '8px',
    minWidth: '180px',
    maxWidth: '200px',
    opacity: 0,
    visibility: 'hidden',
    transform: 'translateY(-10px)',
    transition: 'all 0.2s ease-in-out',
    borderWidth: '1px',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-6px',
      left: '24px',
      width: '12px',
      height: '12px',
      background: '#fff',
      transform: 'rotate(45deg)',
      border: '1px solid var(--border-color)',
      boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '18px',
      width: '24px',
      height: '12px',
      background: '#fff',
    },
    'a': {
      display: 'block',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      color: 'var(--text-color) !important',
      position: 'relative',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: 'var(--bg-sub-color)',
      }
    }
  },
  '.menu-item:last-child .submenu': {
    left: 'auto',
    right: '0',
    '&::before': {
      left: 'auto',
      right: '24px',
    },
    '&::after': {
      left: 'auto',
      right: '18px',
    }
  }
}));

interface HeaderProps {
  lng: AvailableLanguages;
}

export default function Header (
  { lng }: HeaderProps
) {
  // const { t, i18n } = useTranslation(lng, 'navigation');

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

  const currentPath: string = removeLngPrefix(usePathname());
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  // const path = usePathname().substring(3);
  // const [lngOpen, setLngOpen] = useState<boolean>(false);
  // const handleLngClose = () => {
  //   setLngOpen(false);
  // }

  const handleScroll = () => {
    if (window.scrollY < 5) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);
    if (!currentPath.startsWith('/login')) {
      sessionStorage.setItem('redirect', currentPath);
    }
    setOpen(false);
    return () => {
      if (currentPath === '') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentPath]);

  return (
    <header className={isTop && currentPath === '' ? 'top' : ''}>
      <div className='header-group'>
        <div className='left-area'>
          <div className='logo'>
            <Link href={getLocalizedPath('/', lng)}>
              <Image
                src={'/assets/icon/logo.svg'}
                alt='logo'
                width={100}
                height={40}
                priority
              />
            </Link>
          </div>
        </div>
        <div className='right-area'>
          {/* <LngDialog
            i18n={i18n}
            lng={lng}
            path={path || ''}
            open={lngOpen}
            onClose={handleLngClose}
          />
          <button className='lng-btn' onClick={() => setLngOpen(true)}>
            <PublicSharpIcon fontSize='small' />
          </button> */}
          <NavMenu className='pc-only pc-nav'>
            {menuList.map((menu, idx) => (
              <div key={idx} className='menu-item'>
                <Link href={menu.groupHref}>
                  {menu.groupName}
                </Link>
                <Box className='submenu'>
                  {menu.unit.map((subMenu, subIdx) => (
                    <Link key={subIdx} href={subMenu.href}>
                      {subMenu.name}
                    </Link>
                  ))}
                </Box>
              </div>
            ))}
          </NavMenu>
          <button className='sp-only menu-btn' onClick={() => setOpen(true)}>
            <MenuRoundedIcon className='menu-icon' />
          </button>
          <Drawer PaperProps={{sx: {minWidth: '250px', borderRadius: '0.5rem 0 0 0.5rem' }}} anchor={'right'} open={open} onClose={() => setOpen(false)}>
            <nav>
              <div className='menu-group top-area'>
                <CloseRoundedIcon className='close-icon' onClick={() => setOpen(false)} />
              </div>
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
                            className={currentPath === subMenu.href ? 'active' : ''}
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
          </Drawer>
        </div>
      </div>
    </header>
  );
}
