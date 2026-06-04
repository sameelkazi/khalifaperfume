import React from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, ChevronRight } from 'lucide-react'

export const BottomRightCorner: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      className="absolute bottom-0 right-0 p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-gradient-to-br from-[#231209]/95 via-[#150a04]/95 to-[#0c0502]/98 border-t border-l border-[#C9A84C]/20 rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6 cursor-pointer hover:opacity-95 transition-opacity group backdrop-blur-md"
    >
      {/* Top intersection mask */}
      <div className="absolute -top-[1.5rem] sm:-top-[2rem] md:-top-[3.5rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#0d0502"/>
        </svg>
      </div>

      {/* Left intersection mask */}
      <div className="absolute bottom-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#0d0502"/>
        </svg>
      </div>

      {/* Circle Icon */}
      <div className="bg-[#C9A84C]/5 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-[#C9A84C]/15 group-hover:bg-[#C9A84C]/10 transition-colors">
        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#C9A84C]" />
      </div>

      {/* Info column */}
      <div className="flex flex-col">
        <span className="text-[16px] md:text-[20px] font-normal text-[#F5E6C8]">
          Heritage
        </span>
        <div
          className="flex items-center gap-1 text-[#A89060] group-hover:text-[#C9A84C] transition-colors"
        >
          <span className="text-[12px] md:text-[15px] font-normal">Our Story</span>
          <ChevronRight className="w-3.5 h-3.5 md:w-4 h-4" />
        </div>
      </div>
    </motion.div>
  )
}
