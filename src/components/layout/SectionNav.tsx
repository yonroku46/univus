'use client';

import type { MouseEvent } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

export interface SectionNavItem {
  id: string;
  targetId: string;
  label: string;
}

interface SectionNavProps {
  items: SectionNavItem[];
  offsetPx?: number;
  activeOffsetPx?: number;
}

function getActiveSectionId(items: SectionNavItem[], activeOffsetPx: number) {
  const scrollPosition = window.scrollY + activeOffsetPx;
  for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i];
    const element = document.getElementById(item.targetId);
    if (!element) continue;
    if (element.offsetTop <= scrollPosition) return item.id;
  }
  return '';
}

export function SectionNav({ items, offsetPx, activeOffsetPx = 200 }: SectionNavProps) {
  const [activeId, setActiveId] = useState('');
  const itemsMemo = useMemo(() => items, [items]);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (itemsMemo.length === 0) return;
    let rafId = 0;

    function handleScroll() {
      cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(() => {
        const nextActiveId = getActiveSectionId(itemsMemo, activeOffsetPx);
        setActiveId((prev) => (prev === nextActiveId ? prev : nextActiveId));
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [activeOffsetPx, itemsMemo]);

  function handleNavClick(e: MouseEvent<HTMLAnchorElement>, targetId: string) {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (!element) return;

    const navElement = navRef.current;
    const actualOffset = navElement ? navElement.offsetHeight : offsetPx || 72;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - actualOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }

  return (
    <nav ref={navRef} className="section-nav" aria-label="セクションナビゲーション">
      <div className="landing-container">
        <div className="section-nav-list">
          {itemsMemo.map((item) => (
            <a
              key={item.id}
              href={`#${item.targetId}`}
              className={`section-nav-item ${activeId === item.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.targetId)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

