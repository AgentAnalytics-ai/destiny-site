import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Messages | Destiny Christian Center',
  description: 'Watch sermons and listen to messages from Destiny Church.',
}

export default function MessagesPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Messages
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Watch sermons and listen to messages from Destiny Church
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-primary mb-3">
                  Latest Sermons
                </CardTitle>
                <p className="text-muted-foreground mb-4">
                  Watch our most recent Sunday messages
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/messages/sermons">
                    Watch Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-primary mb-3">
                  Podcast
                </CardTitle>
                <p className="text-muted-foreground mb-4">
                  Listen to our messages on your favorite podcast platform
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/messages/podcast">
                    Listen Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-primary mb-3">
                  Live Notes
                </CardTitle>
                <p className="text-muted-foreground mb-4">
                  Take notes during our live services
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/messages/live-notes">
                    Open Notes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
