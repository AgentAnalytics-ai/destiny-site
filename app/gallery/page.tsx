"use client"

import PhotoGallery from '@/components/ui/PhotoGallery'
import { getPhotoSectionsForPage } from '@/lib/config/photo-sections.config'

export default function GalleryPage() {
  const gallerySections = getPhotoSectionsForPage('gallery')

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Photo Gallery</h1>
          <p className="text-2xl text-gray-600 mb-8">Capturing moments of faith, community, and worship</p>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <p className="text-lg text-gray-700">
              Explore our collection of photos showcasing the vibrant life and community at Destiny Church. 
              From worship services to community events, see how God is moving in our midst.
            </p>
          </div>
        </div>
      </section>

      {/* Organized Photo Sections */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {gallerySections.map((section) => (
            <section key={section.folderName} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{section.displayName}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{section.description}</p>
              </div>
              
              <PhotoGallery 
                folderName={section.folderName}
                layout={section.layout}
                aspectRatio={section.aspectRatio}
                maxPhotos={section.maxPhotos}
                showTitles={section.showTitles}
              />
            </section>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Want to See More?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Join us for worship and community events to create new memories together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/events" 
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Events
            </a>
            <a 
              href="/visit" 
              className="inline-block bg-transparent text-white px-10 py-4 rounded-xl font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Plan a Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
