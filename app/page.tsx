"use client"

import Link from 'next/link'
import PhotoGallery from '@/components/ui/PhotoGallery'
import { getHeroImages, getCommunityHighlights, getWorshipPhotos, getTestimonials } from '@/lib/config/photo-sections.config'

export default function HomePage() {
  const heroConfig = getHeroImages()
  const communityConfig = getCommunityHighlights()
  const worshipConfig = getWorshipPhotos()
  const testimonialsConfig = getTestimonials()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Professional Background */}
      <section className="relative py-24 text-center overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
        {/* Hero Images Background */}
        <div className="absolute inset-0 z-0">
          <PhotoGallery 
            folderName={heroConfig.folderName}
            layout={heroConfig.layout}
            aspectRatio={heroConfig.aspectRatio}
            maxPhotos={heroConfig.maxPhotos}
            showTitles={heroConfig.showTitles}
          />
        </div>
        
        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-white/20">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              STIR UP YOUR FAITH
            </h1>
            <p className="text-2xl text-gray-700 mb-4 font-medium">Welcome to Destiny</p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Where Hope, Faith, and Purpose Come Alive
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/visit" 
                className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg border border-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Plan a Visit
              </Link>
              <Link 
                href="/events" 
                className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{communityConfig.displayName}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{communityConfig.description}</p>
          </div>
          <PhotoGallery 
            folderName={communityConfig.folderName}
            layout={communityConfig.layout}
            aspectRatio={communityConfig.aspectRatio}
            maxPhotos={communityConfig.maxPhotos}
            showTitles={communityConfig.showTitles}
          />
        </div>
      </section>

      {/* Worship Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{worshipConfig.displayName}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{worshipConfig.description}</p>
          </div>
          <PhotoGallery 
            folderName={worshipConfig.folderName}
            layout={worshipConfig.layout}
            aspectRatio={worshipConfig.aspectRatio}
            maxPhotos={worshipConfig.maxPhotos}
            showTitles={worshipConfig.showTitles}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{testimonialsConfig.displayName}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{testimonialsConfig.description}</p>
          </div>
          <PhotoGallery 
            folderName={testimonialsConfig.folderName}
            layout={testimonialsConfig.layout}
            aspectRatio={testimonialsConfig.aspectRatio}
            maxPhotos={testimonialsConfig.maxPhotos}
            showTitles={testimonialsConfig.showTitles}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Experience the love, hope, and purpose that Destiny Church offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/visit" 
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Plan Your Visit
            </Link>
            <Link 
              href="/gallery" 
              className="inline-block bg-transparent text-white px-10 py-4 rounded-xl font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
