/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['api.planningcenteronline.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
