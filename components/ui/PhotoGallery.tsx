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
  aspectRatio = 'auto'
}: PhotoGalleryProps) {
  const [folders, setFolders] = useState<FolderData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/api/photos')
        const data = await response.json()
        
        if (data.success) {
          setFolders(data.folders)
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

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Loading photos...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    )
  }

  // Filter folders if specific folder name is provided
  const displayFolders = folderName 
    ? folders.filter(folder => folder.folderName.toLowerCase().includes(folderName.toLowerCase()))
    : folders

  if (displayFolders.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No photos found</p>
      </div>
    )
  }

  return (
    <div className="py-12">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          {title}
        </h2>
      )}
      
      {displayFolders.map((folder) => (
        <div key={folder.folderId} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 capitalize">
            {folder.folderName.replace(/[0-9]-/g, '').replace(/-/g, ' ')}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {folder.photos.slice(0, maxPhotos).map((photo) => (
              <div key={photo.id} className="relative group overflow-hidden rounded-lg shadow-md">
                <Image
                  src={photo.thumbnailLink || photo.webViewLink}
                  alt={photo.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm truncate">{photo.name}</p>
                </div>
              </div>
            ))}
          </div>
          
          {folder.photos.length > maxPhotos && (
            <div className="text-center mt-4">
              <p className="text-gray-600">
                Showing {maxPhotos} of {folder.photos.length} photos
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
