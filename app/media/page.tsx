import Image from 'next/image'
import { baseUrl } from 'app/sitemap'

export const metadata = {
  title: 'Media Mentions',
  description: 'Featured coverage of my Cyberpunk 2077 mods across gaming news sites',
  openGraph: {
    title: 'Media Mentions',
    description: 'Featured coverage of my Cyberpunk 2077 mods across gaming news sites',
    url: `${baseUrl}/media`,
    siteName: "misterchedda's blog",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media Mentions',
    description: 'Featured coverage of my Cyberpunk 2077 mods across gaming news sites',
  },
}

interface MediaMention {
  publication: string
  title: string
  url: string
  date?: string
  logo?: string
  image?: string
  invertLogo?: boolean
}

interface YouTubeVideo {
  videoId: string
  url: string
  views: string
  title?: string
}

const mediaMentions: MediaMention[] = [
  {
    publication: 'IGN',
    title: 'Cyberpunk 2077 Now Boasts Its Own Take on the Wordle Phenomenon Thanks to One Clever Modder',
    url: 'https://www.ign.com/articles/cyberpunk-2077-now-boasts-its-own-take-on-the-wordle-phenomenon-thanks-to-one-clever-modder',
    logo: '/logos/ign.svg',
    image: 'https://sm.ign.com/t/ign_in/photo/c/cyberpunk-/cyberpunk-2077-now-boasts-its-own-take-on-the-wordle-phenome_rbrn.1920.jpg'
  },
  {
    publication: 'PC Gamer',
    title: 'Thanks to the Responsive NPCs mod, crowds in Cyberpunk 2077 can now react if you sprint nude through Night City\'s streets',
    url: 'https://www.pcgamer.com/games/rpg/thanks-to-the-responsive-npcs-mod-crowds-in-cyberpunk-2077-can-now-react-if-you-sprint-nude-through-night-citys-streets/',
    logo: '/logos/pcgamer.svg',
    image: 'https://cdn.mos.cms.futurecdn.net/ymhJ9vZMzikGHht2RKfHiU-2390-80.jpg'
  },
  {
    publication: 'VG247',
    title: 'Cyberpunk 2077 mod adds cat facts text service',
    url: 'https://www.vg247.com/cyberpunk-2077-mod-cat-facts-text-service',
    logo: '/logos/vg247.svg',
    image: 'https://assetsio.gnwcdn.com/cyberpunk-2077-mod-cat-facts-text-service-01.jpg?width=570&quality=85&format=jpg&dpr=2&auto=webp'
  },
  {
    publication: 'PC Gamer',
    title: 'Wordle comes to Cyberpunk 2077, only it\'s better because it accepts Night City slang like \'CHOOM\' and \'GONKS\'',
    url: 'https://www.pcgamer.com/games/rpg/wordle-comes-to-cyberpunk-2077-only-its-better-because-it-takes-slang-words-like-choom-and-gonks/',
    logo: '/logos/pcgamer.svg',
    image: 'https://cdn.mos.cms.futurecdn.net/9z4WhfivapsFfjKMz25Wm4-1920-80.jpg'
  },
  {
    publication: 'GameStar',
    title: 'Cyberpunk 2077: Mod macht\'s noch immersiver',
    url: 'https://www.gamestar.de/artikel/cyberpunk-2077-mod-machts-noch-immersiver,3436887.html',
    logo: '/logos/gamestar.svg',
    image: 'https://images.cgames.de/images/gamestar/293/cyberpunk-2077-fluchen_6365946.jpg'
  },
  {
    publication: 'Gaming Bible',
    title: 'Cyberpunk 2077 surprise "expansion" makes Night City feel more alive than ever',
    url: 'https://www.gamingbible.com/news/cyberpunk-2077-responsive-v-expansion-046837-20250723',
    image: 'https://images.ladbible.com/resize?type=webp&quality=70&width=1920&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltbc1876152fcd9f07/blt23db332ba124555a/6880eae2d5f7f510617b049e/cyberpunk_2077.jpg'    
  },
  {
    publication: 'Full Sync',
    title: 'Cyberpunk 2077\'s "More Responsive V" Mod',
    url: 'https://fullsync.co.uk/cyberpunk-2077s-more-responsive-v-mod/',
    image: 'https://fullsync.co.uk/wp-content/uploads/2025/07/responsive-v.jpg'    
  },

  {
    publication: 'PC Gamer',
    title: 'The best Cyberpunk 2077 mods',
    url: 'https://www.pcgamer.com/best-cyberpunk-2077-mods/#responsive-v-3',
    logo: '/logos/pcgamer.svg',
    image: 'https://cdn.mos.cms.futurecdn.net/DomtKXLB3XTP5PwJ3Kq49Q-1920-80.jpg'
  },
  {
    publication: 'DSO Gaming',
    title: 'This Cyberpunk 2077 mod allows V to react dynamically to open world events with contextual voice lines and animations',
    url: 'https://www.dsogaming.com/mods/this-cyberpunk-2077-mod-allows-v-to-react-dynamically-to-open-world-events-with-contextual-voice-lines-and-animations/',
    image: 'https://www.dsogaming.com/wp-content/uploads/2020/04/Cyberpunk-2077-new-feature.jpg'
  },
  {
    publication: 'PC Games',
    title: 'Cyberpunk 2077 mod makes Night City much more immersive',
    url: 'https://www.pcgamesn.com/cyberpunk-2077/immersive-npc-mod',
    image: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2024/07/cyberpunk-2077-immersive-npc-mod.jpg'
  },
]

