import { NextResponse } from 'next/server'
import { readdir, stat } from 'fs/promises'
import { join } from 'path'

// ENHANCED: Professional photo system with file upload support
export async function GET() {
  try {
    console.log('Using enhanced photo system...')
    
    // Get uploaded photos from public/uploads directory
    const uploadedPhotos = await getUploadedPhotos()
    
    // Only use YOUR real photos - no placeholder images
    const PROFESSIONAL_PHOTOS = {
      '01-hero-images': [],
      '02-events': [],
      '03-community': [],
      '04-worship': [],
      '05-testimonials': [],
      '06-marketing': [],
      '07-videos': []
    }

    // Merge uploaded photos with professional photos
    const mergedFolders = Object.entries(PROFESSIONAL_PHOTOS).map(([folderName, defaultPhotos]) => {
      const uploadedFolderPhotos = uploadedPhotos[folderName] || []
      const allPhotos = [...defaultPhotos, ...uploadedFolderPhotos]
      
      return {
        folderName,
        folderId: `enhanced-${folderName}`,
        photos: allPhotos
      }
    })

    return NextResponse.json({ 
      success: true,
      folders: mergedFolders,
      source: 'enhanced',
      uploadedCount: Object.values(uploadedPhotos).flat().length
    })
  } catch (error) {
    console.error('Error with enhanced photos:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Enhanced photo system failed',
      folders: []
    })
  }
}

// Helper function to get uploaded photos from filesystem
async function getUploadedPhotos() {
  try {
    const uploadsDir = join(process.cwd(), 'public', 'uploads')
    const folders = await readdir(uploadsDir)
    
    const uploadedPhotos: Record<string, Array<{
      id: string
      name: string
      webViewLink: string
      thumbnailLink: string
      mimeType: string
      isUploaded: boolean
    }>> = {}
    
    for (const folder of folders) {
      const folderPath = join(uploadsDir, folder)
      const folderStat = await stat(folderPath)
      
      if (folderStat.isDirectory()) {
        const files = await readdir(folderPath)
        const imageFiles = files.filter(file => 
          /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
        )
        
        uploadedPhotos[folder] = imageFiles.map(file => ({
          id: `upload-${file}`,
          name: file.replace(/\d+-/, ''), // Remove timestamp prefix
          webViewLink: `/uploads/${folder}/${file}`,
          thumbnailLink: `/uploads/${folder}/${file}`,
          mimeType: `image/${file.split('.').pop()}`,
          isUploaded: true
        }))
      }
    }
    
    return uploadedPhotos
  } catch (error) {
    console.log('No uploaded photos found or error reading uploads:', error)
    return {}
  }
}