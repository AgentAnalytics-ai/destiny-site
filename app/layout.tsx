import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Destiny Church',
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
        <div style={{ padding: '20px', backgroundColor: 'red', color: 'white' }}>
          <h1>LAYOUT IS WORKING</h1>
          {children}
        </div>
      </body>
    </html>
  )
}
