'use client'

// Resi Live Streaming Integration - Updated with Stream ID
import { useState, useEffect } from 'react'
import Image from 'next/image'
import ResiPlayer from '@/components/ui/ResiPlayer'

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
          {/* Professional Resi Player */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <ResiPlayer 
              streamId={process.env.NEXT_PUBLIC_RESI_STREAM_ID || "your-resi-stream-id"}
              className="w-full"
            />
            
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

          {/* Offline Message - Only show when stream is confirmed offline */}
          {!isLive && (
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

      {/* Resi Playlist Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sunday Services</h2>
            <p className="text-xl text-gray-600">Watch recent sermons and catch up on past services</p>
          </div>
          
          {/* Resi Playlist Embed */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900">Recent Sunday Services</h3>
              <p className="text-gray-600 mt-2">Our latest worship services and messages</p>
            </div>
            
            <div className="p-6">
              <div style={{position:'relative',overflow:'hidden',paddingTop:'56.25%'}}>
                <iframe 
                  allow="autoplay; fullscreen" 
                  allowFullScreen={true} 
                  className="resi-video-frame" 
                  src="https://control.resi.io/webplayer/video.html?id=YjMwNzBlYWEtY2JiYy00MGQxLWJhMjktNTRiMTQwNDQzMDJmOmU0ZGM2OTcwLTlkNzUtMTFmMC05NGVmLTgzYzY0YTYxZDZjZQ==&type=playlist&autoplay=false" 
                  style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:'none'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resi Script */}
      <script defer type="text/javascript" src="https://control.resi.io/webplayer/page.min.js"></script>

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