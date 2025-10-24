import { BlogPosts } from 'app/components/posts'
import { FeaturedMods } from 'app/components/featured-mods'
import { baseUrl } from 'app/sitemap'

export const metadata = {
  title: "misterchedda's blog",
  description: "Modder and tools developer. Built quest/scene editors for WolvenKit and created mods with 2M+ unique downloads for Cyberpunk 2077.",
  openGraph: {
    title: "misterchedda's blog",
    description: "Modder and tools developer. Built quest/scene editors for WolvenKit and created mods with 2M+ unique downloads for Cyberpunk 2077.",
    url: baseUrl,
    siteName: "misterchedda's blog",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "misterchedda's blog",
    description: "Modder and tools developer. Built quest/scene editors for WolvenKit and created mods with 2M+ unique downloads for Cyberpunk 2077.",
  },
}

export default function Page() {
  return (
    <section>
      {/* Intro */}
      <div className="mb-12">
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Modder and tools developer. Built quest/scene editors for <a href="https://github.com/WolvenKit/WolvenKit" target="_blank" rel="noopener noreferrer" className="underline">WolvenKit</a> and created <a href="https://next.nexusmods.com/profile/MisterChedda/mods" target="_blank" rel="noopener noreferrer" className="underline">mods</a> with 2M+ unique downloads for Cyberpunk 2077.
        </p>
      </div>

      {/* Featured Mods */}
      <div className="mb-16">
        <h2 className="mb-6 text-xl font-semibold tracking-tight">
          Featured Mods
        </h2>
        <FeaturedMods />
        <a
          href="https://next.nexusmods.com/profile/MisterChedda/mods"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          View all mods →
        </a>
      </div>

      {/* Blog Posts */}
      <div className="mb-8">
        <h2 className="mb-6 text-xl font-semibold tracking-tight">
          Write-ups
        </h2>
        <BlogPosts />
      </div>
    </section>
  )
}
