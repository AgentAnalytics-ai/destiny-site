import type { Metadata } from 'next'
import { Prose } from '@/components/ui/prose'
import { site } from '@/lib/config/site.config'
import AboutContent from '@/content/about.mdx'

export const metadata: Metadata = {
  title: 'About',
  description: site.seo.description,
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <Prose>
        <AboutContent />
      </Prose>
    </div>
  )
}
