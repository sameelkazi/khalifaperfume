import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MorphingText } from './ui/liquid-text'

export const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Disable body scrolling while loading
    document.body.style.overflow = 'hidden'

    let progressTimer: NodeJS.Timeout
    let currentProgress = 0

    // List of key images/videos to check
    const mediaElements = Array.from(document.querySelectorAll('img, video'))
    let loadedMediaCount = 0

    const handleMediaLoaded = () => {
      loadedMediaCount++
    }

    mediaElements.forEach(element => {
      if (element.tagName === 'IMG') {
        const img = element as HTMLImageElement
        if (img.complete) {
          handleMediaLoaded()
        } else {
          img.addEventListener('load', handleMediaLoaded)
          img.addEventListener('error', handleMediaLoaded)
        }
      } else if (element.tagName === 'VIDEO') {
        const video = element as HTMLVideoElement
        if (video.readyState >= 3) {
          handleMediaLoaded()
        } else {
          video.addEventListener('canplaythrough', handleMediaLoaded)
          video.addEventListener('error', handleMediaLoaded)
        }
      }
    })

    const tick = () => {
      const mediaRatio = mediaElements.length > 0 ? (loadedMediaCount / mediaElements.length) : 1
      const targetFromMedia = Math.floor(mediaRatio * 85) // Go up to 85% based on actual media
      
      if (currentProgress < targetFromMedia) {
        currentProgress += Math.max(1, Math.floor((targetFromMedia - currentProgress) / 5))
      } else if (currentProgress < 99) {
        currentProgress += 1
      } else {
        currentProgress = 100
      }

      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(progressTimer)
        setTimeout(() => {
          setVisible(false)
          document.body.style.overflow = ''
        }, 800)
      }
    }

    progressTimer = setInterval(tick, 40)

    return () => {
      clearInterval(progressTimer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0c0501] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle gold luxury background pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="loader-geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <polygon points="30,3 57,18 57,48 30,63 3,48 3,18" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#loader-geo)" />
            </svg>
          </div>

          <div className="flex flex-col items-center w-full max-w-md px-6 z-10">
            {/* Crown Logo icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="mb-8"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-[#C9A84C]">
                <path
                  d="M2 4L6 9L12 3L18 9L22 4V20H2V4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </motion.div>

            {/* Liquid Morphing Text */}
            <div className="h-20 md:h-24 w-full flex items-center justify-center overflow-hidden">
              <MorphingText
                texts={["KHALIFA", "LUXURY ATTARS", "PURE OUD", "ARABIAN SOUL", "ELEGANCE"]}
                className="text-[#C9A84C] font-serif tracking-widest text-3xl md:text-5xl uppercase font-light"
              />
            </div>

            {/* Progress Container */}
            <div className="w-full mt-10 flex flex-col items-center gap-3">
              {/* Progress track */}
              <div className="w-full h-[2px] bg-[#C9A84C]/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#8a6f3e] via-[#C9A84C] to-[#f2dfb3]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>

              {/* Progress counter */}
              <div className="flex justify-between w-full text-[10px] uppercase tracking-widest font-mono text-[#A89060]">
                <span>Preloading Experience</span>
                <span className="text-[#C9A84C] font-semibold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
