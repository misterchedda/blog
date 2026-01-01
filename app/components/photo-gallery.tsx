'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { Screenshot } from 'app/virtual-photography/screenshots'

interface PhotoGalleryProps {
  screenshots: Screenshot[]
}

export function PhotoGallery({ screenshots }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Group screenshots by game
  const gameGroups = screenshots.reduce((acc, screenshot) => {
    if (!acc[screenshot.game]) {
      acc[screenshot.game] = []
    }
    acc[screenshot.game].push(screenshot)
    return acc
  }, {} as Record<string, Screenshot[]>)

  const allScreenshots = screenshots

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!selectedImage) return
    
    const currentIndex = allScreenshots.findIndex(s => s.id === selectedImage.id)
    
    if (e.key === 'Escape') {
      setSelectedImage(null)
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      setIsLoading(true)
      setSelectedImage(allScreenshots[currentIndex - 1])
    } else if (e.key === 'ArrowRight' && currentIndex < allScreenshots.length - 1) {
      setIsLoading(true)
      setSelectedImage(allScreenshots[currentIndex + 1])
    }
  }, [selectedImage, allScreenshots])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  const openLightbox = (screenshot: Screenshot) => {
    setIsLoading(true)
    setSelectedImage(screenshot)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return
    const currentIndex = allScreenshots.findIndex(s => s.id === selectedImage.id)
    const newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1
    
    if (newIndex >= 0 && newIndex < allScreenshots.length) {
      setIsLoading(true)
      setSelectedImage(allScreenshots[newIndex])
    }
  }

  if (screenshots.length === 0) {
    return (
      <div className="text-center py-16 text-neutral-500 dark:text-neutral-400">
        <p>No screenshots yet. Add some to get started!</p>
        <p className="text-sm mt-2">
          Add images to <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">/public/screenshots/</code>
        </p>
      </div>
    )
  }

  return (
    <>
      {/* Grids grouped by game */}
      <div className="space-y-8">
        {Object.entries(gameGroups).map(([game, gameScreenshots]) => {
          // Build dynamic grid with anchor positioning
          const gridItems: JSX.Element[] = []
          let anchorCount = 0
          
          gameScreenshots.forEach((screenshot, index) => {
            const isAnchor = screenshot.anchor
            
            // Determine anchor position: alternates between left (col 1-2) and middle-right (col 2-3)
            const anchorPosition = anchorCount % 2 === 0 ? 'left' : 'right'
            
            if (isAnchor) {
              anchorCount++
              gridItems.push(
                <button
                  key={screenshot.id}
                  onClick={() => openLightbox(screenshot)}
                  className={`group relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-500 ${
                    anchorPosition === 'left' ? 'col-span-2 row-span-2' : 'col-span-2 row-span-2'
                  }`}
                  style={anchorPosition === 'right' ? { gridColumn: '2 / 4', gridRow: `span 2` } : {}}
                >
                  <Image
                    src={screenshot.thumb}
                    alt={screenshot.title || `${screenshot.game} screenshot`}
                    fill
                    sizes="(max-width: 768px) 66vw, 66vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay with metadata */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      {screenshot.title && (
                        <p className="text-white text-xs font-medium truncate">
                          {screenshot.title}
                        </p>
                      )}
                      {screenshot.comment && (
                        <p className="text-white/60 text-xs truncate">
                          {screenshot.comment}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              )
            } else {
              gridItems.push(
                <button
                  key={screenshot.id}
                  onClick={() => openLightbox(screenshot)}
                  className="group relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                >
                  <Image
                    src={screenshot.thumb}
                    alt={screenshot.title || `${screenshot.game} screenshot`}
                    fill
                    sizes="(max-width: 768px) 33vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay with metadata */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      {screenshot.title && (
                        <p className="text-white text-xs font-medium truncate">
                          {screenshot.title}
                        </p>
                      )}
                      {screenshot.comment && (
                        <p className="text-white/60 text-xs truncate">
                          {screenshot.comment}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              )
            }
          })
          
          return (
            <div key={game}>
              {/* <h2 className="text-lg font-semibold mb-3">{game}</h2> */}
              <div className="grid grid-cols-3 auto-rows-auto gap-2">
                {gridItems}
              </div>
            </div>
          )
        })}
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation arrows */}
          {allScreenshots.findIndex(s => s.id === selectedImage.id) > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev') }}
              className="absolute left-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          {allScreenshots.findIndex(s => s.id === selectedImage.id) < allScreenshots.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next') }}
              className="absolute right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Next image"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Full-size image */}
          <div 
            className="relative max-w-[95vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}
            <Image
              src={selectedImage.full}
              alt={selectedImage.title || `${selectedImage.game} screenshot`}
              width={1920}
              height={1080}
              className="max-w-full max-h-[90vh] object-contain"
              quality={95}
              priority
              onLoad={() => setIsLoading(false)}
            />
            
            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-baseline gap-3">
                <p className="text-white font-medium">{selectedImage.game}</p>
                {selectedImage.comment && (
                  <p className="text-white/60 text-sm">{selectedImage.comment}</p>
                )}
              </div>
              {selectedImage.title && (
                <p className="text-white/70 text-sm">{selectedImage.title}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
