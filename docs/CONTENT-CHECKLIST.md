# Content Checklist for New Church Setup

## Required Assets

### Logo Files
- [ ] Primary logo (SVG preferred, PNG acceptable)
  - Size: 200x200px minimum
  - Format: SVG or PNG with transparent background
  - Location: `/public/logo-primary.svg` or `/public/logo-primary.png`
- [ ] Brand logo (for footer, smaller size)
  - Size: 100x100px minimum
  - Format: SVG or PNG with transparent background
  - Location: `/public/logo-brand.svg` or `/public/logo-brand.png`

### Social Media Images
- [ ] Open Graph image (for social sharing)
  - Size: 1200x630px
  - Format: PNG or JPG
  - Location: `/public/og-image.png`
- [ ] Favicon
  - Size: 32x32px
  - Format: ICO or PNG
  - Location: `/public/favicon.ico`

## Church Information

### Basic Details
- [ ] Church name
- [ ] Tagline or description
- [ ] Primary contact email
- [ ] Phone number
- [ ] Physical address (street, city, state, zip)

### Service Times
- [ ] Sunday service times (e.g., "9:00 AM & 11:00 AM")
- [ ] Midweek service times (if applicable)
- [ ] Any special service times

### Church Center Links
- [ ] Base Church Center URL (e.g., "https://yourchurch.churchcenter.com")
- [ ] Giving page URL (e.g., "/giving")
- [ ] Events/Registrations URL (e.g., "/registrations")
- [ ] Groups URL (e.g., "/groups")
- [ ] Plan a Visit form URL (e.g., "/people/forms/00000")
- [ ] Prayer request form URL (e.g., "/people/forms/00001")

### Social Media
- [ ] YouTube channel URL
- [ ] Instagram profile URL
- [ ] Facebook page URL
- [ ] Any other social media links

### External Links
- [ ] YouVersion Bible app event link (if applicable)
- [ ] SoundCloud or podcast links (if applicable)
- [ ] Any other external ministry links

## Design Preferences

### Colors
- [ ] Primary brand color (hex code)
- [ ] Secondary accent color (hex code)
- [ ] Any additional brand colors

### Typography
- [ ] Preferred font family (default: Inter)
- [ ] Any special typography requirements

## Content Pages

### About Page
- [ ] Church mission statement
- [ ] Brief church history
- [ ] Leadership team information
- [ ] Core values
- [ ] What to expect section

### Groups Information
- [ ] List of small groups with:
  - Group name
  - Description
  - Meeting day/time
  - Location
  - Target demographic
  - Church Center group URL

### Events Information
- [ ] Regular weekly events
- [ ] Special events calendar
- [ ] Event descriptions and details

## Technical Requirements

### Domain
- [ ] Custom domain name
- [ ] SSL certificate (handled by Vercel)

### Analytics
- [ ] Google Analytics ID (optional)
- [ ] Facebook Pixel ID (optional)

## Optional Features

### Feature Flags
- [ ] Enable giving iframe embed (true/false)
- [ ] Enable ICS calendar integration (true/false)
- [ ] Enable PCO API integration (true/false)

### Additional Pages
- [ ] Watch/streaming page content
- [ ] Ministries page content
- [ ] Beliefs/doctrine page content
- [ ] Contact page information

## Submission Format

Please provide all content in the following format:

```json
{
  "churchName": "Your Church Name",
  "tagline": "Your church tagline",
  "contactEmail": "info@yourchurch.com",
  "phone": "(555) 123-4567",
  "address": "123 Main St, City, State 12345",
  "serviceTimes": ["Sun 9:00a", "Sun 11:00a"],
  "churchCenter": {
    "base": "https://yourchurch.churchcenter.com",
    "giving": "/giving",
    "events": "/registrations",
    "groups": "/groups",
    "planAVisitForm": "/people/forms/00000",
    "prayerForm": "/people/forms/00001"
  },
  "socials": {
    "youtube": "https://youtube.com/yourchurch",
    "instagram": "https://instagram.com/yourchurch",
    "facebook": "https://facebook.com/yourchurch"
  },
  "colors": {
    "primary": "#1e40af",
    "secondary": "#f59e0b"
  }
}
```

## Next Steps

1. Gather all required content using this checklist
2. Provide content in the specified format
3. Upload logo and image assets
4. Review and approve the final website
5. Launch and go live!

