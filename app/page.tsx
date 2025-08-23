import type { Metadata } from 'next'
import { site } from '@/lib/config/site.config'

export const metadata: Metadata = {
  title: 'Home',
  description: site.seo?.description,
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 16px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '32px', color: '#1f2937' }}>
          Welcome to {site.name}
        </h1>
        <p style={{ fontSize: '1.25rem', textAlign: 'center', color: '#6b7280', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          A place where everyone belongs and everyone matters.
        </p>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a 
            href={`${site.churchCenter.base}${site.churchCenter.planAVisitForm}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: '500'
            }}
          >
            Plan a Visit
          </a>
        </div>
      </div>
    </div>
  )
}
