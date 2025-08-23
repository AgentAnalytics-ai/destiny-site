import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { site } from '@/lib/config/site.config'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Join us for events and activities at Destiny Church.',
}

const events = [
  {
    title: 'Sunday Service',
    description: 'Join us for worship and teaching',
    date: 'Every Sunday',
    time: '9:00 AM & 11:00 AM',
    location: 'Main Auditorium',
    churchCenterUrl: `${site.churchCenter.base}${site.churchCenter.events}`,
  },
  {
    title: 'Small Groups',
    description: 'Connect with others in community',
    date: 'Various Times',
    time: 'Throughout the week',
    location: 'Various Locations',
    churchCenterUrl: `${site.churchCenter.base}${site.churchCenter.groups}`,
  },
]

export default function EventsPage() {
  return (
    <Container className="py-12">
      <div className="text-center space-y-8 mb-16">
        <h1 className="text-4xl font-bold">Events</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join us for events, services, and activities that will help you grow in your faith.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                {event.title}
              </CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </div>
              </div>
              <Link href={event.churchCenterUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full group">
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href={`${site.churchCenter.base}${site.churchCenter.events}`} target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline">
            View All Events
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Container>
  )
}
