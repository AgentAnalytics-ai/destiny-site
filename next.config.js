const withMDX = require("@next/mdx")({ 
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  
  // 2025 Performance Optimizations
  experimental: {
    optimizePackageImports: ['@/components', '@/lib'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // Optimized Image Configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    remotePatterns: [
      { protocol: "https", hostname: "**.churchcenter.com" },
      { protocol: "https", hostname: "destinyokc.com" },
      { protocol: "https", hostname: "destinyokc.online.church" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  
  // Smart Redirects - 2025 Strategy
  async redirects() {
    const churchCenterUrl = process.env.CHURCH_CENTER_URL?.replace(/\/$/, "") || "https://destinyokc.churchcenter.com"
    
    return [
      {
        source: '/app',
        destination: churchCenterUrl,
        permanent: false,
      },
      // GIVING = Direct to Church Center (Fast Conversion)
      {
        source: '/give',
        destination: `${churchCenterUrl}/giving`,
        permanent: false,
      },
      // EVENTS = Custom page (Trust Building)
      // GROUPS = Custom page (Trust Building)
      // Removed redirects for /events and /groups to allow custom pages
    ]
  },
  
  // 2025 Compression & Performance
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = withMDX(nextConfig)
