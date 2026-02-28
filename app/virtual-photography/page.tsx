import { baseUrl } from 'app/sitemap'
import { PhotoGallery } from 'app/components/photo-gallery'
import { screenshots } from './screenshots'
import { Navbar } from 'app/components/nav'

export const metadata = {
  title: 'Virtual Photography',
  description: 'Screenshots and photo mode captures from games',
  openGraph: {
    title: 'Virtual Photography',
    description: 'Screenshots and photo mode captures from games',
    url: `${baseUrl}/virtual-photography`,
    siteName: "MisterChedda",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Photography',
    description: 'Screenshots and photo mode captures from games',
  },
}

export default function VirtualPhotographyPage() {
  return (
    <div className="internal-page">
      <Navbar />
      <section className="content-section">
        <h1 className="page-title">Virtual Photography</h1>
        <p className="page-subtitle">Snaps from games</p>

        <PhotoGallery screenshots={screenshots} />

        <div className="gallery-tip">
          <p>Tip: Use arrow keys to navigate, Esc to close</p>
        </div>
      </section>
    </div>
  )
}