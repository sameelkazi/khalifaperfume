import React from 'react'
import { motion } from 'motion/react'
import { Navbar } from './Navbar'
import { HeroBadge } from './HeroBadge'
import { BottomLeftCard } from './BottomLeftCard'
import { BottomRightCorner } from './BottomRightCorner'

export const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#130802]">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-black/25 group">
        {/* The Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>

        {/* The Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-between pb-28 md:pb-10">
          <Navbar />
          
          {/* Main Title & Action Buttons */}
          <div className="w-full flex-1 flex flex-col items-center justify-center px-4 md:px-6 text-center max-w-4xl z-10">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] sm:text-xs md:text-sm tracking-[0.25em] uppercase text-[#C9A84C] mb-4 md:mb-6 font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Est. Since Years — Trusted by Thousands
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-light text-[#F5E6C8] leading-[1.1] tracking-tight mb-4 md:mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Where Every <span className="italic font-normal text-[#C9A84C]">Scent</span><br />Tells a Story
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-xl text-[#A89060] max-w-xl leading-relaxed mb-8 md:mb-10 font-light"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Finest Attars, Ouds & Arabian Perfumes Crafted from the Heart of the Orient
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0"
            >
              {/* Explore Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#E8C97A] text-black font-semibold text-xs md:text-sm tracking-wider uppercase shadow-[0_10px_20px_rgba(201,168,76,0.15)] hover:shadow-[0_15px_30px_rgba(201,168,76,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Explore Collection
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.button>

              {/* WhatsApp Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open('https://wa.me/919819664949', '_blank')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#C9A84C]/45 hover:border-[#C9A84C] text-[#F5E6C8] hover:bg-[#C9A84C]/10 transition-all font-semibold text-xs md:text-sm tracking-wider uppercase cursor-pointer flex items-center justify-center gap-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                WhatsApp Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </motion.button>
            </motion.div>
          </div>

          <BottomLeftCard />
          <BottomRightCorner />
        </div>
      </section>
    </div>
  )
}
