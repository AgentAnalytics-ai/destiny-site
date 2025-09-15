"use client"

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Try multiple approaches */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/images/logo/destiny-logo.png"
                alt="Destiny Church"
                className="h-16 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.log('Failed to load:', target.src);
                  
                  // Try different file names
                  if (target.src.includes('destiny-logo.png')) {
                    target.src = '/images/logo/Logo-Destiny-RGB.png';
                  } else if (target.src.includes('Logo-Destiny-RGB.png')) {
                    target.src = '/images/logo/logo-primary.svg.png';
                  } else {
                    // Show text fallback
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }
                }}
              />
              <span className="text-3xl font-bold text-blue-600 hidden">DESTINY</span>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/giving" className="text-gray-900 hover:text-blue-600 font-medium">Give</Link>
            <Link href="/groups" className="text-gray-900 hover:text-blue-600 font-medium">Groups</Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-600 font-medium">Contact</Link>
          </nav>
        </div>
      </div>
    </nav>
  )
}
