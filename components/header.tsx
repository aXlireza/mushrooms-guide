'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface MenuItem {
  href: string
  label: string
}

export default function Header(): JSX.Element {
  const menuItems: MenuItem[] = [
    { href: '/', label: 'خونه' },
    { href: '/identify', label: 'شناسایی قارچها' },
    { href: '/access', label: 'دسترسی‌ها' },
    { href: '/about', label: 'درباره من' },
  ]

  return (
    <header className="w-full p-4 flex justify-between items-center">
      <nav className="bg-white/30 backdrop-blur-sm rounded-full px-1 py-1 border border-black">
        <ul className="flex">
          {menuItems.map((item, index) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={cn(
                  "text-sm hover:bg-primary/10 transition-colors rounded-full px-4 py-2 block",
                  "font-medium text-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        href="/"
        className="bg-white/70 text-primary px-6 py-2 rounded-full hover:bg-white/80 transition-colors"
      >
        Shroom Yab
      </Link>
    </header>
  )
}

