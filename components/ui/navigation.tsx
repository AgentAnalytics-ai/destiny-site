"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { site } from '@/lib/config/site.config'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{site.name}</span>
              <Image 
                src="/images/logo/logo-primary.svg.png" 
                alt="Destiny Christian Center"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex lg:gap-x-8">
            {site.nav.main.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-primary hover:text-secondary transition-colors uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors uppercase tracking-wide"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button 
              asChild 
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
            >
              <Link href="/giving">
                GIVING
              </Link>
            </Button>
          </div>

          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {site.nav.main.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-semibold text-primary hover:text-secondary hover:bg-gray-50 rounded-md uppercase tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold">
                  <Link 
                    href="/giving"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    GIVING
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}