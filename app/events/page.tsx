import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { ArrowRight } from 'lucide-react'
import { cc } from '@/lib/services/churchCenter'

export const metadata: Metadata = {
  title: 'Events | Destiny Christian Center',
  description: 'Join us for upcoming events and activities.',
}

export default function EventsPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Events
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              See what&apos;s happening this month.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground">
              Join us for these exciting opportunities
            </p>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href={cc.events()} target="_blank" rel="noopener noreferrer">
                View Events on Church Center
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
