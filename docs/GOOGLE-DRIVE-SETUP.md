# Google Drive API Setup Guide

## 🎯 EXPERT SETUP INSTRUCTIONS

### Step 1: Google Cloud Console Setup

1. **Go to:** [Google Cloud Console](https://console.cloud.google.com/)
2. **Create/Select Project:** `destiny-website-api`
3. **Enable APIs:**
   - Go to "APIs & Services" → "Library"
   - Search for "Google Drive API"
   - Click "Enable"

### Step 2: Create Service Account

1. **Go to:** "APIs & Services" → "Credentials"
2. **Click:** "Create Credentials" → "Service Account"
3. **Fill in:**
   - Name: `destiny-website-service`
   - Description: `Service account for Destiny Church website photo integration`
4. **Click:** "Create and Continue"
5. **Skip roles** (click "Continue")
6. **Click:** "Done"

### Step 3: Generate Service Account Key

1. **Find your service account** in the credentials list
2. **Click on the service account email**
3. **Go to:** "Keys" tab
4. **Click:** "Add Key" → "Create new key"
5. **Select:** JSON format
6. **Click:** "Create"
7. **Download the JSON file**

### Step 4: Extract Credentials

From the downloaded JSON file, extract:

```json
{
  "client_email": "destiny-website-service@destiny-website-api.iam.gserviceaccount.com",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
}
```

### Step 5: Share Google Drive Folder

1. **Go to your Google Drive folder:** `Destiny - Web Photography - Google Drive`
2. **Right-click** → "Share"
3. **Add email:** `destiny-website-service@destiny-website-api.iam.gserviceaccount.com`
4. **Permission:** "Viewer"
5. **Click:** "Send"

### Step 6: Add to Vercel Environment Variables

1. **Go to:** [Vercel Dashboard](https://vercel.com/dashboard)
2. **Select:** `destiny-site` project
3. **Go to:** Settings → Environment Variables
4. **Add these 3 variables:**

```
GOOGLE_DRIVE_FOLDER_ID = 1FsnAQ_Uo01oLwBSuIfwVIqq2e0b9Wjdd
GOOGLE_SERVICE_ACCOUNT_EMAIL = destiny-website-service@destiny-website-api.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY = -----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCXlhGj61Sd6R3u\nkP8BuW3fNWAN6XaNun5VcBbhUd5ntp0fnDM47O/ni6IwBVyUa2ry+oSCwweFdY6y\necatr55FhOvqXMA18TikxSszwYV8DJih7VpPdrqoPup6qJLaks3/yVgesV6ganYM\n64SSQbRFMFUtz4N1rMobWPjULAIvFKFcvkkCVDztyPNNN54hL2Nc90lLz1kCzWIQ\nY0fa0iDgYTuSPbMkClA5NwXTacJ/qtgkuVpb2MIe5MD4VNkM7zioqYiTUXT8hpKS\nxKrmHp0fvzklSNfAwLs87pKmBZCS4bXMbvcDSR+lL4KFL8G+drTB5pd+eJWoD9Z4\nPQZILXS9AgMBAAECggEAPadgemLLckSwE2mvBmUEjq4XaOElgoSxQI/MBo31XwqT\nwpkV7lfURcFx0IVFv+omwDfrcIHhi8MiLG5CRD9zKMRk7dgWp3n6t22oYi8aWzeG\nVwoCWuKoDak1Vnk87aCbH6elaypqGeXjKOMb8x69MwzzACRwTArg0xmvbyCNLNdf\neYq9xWAoSvoKG6Uvk+xjtV34XCN2nFXHxmmwxY7oHrtK88r2AG1RvJ3lmdoWrVBE\nLBt6yFcmrrYQ18Bcet2I9SRFsLDnC1EXWlG/thK9WxsmkSKxeLW82WoaYeTX/QC1\nPR87sdIS4PIf0dPSN4T2JSIfHFlGvgivNZPu4eFPswKBgQDI18sJmQMJ/yz9K1Iu\nKfU5DXsSpR+ln0py8FCY3xCQLpFtIyn1qEDYkPqmSeTe3hVOVb1nXqPHMnV7/yYv\n4brXSXn/LAP+jOYAcJqIr5uBOKzZ7z/kTUaqtpEBcvHzyqwfQokWLNo8RJxywQzd\naTjdgXI0sbaXPRf3vX85eK+9RwKBgQDBN0t3nO4M2wrqeKpu05xq/vQqYEphdqrw\nRqIqdIPvOv3bHEH2JL9ZFpM9TloJJ7DAXsTysDPZ+nHMsIagatX+ZVguvLNeYDiY\nl9AYfFuc9oPVCQcsV2g0jsT8ONKL20CRY0LhbYGzV7DSaBIfdPUGv1+/1ZNLG5d6\nGJN9anWv2wKBgDe7egIdzbQWdVuDi/h3eC7uyLoxzAhfnX8rpJHnRGdeJMjOOzSK\nDgSKpqNCWhpmMi9cp4RpxLTgEa3o7aXX08st/oaKpkkavDBfDuLjKBnBqmWHeIlX\n0EZLBw4J4Y4vLXg3NGdM5vpWZ7uISpOeQUNmSlTJA8wQDfiXQxilns69AoGAZITO\n1zCmS7vdJvSVvkiK1MNE5ZLov2HMNmqYzTuGs/vdu5Ms4dBmWAO9oCRWBPNIKhxj\nm9p9b0ay04l20JgkMlApG0+ChXPLnd9FHKf9xWAeX8NtnuzuQoGQC6PILYhoQ/r+\n/WZKFrJlRGFuJD1liBghyRxkn6uAF74XZSTwiwcCgYEAojHOYS6+8AWZt/xt5snN\n/U3w5LXV5E3K7J87hzOf8hrwSZDnEMg30qPrJ5SUbHFkGOceIAm20ancbkGWarc8\n9aNLgtoR/fRIl8FJzvMfXeHrWoEJxRslUmbVuJPRivpBdbOfU/daWnwBquU7f8JG\nc+hTk/nxaTI+gxpsuV42AJE=\n-----END PRIVATE KEY-----\n
```

### Step 7: Redeploy

1. **Vercel will automatically redeploy** when you add environment variables
2. **Wait for deployment to complete**
3. **Test the website** - photos should now load!

## 🎯 TROUBLESHOOTING

### Common Issues:

1. **"client_email field missing"** → Environment variables not set in Vercel
2. **"DECODER routines::unsupported"** → Private key formatting issue
3. **"No folders found"** → Service account doesn't have access to Google Drive folder
4. **"Failed to fetch photos"** → Check Google Drive API is enabled

### Testing:

```bash
# Test API locally
curl http://localhost:3000/api/photos

# Test API in production
curl https://destiny-site.vercel.app/api/photos
```

## 🎯 PHOTO FOLDER STRUCTURE

Your Google Drive should have these folders:
- `01-hero-images` - Main banner images
- `02-events` - Event photos
- `03-community` - Community photos
- `04-worship` - Worship service photos
- `05-testimonials` - Testimony photos
- `06-marketing` - Marketing materials
- `07-videos` - Video thumbnails

## 🎯 PLANNING CENTER INTEGRATION

### Pages that go to Planning Center:
- **Give** → `https://destinyokc.churchcenter.com/giving`
- **Groups** → `https://destinyokc.churchcenter.com/groups`
- **Events Registration** → `https://destinyokc.churchcenter.com/registrations`

### Pages that stay on website:
- **Home** → Your custom homepage with photos
- **Events** → Your custom events page with photos
- **Gallery** → Your custom photo gallery
- **About** → Your custom about page with photos
- **Contact** → Your custom contact page

This creates a seamless experience where users see your branded website but can access Planning Center functionality when needed.
