"use client"

import Link from 'next/link'
import PhotoGallery from '@/components/ui/PhotoGallery'
import SeamlessEvents from '@/components/ui/SeamlessEvents'
import HeroBackground from '@/components/ui/HeroBackground'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Amazing Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Hero Background */}
        <HeroBackground className="absolute inset-0 z-0" />
        
        {/* Hero Content - NO BOX, JUST TEXT OVER IMAGE */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight drop-shadow-2xl">
            STIR UP YOUR FAITH
          </h1>
          <p className="text-2xl md:text-3xl text-gray-900 mb-10 leading-relaxed drop-shadow-2xl">
            Welcome to Destiny Church<br />
            <span className="text-blue-600 font-bold">Where Hope, Faith, and Purpose Come Alive</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="bg-white/90 text-gray-800 border-2 border-white px-10 py-5 rounded-xl text-xl font-semibold hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Plan a Visit
            </Link>
            <Link 
              href="/give" 
              className="bg-blue-600/90 text-gray-900 border-2 border-blue-600 px-10 py-5 rounded-xl text-xl font-semibold hover:bg-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Give
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      {/* META UI EXPERT: Seamless Events Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join us for worship, fellowship, and community</p>
          </div>
          <SeamlessEvents />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the warmth and fellowship of our church family. We&apos;re more than just a congregation – we&apos;re a community united in faith, love, and purpose.
            </p>
          </div>
          
          <PhotoGallery 
            folderName="03-community"
            title="Community Highlights"
            maxPhotos={8}
            layout="grid"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* Worship Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Worship & Service</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for powerful worship services, meaningful fellowship, and life-changing experiences that strengthen your faith and connect you with God&apos;s purpose.
            </p>
          </div>
          
          <PhotoGallery 
            folderName="04-worship"
            title="Worship Services"
            maxPhotos={6}
            layout="carousel"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with our church family through exciting events, community outreach, and spiritual growth opportunities.
            </p>
          </div>
          
          <PhotoGallery 
            folderName="02-events"
            title="Recent Events"
            maxPhotos={6}
            layout="grid"
            aspectRatio="landscape"
          />
          
          <div className="text-center mt-12">
            <Link 
              href="/events" 
              className="bg-blue-600 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Experience the love, hope, and purpose that comes from being part of a faith community. 
            We&apos;d love to welcome you to Destiny Church.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Link>
            <Link 
              href="/give" 
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
