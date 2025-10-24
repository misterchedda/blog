/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.mos.cms.futurecdn.net',
      },
      {
        protocol: 'https',
        hostname: '*.ign.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.vg247.com',
      },
      {
        protocol: 'https',
        hostname: '**.gamestar.de',
      },
      {
        protocol: 'https',
        hostname: '*.gnwcdn.com',
      },
      {
        protocol: 'https',
        hostname: '*.cgames.de',
      },
      {
        protocol: 'https',
        hostname: 'fullsync.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'images.ladbible.com',
      },
      {
        protocol: 'https',
        hostname: 'www.dsogaming.com',
      },
      {
        protocol: 'https',
        hostname: 'www.pcgamesn.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
}

module.exports = nextConfig
