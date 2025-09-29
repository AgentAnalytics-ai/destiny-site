import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const streamId = searchParams.get('streamId')

  if (!streamId) {
    return NextResponse.json({ 
      success: false, 
      error: 'Stream ID required',
      isLive: false 
    })
  }

  try {
    // Resi API integration
    // Replace with your actual Resi API credentials and endpoint
    const resiApiKey = process.env.RESI_API_KEY
    const resiApiUrl = process.env.RESI_API_URL || 'https://api.resi.io'

    if (!resiApiKey) {
      // Fallback: simulate stream status based on time
      const now = new Date()
      const isSunday = now.getDay() === 0
      const isServiceTime = now.getHours() >= 9 && now.getHours() <= 12
      
      return NextResponse.json({
        success: true,
        isLive: isSunday && isServiceTime,
        streamId,
        message: isSunday && isServiceTime ? 'Stream is live' : 'Stream is offline',
        nextStream: isSunday && isServiceTime ? null : 'Next Sunday at 10:00 AM CST'
      })
    }

    // Real Resi API call
    const response = await fetch(`${resiApiUrl}/v1/streams/${streamId}/status`, {
      headers: {
        'Authorization': `Bearer ${resiApiKey}`,
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`Resi API error: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json({
      success: true,
      isLive: data.status === 'live',
      streamId,
      streamData: data,
      message: data.status === 'live' ? 'Stream is live' : 'Stream is offline'
    })

  } catch (error) {
    console.error('Resi API error:', error)
    
    // Fallback response
    return NextResponse.json({
      success: false,
      error: 'Failed to check stream status',
      isLive: false,
      streamId,
      message: 'Unable to check stream status'
    })
  }
}
