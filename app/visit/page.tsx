import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { site } from '@/lib/config/site.config'
import { MapPin, Clock, Car, Users, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plan a Visit',
  description: 'Plan your visit to Destiny Church. Find service times, directions, and what to expect.',
  openGraph: {
    title: 'Plan a Visit | Destiny Church',
    description: 'Plan your visit to Destiny Church. Find service times, directions, and what to expect.',
  },
}

export default function VisitPage() {
  return (
    <Container className="py-12">
      <div className="text-center space-y-8 mb-16">
        <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-6xl">
          Plan Your Visit
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We&#39;d love to have you join us! Plan your visit to Destiny Church and experience a welcoming community.
        </p>
        <Link href={site.churchCenter.planAVisitForm} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="px-8">
            Plan My Visit
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Times Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" /> Service Times
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-muted-foreground">Join us for worship:</p>
            <ul className="list-disc list-inside space-y-1">
              {site.serviceTimes.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Location Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" /> Our Location
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-muted-foreground">{site.address}</p>
            <Link
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                Get Directions
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* What to Expect Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" /> What to Expect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-muted-foreground">
              A friendly atmosphere, engaging worship, and relevant teaching. Come as you are!
            </p>
            <Link href="/about" passHref>
              <Button variant="outline" className="w-full">
                Learn More About Us
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* First Time Guest Card */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5 text-primary" /> First Time Guest?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            We&#39;ve got special parking and a welcome team ready to greet you.
          </p>
          <Link href={site.churchCenter.planAVisitForm} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">
              Let Us Know You&#39;re Coming!
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  )
}