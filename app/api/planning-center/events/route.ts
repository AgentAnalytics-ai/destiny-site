import { NextRequest, NextResponse } from 'next/server'
import { getEvents } from '@/lib/pco'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    const events = await getEvents(limit, offset)
    
    return NextResponse.json({
      success: true,
      data: events,
      meta: {
        limit,
        offset,
        count: events.length
      }
    })
  } catch (error) {
    console.error('Events API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch events',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
