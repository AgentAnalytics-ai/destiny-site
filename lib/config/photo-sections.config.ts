// Professional Photo Section Configuration
// Maps Google Drive folders to website sections with expert-level optimization

export interface PhotoSection {
  folderName: string
  displayName: string
  description: string
  layout: 'grid' | 'hero' | 'carousel' | 'masonry'
  aspectRatio: 'square' | 'landscape' | 'portrait' | 'auto'
  maxPhotos: number
  priority: number
  pages: string[]
}

export const PHOTO_SECTIONS: Record<string, PhotoSection> = {
  '01-hero-images': {
    folderName: '01-hero-images',
    displayName: 'Hero Images',
    description: 'Main banner images for homepage and key pages',
    layout: 'hero',
    aspectRatio: 'landscape',
    maxPhotos: 3,
    priority: 1,
    pages: ['homepage', 'about']
  },
  '02-events': {
    folderName: '02-events',
    displayName: 'Events',
    description: 'Photos from church events, conferences, and gatherings',
    layout: 'grid',
    aspectRatio: 'landscape',
    maxPhotos: 12,
    priority: 2,
    pages: ['events', 'homepage']
  },
  '03-community': {
    folderName: '03-community',
    displayName: 'Community',
    description: 'Photos showing church community and fellowship',
    layout: 'masonry',
    aspectRatio: 'auto',
    maxPhotos: 8,
    priority: 3,
    pages: ['homepage', 'about', 'gallery']
  },
  '04-worship': {
    folderName: '04-worship',
    displayName: 'Worship',
    description: 'Photos from worship services and musical performances',
    layout: 'grid',
    aspectRatio: 'landscape',
    maxPhotos: 15,
    priority: 4,
    pages: ['homepage', 'gallery']
  },
  '05-testimonials': {
    folderName: '05-testimonials',
    displayName: 'Stories of Hope',
    description: 'Photos representing testimonies and life change stories',
    layout: 'carousel',
    aspectRatio: 'portrait',
    maxPhotos: 6,
    priority: 5,
    pages: ['homepage', 'about']
  },
  '06-marketing': {
    folderName: '06-marketing',
    displayName: 'Marketing',
    description: 'Promotional and marketing materials',
    layout: 'grid',
    aspectRatio: 'landscape',
    maxPhotos: 10,
    priority: 6,
    pages: ['gallery']
  },
  '07-videos': {
    folderName: '07-videos',
    displayName: 'Videos',
    description: 'Video thumbnails and promotional content',
    layout: 'grid',
    aspectRatio: 'landscape',
    maxPhotos: 8,
    priority: 7,
    pages: ['gallery', 'homepage']
  }
}

// Get photo section configuration by folder name
export function getPhotoSection(folderName: string): PhotoSection | null {
  return PHOTO_SECTIONS[folderName] || null
}

// Get all photo sections for a specific page
export function getPhotoSectionsForPage(page: string): PhotoSection[] {
  return Object.values(PHOTO_SECTIONS)
    .filter(section => section.pages.includes(page))
    .sort((a, b) => a.priority - b.priority)
}

// Get hero images for homepage
export function getHeroImages(): PhotoSection {
  return PHOTO_SECTIONS['01-hero-images']
}

// Get community highlights
export function getCommunityHighlights(): PhotoSection {
  return PHOTO_SECTIONS['03-community']
}

// Get worship photos
export function getWorshipPhotos(): PhotoSection {
  return PHOTO_SECTIONS['04-worship']
}

// Get testimonials
export function getTestimonials(): PhotoSection {
  return PHOTO_SECTIONS['05-testimonials']
}
