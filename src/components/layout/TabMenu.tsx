'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface TabItem {
  title: string
  href: string
}

interface TabMenuProps {
  items: TabItem[]
}

export function TabMenu({ items }: TabMenuProps) {
  const pathname = usePathname();

  return (
    <div className='tab-menu'>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`menu ${pathname === item.href ? 'active' : ''}`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}