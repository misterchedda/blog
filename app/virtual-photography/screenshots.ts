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
    id: 'cyberpunk_003',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_003.png',
    full: '/screenshots/full/cyberpunk_003.png',
  },
  { 
    id: 'cyberpunk_019',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_019.png',
    full: '/screenshots/full/cyberpunk_019.png',
    anchor: true,
  },
  { 
    id: 'cyberpunk_005',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_005.png',
    full: '/screenshots/full/cyberpunk_005.png',
  },

  { 
    id: 'cyberpunk_022',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_022.png',
    full: '/screenshots/full/cyberpunk_022.png',
  },
  { 
    id: 'cyberpunk_008',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_008.png',
    full: '/screenshots/full/cyberpunk_008.png',
    comment: 'Still from my mod "TPP Rooftop Hangout" (Custom quest - "One More Hour")',
  },
  { 
    id: 'cyberpunk_009',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_009.png',
    full: '/screenshots/full/cyberpunk_009.png',
    comment: 'This was while I was making an unreleased Evangelion-inspired mod',
  },
    { 
    id: 'cyberpunk_017',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_017.png',
    full: '/screenshots/full/cyberpunk_017.png',
    anchor: true,
  },
    { 
    id: 'cyberpunk_010',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_010.png',
    full: '/screenshots/full/cyberpunk_010.png',
    comment: 'This was while I was making an unreleased Evangelion-inspired mod',
  },
    { 
    id: 'cyberpunk_001',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_001.png',
    full: '/screenshots/full/cyberpunk_001.png',
  },
  { 
    id: 'cyberpunk_011',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_011.png',
    full: '/screenshots/full/cyberpunk_011.png',
  },
  { 
    id: 'cyberpunk_012',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_012.png',
    full: '/screenshots/full/cyberpunk_012.png',
  },
  { 
    id: 'cyberpunk_013',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_013.png',
    full: '/screenshots/full/cyberpunk_013.png',
  },
      { 
    id: 'cyberpunk_007',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_007.png',
    full: '/screenshots/full/cyberpunk_007.png',
  },
  { 
    id: 'cyberpunk_014',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_014.png',
    full: '/screenshots/full/cyberpunk_014.png',
  },
    { 
    id: 'cyberpunk_002',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_002.png',
    full: '/screenshots/full/cyberpunk_002.png',
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
  },

  { 
    id: 'cyberpunk_004',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_004.png',
    full: '/screenshots/full/cyberpunk_004.png',
  },
    { 
    id: 'cyberpunk_021',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_021.png',
    full: '/screenshots/full/cyberpunk_021.png',
  },
    {
    id: 'metro2033-001',
    game: 'Metro 2033',
    thumb: '/screenshots/thumbs/metro2033_001.jpg',
    full: '/screenshots/full/metro2033_001.jpg',
  },
    { 
    id: 'cyberpunk_006',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_006.png',
    full: '/screenshots/full/cyberpunk_006.png',
    comment: 'Still from my mod "TPP Rooftop Hangout" (Custom quest - "One More Hour")',
    anchor: true,
  },
  { 
    id: 'cyberpunk_018',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_018.png',
    full: '/screenshots/full/cyberpunk_018.png',
  },

  { 
    id: 'cyberpunk_020',
    game: 'Cyberpunk 2077',
    thumb: '/screenshots/thumbs/cyberpunk_020.png',
    full: '/screenshots/full/cyberpunk_020.png',
  },
  

  {
    id: 'metro2033-002',
    game: 'Metro 2033',
    thumb: '/screenshots/thumbs/metro2033_002.jpg',
    full: '/screenshots/full/metro2033_002.jpg',
  },


]

// Helper to get unique games for filtering
export function getUniqueGames(shots: Screenshot[]): string[] {
  return Array.from(new Set(shots.map(s => s.game))).sort()
}
