import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { ArrowRight, Heart } from 'lucide-react'
import { site } from '@/lib/config/site.config'
import { cc } from '@/lib/services/churchCenter'

export const metadata: Metadata = {
  title: 'Give',
  description: site.seo.description,
}

export default function GivingPage() {
  return (
    <Container className="py-12">
      <div className="text-center space-y-8 mb-16">
        <h1 className="text-4xl font-bold">Give</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your generosity fuels ministry at Destiny.
        </p>
      </div>
      
      <div className="text-center">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href={cc.giving()} target="_blank" rel="noopener noreferrer">
            Give through Church Center
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Container>
  )
}