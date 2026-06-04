import React from 'react'
import { motion } from 'motion/react'
import { ChevronRight, ArrowUpRight } from 'lucide-react'

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
      {/* Left Side Branding */}
      <div className="flex-1 hidden md:block">
        <span className="font-regular tracking-widest text-lg text-[#C9A84C]">KHALIFA</span>
      </div>

      {/* Center Menu */}
      <ul className="hidden md:flex items-center gap-8 text-[#F5E6C8] font-normal text-sm">
        <li
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group"
        >
          Home
        </li>
        <li
          onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
          className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group"
        >
          Collection
          <ChevronRight className="w-4 h-4 text-[#C9A84C] transition-transform group-hover:translate-x-0.5" />
        </li>
        <li
          onClick={() => document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group"
        >
          Attars
        </li>
        <li
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group"
        >
          About
          <ChevronRight className="w-4 h-4 text-[#C9A84C] transition-transform group-hover:translate-x-0.5" />
        </li>
      </ul>

      {/* Mobile Logo */}
      <div className="md:hidden">
        <span className="font-regular tracking-widest text-xl text-[#C9A84C]">KHALIFA</span>
      </div>

      {/* Right Button */}
      <div className="flex-1 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open('https://wa.me/919819664949', '_blank')}
          className="flex items-center bg-[rgba(201,168,76,0.8)] text-black rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(201,168,76,1)] transition-colors group cursor-pointer"
        >
          <div className="bg-black/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-black" />
          </div>
          <span className="text-xs md:text-sm font-normal">WhatsApp Us</span>
        </motion.button>
      </div>
    </nav>
  )
}
