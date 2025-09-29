"use client"

import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo - Test with direct URL */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/destiny-logo.png"
                alt="Destiny Church"
                width={200}
                height={80}
                className="h-20 w-auto"
                priority
                onError={(e) => {
                  console.log('Logo failed to load, trying fallback...')
                  const target = e.target as HTMLImageElement
                  target.src = '/images/logo/Destiny logo.jpg'
                }}
              />
              <span className="text-4xl font-bold text-blue-600 hidden">DESTINY</span>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/events" className="text-gray-900 hover:text-blue-600 font-medium">Events</Link>
            <Link href="/gallery" className="text-gray-900 hover:text-blue-600 font-medium">Gallery</Link>
            <Link href="/giving" className="text-gray-900 hover:text-blue-600 font-medium">Give</Link>
            <Link href="/groups" className="text-gray-900 hover:text-blue-600 font-medium">Groups</Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-600 font-medium">Contact</Link>
          </nav>
        </div>
      </div>
    </nav>
  )
}
