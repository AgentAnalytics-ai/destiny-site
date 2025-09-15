"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold text-primary">DESTINYOKC.COM</span>
            </Link>
          </div>

          {/* Desktop Navigation - FIXED: Add proper spacing */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-primary hover:text-primary/80 transition-colors font-medium">
              HOME
            </Link>
            <Link href="/about" className="text-primary hover:text-primary/80 transition-colors font-medium">
              ABOUT
            </Link>
            <Link href="/groups" className="text-primary hover:text-primary/80 transition-colors font-medium">
              GROUPS
            </Link>
            <Link href="/messages" className="text-primary hover:text-primary/80 transition-colors font-medium">
              MESSAGES
            </Link>
            <Link href="/live" className="text-primary hover:text-primary/80 transition-colors font-medium">
              LIVE
            </Link>
            <Link href="/events" className="text-primary hover:text-primary/80 transition-colors font-medium">
              EVENTS
            </Link>
            <Link href="/resource" className="text-primary hover:text-primary/80 transition-colors font-medium">
              RESOURCE
            </Link>
            <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors font-medium">
              CONTACT
            </Link>
          </div>

          {/* CTA Button - Keep existing styling */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/giving" 
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200"
            >
              GIVING
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary hover:text-primary/80 transition-colors"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link href="/" className="block px-3 py-2 text-primary hover:text-primary/80 transition-colors font-medium">
                HOME
              </Link>
              <Link href="/about" className="block px-3 py-2 text-primary hover:text-primary/80 transition-colors font-medium">
                ABOUT
              </Link>
              <Link href="/groups" className="block px-3 py-2 text-primary hover:text-primary/80 transition-colors font-medium">
                GROUPS
              </Link>
              <Link href="/messages" className="block px-3 py-2 text-primary hover:text-primary/80 transition-colors font-medium">
                MESSAGES
              </Link>
              <Link href="/live" className="block px-3 py-2 text-primary hover:text-primary/80 transition-colors font-medium">
                LIVE
              </Link>
              <Link href="/events" className="block px-3 py-2 text-primary hover:text-primary/80 transition-colors font-medium">
                EVENTS
              </Link>
              <Link href="/resource" className="block px-3 py-2 text-primary hover:text-primary/80 transition-colors font-medium">
                RESOURCE
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-primary hover:text-primary/80 transition-colors font-medium">
                CONTACT
              </Link>
              <Link href="/giving" className="block px-3 py-2 bg-primary text-white rounded-lg font-semibold text-center">
                GIVING
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
