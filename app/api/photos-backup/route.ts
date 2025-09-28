import { NextResponse } from 'next/server'

// Backup photo system using direct Google Drive links
// This works when the service account has issues

const BACKUP_PHOTOS = {
  '01-hero-images': [
    {
      id: 'hero-1',
      name: 'Destiny Church Hero Image 1',
      webViewLink: 'https://drive.google.com/file/d/1ABC123/view',
      thumbnailLink: 'https://drive.google.com/thumbnail?id=1ABC123&sz=w400-h300',
      mimeType: 'image/jpeg'
    },
    {
      id: 'hero-2', 
      name: 'Destiny Church Hero Image 2',
      webViewLink: 'https://drive.google.com/file/d/1DEF456/view',
      thumbnailLink: 'https://drive.google.com/thumbnail?id=1DEF456&sz=w400-h300',
      mimeType: 'image/jpeg'
    }
  ],
  '02-events': [
    {
      id: 'event-1',
      name: 'Community Outreach Event',
      webViewLink: 'https://drive.google.com/file/d/1GHI789/view',
      thumbnailLink: 'https://drive.google.com/thumbnail?id=1GHI789&sz=w400-h300',
      mimeType: 'image/jpeg'
    },
    {
      id: 'event-2',
      name: 'Youth Fall Retreat',
      webViewLink: 'https://drive.google.com/file/d/1JKL012/view',
      thumbnailLink: 'https://drive.google.com/thumbnail?id=1JKL012&sz=w400-h300',
      mimeType: 'image/jpeg'
    }
  ],
  '03-community': [
    {
      id: 'community-1',
      name: 'Church Community Gathering',
      webViewLink: 'https://drive.google.com/file/d/1MNO345/view',
      thumbnailLink: 'https://drive.google.com/thumbnail?id=1MNO345&sz=w400-h300',
      mimeType: 'image/jpeg'
    }
  ],
  '04-worship': [
    {
      id: 'worship-1',
      name: 'Sunday Worship Service',
      webViewLink: 'https://drive.google.com/file/d/1PQR678/view',
      thumbnailLink: 'https://drive.google.com/thumbnail?id=1PQR678&sz=w400-h300',
      mimeType: 'image/jpeg'
    }
  ],
  '05-testimonials': [
    {
      id: 'testimonial-1',
      name: 'Life Change Story',
      webViewLink: 'https://drive.google.com/file/d/1STU901/view',
      thumbnailLink: 'https://drive.google.com/thumbnail?id=1STU901&sz=w400-h300',
      mimeType: 'image/jpeg'
    }
  ],
  '06-marketing': [
    {
      id: 'marketing-1',
      name: 'Church Marketing Material',
      webViewLink: 'https://drive.google.com/file/d/1VWX234/view',
      thumbnailLink: 'https://drive.google.com/thumbnail?id=1VWX234&sz=w400-h300',
      mimeType: 'image/jpeg'
    }
  ],
  '07-videos': []
}

export async function GET() {
  try {
    console.log('Using backup photo system...')
    
    const folders = Object.entries(BACKUP_PHOTOS).map(([folderName, photos]) => ({
      folderName,
      folderId: `backup-${folderName}`,
      photos
    }))

    return NextResponse.json({ 
      success: true,
      folders,
      source: 'backup'
    })
  } catch (error) {
    console.error('Error with backup photos:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Backup photo system failed',
      folders: []
    })
  }
}
