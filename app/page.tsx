import type { Metadata } from 'next'
import { site } from '@/lib/config/site.config'

export const metadata: Metadata = {
  title: 'Home',
  description: site.seo?.description,
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to {site.name}
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
          A place where everyone belongs and everyone matters.
        </p>
        <div className="text-center mt-8">
          <a 
            href={`${site.churchCenter.base}${site.churchCenter.planAVisitForm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Plan a Visit
          </a>
        </div>
      </div>
    </div>
  )
}
