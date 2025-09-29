'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image?: string
  registrationUrl?: string
}

interface SeamlessEventsProps {
  className?: string
}

export default function SeamlessEvents({ className = '' }: SeamlessEventsProps) {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching events from Planning Center
    // In real implementation, this would call Planning Center API
    setTimeout(() => {
      setEvents([
        {
          id: '1',
          title: 'Sunday Service',
          date: '2024-01-28',
          time: '10:00 AM',
          location: 'Destiny Church',
          description: 'Join us for worship, fellowship, and inspiring message.'
        },
        {
          id: '2',
          title: 'Community Outreach',
          date: '2024-02-03',
          time: '9:00 AM',
          location: 'Local Community Center',
          description: 'Serving our community together.'
        },
        {
          id: '3',
          title: 'Small Groups',
          date: '2024-01-30',
          time: '7:00 PM',
          location: 'Various Locations',
          description: 'Connect with others in meaningful community.'
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const handleEventClick = (event: Event) => {
    if (event.registrationUrl) {
      // Seamlessly redirect to Planning Center registration
      window.location.href = event.registrationUrl
    }
  }

  if (loading) {
    return (
      <div className={`space-y-4 ${className}`}>
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-32"></div>
        ))}
      </div>
    )
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {events.map((event) => (
        <div
          key={event.id}
          onClick={() => handleEventClick(event)}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {event.image && (
              <div className="md:w-1/3 h-48 md:h-auto">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">
                  {event.title}
                </h3>
                <div className="text-sm text-gray-600">
                  {new Date(event.date).toLocaleDateString()} at {event.time}
                </div>
              </div>
              <p className="text-gray-600 mb-2">{event.location}</p>
              <p className="text-gray-700">{event.description}</p>
              {event.registrationUrl && (
                <div className="mt-4">
                  <span className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Register Now →
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