const youtubeVideos: YouTubeVideo[] = [
  {
    videoId: 'nP1Wk7oalmU',
    url: 'https://www.youtube.com/watch?v=nP1Wk7oalmU',
    views: '170K',
    title: 'Top 10 Cyberpunk Mods',
  },
  {
    videoId: '-Agc4M-noRk',
    url: 'https://youtu.be/-Agc4M-noRk?t=724',
    views: '370K',
    title: 'Best Cyberpunk 2077 Mods',
  },
  {
    videoId: 'eZOcREa0AKQ',
    url: 'https://youtu.be/eZOcREa0AKQ?t=531',
    views: '270K',
    title: 'Must-Have Cyberpunk Mods',
  },
  {
    videoId: 'Cvx228_Joa4',
    url: 'https://youtu.be/Cvx228_Joa4?t=1115',
    views: '860K',
    title: 'Essential Cyberpunk 2077 Mods',
  },
  {
    videoId: 'knK4F-CPEe8',
    url: 'https://youtu.be/knK4F-CPEe8?t=145',
    views: '175K',
    title: 'Cyberpunk 2077 Mods You Need',
  },
  {
    videoId: 'h_KUgAJlUuo',
    url: 'https://www.youtube.com/watch?v=h_KUgAJlUuo&t=167s',
    views: '150K',
    title: 'Top Cyberpunk Mods',
  },
  {
    videoId: 'QutYjXd96ZU',
    url: 'https://www.youtube.com/watch?v=QutYjXd96ZU&t=268s',
    views: '30K',
    title: 'Best Mods for Cyberpunk',
  },
  {
    videoId: 'ATbt2j0SfZo',
    url: 'https://youtu.be/ATbt2j0SfZo?t=766',
    views: '202K',
    title: 'Cyberpunk Mods Guide',
  },
  {
    videoId: 'MFnL0ZjIpUY',
    url: 'https://youtu.be/MFnL0ZjIpUY?t=536',
    views: '90K',
    title: 'Cyberpunk 2077 Top Mods',
  },
  {
    videoId: 'z3aWIMqRJM8',
    url: 'https://www.youtube.com/watch?v=z3aWIMqRJM8',
    views: '270K',
    title: '5 Mods to Completely Overhaul Cyberpunk 2077',
  },
  {
    videoId: 'ztPtb7xREJE',
    url: 'https://www.youtube.com/watch?v=ztPtb7xREJE',
    views: '50K',
    title: 'Cyberpunk 2077 Mods That Gives Me The Urge To Touch Grass',
  },
  {
    videoId: 'w1fbzFqwoac',
    url: 'https://www.youtube.com/watch?v=w1fbzFqwoac',
    views: '25K',
    title: 'These Mods will make your Cyberpunk 2077 Experience COMPLETE!',
  },
]

export default function MediaPage() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        Media Mentions
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Coverage of my mods across gaming news sites
      </p>

      <div className="space-y-4">
        {mediaMentions.map((mention, index) => (
          <a
            key={index}
            href={mention.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group media-card"
          >
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-sm">
              {mention.image && (
                <div className="w-full h-48 bg-neutral-100 dark:bg-neutral-900 relative">
                  <Image
                    src={mention.image}
                    alt={mention.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {mention.logo ? (
                        <Image
                          src={mention.logo}
                          alt={mention.publication}
                          width={80}
                          height={20}
                          className={`h-5 w-auto opacity-90 ${mention.invertLogo ? 'dark:invert' : ''}`}
                        />
                      ) : (
                        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                          {mention.publication}
                        </span>
                      )}
                    </div>
                    <h2 className="text-neutral-900 dark:text-neutral-100 font-medium leading-snug group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                      {mention.title}
                    </h2>
                  </div>
                <svg 
                  className="flex-shrink-0 w-4 h-4 text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* YouTube Videos Section */}
      <div className="mt-16">
        <h2 className="mb-2 text-2xl font-semibold tracking-tighter">
          YouTube Features
        </h2>
        <p className="mb-8 text-neutral-600 dark:text-neutral-400">
          My mods featured on YouTube
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {youtubeVideos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group media-card"
            >
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-sm">
                <div className="relative w-full aspect-video bg-neutral-100 dark:bg-neutral-900">
                  <Image
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title || 'YouTube video'}
                    fill
                    className="object-cover"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-50 opacity-0 transition-opacity">
                    <div className="w-8 h-8 opacity-70 bg-red-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                      {video.views} views
                    </span>
                  </div>
                  {video.title && (
                    <p className="text-neutral-900 dark:text-neutral-100 text-sm font-medium leading-snug group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                      {video.title}
                    </p>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Check out my mods on{' '}
          <a
            href="https://next.nexusmods.com/profile/MisterChedda/mods"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Nexus Mods
          </a>
        </p>
      </div>
    </section>
  )
}
