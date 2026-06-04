import React from 'react'
import { motion } from 'motion/react'
import { Check, MessageSquare } from 'lucide-react'
import './BoutiqueStory.css'

export const BoutiqueStory: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Staggered Gallery Images */}
        <div className="about-images-col">
          <motion.div
            className="about-image-frame-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-frame-border" />
            <img
              src="/unnamed (6).webp"
              alt="Khalifa Attar Shop displays"
              className="about-gallery-img"
            />
            {/* Overlay badge */}
            <div className="about-experience-badge">
              <span className="badge-qty">500+</span>
              <span className="badge-label">Pure Fragrances</span>
            </div>
          </motion.div>

          <motion.div
            className="about-image-frame-2"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-frame-border" />
            <img
              src="/unnamed (4).webp"
              alt="Khalifa Attar Shop interior display shelves"
              className="about-gallery-img"
            />
          </motion.div>
        </div>

        {/* Brand Story Text & Info */}
        <motion.div
          className="about-content-col"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="about-pretitle">Our Story</p>
          <h2 className="about-title">
            Crafted from<br />
            <em>Ancient Wisdom</em>
          </h2>
          <div className="about-content-divider" />
          
          <p className="about-paragraph">
            At Khalifa Attar & Perfumes, every bottle is a vessel of heritage. We travel ancient trade routes — from the dense forests of Assam to the misty rose fields of Taif, the sandalwood groves of Mysore to the legendary oud bazaars of Arabia — to bring you fragrances that are not just worn, but <em>experienced</em>.
          </p>
          <p className="about-paragraph">
            Each attar is distilled through time-honoured hydro-distillation, concentrated in pure carrier oils, and curated by master perfumers who understand the language of scent as a sacred art form.
          </p>

          {/* Core Brand Promises */}
          <div className="about-promises-grid">
            <div className="promise-item">
              <div className="promise-icon-box">
                <Check className="w-4 h-4 text-[#C9A84C]" />
              </div>
              <span className="promise-text">100% Pure &amp; Authentic</span>
            </div>
            <div className="promise-item">
              <div className="promise-icon-box">
                <Check className="w-4 h-4 text-[#C9A84C]" />
              </div>
              <span className="promise-text">Alcohol-Free Attars</span>
            </div>
            <div className="promise-item">
              <div className="promise-icon-box">
                <Check className="w-4 h-4 text-[#C9A84C]" />
              </div>
              <span className="promise-text">500+ Fragrances In-Store</span>
            </div>
            <div className="promise-item">
              <div className="promise-icon-box">
                <Check className="w-4 h-4 text-[#C9A84C]" />
              </div>
              <span className="promise-text">Expert Guidance &amp; Sampling</span>
            </div>
          </div>

          <a
            href="https://wa.me/919819664949?text=Hi! I am interested in exploring your fragrances"
            className="about-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            Chat with us on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  )
}
