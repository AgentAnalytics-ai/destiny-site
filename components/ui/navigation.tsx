"use client"

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24"> {/* Increased from h-20 to h-24 */}
          {/* Logo - Use regular img tag */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/images/logo/destiny-logo.png"
                alt="Destiny Church"
                className="h-16 w-auto" {/* Increased from h-12 to h-16 */}
                onError={(e) => {
                  // Fallback to text if image fails
                  e.currentTarget.style.display = 'none'
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                  if (nextElement) {
                    nextElement.style.display = 'block'
                  }
                }}
              />
              <span className="text-3xl font-bold text-blue-600 hidden">DESTINY</span> {/* Increased from text-2xl to text-3xl */}
            </Link>
          </div>
          
          {/* Navigation Links - Clean and simple */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/giving" className="text-gray-900 hover:text-blue-600 font-medium">Give</Link>
            <Link href="/groups" className="text-gray-900 hover:text-blue-600 font-medium">Groups</Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-600 font-medium">Contact</Link>
          </nav>
          
          {/* REMOVED: The 3 icons (bell, chat, user avatar) */}
        </div>
      </div>
    </nav>
  )
}
