import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Destiny Church',
  description: 'A place where everyone belongs.',
}

export default function HomePage() {
  return (
    <div style={{ padding: '20px', backgroundColor: 'blue', color: 'white', fontSize: '20px' }}>
      <h2>HOMEPAGE IS WORKING!</h2>
      <p>If you see this, the site is working!</p>
      <p>Time: {new Date().toISOString()}</p>
    </div>
  )
}
