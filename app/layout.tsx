import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/ui/navigation' // Corrected import

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Destiny Church - Oklahoma City',
  description: 'A vibrant church community in Oklahoma City.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation /> {/* Use the Navigation component */}
        <main>{children}</main>
      </body>
    </html>
  )
}
