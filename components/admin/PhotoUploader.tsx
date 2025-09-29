'use client'

import { useState } from 'react'
import Image from 'next/image'

interface UploadedPhoto {
  id: string
  name: string
  webViewLink: string
  thumbnailLink: string
  mimeType: string
  folder: string
}

interface PhotoUploaderProps {
  folder: string
  onUploadComplete?: (photo: UploadedPhoto) => void
}

export default function PhotoUploader({ folder, onUploadComplete }: PhotoUploaderProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadedPhotos, setUploadedPhotos] = useState<UploadedPhoto[]>([])

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    setUploading(true)
    
    for (const file of Array.from(files)) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('folder', folder)

      try {
        const response = await fetch('/api/photos/upload', {
          method: 'POST',
          body: formData,
        })

        const result = await response.json()
        
        if (result.success) {
          setUploadedPhotos(prev => [...prev, result.file])
          onUploadComplete?.(result.file)
        }
      } catch (error) {
        console.error('Upload error:', error)
      }
    }
    
    setUploading(false)
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Upload Photos to {folder}</h3>
      
      <div className="mb-4">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileUpload}
          disabled={uploading}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {uploading && (
        <div className="text-blue-600 mb-4">Uploading photos...</div>
      )}

      {uploadedPhotos.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {uploadedPhotos.map((photo) => (
            <div key={photo.id} className="relative">
              <Image
                src={photo.webViewLink}
                alt={photo.name}
                width={100}
                height={96}
                className="w-full h-24 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg">
                {photo.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
