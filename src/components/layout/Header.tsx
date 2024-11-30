'use client'

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from '@/i18n/client';
import { AvailableLanguages } from '@/i18n/settings';
import { convertLngCode, removeLngPrefix } from '@/common/utils/LngUtils';
import LngDialog from '@/components/dialog/LngDialog';

import Drawer from '@mui/material/Drawer';
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, styled } from '@mui/material';

const NavMenu = styled('nav')(({ theme }) => ({
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
    background: 'var(--bg-color)',
    borderRadius: '0.5rem',
    padding: '8px',
    minWidth: '180px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
    opacity: 0,
    visibility: 'hidden',
    transform: 'translateY(-10px)',
    transition: 'all 0.2s ease-in-out',
    borderWidth: '1px',
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
      boxShadow: '-2px -2px 4px rgba(0,0,0,0.03)',
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
  }
}));

interface HeaderProps {
  lng: AvailableLanguages;
}

export default function Header (
  { lng }: HeaderProps
) {
  const { t, i18n } = useTranslation(lng, 'navigation');

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

  const currentPath: string = removeLngPrefix(usePathname());
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);


  // 다언어모달용
  const path = usePathname().substring(3);
  const [lngOpen, setLngOpen] = useState<boolean>(false);
  const handleLngClose = () => {
    setLngOpen(false);
  }

  const handleScroll = () => {
    if (window.scrollY < 5) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    // 상단스크롤
    window.scrollTo(0, 0);
    // 스크롤 이벤트
    window.addEventListener('scroll', handleScroll);
    // 리다이렉트 패스 저장
    if (!currentPath.startsWith('/login')) {
      sessionStorage.setItem('redirect', currentPath);
    }
    // 이동시 메뉴바 닫기
    setOpen(false);
    // 스크롤 이벤트 클린업
    return () => {
      if (currentPath === '') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentPath]);

  return (
    <header className={isTop && currentPath === '' ? 'top' : ''}>
      <div className='container header-group'>
        <div className='left-area'>
          <div className='logo'>
            <Link href='/'>
              Univus
            </Link>
          </div>
        </div>
        <div className='right-area'>
          <LngDialog
            i18n={i18n}
            lng={lng}
            path={path || ''}
            open={lngOpen}
            onClose={handleLngClose}
          />
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
          <button className='lng-btn' onClick={() => setLngOpen(true)}>
            <div className='lng-title'>{convertLngCode(lng, 'label')}</div>
            <PublicSharpIcon fontSize='small' />
          </button>
          <button className='sp-only menu-btn' onClick={() => setOpen(true)}>
            <MenuRoundedIcon className='menu-icon' />
          </button>
          <Drawer PaperProps={{sx: {borderRadius: '0 0 1rem 1rem'}}} anchor={'top'} open={open} onClose={() => setOpen(false)}>
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
