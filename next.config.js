const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove any static export settings
  // output: 'export', // REMOVE THIS IF IT EXISTS
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.churchcenter.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
