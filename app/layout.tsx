import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Destiny Church',
  description: 'A place where everyone belongs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Destiny Church</title>
      </head>
      <body>
        <div style={{ padding: '20px', backgroundColor: 'red', color: 'white', fontSize: '24px' }}>
          <h1>LAYOUT IS WORKING!</h1>
          {children}
        </div>
      </body>
    </html>
  )
}
