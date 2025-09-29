'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import PhotoUploader from '@/components/admin/PhotoUploader'

interface Photo {
  id: string
  name: string
  webViewLink: string
  thumbnailLink: string
  mimeType: string
  folder?: string
}

export default function AdminPhotosPage() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedFolder, setSelectedFolder] = useState('01-hero-images')

  const folders = [
    '01-hero-images',
    '02-events', 
    '03-community',
    '04-worship',
    '05-testimonials',
    '06-marketing',
    '07-videos'
  ]

  useEffect(() => {
    fetchPhotos()
  }, [])

  const fetchPhotos = async () => {
    try {
      const response = await fetch('/api/photos')
      const data = await response.json()
      
      if (data.success) {
        // Flatten all photos from all folders
        const allPhotos = data.folders.flatMap((folder: { folderName: string; photos: Photo[] }) => 
          folder.photos.map((photo: Photo) => ({
            ...photo,
            folder: folder.folderName
          }))
        )
        setPhotos(allPhotos)
      }
    } catch (error) {
      console.error('Error fetching photos:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleUploadComplete = (photo: Photo) => {
    setPhotos(prev => [...prev, { ...photo, folder: selectedFolder }])
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">Loading photos...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Photo Management</h1>
        
        {/* Folder Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Folder:
          </label>
          <select
            value={selectedFolder}
            onChange={(e) => setSelectedFolder(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          >
            {folders.map(folder => (
              <option key={folder} value={folder}>
                {folder.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </option>
            ))}
          </select>
        </div>

        {/* Photo Uploader */}
        <div className="mb-8">
          <PhotoUploader 
            folder={selectedFolder} 
            onUploadComplete={handleUploadComplete}
          />
        </div>

        {/* Current Photos */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Current Photos</h2>
          
          {photos.length === 0 ? (
            <div className="text-gray-500 text-center py-8">
              No photos uploaded yet. Use the uploader above to add photos.
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {photos.map((photo) => (
                <div key={photo.id} className="relative group">
                  <Image
                    src={photo.thumbnailLink}
                    alt={photo.name}
                    width={200}
                    height={128}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 text-white text-center p-2">
                      <div className="text-sm font-medium">{photo.name}</div>
                      <div className="text-xs">{photo.folder}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
