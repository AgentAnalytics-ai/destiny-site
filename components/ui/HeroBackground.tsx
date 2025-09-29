'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeroBackgroundProps {
  className?: string
}

export default function HeroBackground({ className = '' }: HeroBackgroundProps) {
  const [currentImage, setCurrentImage] = useState(0)
  
  // Your real Destiny Church photos for amazing backgrounds
  const backgroundImages = [
    '/uploads/01-hero-images/JLA03436 (1).jpg',
    '/uploads/02-events/Untitled-1555.jpg',
    '/uploads/03-community/JLA02845 (1).jpg',
    '/uploads/05-testimonials/JLA03494.jpg',
    '/uploads/06-marketing/JLA03275.jpg'
  ]

  // Rotate through images every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Dynamic Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Destiny Church Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
          </div>
        ))}
      </div>
      
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
