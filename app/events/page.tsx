"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { site, FEATURES } from '@/lib/config/site.config'

// Sample events data - in real implementation, this could come from Church Center API or ICS
const events = [
  {
    id: 'worship-service',
    title: 'Sunday Worship Service',
    description: 'Join us for worship, teaching, and community',
    date: 'Every Sunday',
    time: '9:00 AM & 11:00 AM',
    location: 'Main Auditorium',
    churchCenterUrl: `${site.churchCenter.base}/registrations/worship-service`,
  },
  {
    id: 'bible-study',
    title: 'Wednesday Bible Study',
    description: 'Dive deeper into God\'s Word together',
    date: 'Every Wednesday',
    time: '7:00 PM',
    location: 'Fellowship Hall',
    churchCenterUrl: `${site.churchCenter.base}/registrations/bible-study`,
  },
  {
    id: 'youth-night',
    title: 'Youth Night',
    description: 'High energy worship and teaching for students',
    date: 'Every Friday',
    time: '6:30 PM',
    location: 'Youth Room',
    churchCenterUrl: `${site.churchCenter.base}/registrations/youth-night`,
  },
]

export default function EventsPage() {
  return (
    <Container className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Events</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join us for our regular events and special gatherings. 
          Find something that fits your schedule and interests.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                {event.title}
              </CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{event.date} • {event.time}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              <Button 
                className="w-full" 
                onClick={() => window.open(event.churchCenterUrl, '_blank')}
              >
                Learn More
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Future ICS Implementation Comment */}
      {FEATURES.eventsFromICS && (
        <div className="mt-12 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            📅 ICS Calendar Integration: This section would display events from an ICS feed 
            with ISR revalidation every 30 minutes.
          </p>
        </div>
      )}

      {/* Future PCO API Implementation Comment */}
      {FEATURES.featuredEventsFromAPI && (
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            🚀 PCO API Integration: Featured events would be pulled from Planning Center 
            with hard caching and kill-switch capability.
          </p>
        </div>
      )}
    </Container>
  )
}
