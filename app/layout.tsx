import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "MisterChedda | Dev Workspace",
    template: '%s | MisterChedda',
  },
  description: "Creator, developer, and modder. Building The Third Rail - a cooperative horror extraction shooter.",
  openGraph: {
    title: "MisterChedda | Dev Workspace",
    description: "Creator, developer, and modder. Building The Third Rail - a cooperative horror extraction shooter.",
    url: baseUrl,
    siteName: "MisterChedda",
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    apple: '/icons/apple-touch-icon.png',
    shortcut: ['/icons/favicon.ico'],
  },
  manifest: '/icons/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-paper',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <main className="flex-1 min-w-0 flex flex-col p-4 md:p-8">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
