/** @type {import("next").NextConfig} **/

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    images: {
      // minimumCacheTTL: 60,
      allowFutureImage: true,
    }
  },
  images: {
    domains: ["hankyo-production.fra1.cdn.digitaloceanspaces.com"],
    deviceSizes: [240, 360, 480, 640, 750, 828, 960, 1080, 1200, 1440, 1920, 2048, 3840],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|avif|webp)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig
