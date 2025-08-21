import { NextRequest, NextResponse } from 'next/server'
import { getGroups } from '@/lib/pco'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    const groups = await getGroups(limit, offset)
    
    return NextResponse.json({
      success: true,
      data: groups,
      meta: {
        limit,
        offset,
        count: groups.length
      }
    })
  } catch (error) {
    console.error('Groups API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch groups',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
