import { NextRequest, NextResponse } from 'next/server'
import { getWeekendServices } from '@/lib/pco'

export async function GET(request: NextRequest) {
  try {
    const services = await getWeekendServices()
    
    return NextResponse.json({
      success: true,
      data: services,
      meta: {
        count: services.length,
        week_start: new Date().toISOString().split('T')[0]
      }
    })
  } catch (error) {
    console.error('Weekend services API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch weekend services',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
