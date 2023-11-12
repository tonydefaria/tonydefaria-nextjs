/** @type {import("next").NextConfig} **/

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hankyo-production.fra1.cdn.digitaloceanspaces.com',
        port: '',
        pathname: '/**',
      },
    ],
    deviceSizes: [240, 360, 480, 640, 750, 828, 960, 1080, 1200, 1440, 1920, 2048, 3840],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
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
