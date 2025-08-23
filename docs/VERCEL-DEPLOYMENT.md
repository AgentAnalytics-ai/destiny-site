## Next.js Expert Package Review & Recommendations

### ✅ **Current Package Analysis - All Good!**

Your current packages are **production-ready** and **Vercel-compatible**:

- **Next.js 15.0.0** ✅ (Latest stable)
- **React 18** ✅ (Latest stable)
- **All Radix UI packages** ✅ (Latest stable)
- **Vercel Analytics/Speed Insights** ✅ (Latest stable)
- **MDX packages** ✅ (Latest stable)

### 🔧 **Minor Optimizations for Production**

```json:package.json
{
  "name": "destiny-site",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "postbuild": "next-sitemap",
    "vercel-build": "next build"
  },
  "dependencies": {
    "next": "15.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-form": "^0.0.3",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.400.0",
    "tailwind-merge": "^2.2.1",
    "tailwindcss-animate": "^1.0.7",
    "@vercel/analytics": "^1.2.2",
    "@vercel/speed-insights": "^1.0.10",
    "next-sitemap": "^4.2.3",
    "zod": "^3.23.8",
    "@next/mdx": "^15.0.0",
    "@types/mdx": "^2.0.10"
  },
  "devDependencies": {
    "typescript": "^5.4.3",
    "@types/node": "^20.14.10",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^8.57.0",
    "eslint-config-next": "15.0.0",
    "eslint-config-prettier": "^9.1.0",
    "prettier": "^3.3.3",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.14",
    "@tailwindcss/typography": "^0.5.16"
  },
  "engines": {
    "node": ">=18.17.0"
  }
}
```

### 🚀 **Vercel Deployment Optimizations**

```js:next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable edge runtime by default
  experimental: {
    runtime: 'edge',
  },
  
  // Configure page extensions to include MDX
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  // Optimize for Vercel
  output: 'standalone',
  
  images: {
    // Add remote patterns for Church Center and CDN hosts
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.churchcenter.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Enable ISR for future use
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

module.exports = withMDX(nextConfig)
```

### 📝 **Environment Configuration**

```bash:.env.example
# Site Configuration
SITE_URL=https://destinyokc.com

# Vercel Analytics (optional)
VERCEL_ANALYTICS_ID=

# Planning Center API (future use)
PCO_APPLICATION_ID=
PCO_SECRET=

# Feature Flags
FEATURES_GIVING_EMBED=false
FEATURES_EVENTS_FROM_ICS=false
FEATURES_FEATURED_EVENTS_FROM_API=false
```

### 🔧 **Enhanced Site Configuration with SEO**

```typescript:lib/config/site.config.ts
export const site = {
  name: "Destiny Church",
  campus: { city: "Oklahoma City", state: "OK" },
  serviceTimes: ["Sun 9:00a", "Sun 11:00a"],
  contactEmail: "info@destinychurch.org",
  address: "1234 Main St, Oklahoma City, OK 73101",
  phone: "(405) 555-0123",
  churchCenter: {
    base: "https://destinyokc.churchcenter.com",
    giving: "/giving",
    events: "/registrations",
    groups: "/groups",
    planAVisitForm: "/people/forms/00000",
    prayerForm: "/people/forms/00001",
  },
  socials: { 
    youtube: "https://youtube.com/destinyokc", 
    instagram: "https://instagram.com/destinyokc", 
    facebook: "https://facebook.com/destinyokc" 
  },
  external: {
    youVersion: "https://bible.com/events/123456",
    soundCloud: "https://soundcloud.com/destinyokc",
  },
  seo: {
    titleTemplate: "%s | Destiny Church",
    description: "A place where everyone belongs and everyone matters. Join us for worship, community, and spiritual growth in Oklahoma City.",
    ogImage: "/og-image.png",
    twitterHandle: "@destinyokc",
  }
} as const

export const FEATURES = {
  givingEmbed: false,
  eventsFromICS: false, // future
  featuredEventsFromAPI: false, // future
} as const

export type SiteConfig = typeof site
```

### 📄 **Enhanced Documentation**

```markdown:docs/CLONE-INSTRUCTIONS.md
# Clone Instructions for New Church

Follow these steps to set up this template for a new church in under 1 hour.

## Prerequisites

- Node.js 18.17.0 or higher
- pnpm (recommended) or npm
- Vercel account
- Church Center account

## Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/church-website-template.git new-church-name
cd new-church-name
```

## Step 2: Install Dependencies

```bash
pnpm install
```

## Step 3: Configure Church Information

### Update Site Configuration
Edit `lib/config/site.config.ts`:

