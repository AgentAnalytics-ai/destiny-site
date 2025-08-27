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
    ],
  },
}

module.exports = withMDX(nextConfig)
