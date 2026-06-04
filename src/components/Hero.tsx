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
        <div className="relative z-10 w-full h-full flex flex-col items-center">
          <Navbar />
          
          {/* Text Container */}
          <div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl">
          </div>

          <BottomLeftCard />
          <BottomRightCorner />
        </div>
      </section>
    </div>
  )
}
