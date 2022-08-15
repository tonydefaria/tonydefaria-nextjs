/** @type {import("next").NextConfig} **/
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  images: {
    domains: ["hankyo-production.fra1.cdn.digitaloceanspaces.com"],
  },
}

module.exports = nextConfig
