/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.medium.com"
      }
    ]
  }
}

module.exports = nextConfig
