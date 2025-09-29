"use client"

import Link from 'next/link'
import Image from 'next/image'
import PhotoGallery from '@/components/ui/PhotoGallery'

export default function EventsPage() {
  // 2025 Optimized Events Data
  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Service",
      description: "Join us for worship, fellowship, and an inspiring message that will strengthen your faith and connect you with God's purpose.",
      date: "Every Sunday",
      time: "10:00 AM",
      location: "Destiny Church Main Campus",
      image: "/uploads/02-events/Untitled-1555.jpg",
      churchCenterUrl: "https://destinyokc.churchcenter.com/events/sunday-service"
    },
    {
      id: 2,
      title: "Community Outreach",
      description: "Make a difference in our community as we serve together. A great opportunity to show God's love through action.",
      date: "February 3, 2025",
      time: "9:00 AM - 2:00 PM",
      location: "Local Community Center",
      image: "/uploads/02-events/Untitled-2464.jpg",
      churchCenterUrl: "https://destinyokc.churchcenter.com/events/community-outreach"
    },
    {
      id: 3,
      title: "Youth Fall Retreat",
      description: "A weekend of fun, fellowship, and spiritual growth for our youth. Don't miss this life-changing experience!",
      date: "February 8-10, 2025",
      time: "Friday 6:00 PM - Sunday 2:00 PM",
      location: "Camp Victory",
      image: "/uploads/02-events/Untitled-8099.jpg",
      churchCenterUrl: "https://destinyokc.churchcenter.com/events/youth-retreat"
    },
    {
      id: 4,
      title: "Marriage Enrichment Workshop",
      description: "Strengthen your marriage with practical tools and biblical principles. Open to all couples at any stage.",
      date: "February 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Destiny Church - Fellowship Hall",
      image: "/uploads/02-events/Untitled-8104.jpg",
      churchCenterUrl: "https://destinyokc.churchcenter.com/events/marriage-workshop"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us for worship, fellowship, and community events that will strengthen your faith and connect you with others.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative h-64">
                  <Image
                    src={event.image}
                    alt={`${event.title} at Destiny Church`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">Date:</span> {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Time:</span> {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium">Location:</span> {event.location}
                    </div>
                  </div>
                  
                  <Link
                    href={event.churchCenterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Register Now
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Photos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Photos</h2>
            <p className="text-xl text-gray-600">See the joy and fellowship from our recent events</p>
          </div>
          <PhotoGallery 
            folderName="02-events"
            title=""
            maxPhotos={12}
            layout="grid"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Don&apos;t miss out on upcoming events and opportunities to connect with our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://destinyokc.churchcenter.com/calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View Full Calendar
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Event Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
