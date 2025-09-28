"use client"

import Link from 'next/link'
import PhotoGallery from '@/components/ui/PhotoGallery'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Dynamic Background */}
      <section className="relative py-20 text-center overflow-hidden">
        {/* Hero Images Background */}
        <div className="absolute inset-0 z-0">
          <PhotoGallery 
            folderName="01-hero-images"
            maxPhotos={2}
          />
        </div>
        
        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h1 className="text-5xl font-bold text-black mb-4">STIR UP YOUR FAITH</h1>
            <p className="text-xl text-black mb-2">Welcome to Destiny</p>
            <p className="text-lg text-black mb-8">Where Hope, Faith, and Purpose Come Alive</p>
            
            <Link 
              href="/visit" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-700 transition-colors"
            >
              Plan a Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Community</h2>
          <PhotoGallery 
            folderName="03-community"
            maxPhotos={8}
          />
        </div>
      </section>

      {/* Worship Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Worship With Us</h2>
          <PhotoGallery 
            folderName="04-worship"
            maxPhotos={12}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Stories of Hope</h2>
          <PhotoGallery 
            folderName="05-testimonials"
            maxPhotos={4}
          />
        </div>
      </section>
    </div>
  )
}
