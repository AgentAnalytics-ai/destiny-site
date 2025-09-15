import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/ui/navigation'
import { SiteFooter } from '@/components/ui/footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const dmSerifDisplay = DM_Serif_Display({ 
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
})

export const metadata: Metadata = {
  title: 'Destiny Christian Center',
  description: 'Find your next. Join us every Sunday at 10:30 AM.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={${inter.variable} }>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
