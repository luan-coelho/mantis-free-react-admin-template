/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@fontsource/inter', '@fontsource/poppins', '@fontsource/public-sans', '@fontsource/roboto'],
  eslint: {
    ignoreDuringBuilds: true
  },
  swcMinify: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig
