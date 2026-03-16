const isProd = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/antigra' : '',
  assetPrefix: isProd ? '/antigra/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
