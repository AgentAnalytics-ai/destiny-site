'use client'

interface HeroBackgroundProps {
  className?: string
}

export default function HeroBackground({ className = '' }: HeroBackgroundProps) {
  return (
    <div 
      className={`${className} relative w-full h-full overflow-hidden`}
      style={{
        backgroundImage: `url('/images/hero-worship-service.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  )
}
