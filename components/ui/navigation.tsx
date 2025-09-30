'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Professional Church Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="/images/logo/destiny-logo.png"
                  alt="Destiny Church - Where Hope, Faith, and Purpose Come Alive"
                  width={80}
                  height={80}
                  className="h-16 w-16 transition-transform duration-300 group-hover:scale-105"
                  priority
                  onError={(e) => {
                    console.log('D logo failed to load, using text fallback...')
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = '<span class="text-2xl font-bold text-blue-600">D</span>'
                    }
                  }}
                />
                {/* Clean D logo only */}
              </div>
            </Link>
          </div>
          
          {/* Professional Church Navigation */}
          <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                      Home
                    </Link>
                    <Link href="/events" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                      Events
                    </Link>
                    <Link href="/give" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                      Give
                    </Link>
            <Link href="/groups" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Groups
            </Link>
                    <Link href="/live" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                      Live
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                      Contact
                    </Link>
          </div>

          {/* Professional Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Professional Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Home
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Events
              </Link>
              <Link href="/give" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Give
              </Link>
              <Link href="/groups" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Groups
              </Link>
              <Link href="/live" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Live
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}