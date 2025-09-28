// Professional Photo Management System
// Handles multiple photo sources with fallback strategies

export interface PhotoSource {
  name: string
  priority: number
  isAvailable: boolean
}

export interface PhotoManagerConfig {
  primarySource: 'google-drive' | 'backup' | 'static'
  fallbackSources: string[]
  enableCaching: boolean
  cacheTimeout: number
}

export class PhotoManager {
  private config: PhotoManagerConfig
  private sources: Map<string, PhotoSource> = new Map()

  constructor(config: PhotoManagerConfig) {
    this.config = config
    this.initializeSources()
  }

  private initializeSources() {
    this.sources.set('google-drive', {
      name: 'Google Drive API',
      priority: 1,
      isAvailable: this.checkGoogleDriveAvailability()
    })
    
    this.sources.set('backup', {
      name: 'Backup System',
      priority: 2,
      isAvailable: true
    })
    
    this.sources.set('static', {
      name: 'Static Images',
      priority: 3,
      isAvailable: true
    })
  }

  private checkGoogleDriveAvailability(): boolean {
    return !!(
      process.env.GOOGLE_DRIVE_FOLDER_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY
    )
  }

  public async getPhotos(folderName?: string): Promise<any> {
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

    return {
      success: false,
      error: 'All photo sources failed',
      folders: []
    }
  }

  private async fetchFromSource(sourceName: string, folderName?: string): Promise<any> {
    switch (sourceName) {
      case 'google-drive':
        return this.fetchFromGoogleDrive(folderName)
      case 'backup':
        return this.fetchFromBackup(folderName)
      case 'static':
        return this.fetchFromStatic(folderName)
      default:
        throw new Error(`Unknown source: ${sourceName}`)
    }
  }

  private async fetchFromGoogleDrive(folderName?: string): Promise<any> {
    const response = await fetch('/api/photos')
    return response.json()
  }

  private async fetchFromBackup(folderName?: string): Promise<any> {
    const response = await fetch('/api/photos-backup')
    return response.json()
  }

  private async fetchFromStatic(folderName?: string): Promise<any> {
    // Static placeholder images
    const staticPhotos = {
      '01-hero-images': [
        {
          id: 'static-hero-1',
          name: 'Destiny Church - Welcome',
          webViewLink: '/images/placeholder-hero-1.jpg',
          thumbnailLink: '/images/placeholder-hero-1.jpg',
          mimeType: 'image/jpeg'
        }
      ],
      '02-events': [
        {
          id: 'static-event-1',
          name: 'Upcoming Events',
          webViewLink: '/images/placeholder-event-1.jpg',
          thumbnailLink: '/images/placeholder-event-1.jpg',
          mimeType: 'image/jpeg'
        }
      ],
      '03-community': [
        {
          id: 'static-community-1',
          name: 'Our Community',
          webViewLink: '/images/placeholder-community-1.jpg',
          thumbnailLink: '/images/placeholder-community-1.jpg',
          mimeType: 'image/jpeg'
        }
      ]
    }

    const folders = Object.entries(staticPhotos).map(([folderName, photos]) => ({
      folderName,
      folderId: `static-${folderName}`,
      photos
    }))

    return {
      success: true,
      folders,
      source: 'static'
    }
  }
}

// Export singleton instance
export const photoManager = new PhotoManager({
  primarySource: 'google-drive',
  fallbackSources: ['backup', 'static'],
  enableCaching: true,
  cacheTimeout: 300000 // 5 minutes
})
