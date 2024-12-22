

import Link from 'next/link'
import HeaderSheet from './Header-Sheet'
import Nav from './Nav'

export default function Header(): JSX.Element {


  return (
    <header className="fixed z-50 w-full p-4 flex justify-between items-center">
      <div className='md:hidden'>
        <HeaderSheet />
      </div>
      {/* <SidebarTrigger /> */}
      <section className='hidden md:block backdrop-blur-sm bg-white/30 border-2 border-black rounded-full'>
        <Nav />
      </section>
      <Link
        href="/"
        className="bg-white/70 text-primary px-6 py-2 rounded-full hover:bg-white/80 transition-colors"
      >
        Shroom Yab
      </Link>
    </header>
  )
}

