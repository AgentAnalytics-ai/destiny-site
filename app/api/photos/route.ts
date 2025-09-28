import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log('Starting photo fetch...')
    console.log('Folder ID:', process.env.GOOGLE_DRIVE_FOLDER_ID)
    console.log('Service Account Email:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
    
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n').replace(/"/g, ''),
      },
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    })

    const drive = google.drive({ version: 'v3', auth })
    
    // Get all folders in the main directory
    console.log('Fetching folders...')
    const foldersResponse = await drive.files.list({
      q: `'${process.env.GOOGLE_DRIVE_FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.folder'`,
      fields: 'files(id, name)',
    })

    const folders = foldersResponse.data.files || []
    console.log('Found folders:', folders.length)
    console.log('Folder names:', folders.map(f => f.name))
    
    if (folders.length === 0) {
      return NextResponse.json({ 
        success: false,
        error: 'No folders found in Google Drive',
        folders: []
      })
    }
    
    // Get photos from each folder
    const photoData = await Promise.all(
      folders.map(async (folder) => {
        console.log(`Fetching photos from folder: ${folder.name}`)
        const photosResponse = await drive.files.list({
          q: `'${folder.id}' in parents and mimeType contains 'image/'`,
          fields: 'files(id, name, webViewLink, thumbnailLink, mimeType)',
        })
        
        console.log(`Found ${photosResponse.data.files?.length || 0} photos in ${folder.name}`)
        
        return {
          folderName: folder.name,
          folderId: folder.id,
          photos: photosResponse.data.files || []
        }
      })
    )

    console.log('Photo data:', photoData)
    return NextResponse.json({ 
      success: true,
      folders: photoData 
    })
  } catch (error) {
    console.error('Error fetching photos:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json({ 
      success: false,
      error: `Failed to fetch photos: ${errorMessage}`,
      folders: []
    })
  }
}
