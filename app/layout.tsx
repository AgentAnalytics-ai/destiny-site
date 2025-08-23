import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { site } from '@/lib/config/site.config'
import { SiteHeader } from '@/components/ui/navigation'
import { SiteFooter } from '@/components/ui/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: { 
    default: site.name, 
    template: site.seo?.titleTemplate ?? `%s | ${site.name}` 
  },
  description: site.seo?.description ?? 'A place where everyone belongs and everyone matters.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.SITE_URL ?? 'http://localhost:3000',
    title: site.name,
    description: site.seo?.description ?? 'A place where everyone belongs and everyone matters.',
    siteName: site.name,
    images: site.seo?.ogImage ? [site.seo.ogImage] : [],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.seo?.description ?? 'A place where everyone belongs and everyone matters.',
    // Remove the handle property - it's not supported in Next.js 15
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
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
