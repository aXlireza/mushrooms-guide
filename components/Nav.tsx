// 'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"

interface MenuItem {
  href: string
  label: string
}

export default function Nav({
  vertical=false
}) {
  const menuItems: MenuItem[] = [
    { href: '/', label: 'خونه' },
    { href: '/identify', label: 'شناسایی قارچها' },
    { href: '/access', label: 'دسترسی‌ها' },
    { href: '/about', label: 'درباره من' },
  ]

  return <nav className="rounded-full px-1 py-1">
    <ul className={`flex ${vertical ? 'flex-col' : 'flex-row'}`}>
      {menuItems.map(item => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={cn(
              "text-sm hover:bg-primary/10 transition-colors rounded-full px-4 py-2 block",
              "text-white font-medium"
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
}