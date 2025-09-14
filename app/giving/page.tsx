"use client"

import { useEffect } from 'react'

export default function GivingPage() {
  useEffect(() => {
    // Redirect to your FastAPI backend
    window.location.href = 'https://destiny-fastapi-backend-production.up.railway.app/give'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Giving Page...</h2>
        <p className="text-gray-600">You will be taken to our secure giving page.</p>
      </div>
    </div>
  )
}
