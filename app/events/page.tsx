"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Event {
  id: string
  attributes: {
    name: string
    description?: string
    starts_at: string
    ends_at: string
    location?: string
    max_registrations?: number
    current_registrations?: number
  }
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/planning-center/events')
        const data = await response.json()
        if (data.success) {
          setEvents(data.data)
        } else {
          setError(data.error)
        }
      } catch (err) {
        setError('Failed to load events')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-destiny-primary mx-auto"></div>
          <p className="mt-4">Loading events...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join us for these exciting events and opportunities to connect with our community.
        </p>
      </div>

      {error ? (
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      ) : events.length === 0 ? (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">No upcoming events</h3>
          <p className="text-gray-600">Check back soon for new events!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => {
            const startDate = new Date(event.attributes.starts_at)
            const endDate = new Date(event.attributes.ends_at)
            
            return (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{event.attributes.name}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {event.attributes.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{startDate.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>
                      {startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
                      {endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  {event.attributes.location && (
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.attributes.location}</span>
                    </div>
                  )}
                  {event.attributes.max_registrations && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>
                        {event.attributes.current_registrations || 0} / {event.attributes.max_registrations} registered
                      </span>
                    </div>
                  )}
                  <Button className="w-full mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
