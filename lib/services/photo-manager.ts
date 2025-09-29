interface PhotoSource {
  name: string
  priority: number
  isAvailable: boolean
}

interface Photo {
  id: string
  name: string
  webViewLink: string
  thumbnailLink?: string
  mimeType: string
}

interface FolderData {
  folderName: string
  folderId: string
  photos: Photo[]
}

interface PhotoResponse {
  success: boolean
  folders: FolderData[]
  source?: string
  fallback?: boolean
  error?: string
}

export class PhotoManager {
  private sources: Map<string, PhotoSource> = new Map()

  constructor() {
    this.initializeSources()
  }

  private initializeSources() {
    // Primary: Google Drive API
    this.sources.set('google-drive', {
      name: 'google-drive',
      priority: 1,
      isAvailable: this.isGoogleDriveAvailable()
    })

    // Fallback 1: Backup photo system
    this.sources.set('backup', {
      name: 'backup',
      priority: 2,
      isAvailable: true
    })

    // Fallback 2: Static placeholder images
    this.sources.set('static', {
      name: 'static',
      priority: 3,
      isAvailable: true
    })
  }

  private isGoogleDriveAvailable(): boolean {
    return !!(
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_DRIVE_FOLDER_ID &&
      process.env.GOOGLE_PRIVATE_KEY
    )
  }

  public async getPhotos(folderName?: string): Promise<PhotoResponse> {
    const availableSources = Array.from(this.sources.values())
      .filter(source => source.isAvailable)
      .sort((a, b) => a.priority - b.priority)

    for (const source of availableSources) {
      try {
        const photos = await this.fetchFromSource(source.name, folderName)
        if (photos && photos.success) {
          return {
            ...photos,
            source: source.name,
            fallback: source.priority > 1
          }
        }
      } catch (error) {
        console.warn(`Failed to fetch from ${source.name}:`, error)
        continue
      }
    }

    // If all sources fail, return empty response
    return {
      success: false,
      folders: [],
      error: 'All photo sources failed'
    }
  }

  private async fetchFromSource(sourceName: string, _folderName?: string): Promise<PhotoResponse> {
    switch (sourceName) {
      case 'google-drive':
        return this.fetchFromGoogleDrive()
      case 'backup':
        return this.fetchFromBackup()
      case 'static':
        return this.fetchFromStatic()
      default:
        throw new Error(`Unknown source: ${sourceName}`)
    }
  }

  private async fetchFromGoogleDrive(): Promise<PhotoResponse> {
    const response = await fetch('/api/photos')
    return response.json()
  }

  private async fetchFromBackup(): Promise<PhotoResponse> {
    const response = await fetch('/api/photos-backup')
    return response.json()
  }

  private async fetchFromStatic(): Promise<PhotoResponse> {
    // Static placeholder images
    const staticPhotos = {
      '01-hero-images': [
        {
          id: 'static-hero-1',
          name: 'Church Welcome',
          webViewLink: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
          thumbnailLink: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
          mimeType: 'image/jpeg'
        }
      ],
      '02-events': [
        {
          id: 'static-event-1',
          name: 'Community Event',
          webViewLink: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
          thumbnailLink: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
          mimeType: 'image/jpeg'
        }
      ],
      '03-community': [
        {
          id: 'static-community-1',
          name: 'Fellowship',
          webViewLink: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
          thumbnailLink: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
          mimeType: 'image/jpeg'
        }
      ],
      '04-worship': [
        {
          id: 'static-worship-1',
          name: 'Worship Service',
          webViewLink: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
          thumbnailLink: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
          mimeType: 'image/jpeg'
        }
      ],
      '05-testimonials': [],
      '06-marketing': [],
      '07-videos': []
    }

    const folders = Object.entries(staticPhotos).map(([folderName, photos]) => ({
      folderName,
      folderId: `static-${folderName}`,
      photos
    }))

    return {
      success: true,
      folders
    }
  }
}