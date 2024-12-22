'use client'

import { SunIcon } from 'lucide-react'

interface HeroCardProps {
  className?: string
}

export default function HeroCard({ className }: HeroCardProps) {
  return (
    <div className="flex flex-col items-end gap-4 bg-card/10 backdrop-blur-md rounded-xl p-6 max-w-md w-full border border-white/20">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-medium text-white">شناسایی قارچ هوشمند</h2>
        <SunIcon className="w-6 h-6 text-coral-500" />
      </div>
      <p className="text-white/80 text-right text-sm leading-relaxed">
        به کمک هوش مصنوعی و پردازش تصویر، قارچ‌ها را شناسایی کنید و از اطلاعات دسته‌بندی شده استفاده نمایید.
      </p>
      <button 
        className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-lg transition-colors"
        onClick={() => console.log('Sign up clicked')}
        type="button"
      >
        ثبت نام
      </button>
    </div>
  )
}

