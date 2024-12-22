import HeroCard from '@/components/hero-card'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="relative">
      {/* Hero */}
      <section className='min-h-screen sticky top-0 w-full flex items-center'>
        {/* Background Image */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/hero-bg.png"
            alt="Magical forest with mushrooms"
            fill
            priority
            className="object-cover"
            quality={100}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
        {/* Hero Content */}
        <div className="container min-h-screen mx-auto px-4 flex items-center justify-center">
          <HeroCard />
        </div>
      </section>
      {/* Distinguish */}
      <section className='relative min-h-screen'>
        {/* Background Image */}
        <div className="">
          <Image
            src="/distinguish.png"
            alt="Magical forest with mushrooms"
            fill
            priority
            // className="object-cover"
            quality={100}
          />
          <div className="bg-black/20" />
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 flex min-h-[calc(100vh-80px)] items-center justify-center">
          <HeroCard />
        </div>
      </section>
    </section>
  )
}

