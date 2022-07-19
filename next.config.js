/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  // },
  experimental: {
    images: {
      unoptimized: true,
      allowFutureImage: true
    }
  }
}
// images.unoptimized = true
module.exports = nextConfig