```typescript
export const site = {
  name: "Your Church Name",
  campus: { city: "Your City", state: "ST" },
  serviceTimes: ["Sun 9:00a", "Sun 11:00a"],
  contactEmail: "info@yourchurch.com",
  address: "123 Main St, Your City, ST 12345",
  phone: "(555) 123-4567",
  churchCenter: {
    base: "https://yourchurch.churchcenter.com",
    giving: "/giving",
    events: "/registrations",
    groups: "/groups",
    planAVisitForm: "/people/forms/00000",
    prayerForm: "/people/forms/00001",
  },
  socials: { 
    youtube: "https://youtube.com/yourchurch", 
    instagram: "https://instagram.com/yourchurch", 
    facebook: "https://facebook.com/yourchurch" 
  },
  seo: {
    titleTemplate: "%s | Your Church Name",
    description: "Your church description here.",
    ogImage: "/og-image.png",
    twitterHandle: "@yourchurch",
  }
}
```

### Update Theme Configuration
Edit `lib/config/theme.config.ts`:

```typescript
export const theme = {
  colors: {
    primary: "#your-primary-color",
    secondary: "#your-secondary-color",
    // ... rest of colors
  },
  // ... rest of theme
}
```

## Step 4: Replace Assets

1. **Logo Files**
   - Replace `/public/logo-primary.svg` with your church logo
   - Replace `/public/logo-brand.svg` with your brand logo

2. **Social Media Images**
   - Replace `/public/og-image.png` (1200x630px)
   - Replace `/public/favicon.ico`

## Step 5: Test Locally

```bash
pnpm dev
```

Visit `http://localhost:3000` to verify everything works.

## Step 6: Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Configure for new church"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Set Environment Variables**
   In Vercel dashboard, add:
   ```
   SITE_URL=https://yourchurch.com
   ```

4. **Deploy**
   - Vercel will automatically build and deploy
   - Your site will be live at `your-project.vercel.app`

## Step 7: Custom Domain

1. **Add Domain in Vercel**
   - Go to your project settings
   - Add your custom domain
   - Vercel will provide DNS instructions

2. **Update DNS**
   - Follow Vercel's DNS instructions
   - Wait for propagation (up to 48 hours)

3. **Update SITE_URL**
   - Change `SITE_URL` to your custom domain
   - Redeploy if needed

## Step 8: Verify Deployment

Check these URLs work:
- ✅ `https://yourchurch.com` (homepage)
- ✅ `https://yourchurch.com/sitemap.xml`
- ✅ `https://yourchurch.com/robots.txt`
- ✅ `https://yourchurch.com/about`
- ✅ All Church Center links open correctly

## Troubleshooting

### Build Errors
```bash
pnpm build
pnpm typecheck
pnpm lint
```

### Common Issues
- **MDX not working**: Ensure `@next/mdx` is installed
- **Images not loading**: Check `next.config.js` remote patterns
- **Styling issues**: Verify Tailwind CSS is configured

### Support
- Check the [Content Checklist](./CONTENT-CHECKLIST.md)
- Review [Next.js documentation](https://nextjs.org/docs)
- Check [Vercel documentation](https://vercel.com/docs)

## Next Steps

After deployment:
1. Set up Google Analytics (optional)
2. Configure social media previews
3. Test all Church Center integrations
4. Train staff on content updates
```

### 🚀 **Vercel Deployment Checklist**

```markdown:docs/VERCEL-DEPLOYMENT.md
# Vercel Deployment Checklist

## Pre-Deployment

- [ ] `pnpm build` passes locally
- [ ] `pnpm typecheck` passes
- [ ] `pnpm lint` passes
- [ ] All Church Center links tested
- [ ] 404/500 pages styled
- [ ] Images use `next/image` with width/height
- [ ] No unnecessary "use client" directives

## Vercel Settings

### Environment Variables
```
SITE_URL=https://yourchurch.com
VERCEL_ANALYTICS_ID= (optional)
```

## 🎯 **Next Steps Breakdown**

### **Phase 1: Foundation (Complete)**
✅ Next.js 15 + Edge Runtime  
✅ Tailwind + shadcn/ui  
✅ Site configuration structure  
✅ Header/Footer components  
✅ MDX support  
✅ Error pages  

### **Phase 2: Core Pages (In Progress)**
 Complete remaining pages:
- `/giving` - Church Center integration
- `/events` - Event cards with Church Center links
- `/visit` - Service times + Plan a Visit CTA
- `/watch` - Optional streaming page

### **Phase 3: SEO & Deployment**
🔄 Implement:
- Per-route metadata
- Enhanced sitemap configuration
- Environment variable setup
- Vercel deployment optimization

### **Phase 4: Template Documentation**
🔄 Create:
- Content checklist
- Clone instructions
- Deployment guide
- Environment examples

### **Phase 5: Quality Assurance**
🔄 Final checks:
- Build verification
- Type checking
- Linting
- Manual testing
- Performance audit

### **Phase 6: Launch**
🔄 Deploy:
- Push to production
- Domain configuration
- Analytics setup
- Monitoring configuration

Would you like me to continue with Phase 2 (completing the core pages) or focus on a specific area?
