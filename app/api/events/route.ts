import { NextResponse } from 'next/server'

// Planning Center Events API Integration
export async function GET() {
  try {
    // For now, we'll create a dynamic system that generates realistic upcoming events
    // Later, you can replace this with actual Planning Center API calls
    
    const today = new Date()
    const upcomingEvents = generateUpcomingEvents(today)
    
    return NextResponse.json({
      success: true,
      events: upcomingEvents,
      lastUpdated: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch events',
      events: []
    })
  }
}

function generateUpcomingEvents(baseDate: Date) {
  const events = []
  
  // Generate next 4 Sundays
  for (let i = 0; i < 4; i++) {
    const sunday = getNextSunday(baseDate, i)
    events.push({
      id: `sunday-${i + 1}`,
      title: "Sunday Service",
      description: "Join us for worship, fellowship, and an inspiring message that will strengthen your faith and connect you with God's purpose.",
      date: formatDate(sunday),
      time: "10:00 AM",
      location: "Destiny Church Main Campus",
      image: "/uploads/02-events/Untitled-1555.jpg",
      churchCenterUrl: "https://destinyokc.churchcenter.com/events/sunday-service",
      isRecurring: true
    })
  }
  
  // Add some special events
  const specialEvents = [
    {
      id: "community-outreach",
      title: "Community Outreach",
      description: "Make a difference in our community as we serve together. A great opportunity to show God's love through action.",
      daysFromNow: 14,
      time: "9:00 AM - 2:00 PM",
      location: "Local Community Center",
      image: "/uploads/02-events/Untitled-2464.jpg",
      churchCenterUrl: "https://destinyokc.churchcenter.com/events/community-outreach"
    },
    {
      id: "youth-retreat",
      title: "Youth Fall Retreat",
      description: "A weekend of fun, fellowship, and spiritual growth for our youth. Don't miss this life-changing experience!",
      daysFromNow: 21,
      time: "Friday 6:00 PM - Sunday 2:00 PM",
      location: "Camp Victory",
      image: "/uploads/02-events/Untitled-8099.jpg",
      churchCenterUrl: "https://destinyokc.churchcenter.com/events/youth-retreat"
    },
    {
      id: "marriage-workshop",
      title: "Marriage Enrichment Workshop",
      description: "Strengthen your marriage with practical tools and biblical principles. Open to all couples at any stage.",
      daysFromNow: 28,
      time: "9:00 AM - 4:00 PM",
      location: "Destiny Church - Fellowship Hall",
      image: "/uploads/02-events/Untitled-8104.jpg",
      churchCenterUrl: "https://destinyokc.churchcenter.com/events/marriage-workshop"
    }
  ]
  
  specialEvents.forEach(event => {
    const eventDate = new Date(baseDate)
    eventDate.setDate(eventDate.getDate() + event.daysFromNow)
    
    events.push({
      id: event.id,
      title: event.title,
      description: event.description,
      date: formatDate(eventDate),
      time: event.time,
      location: event.location,
      image: event.image,
      churchCenterUrl: event.churchCenterUrl,
      isRecurring: false
    })
  })
  
  // Sort events by date
  return events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

function getNextSunday(baseDate: Date, weekOffset: number = 0) {
  const date = new Date(baseDate)
  const dayOfWeek = date.getDay()
  const daysUntilSunday = (7 - dayOfWeek) % 7
  const daysToAdd = daysUntilSunday === 0 ? 7 + (weekOffset * 7) : daysUntilSunday + (weekOffset * 7)
  
  date.setDate(date.getDate() + daysToAdd)
  return date
}

function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
