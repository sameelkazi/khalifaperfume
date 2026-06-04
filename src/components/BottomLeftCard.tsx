import React from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

export const BottomLeftCard: React.FC = () => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-black/40 backdrop-blur-xl border border-[#C9A84C]/15 flex flex-col gap-2 lg:gap-3 min-w-[140px] md:min-w-[150px] lg:min-w-[180px] w-fit"
    >
      {/* Top text block */}
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-normal text-[#F5E6C8] tracking-tight">
          10K+
        </span>
        <span className="text-[10px] md:text-[12px] font-normal text-[#A89060] uppercase tracking-wider">
          Happy Patrons
        </span>
      </div>

      {/* Social Links instead of redundant WhatsApp button */}
      <div className="flex items-center gap-3 mt-1">
        {/* Instagram Icon */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.instagram.com/khalifa_attar_perfumes"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black hover:bg-white/90 transition-colors cursor-pointer"
          aria-label="Follow us on Instagram"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </motion.a>

        {/* Location Icon */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://maps.google.com/?q=Khalifa+Attar+%26+Perfumes+Mumbai"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black hover:bg-white/90 transition-colors cursor-pointer"
          aria-label="Find our Boutique on Google Maps"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  )
}
