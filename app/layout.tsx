import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Destiny Church - A place where everyone belongs',
  description: 'A place where everyone belongs and everyone matters. Join us for worship, community, and growth.',
  keywords: 'church, Oklahoma City, worship, community, Destiny Church',
  authors: [{ name: 'Destiny Church' }],
  openGraph: {
    title: 'Destiny Church',
    description: 'A place where everyone belongs and everyone matters.',
    url: 'https://www.destinyokc.com',
    siteName: 'Destiny Church',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Destiny Church',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Destiny Church',
    description: 'A place where everyone belongs and everyone matters.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
