/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import './src/env.js'

/** @type {import("next").NextConfig} */
const config = {
  // experimental: {
  //   turbo: {},
  // },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*'
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*'
      },
      {
        source: '/ingest/decide',
        destination: 'https://us.i.posthog.com/decide'
      }
    ]
  }
}

export default config
