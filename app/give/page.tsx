'use client'

import { useEffect } from 'react'

export default function GivePage() {
  useEffect(() => {
    // Seamlessly redirect to Church Center giving
    window.location.href = 'https://destinyokc.churchcenter.com/giving'
  }, [])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to secure giving...</p>
      </div>
    </div>
  )
}
