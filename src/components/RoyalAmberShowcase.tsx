import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import './RoyalAmberShowcase.css'

export const RoyalAmberShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Smooth springs for motion
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 })

  // Parallax elements translations
  const bottleY = useTransform(smoothProgress, [0, 1], [80, -80])
  const bottleRotate = useTransform(smoothProgress, [0, 1], [5, -5])
  const textY = useTransform(smoothProgress, [0, 1], [30, -30])
  const videoY = useTransform(smoothProgress, [0, 1], [60, -60])

  // Parallax gold dust particles and amber crystal flakes
  const particle1X = useTransform(smoothProgress, [0, 1], [-100, 120])
  const particle1Y = useTransform(smoothProgress, [0, 1], [-50, 150])
  const particle1Rotate = useTransform(smoothProgress, [0, 1], [0, 180])

  const particle2X = useTransform(smoothProgress, [0, 1], [120, -180])
  const particle2Y = useTransform(smoothProgress, [0, 1], [100, -120])
  const particle2Rotate = useTransform(smoothProgress, [0, 1], [45, -90])

  const particle3X = useTransform(smoothProgress, [0, 1], [-150, 80])
  const particle3Y = useTransform(smoothProgress, [0, 1], [200, -50])
  const particle3Rotate = useTransform(smoothProgress, [0, 1], [-20, 120])

  const particle4X = useTransform(smoothProgress, [0, 1], [80, -80])
  const particle4Y = useTransform(smoothProgress, [0, 1], [-120, 180])

  return (
    <section className="amber-showcase-section" ref={sectionRef}>
      {/* Background warm amber glow */}
      <div className="amber-bg-glow" />

      {/* Floating Gold Dust Particle 1 (Large blurred crystal) */}
      <motion.div
        className="amber-particle crystal-1"
        style={{ x: particle1X, y: particle1Y, rotate: particle1Rotate }}
      />

      {/* Floating Gold Flake 2 (Sharp gold polygon) */}
      <motion.div
        className="amber-particle flake-1"
        style={{ x: particle2X, y: particle2Y, rotate: particle2Rotate }}
      />

      {/* Floating Gold Flake 3 (Medium amber crystal) */}
      <motion.div
        className="amber-particle crystal-2"
        style={{ x: particle3X, y: particle3Y, rotate: particle3Rotate }}
      />

      {/* Floating Gold Dust 4 (Small glowing particle) */}
      <motion.div
        className="amber-particle dust-1"
        style={{ x: particle4X, y: particle4Y }}
      />

      <div className="amber-container">
        
        {/* Text Info Column (Left Side) */}
        <motion.div className="amber-text-col" style={{ y: textY }}>
          <p className="amber-label">Exquisite Edition</p>
          <h2 className="amber-title">Royal Amber</h2>
          <p className="amber-subtitle">Warm. Radiant. Majestic.</p>

          <p className="amber-description">
            Crafted for those who command presence, Royal Amber combines deep golden ambergris, sweet Cardamom, and rich Indian Sandalwood. This precious blend captures the radiant heat of the desert sun, settling into a smooth, leathery oud base that lasts all day.
          </p>

          {/* Scent Profile */}
          <div className="amber-scent-profile">
            <h4 className="profile-title">Fragrance Profile</h4>
            <div className="profile-grid">
              <div className="profile-item">
                <span className="note-type">Top Notes</span>
                <span className="note-name">Persian Saffron, Sweet Cardamom</span>
              </div>
              <div className="profile-item">
                <span className="note-type">Heart Notes</span>
                <span className="note-name">Ambergris, Warm Spices, Rose</span>
              </div>
              <div className="profile-item">
                <span className="note-type">Base Notes</span>
                <span className="note-name">Indian Sandalwood, Dark Oud, Leather</span>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/919819664949?text=Hello! I am interested in ordering Royal Amber Oud"
            className="amber-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Royal Amber
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Visual Column: Floating Bottle (Right Side) */}
        <div className="amber-visual-col">
          {/* Main Floating Golden Amber Bottle */}
          <motion.div
            className="amber-bottle-wrapper"
            style={{ y: bottleY, rotate: bottleRotate }}
          >
            <img
              src="/royal_amber_product.jpg"
              alt="Royal Amber Perfume Bottle"
              className="amber-bottle-img"
            />
            <div className="amber-bottle-glow" />
          </motion.div>

          {/* Widescreen 16:9 Theatrical Video Frame */}
          <motion.div className="amber-widescreen-video-frame" style={{ y: videoY }}>
            <div className="widescreen-card-glass">
              <div className="widescreen-video-wrapper">
                <video
                  src="/amber_ad.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="amber-showcase-video-16-9"
                />
                <div className="widescreen-video-overlay" />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
