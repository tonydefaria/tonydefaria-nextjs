/** @type {import("next").NextConfig} **/

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    images: {
      // minimumCacheTTL: 60,
      allowFutureImage: true,
      formats: ["image/avif", "image/webp"],
    }
  },
  images: {
    domains: ["hankyo-production.fra1.cdn.digitaloceanspaces.com"],
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
