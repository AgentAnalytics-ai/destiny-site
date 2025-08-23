import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { site } from '@/lib/config/site.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: { 
    default: site.name, 
    template: `%s | ${site.name}` 
  },
  description: 'A place where everyone belongs and everyone matters.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{ 
          borderBottom: '1px solid #e5e7eb', 
          backgroundColor: 'white',
          padding: '16px 0'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>
                {site.name}
              </div>
              <nav style={{ display: 'flex', gap: '32px' }}>
                <Link href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Home</Link>
                <Link href="/visit" style={{ color: '#6b7280', textDecoration: 'none' }}>Visit</Link>
                <Link href="/about" style={{ color: '#6b7280', textDecoration: 'none' }}>About</Link>
              </nav>
            </div>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer style={{ 
          borderTop: '1px solid #e5e7eb', 
          backgroundColor: '#f9fafb',
          padding: '40px 0',
          marginTop: 'auto'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px', textAlign: 'center', color: '#6b7280' }}>
            © 2025 {site.name}. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
