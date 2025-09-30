import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const appId = process.env.PLANNING_CENTER_APP_ID
    const secret = process.env.PLANNING_CENTER_SECRET
    
    if (!appId || !secret) {
      return NextResponse.json({
        success: false,
        error: 'Missing Planning Center credentials',
        hasAppId: !!appId,
        hasSecret: !!secret
      })
    }
    
    // Test getting access token
    const tokenResponse = await fetch('https://api.planningcenteronline.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: appId,
        client_secret: secret,
      }),
    })
    
    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text()
      return NextResponse.json({
        success: false,
        error: 'Failed to get Planning Center token',
        status: tokenResponse.status,
        details: errorText
      })
    }
    
    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token
    
    // Test fetching events
    const eventsResponse = await fetch('https://api.planningcenteronline.com/calendar/v2/events?where[starts_at]=future&per_page=5', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
    
    if (!eventsResponse.ok) {
      const errorText = await eventsResponse.text()
      return NextResponse.json({
        success: false,
        error: 'Failed to fetch events',
        status: eventsResponse.status,
        details: errorText,
        tokenReceived: true
      })
    }
    
    const eventsData = await eventsResponse.json()
    
    return NextResponse.json({
      success: true,
      message: 'Planning Center API is working!',
      eventsCount: eventsData.data?.length || 0,
      sampleEvents: eventsData.data?.slice(0, 2).map((event: any) => ({
        id: event.id,
        title: event.attributes.title,
        starts_at: event.attributes.starts_at
      })) || [],
      tokenReceived: true,
      eventsReceived: true
    })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Unexpected error',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
