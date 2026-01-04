export interface Screenshot {
  id: string
  game: string
  thumb: string  // Thumbnail path (small, optimized)
  full: string   // Full resolution path
  title?: string
  date?: string
  comment?: string  // Optional comment to display in lightbox
  anchor?: boolean  // If true, this image spans 2x2 grid space
}

// Screenshots data - add your screenshots here
// Thumbnails should be ~400px wide, ~50KB max
// Full images can be original resolution
export const screenshots: Screenshot[] = [
  { 
    id: 'cyberpunk_000',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_000.png',
    full: '/screenshots/full/cyberpunk_000.png',
    comment: 'V(isi)',
  },
  { 
    id: 'cyberpunk_001',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_001.png',
    full: '/screenshots/full/cyberpunk_001.png',
  },
  { 
    id: 'cyberpunk_002',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_002.png',
    full: '/screenshots/full/cyberpunk_002.png',
  },
    { 
    id: 'cyberpunk_005',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_005.png',
    full: '/screenshots/full/cyberpunk_005.png',
    anchor: true,
  },
  { 
    id: 'cyberpunk_003',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_003.png',
    full: '/screenshots/full/cyberpunk_003.png',
  },
  { 
    id: 'cyberpunk_004',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_004.png',
    full: '/screenshots/full/cyberpunk_004.png',
  },

  { 
    id: 'cyberpunk_006',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_006.png',
    full: '/screenshots/full/cyberpunk_006.png',
  },
  {
  id: 'cyberpunk_69',
  game: 'Cyberpunk 2077',
  thumb: '/screenshots/thumbs/cyberpunk_69.png',
  full: '/screenshots/full/cyberpunk_69.png',
  anchor: true,
},
  { 
    id: 'cyberpunk_007',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_007.png',
    full: '/screenshots/full/cyberpunk_007.png',
  },
  { 
    id: 'cyberpunk_009',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_009.png',
    full: '/screenshots/full/cyberpunk_009.png',
  },
  { 
    id: 'cyberpunk_011',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_011.png',
    full: '/screenshots/full/cyberpunk_011.png',
  },
  { 
    id: 'cyberpunk_013',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_013.png',
    full: '/screenshots/full/cyberpunk_013.png',
  },
  { 
    id: 'cyberpunk_014',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_014.png',
    full: '/screenshots/full/cyberpunk_014.png',
    comment: 'Still from my mod "TPP Rooftop Hangout" (Custom quest - "One More Hour")',
    anchor: true,
  },
  { 
    id: 'cyberpunk_015',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_015.png',
    full: '/screenshots/full/cyberpunk_015.png',
  },
  { 
    id: 'cyberpunk_016',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_016.png',
    full: '/screenshots/full/cyberpunk_016.png',
    comment: 'Still from my mod "TPP Rooftop Hangout" (Custom quest - "One More Hour")',
  },
  { 
    id: 'cyberpunk_017',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_017.png',
    full: '/screenshots/full/cyberpunk_017.png',
    comment: 'This was while I was making an unreleased Evangelion-inspired mod',
  },
  { 
    id: 'cyberpunk_018',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_018.png',
    full: '/screenshots/full/cyberpunk_018.png',
    comment: 'This was while I was making an unreleased Evangelion-inspired mod',
  },
  { 
    id: 'cyberpunk_019',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_019.png',
    full: '/screenshots/full/cyberpunk_019.png',
  },
  { 
    id: 'cyberpunk_020',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_020.png',
    full: '/screenshots/full/cyberpunk_020.png',
  },
  { 
    id: 'cyberpunk_021',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_021.png',
    full: '/screenshots/full/cyberpunk_021.png',
  },
  { 
    id: 'cyberpunk_022',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_022.png',
    full: '/screenshots/full/cyberpunk_022.png',
  },

  { 
    id: 'cyberpunk_024',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_024.png',
    full: '/screenshots/full/cyberpunk_024.png',
  },
  { 
    id: 'cyberpunk_025',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_025.png',
    full: '/screenshots/full/cyberpunk_025.png',
  },
  { 
    id: 'cyberpunk_026',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_026.png',
    full: '/screenshots/full/cyberpunk_026.png',
  },
  { 
    id: 'cyberpunk_027',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_027.png',
    full: '/screenshots/full/cyberpunk_027.png',
    anchor: true,
  },
  { 
    id: 'cyberpunk_028',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_028.png',
    full: '/screenshots/full/cyberpunk_028.png',
  },
  { 
    id: 'cyberpunk_029',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_029.png',
    full: '/screenshots/full/cyberpunk_029.png',
  },

]

// Helper to get unique games for filtering
export function getUniqueGames(shots: Screenshot[]): string[] {
  return Array.from(new Set(shots.map(s => s.game))).sort()
}
