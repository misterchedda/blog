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
      <section>
        <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
          Virtual Photography
        </h1>
        <p className="mb-8 text-neutral-600 dark:text-neutral-400">
          Snaps from games
        </p>

        <PhotoGallery screenshots={screenshots} />

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            Tip: Use arrow keys to navigate, Esc to close
          </p>
        </div>
      </section>
    </div>
  )
}