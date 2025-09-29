'use client'

import { useState, useEffect } from 'react'

interface Photo {
  id: string
  name: string
  webViewLink: string
  thumbnailLink: string
  mimeType: string
  isUploaded?: boolean
}

interface FolderData {
  folderName: string
  folderId: string
  photos: Photo[]
}

interface HeroBackgroundProps {
  className?: string
}

export default function HeroBackground({ className = '' }: HeroBackgroundProps) {
  const [heroPhotos, setHeroPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchHeroPhotos = async () => {
      try {
        const response = await fetch('/api/photos')
        const data = await response.json()

        if (data.success && data.folders) {
          const heroFolder = data.folders.find((folder: FolderData) => folder.folderName === '01-hero-images')
          if (heroFolder && heroFolder.photos.length > 0) {
            setHeroPhotos(heroFolder.photos)
            console.log(`✅ Loaded ${heroFolder.photos.length} hero photos.`)
          } else {
            console.log('No hero images found in 01-hero-images folder. Using fallback.')
            // Fallback to a default Unsplash image if no uploaded hero images
            setHeroPhotos([{
              id: 'fallback-hero',
              name: 'Default Hero Background',
              webViewLink: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&h=900&fit=crop',
              thumbnailLink: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=450&fit=crop',
              mimeType: 'image/jpeg'
            }])
          }
        } else {
          setError('Failed to load photos from API.')
          console.error('Failed to load photos from API:', data.error)
        }
      } catch (err) {
        setError('Error fetching hero photos.')
        console.error('Error fetching hero photos:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchHeroPhotos()
  }, [])

  // Note: Image rotation removed for simplicity - using single hero image

  if (loading) {
    return <div className={`${className} bg-gray-800 animate-pulse`}></div>
  }

  if (error || heroPhotos.length === 0) {
    return <div className={`${className} bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center text-white`}>
      <p>Error loading background photos.</p>
    </div>
  }

  return (
    <div className={`${className} relative w-full h-full overflow-hidden`}>
      {/* Direct image path for reliability */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/uploads/01-hero-images/hero-worship-service.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
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
