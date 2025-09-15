"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils' // Assuming you have a cn utility for class merging

export default function Navigation() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/groups', label: 'Groups' },
    { href: '/messages', label: 'Messages' },
    { href: '/live', label: 'Live' },
    { href: '/events', label: 'Events' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
    { href: '/giving', label: 'Giving' }, // This will redirect to FastAPI
  ]

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* You can add an actual logo image here */}
          <span className="text-2xl font-bold text-primary">DESTINYOKC.COM</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-lg font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation (Hamburger icon or similar can be added here) */}
        <div className="md:hidden">
          {/* Placeholder for mobile menu icon */}
          <button className="text-foreground hover:text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
    </header>
  )
}
