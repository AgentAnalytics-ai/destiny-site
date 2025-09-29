"use client"

import Link from 'next/link'
import PhotoGallery from '@/components/ui/PhotoGallery'

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Professional Gallery Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore the vibrant life of our church community through these beautiful moments. 
            From worship services to community events, see how God is moving in our midst.
          </p>
        </div>
      </section>

      {/* Hero Images Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoGallery 
            folderName="01-hero-images"
            title="Welcome to Destiny Church"
            maxPhotos={6}
            layout="grid"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoGallery 
            folderName="02-events"
            title="Church Events & Activities"
            maxPhotos={12}
            layout="masonry"
            aspectRatio="auto"
          />
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoGallery 
            folderName="03-community"
            title="Community & Fellowship"
            maxPhotos={12}
            layout="grid"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* Worship Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoGallery 
            folderName="04-worship"
            title="Worship & Services"
            maxPhotos={12}
            layout="carousel"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoGallery 
            folderName="05-testimonials"
            title="Life Change Stories"
            maxPhotos={8}
            layout="grid"
            aspectRatio="portrait"
          />
        </div>
      </section>

      {/* Marketing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoGallery 
            folderName="06-marketing"
            title="Church Materials & Resources"
            maxPhotos={6}
            layout="grid"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            These photos capture just a glimpse of the amazing community at Destiny Church. 
            Come and be part of our story of faith, hope, and love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Plan Your Visit
            </Link>
            <Link 
              href="/events" 
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Join an Event
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}