'use client'

interface HeroBackgroundProps {
  className?: string
}

export default function HeroBackground({ className = '' }: HeroBackgroundProps) {
  return (
    <div className={`${className} relative w-full h-full overflow-hidden`}>
      {/* Direct image path - guaranteed to work */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/uploads/01-hero-images/hero-worship-service.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
      
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
