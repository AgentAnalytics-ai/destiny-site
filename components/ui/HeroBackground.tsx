'use client'

interface HeroBackgroundProps {
  className?: string
}

export default function HeroBackground({ className = '' }: HeroBackgroundProps) {
  return (
    <div 
      className={`${className} relative w-full h-full overflow-hidden`}
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&h=900&fit=crop')`,
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