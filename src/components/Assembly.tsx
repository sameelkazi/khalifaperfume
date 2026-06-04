import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import './Assembly.css'

export const Assembly: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 })

  // Background amber glow that expands as you scroll
  const glowScale = useTransform(smoothProgress, [0, 0.6], [0.5, 1.8])
  const glowOpacity = useTransform(smoothProgress, [0, 0.4, 0.9], [0, 0.4, 0])

  // Bottle base — zooms in and settles
  const bottleScale = useTransform(smoothProgress, [0.05, 0.35, 0.65], [0.6, 1.1, 1])
  const bottleOpacity = useTransform(smoothProgress, [0.05, 0.2], [0, 1])
  const bottleSway = useTransform(
    smoothProgress,
    [0.15, 0.35, 0.5, 0.65, 0.8],
    [0, -10, 6, -4, 0]
  )

  // Smoke wisps float up
  const smoke1Y = useTransform(smoothProgress, [0.2, 0.7], [40, -180])
  const smoke1Opacity = useTransform(smoothProgress, [0.2, 0.4, 0.65], [0, 0.7, 0])
  const smoke2Y = useTransform(smoothProgress, [0.3, 0.75], [40, -220])
  const smoke2Opacity = useTransform(smoothProgress, [0.3, 0.5, 0.7], [0, 0.5, 0])

  // Cap drops from top
  const capY = useTransform(smoothProgress, [0.72, 0.9], [-600, 0])
  const capRotate = useTransform(smoothProgress, [0.72, 0.82, 0.88, 0.9], [-20, 6, -3, 0])

  // Background "SCENT" text
  const bgTextOpacity = useTransform(smoothProgress, [0.1, 0.4, 0.9], [0, 0.06, 0])
  const bgTextScale = useTransform(smoothProgress, [0.1, 0.8], [0.8, 1.1])

  // Scent notes that appear around the bottle
  const notesOpacity = useTransform(smoothProgress, [0.35, 0.6, 0.88], [0, 1, 0])
  const notesY = useTransform(smoothProgress, [0.35, 0.65], [30, 0])

  const scentNotes = [
    { label: 'Top Note', value: 'Bergamot · Saffron', pos: 'left' },
    { label: 'Heart Note', value: 'Oud · Rose · Jasmine', pos: 'right' },
    { label: 'Base Note', value: 'Amber · Musk · Sandalwood', pos: 'left-bottom' },
  ]

  return (
    <section className="assembly-section" ref={containerRef} id="collection">
      {/* Large bg text */}
      <motion.div
        className="assembly-bg-text"
        style={{ opacity: bgTextOpacity, scale: bgTextScale }}
      >
        ATTAR
      </motion.div>

      {/* Expanding amber glow */}
      <motion.div
        className="assembly-glow"
        style={{ scale: glowScale, opacity: glowOpacity }}
      />

      <div className="assembly-anchor">
        <div className="assembly-bottle-wrap">
          {/* Smoke wisps rise from bottle */}
          <motion.img
            src="/cloud.png"
            alt=""
            className="assembly-smoke smoke-1"
            style={{ y: smoke1Y, opacity: smoke1Opacity }}
          />
          <motion.img
            src="/cloud.png"
            alt=""
            className="assembly-smoke smoke-2"
            style={{ y: smoke2Y, opacity: smoke2Opacity }}
          />

          <motion.div
            className="assembly-bottle-container"
            style={{ scale: bottleScale, opacity: bottleOpacity, x: bottleSway }}
          >
            {/* Cap descends and lands */}
            <motion.img
              src="/musk_cap.png"
              alt=""
              className="assembly-cap"
              style={{ y: capY, rotate: capRotate }}
            />

            {/* Main Khalifa bottle body */}
            <img
              src="/musk_body.png"
              alt="Khalifa Musk Attar Bottle"
              className="assembly-main-bottle"
            />
          </motion.div>
        </div>
      </div>

      {/* Scent pyramid notes that orbit the bottle */}
      {scentNotes.map((note, i) => (
        <motion.div
          key={note.label}
          className={`scent-note scent-note-${note.pos}`}
          style={{ opacity: notesOpacity, y: notesY }}
          transition={{ delay: i * 0.1 }}
        >
          <span className="scent-note-label">{note.label}</span>
          <span className="scent-note-value">{note.value}</span>
        </motion.div>
      ))}
    </section>
  )
}
