'use client'

import { useState, useEffect } from 'react'

// interface StreamData {
//   status: string
//   title?: string
//   description?: string
// }

interface ResiPlayerProps {
  streamId?: string
  className?: string
}

export default function ResiPlayer({ streamId, className = '' }: ResiPlayerProps) {
  const [streamStatus, setStreamStatus] = useState<'loading' | 'live' | 'offline'>('loading')
  // const [streamData, setStreamData] = useState<StreamData | null>(null) // For future use

  useEffect(() => {
    // Check Resi stream status
    const checkStreamStatus = async () => {
      if (!streamId) {
        setStreamStatus('offline')
        return
      }

      try {
        // Resi API endpoint to check stream status
        // Replace with your actual Resi API endpoint
        const response = await fetch(`/api/resi/status?streamId=${streamId}`)
        const data = await response.json()
        
        if (data.isLive) {
          setStreamStatus('live')
          // setStreamData(data) // For future use
        } else {
          setStreamStatus('offline')
        }
      } catch (error) {
        console.error('Error checking Resi stream status:', error)
        setStreamStatus('offline')
      }
    }

    checkStreamStatus()
    const interval = setInterval(checkStreamStatus, 30000) // Check every 30 seconds

    return () => clearInterval(interval)
  }, [streamId])

  if (streamStatus === 'loading') {
    return (
      <div className={`${className} relative aspect-video bg-black rounded-xl flex items-center justify-center`}>
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto mb-4"></div>
          <p className="text-lg">Checking stream status...</p>
        </div>
      </div>
    )
  }

  if (streamStatus === 'offline') {
    return (
      <div className={`${className} relative aspect-video bg-gray-900 rounded-xl flex items-center justify-center`}>
        <div className="text-center text-white">
          <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Stream Offline</h3>
          <p className="text-gray-300">We&apos;re not currently streaming. Check back soon!</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${className} relative aspect-video bg-black rounded-xl overflow-hidden`}>
      {/* Live Badge */}
      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-semibold flex items-center z-10">
        <div className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></div>
        LIVE NOW
      </div>

      {/* Resi Player */}
      {streamId ? (
        <iframe
          src={`https://player.resi.io/${streamId}`}
          title="Destiny Church Live Stream"
          className="w-full h-full"
          allowFullScreen
          allow="autoplay; fullscreen; picture-in-picture"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white">
          <div className="text-center">
            <p className="text-lg mb-2">Resi Stream ID Required</p>
            <p className="text-sm text-gray-300">Please configure your Resi stream ID</p>
          </div>
        </div>
      )}
    </div>
  )
}
