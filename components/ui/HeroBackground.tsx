'use client'

import Image from 'next/image'

interface HeroBackgroundProps {
  className?: string
}

export default function HeroBackground({ className = '' }: HeroBackgroundProps) {
  return (
    <div className={`${className} relative w-full h-full overflow-hidden`}>
      {/* DIRECT IMAGE COMPONENT - This WILL work */}
      <Image
        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&h=900&fit=crop"
        alt="Destiny Church Worship Service - Where Hope, Faith, and Purpose Come Alive"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
        onLoad={() => console.log('✅ Hero image loaded successfully!')}
        onError={(e) => {
          console.log('❌ Primary image failed, trying fallback...')
          const target = e.target as HTMLImageElement
          target.src = '/images/hero-worship-service.png'
        }}
      />
      {/* Optimized overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
      
      {/* Animated overlay pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-indigo-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}
