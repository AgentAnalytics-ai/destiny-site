import type { Metadata } from 'next'
import { site } from '@/lib/config/site.config'

export const metadata: Metadata = {
  title: 'Home',
  description: site.seo?.description,
}

export default function HomePage() {
  return (
    <div style={{ padding: '20px', backgroundColor: 'blue', color: 'white' }}>
      <h1>HOMEPAGE IS WORKING</h1>
      <p>If you see this, the site is working!</p>
    </div>
  )
}
