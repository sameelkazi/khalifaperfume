import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import './PurpleOudShowcase.css'

export const PurpleOudShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Apply smooth springs to scroll movements
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 })

  // Parallax transforms for bottle and background elements
  const bottleY = useTransform(smoothProgress, [0, 1], [60, -60])
  const bottleRotate = useTransform(smoothProgress, [0, 1], [-6, 6])
  const textY = useTransform(smoothProgress, [0, 1], [40, -40])
  const videoY = useTransform(smoothProgress, [0, 1], [20, -20])

  // Parallax transforms for drifting clouds
  const cloud1X = useTransform(smoothProgress, [0, 1], [-180, 180])
  const cloud1Y = useTransform(smoothProgress, [0, 1], [-30, 30])
  const cloud1Scale = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1.05, 0.9])

  const cloud2X = useTransform(smoothProgress, [0, 1], [150, -220])
  const cloud2Y = useTransform(smoothProgress, [0, 1], [50, -50])
  const cloud2Scale = useTransform(smoothProgress, [0, 1], [1.1, 0.9])

  const cloud3X = useTransform(smoothProgress, [0, 1], [-90, 90])
  const cloud3Y = useTransform(smoothProgress, [0, 1], [-60, 60])

  return (
    <section className="purple-showcase-section" ref={sectionRef}>
      {/* Background radial glow */}
      <div className="purple-bg-glow" />

      {/* Floating Cloud 1 - Back Layer */}
      <motion.img
        src="/cloud.png"
        alt="Smoke Layer"
        className="cloud-layer cloud-layer-1"
        style={{ x: cloud1X, y: cloud1Y, scale: cloud1Scale, opacity: 0.22 }}
      />

      {/* Floating Cloud 2 - Back Layer */}
      <motion.img
        src="/cloud.png"
        alt="Smoke Layer"
        className="cloud-layer cloud-layer-2"
        style={{ x: cloud2X, y: cloud2Y, scale: cloud2Scale, opacity: 0.18 }}
      />

      <div className="purple-container">
        {/* Visual Column: Bottle & Video Frame */}
        <div className="purple-visual-col">
          {/* Main Floating Purple Oud Bottle */}
          <motion.div
            className="purple-bottle-wrapper"
            style={{ y: bottleY, rotate: bottleRotate }}
          >
            <img
              src="/purple_full.png"
              alt="Purple Oud Bottle"
              className="purple-bottle-img"
            />
            <div className="purple-bottle-glow" />
          </motion.div>

          {/* Luxury Video Player Frame */}
          <motion.div className="purple-video-frame" style={{ y: videoY }}>
            <div className="video-card-glass">
              <div className="video-wrapper">
                <video
                  src="/purple_cinematic.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="purple-showcase-video"
                />
                <div className="video-overlay" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Text Info Column */}
        <motion.div className="purple-text-col" style={{ y: textY }}>
          <p className="purple-label">Imperial Blend</p>
          <h2 className="purple-title">Purple Oud</h2>
          <p className="purple-subtitle">Mysterious. Deep. Unforgettable.</p>

          <p className="purple-description">
            A majestic combination of dark, resinous Cambodian Oud and the delicate sweetness of fresh French violet petals. Concentrated in pure carrier oils, it delivers a powerful, alcohol-free fragrance trail that lingers for 12+ hours on the skin.
          </p>

          {/* Scent Pyramid */}
          <div className="scent-pyramid">
            <h4 className="pyramid-title">Fragrance Profile</h4>
            <div className="pyramid-grid">
              <div className="pyramid-item">
                <span className="note-type">Top</span>
                <span className="note-name">Lavender, Saffron</span>
              </div>
              <div className="pyramid-item">
                <span className="note-type">Heart</span>
                <span className="note-name">Violet, Cambodian Oud</span>
              </div>
              <div className="pyramid-item">
                <span className="note-type">Base</span>
                <span className="note-name">Ambergris, Musk</span>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/919819664949?text=Hello! I am interested in ordering Purple Oud"
            className="purple-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Purple Oud
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Floating Cloud 3 - Front Layer */}
      <motion.img
        src="/cloud.png"
        alt="Smoke Layer"
        className="cloud-layer cloud-layer-3"
        style={{ x: cloud3X, y: cloud3Y, opacity: 0.35, zIndex: 12 }}
      />
    </section>
  )
}
