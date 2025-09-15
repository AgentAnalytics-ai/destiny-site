"use client"

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Remove the header section - let layout.tsx handle navigation */}
      
      {/* Hero Section - Match Church Center exactly */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-black mb-4">STIR UP YOUR FAITH</h1>
          <p className="text-xl text-black mb-2">Welcome to Destiny</p>
          <p className="text-lg text-black mb-8">Where Hope, Faith, and Purpose Come Alive</p>
          
          {/* Plan a Visit Button - Match Church Center exactly */}
          <Link 
            href="/visit" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-700 transition-colors"
          >
            Plan a Visit
          </Link>
        </div>
      </section>

      {/* Video Section - Match Church Center */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">DISCIPLESHIP</h2>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
