"use client"

import PhotoGallery from '@/components/ui/PhotoGallery'

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600">Capturing moments of faith, community, and worship</p>
        </div>
      </section>

      {/* All Photos */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <PhotoGallery 
            title="All Photos"
            maxPhotos={50}
          />
        </div>
      </section>
    </div>
  )
}
