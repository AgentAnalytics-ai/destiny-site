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
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.churchcenter.com" },
      { protocol: "https", hostname: "destinyokc.com" },
      { protocol: "https", hostname: "destinyokc.online.church" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "drive.google.com" },
    ],
  },
  async redirects() {
    const churchCenterUrl = process.env.CHURCH_CENTER_URL?.replace(/\/$/, "") || "https://destinyokc.churchcenter.com"
    
    return [
      {
        source: '/app',
        destination: churchCenterUrl,
        permanent: false,
      },
      {
        source: '/give',
        destination: `${churchCenterUrl}/giving`,
        permanent: false,
      },
      {
        source: '/events',
        destination: `${churchCenterUrl}/calendar`,
        permanent: false,
      },
      {
        source: '/groups',
        destination: `${churchCenterUrl}/groups`,
        permanent: false,
      },
    ]
  },
}

module.exports = withMDX(nextConfig)
