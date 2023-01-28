/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_WORDPRESS_API_URL.split("//")[1]]
  }
};

module.exports = nextConfig;
