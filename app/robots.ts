import { baseUrl } from 'app/sitemap'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
