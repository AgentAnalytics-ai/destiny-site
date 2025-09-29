'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo - Fixed path */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/Logo-Destiny-RGB.png"
                alt="Destiny Church"
                width={200}
                height={80}
                className="h-20 w-auto"
                priority
                onError={(e) => {
                  console.log('Logo failed to load, trying fallback...')
                  const target = e.target as HTMLImageElement
                  target.src = '/images/logo/destiny-logo.png'
                }}
              />
              <span className="text-4xl font-bold text-blue-600 hidden">DESTINY</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Events
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Gallery
            </Link>
            <Link href="/give" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Give
            </Link>
            <Link href="/groups" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Groups
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Events
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Gallery
              </Link>
              <Link href="/give" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Give
              </Link>
              <Link href="/groups" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Groups
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}