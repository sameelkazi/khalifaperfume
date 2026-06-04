import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import './Product.css'

export const Product: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25 })

  // Expanding dark background circle that rises from bottom
  const circleWidth = useTransform(smoothProgress, [0, 0.4], ['200vh', '100%'])
  const circleHeight = useTransform(smoothProgress, [0, 0.4], ['60vh', '100%'])
  const circleBottom = useTransform(smoothProgress, [0, 0.4], ['-10%', '0%'])
  const circleBorderRadius = useTransform(
    smoothProgress,
    [0, 0.4],
    ['60% 60% 0 0', '0% 0% 0 0']
  )

  // Header drifts in from left with subtle rotation
  const headerY = useTransform(smoothProgress, [0, 1], [100, -80])
  const headerX = useTransform(smoothProgress, [0, 0.3, 1], [-40, 0, 12])
  const headerRotate = useTransform(smoothProgress, [0, 0.5], [-1.5, 0])
  const headerOpacity = useTransform(smoothProgress, [0, 0.12, 0.75, 1], [0, 1, 1, 0.5])

  // Left info slides from left
  const leftY = useTransform(smoothProgress, [0, 1], [140, -50])
  const leftX = useTransform(smoothProgress, [0, 0.4, 1], [-70, 0, 8])
  const leftOpacity = useTransform(smoothProgress, [0.08, 0.28, 0.82, 1], [0, 1, 1, 0.4])

  // Right info slides from right
  const rightY = useTransform(smoothProgress, [0, 1], [120, -70])
  const rightX = useTransform(smoothProgress, [0, 0.4, 1], [70, 0, -8])
  const rightOpacity = useTransform(smoothProgress, [0.12, 0.32, 0.82, 1], [0, 1, 1, 0.4])

  // Bottom CTA scales up
  const bottomY = useTransform(smoothProgress, [0, 1], [70, -40])
  const bottomOpacity = useTransform(smoothProgress, [0.2, 0.45, 0.88, 1], [0, 1, 1, 0.3])
  const bottomScale = useTransform(smoothProgress, [0.2, 0.45], [0.88, 1])

  // Glow intensity
  const glowAmount = useTransform(smoothProgress, [0.3, 0.65], [0, 30])

  return (
    <section className="product-section" id="product-section" ref={sectionRef}>
      {/* Expanding warm circle from bottom */}
      <motion.div
        className="product-circle"
        style={{
          width: circleWidth,
          height: circleHeight,
          bottom: circleBottom,
          borderRadius: circleBorderRadius,
          boxShadow: useTransform(glowAmount, v => `0 -14px ${v}px rgba(201,168,76,0.3)`),
        }}
      />

      <div className="product-content-wrapper">
        {/* Header — top left, drifts in */}
        <motion.div
          className="product-header"
          style={{ y: headerY, x: headerX, rotate: headerRotate, opacity: headerOpacity }}
        >
          <h2 className="product-main-title">THE ESSENCE<br />OF YOU</h2>
          <p className="product-main-sub">Opulence. Heritage. Unforgettable.</p>
        </motion.div>

        {/* Center bottle placeholder — the floating bottle lands here */}
        <motion.div className="product-center" style={{ y: useTransform(smoothProgress, [0, 1], [80, -80]) }}>
          <div className="product-bottle-placeholder">
            <img src="/musk_full.png" alt="Khalifa Attar" className="product-bottle-img" />
            <div className="product-bottle-glow" />
          </div>
        </motion.div>

        {/* Left info */}
        <motion.div
          className="product-info-left"
          style={{ y: leftY, x: leftX, opacity: leftOpacity }}
        >
          <h3 className="info-label">PURE ATTAR</h3>
          <p className="info-text">
            Alcohol-free, concentrated oil perfume<br />
            distilled through time-honoured hydro-<br />
            distillation. Wears 12+ hours on skin.
          </p>
          <div className="info-divider" />
          <p className="info-accent">500+ fragrances in store</p>
        </motion.div>

        {/* Right info */}
        <motion.div
          className="product-info-right"
          style={{ y: rightY, x: rightX, opacity: rightOpacity }}
        >
          <h3 className="info-label">100% AUTHENTIC</h3>
          <p className="info-text">
            Sourced directly from master distillers<br />
            in Assam, Taif, Mysore &amp; Arabia.<br />
            No synthetics. No dilution.
          </p>
          <div className="info-divider" />
          <p className="info-accent">Trusted by 10,000+ customers</p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="product-bottom"
          style={{ y: bottomY, opacity: bottomOpacity, scale: bottomScale }}
        >
          <div className="product-badges">
            <div className="product-badge-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>Pure &amp; Authentic</span>
            </div>
            <div className="product-badge-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12l3 3 5-5"/>
              </svg>
              <span>Alcohol-Free</span>
            </div>
            <div className="product-badge-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span>Long-Lasting</span>
            </div>
          </div>

          <a
            href="https://wa.me/919819664949?text=Hello! I want to explore your attar collection"
            className="product-cta-btn"
            target="_blank"
            rel="noopener"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Order via WhatsApp
          </a>
          <p className="product-copyright">© 2024 Khalifa Attar &amp; Perfumes · @khalifa_attar_perfumes</p>
        </motion.div>
      </div>
    </section>
  )
}
