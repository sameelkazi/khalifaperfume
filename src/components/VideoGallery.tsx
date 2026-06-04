import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { Play, Pause } from 'lucide-react'
import './VideoGallery.css'

interface VideoItem {
  id: number
  src: string
  poster: string
  title: string
}

const videos: VideoItem[] = [
  {
    id: 1,
    src: '/videoplayback.mp4',
    poster: '/unnamed (5).webp',
    title: 'Purple Oud Impression'
  },
  {
    id: 2,
    src: '/videoplayback (1).mp4',
    poster: '/unnamed.webp',
    title: 'Musk Khalifa Display'
  },
  {
    id: 3,
    src: '/videoplayback (3).mp4',
    poster: '/unnamed (1).webp',
    title: 'Arabian Fragrance Collection'
  }
]

export const VideoGallery: React.FC = () => {
  const [playingId, setPlayingId] = useState<number | null>(null)
  const refs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  const handlePlayToggle = (id: number) => {
    const video = refs.current[id]
    if (!video) return

    if (playingId === id) {
      video.pause()
      setPlayingId(null)
    } else {
      // Pause currently playing video if any
      if (playingId !== null) {
        refs.current[playingId]?.pause()
      }
      video.play()
      setPlayingId(id)
    }
  }

  return (
    <section className="video-gallery-section">
      <div className="video-gallery-container">
        
        {/* Section Header */}
        <div className="video-gallery-header">
          <p className="video-gallery-label">Experience the Magic</p>
          <h2 className="video-gallery-title">See Our Boutique</h2>
          <div className="gold-divider-wrap">
            <span className="divider-line" />
            <div className="divider-diamond" />
            <span className="divider-line" />
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="video-cards-grid">
          {videos.map((vid, idx) => {
            const isCurrentPlaying = playingId === vid.id
            return (
              <motion.div
                key={vid.id}
                className="video-gallery-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="video-card-inner">
                  <video
                    ref={el => {
                      refs.current[vid.id] = el
                    }}
                    src={vid.src}
                    poster={vid.poster}
                    preload="metadata"
                    playsInline
                    loop
                    className="gallery-video-player"
                    onClick={() => handlePlayToggle(vid.id)}
                  />

                  {/* Glassmorphic Play/Pause Overlay */}
                  <div
                    className={`video-play-overlay ${isCurrentPlaying ? 'is-playing' : ''}`}
                    onClick={() => handlePlayToggle(vid.id)}
                  >
                    <motion.div
                      className="play-icon-circle"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isCurrentPlaying ? (
                        <Pause className="w-5 h-5 text-[#130802] fill-[#130802]" />
                      ) : (
                        <Play className="w-5 h-5 text-[#130802] fill-[#130802] ml-0.5" />
                      )}
                    </motion.div>
                    <span className="video-card-title">{vid.title}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
