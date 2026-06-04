import React from 'react'
import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react'

export const HeroBadge: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#C9A84C]/25 mx-auto mb-3 w-fit"
    >
      <Sparkles className="w-4 h-4 text-[#C9A84C]" />
      <span className="text-[14px] font-normal text-[#F5E6C8]">Royal Attars</span>
    </motion.div>
  )
}
