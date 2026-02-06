import { baseUrl } from 'app/sitemap'
import Link from 'next/link'

export const metadata = {
  title: "MisterChedda | Dev Workspace",
  description: "Creator, developer, and modder. Building The Third Rail - a cooperative horror extraction shooter.",
  openGraph: {
    title: "MisterChedda | Dev Workspace",
    description: "Creator, developer, and modder. Building The Third Rail - a cooperative horror extraction shooter.",
    url: baseUrl,
    siteName: "MisterChedda",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MisterChedda | Dev Workspace",
    description: "Creator, developer, and modder. Building The Third Rail - a cooperative horror extraction shooter.",
  },
}

export default function Page() {
  return (
    <div className="workspace-container">
      {/* MAIN WORKSPACE GRID */}
      <div className="workspace-grid">
        {/* LEFT COLUMN (MAIN CONTENT) */}
        <div className="left-col">
          
          {/* TOP ROW: BRAND CARD + HERO CARD */}
          <div className="hero-row">
            {/* BRAND CARD */}
            <section className="module theme-brand">
              {/* <div className="module-tab">00 // IDENTITY</div> */}
              <div className="module-content brand-card-content bg-yellow-300">
                <span className="brand-tag">CREATOR // DEV // MODDER</span>
                <h1 className="brand-title text-left">Mister<br />Chedda</h1>
              </div>
            </section>

            {/* 01. THE GAME (HERO CARD) */}
            <section className="module theme-game hero-card">
            <div className="module-tab">01 // THE THIRD RAIL</div>
            <div className="module-content">
              <div className="game-layout">
                {/* TOP: The Visual (GIF Placeholder) - Full Width */}
                <div className="game-visual-container">
                  <div className="cam-overlay">● REC [00:14:02]</div>
                  <div className="cam-corners"></div>
                  <div className="game-visual-placeholder">
                    [ GAMEPLAY<br />GIF / VIDEO<br />LOOP ]
                  </div>
                </div>

                {/* BOTTOM: Text Info */}
                <div className="game-info">
                  <span className="game-badge">
                    ⚠️ EARLY ACCESS ALPHA
                  </span>
                  <h2 className="hero-title">THE THIRD RAIL</h2>
                  <h3 className="hero-tagline">&ldquo;Don&apos;t let them hear you breathe.&rdquo;</h3>
                  
                  <p className="game-description">
                    A cooperative horror extraction shooter. Use your LIDAR scanner to navigate the darkness, but beware—the monsters track sound, including your microphone input.
                  </p>

                  <div className="devlog-notes">
                    <strong>Latest Devlog Notes:</strong>
                    <ul>
                      <li>Implemented microphone proximity triggers.</li>
                      <li>New lighting engine for &apos;The Sewers&apos;.</li>
                      <li>Fixed T-Pose bug on death animation.</li>
                    </ul>
                  </div>

                  <div className="btn-group">
                    <Link href="/blog" className="btn">View Devlogs</Link>
                    <a href="#" className="btn btn-outline">Wishlist on Steam</a>
                  </div>
                </div>
              </div>
            </div>
            </section>
          </div>

          {/* 02 & 03: MODS AND VIDEOS */}
          <div className="split-row">
            {/* MODS */}
            <section className="module theme-mods">
              <div className="module-tab">02 // MOD DEPOT</div>
              <div className="module-content">
                <h3 className="section-title">FILE ARCHIVE</h3>
                <p className="section-subtitle">Cyberpunk 2077, Lethal Company, and other experiments.</p>
                
                <ul className="mod-list">
                  <li className="mod-item">
                    <span>CP2077: Responsive NPCs</span>
                    <a href="https://www.nexusmods.com/cyberpunk2077/mods/14800" target="_blank" rel="noopener noreferrer" className="mod-link">[DOWNLOAD]</a>
                  </li>
                  <li className="mod-item">
                    <span>CP2077: Responsive V</span>
                    <a href="https://www.nexusmods.com/cyberpunk2077/mods/22694" target="_blank" rel="noopener noreferrer" className="mod-link">[DOWNLOAD]</a>
                  </li>
                  <li className="mod-item">
                    <span>CP2077: Nitrous</span>
                    <a href="https://www.nexusmods.com/cyberpunk2077/mods/20675" target="_blank" rel="noopener noreferrer" className="mod-link">[DOWNLOAD]</a>
                  </li>
                </ul>
                <Link href="/about" className="btn btn-outline btn-full">VIEW ALL MODS</Link>
              </div>
            </section>

            {/* VIDEOS */}
            <section className="module theme-video">
              <div className="module-tab">03 // BROADCAST</div>
              <div className="module-content">
                <h3 className="section-title">LATEST UPLOAD</h3>
                
                <div className="video-thumb">▶</div>
                
                <h4 className="video-title">How I broke the physics engine</h4>
                <p className="video-description">A deep dive into the ragdoll mechanics of The Third Rail.</p>
                
                <a href="#" className="btn btn-video">WATCH CHANNEL</a>
              </div>
            </section>
          </div>
        </div>

        {/* RIGHT COLUMN (SIDEBAR) */}
        <aside className="right-col">
          <section className="module theme-comm">
            <div className="module-tab">04 // COMMUNITY</div>
            <div className="module-content">
              <div className="discord-box">
                <h3 className="discord-title">THE CHEESE FACTORY</h3>
                <p className="discord-subtitle">Official Community Server</p>
                <div className="discord-online">● 1,204 Online</div>
              </div>
              <a href="#" className="btn btn-comm btn-full">JOIN DISCORD</a>

              <hr className="divider" />

              <h3 className="poll-title">COMMUNITY VOTE</h3>
              <p className="poll-subtitle">What should I prioritize next?</p>

              <div className="poll-option">
                <div className="poll-header">
                  <span>VR Support</span>
                  <span>65%</span>
                </div>
                <div className="poll-bar">
                  <div className="poll-fill" style={{ width: '65%' }}></div>
                </div>
              </div>

              <div className="poll-option">
                <div className="poll-header">
                  <span>New Map: Sewers</span>
                  <span>25%</span>
                </div>
                <div className="poll-bar">
                  <div className="poll-fill poll-fill-medium" style={{ width: '25%' }}></div>
                </div>
              </div>

              <div className="poll-option">
                <div className="poll-header">
                  <span>Vehicle Physics</span>
                  <span>10%</span>
                </div>
                <div className="poll-bar">
                  <div className="poll-fill poll-fill-low" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}
