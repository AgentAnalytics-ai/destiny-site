'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Photo {
  id: string
  name: string
  webViewLink: string
  thumbnailLink?: string
  mimeType: string
}

interface FolderData {
  folderName: string
  folderId: string
  photos: Photo[]
}

interface PhotoGalleryProps {
  folderName?: string
  title?: string
  maxPhotos?: number
  layout?: 'grid' | 'hero' | 'carousel' | 'masonry'
  showTitles?: boolean
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'auto'
}

export default function PhotoGallery({ 
  folderName, 
  title,
  maxPhotos = 12,
  layout = 'grid',
  showTitles = false,
  aspectRatio = 'landscape'
}: PhotoGalleryProps) {
  const [folders, setFolders] = useState<FolderData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // ENHANCED: Use the new photo system with uploaded photos
        const response = await fetch('/api/photos')
        const data = await response.json()
        
        if (data.success) {
          setFolders(data.folders)
          console.log('✅ Professional church photos loaded successfully')
        } else {
          setError('Failed to load photos')
        }
      } catch (err) {
        setError('Error loading photos')
        console.error('Error loading photos:', err)
      } finally {
        setLoading(false)
      }
    }
    
    fetchPhotos()
  }, [])

  const getGridClasses = () => {
    switch (layout) {
      case 'hero':
        return 'grid grid-cols-1 gap-8'
      case 'carousel':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
      case 'masonry':
        return 'columns-1 md:columns-2 lg:columns-3 gap-6'
      default:
        return 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
    }
  }

  const getImageClasses = () => {
    switch (aspectRatio) {
      case 'square':
        return 'w-full aspect-square object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105'
      case 'landscape':
        return 'w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105'
      case 'portrait':
        return 'w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105'
      default:
        return 'w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105'
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <div className="text-gray-600 font-medium text-lg">Loading professional photos...</div>
          <div className="text-gray-400 text-sm mt-2">Preparing your church gallery</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
          <div className="text-red-600 font-semibold text-lg mb-2">Photo Loading Error</div>
          <div className="text-red-500 text-sm mb-4">{error}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Retry Loading
          </button>
        </div>
      </div>
    )
  }

  // Filter photos by folder if specified
  const targetFolder = folderName 
    ? folders.find(f => f.folderName === folderName)
    : folders[0] // Default to first folder

  if (!targetFolder || targetFolder.photos.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-12 max-w-lg mx-auto">
          <div className="text-blue-600 font-semibold text-xl mb-3">Photos Coming Soon</div>
          <div className="text-blue-500 text-sm leading-relaxed">
            We&apos;re setting up our professional photo gallery. Check back soon to see our amazing church community in action!
          </div>
          <div className="mt-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              Gallery in Progress
            </div>
          </div>
        </div>
      </div>
    )
  }

  const displayPhotos = targetFolder.photos.slice(0, maxPhotos)

  return (
    <div className="w-full">
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <div className="text-gray-600 mt-4 text-lg">Capturing our faith community in action</div>
        </div>
      )}
      
      <div className={getGridClasses()}>
        {displayPhotos.map((photo) => (
          <div key={photo.id} className="group relative overflow-hidden">
            <div className="relative">
              <Image
                src={photo.thumbnailLink || photo.webViewLink}
                alt={photo.name}
                width={400}
                height={300}
                className={getImageClasses()}
                loading="lazy"
              />
              {showTitles && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <div className="text-white font-semibold text-lg">{photo.name}</div>
                  <div className="text-white/80 text-sm mt-1">Destiny Church</div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>
          </div>
        ))}
      </div>
      
      {displayPhotos.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-500 text-lg">No photos available in this section.</div>
        </div>
      )}
    </div>
  )
}