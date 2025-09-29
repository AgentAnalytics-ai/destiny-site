'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LiveStreamPage() {
  const [isLive, setIsLive] = useState(false)
  // const [streamData, setStreamData] = useState(null) // For future Resi API integration

  // Simulate checking if stream is live
  useEffect(() => {
    // In real implementation, this would check Resi API
    const checkStreamStatus = () => {
      // For demo purposes, assume stream is live on Sundays
      const now = new Date()
      const isSunday = now.getDay() === 0
      const isServiceTime = now.getHours() >= 9 && now.getHours() <= 12
      
      setIsLive(isSunday && isServiceTime)
    }

    checkStreamStatus()
    const interval = setInterval(checkStreamStatus, 30000) // Check every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Watch Live
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us for live worship services, special events, and community gatherings from anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLive ? (
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Live Stream Player */}
              <div className="relative aspect-video bg-black">
                {/* Resi Video Player - Replace with your actual Resi embed code */}
                <iframe
                  src="https://player.resi.io/your-resi-stream-id"
                  title="Destiny Church Live Stream"
                  className="w-full h-full"
                  allowFullScreen
                  allow="autoplay; fullscreen; picture-in-picture"
                />
                
                {/* Live Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-semibold flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></div>
                  LIVE NOW
                </div>
              </div>
              
              {/* Stream Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Sunday Service</h2>
                <p className="text-gray-600 mb-4">Join us for worship, fellowship, and an inspiring message that will strengthen your faith.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Every Sunday at 10:00 AM CST</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">No Live Stream Currently</h2>
                <p className="text-xl text-gray-600 mb-8">
                  We&apos;re not currently streaming. Join us for our next live service!
                </p>
                
                {/* Upcoming Service Info */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 max-w-md mx-auto">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Next Service</h3>
                  <p className="text-gray-600 mb-4">Sunday Service</p>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Every Sunday at 10:00 AM CST</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Recent Videos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Messages</h2>
            <p className="text-xl text-gray-600">Catch up on recent sermons and special events</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Recent Video Cards */}
            {[
              {
                title: "Stir Up Your Faith",
                date: "January 26, 2025",
                thumbnail: "/uploads/02-events/Untitled-1555.jpg",
                duration: "45:30"
              },
              {
                title: "Walking in Purpose",
                date: "January 19, 2025", 
                thumbnail: "/uploads/02-events/Untitled-2464.jpg",
                duration: "42:15"
              },
              {
                title: "Community of Faith",
                date: "January 12, 2025",
                thumbnail: "/uploads/02-events/Untitled-8099.jpg", 
                duration: "38:45"
              }
            ].map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3 hover:bg-white transition-colors cursor-pointer">
                      <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-500">{video.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Never Miss a Service
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Subscribe to our channel and get notified when we go live, plus access to our full library of messages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtube.com/@destinychurch"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Subscribe on YouTube
            </a>
            <a
              href="https://destinyokc.churchcenter.com/registrations"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Notifications
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}