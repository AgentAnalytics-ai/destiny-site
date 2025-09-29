import { NextResponse } from 'next/server'

// PROFESSIONAL PHOTO SYSTEM - Working placeholder images
// This system provides professional church images that work immediately

const PROFESSIONAL_PHOTOS = {
  '01-hero-images': [
    {
      id: 'hero-1',
      name: 'Destiny Church Welcome',
      webViewLink: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'hero-2', 
      name: 'Faith Community',
      webViewLink: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'hero-3',
      name: 'Church Building',
      webViewLink: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    }
  ],
  '02-events': [
    {
      id: 'event-1',
      name: 'Community Outreach',
      webViewLink: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'event-2',
      name: 'Youth Retreat',
      webViewLink: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'event-3',
      name: 'Church Picnic',
      webViewLink: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'event-4',
      name: 'Bible Study',
      webViewLink: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    }
  ],
  '03-community': [
    {
      id: 'community-1',
      name: 'Fellowship Gathering',
      webViewLink: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'community-2',
      name: 'Small Groups',
      webViewLink: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'community-3',
      name: 'Community Service',
      webViewLink: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'community-4',
      name: 'Family Ministry',
      webViewLink: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    }
  ],
  '04-worship': [
    {
      id: 'worship-1',
      name: 'Sunday Service',
      webViewLink: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'worship-2',
      name: 'Praise & Worship',
      webViewLink: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'worship-3',
      name: 'Prayer Meeting',
      webViewLink: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'worship-4',
      name: 'Baptism Service',
      webViewLink: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    }
  ],
  '05-testimonials': [
    {
      id: 'testimonial-1',
      name: 'Life Change Story',
      webViewLink: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'testimonial-2',
      name: 'Faith Journey',
      webViewLink: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'testimonial-3',
      name: 'Community Impact',
      webViewLink: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    }
  ],
  '06-marketing': [
    {
      id: 'marketing-1',
      name: 'Church Brochure',
      webViewLink: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'marketing-2',
      name: 'Welcome Banner',
      webViewLink: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    },
    {
      id: 'marketing-3',
      name: 'Event Flyer',
      webViewLink: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
      thumbnailLink: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
      mimeType: 'image/jpeg'
    }
  ],
  '07-videos': []
}

export async function GET() {
  try {
    console.log('Using professional photo system...')
    
    const folders = Object.entries(PROFESSIONAL_PHOTOS).map(([folderName, photos]) => ({
      folderName,
      folderId: `professional-${folderName}`,
      photos
    }))

    return NextResponse.json({ 
      success: true,
      folders,
      source: 'professional'
    })
  } catch (error) {
    console.error('Error with professional photos:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Professional photo system failed',
      folders: []
    })
  }
}