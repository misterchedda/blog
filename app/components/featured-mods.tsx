'use client'

import Image from 'next/image'
import { useState } from 'react'

interface FeaturedMod {
  name: string
  tagline: string
  description: string
  image: string
  downloads: string
  endorsements: string
  url: string
}

const featuredMods: FeaturedMod[] = [
  {
    name: 'Responsive NPCs',
    tagline: 'Dynamic NPC reactions: what you wear, drive, and do matters',
    description: 'Solved the "reactive crowd" challenge by layering multiple detection systems: clothing affiliation (±60% detection), vehicle context, combat history, and social norms. NPCs now actually see what you\'re doing - addressing the immersion break that happens when open-world crowds ignore player actions.',
    image: '/images/featured-mods/responsivenpc.png',
    downloads: '290K+',
    endorsements: '4.0K+',
    url: 'https://www.nexusmods.com/cyberpunk2077/mods/14800',
  },
  {
    name: 'Responsive V',
    tagline: 'Dynamic NPC reactions: what you wear, drive, and do matters',
    description: 'Addressed the "silent protagonist" problem by making V actually respond to world events using unused voice lines already in the game files. Built an escalation system so reactions intensify naturally - light bumps get grunts, repeated harassment gets the finger. Turns player character from passive camera into someone who exists in Night City.',
    image: '/images/featured-mods/responsivev.png',
    downloads: '130K+',
    endorsements: '1.1K+',
    url: 'https://www.nexusmods.com/cyberpunk2077/mods/22694',
  },
  {
    name: 'Nitrous',
    tagline: 'NOS system with immersive integration into Night City',
    description: 'Architected a universal vehicle boost system that automatically supports 100+ vanilla and modded vehicles with zero configuration. Built proper game state integration (exhaust VFX on existing hardpoints, designed immersive HUD widgets) and exposed a full tuning API via tweak records.',
    image: '/images/featured-mods/nitrous.png',
    downloads: '60K+',
    endorsements: '500+',
    url: 'https://www.nexusmods.com/cyberpunk2077/mods/20675',
  }
]

export function FeaturedMods() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {featuredMods.map((mod, index) => (
        <div
          key={index}
          className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image - 16:9 aspect ratio */}
            <div className="relative w-full md:w-80 aspect-video bg-neutral-100 dark:bg-neutral-900 flex-shrink-0">
              <Image
                src={mod.image}
                alt={mod.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    {mod.name}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                    {mod.tagline}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-4 mb-3">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {mod.downloads}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {mod.endorsements}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="relative">
                <p
                  className={`text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed ${
                    expandedIndex === index ? '' : 'line-clamp-2'
                  }`}
                >
                  {mod.description}
                </p>
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 mt-2 transition-colors"
                >
                  {expandedIndex === index ? 'Show less' : 'Read more'}
                </button>
              </div>

              {/* Link */}
              <a
                href={mod.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-sm text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
              >
                View on {mod.url.includes('github') ? 'GitHub' : 'Nexus Mods'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
