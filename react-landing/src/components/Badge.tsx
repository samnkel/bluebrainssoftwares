import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
}

export default function Badge({ children }: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.8rem] font-medium text-muted-2 backdrop-blur-[10px] shadow-[0_0_24px_rgba(30,144,255,0.08)]"
    >
      <span className="h-2 w-2 flex-shrink-0 animate-pulse-glow rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E,0_0_22px_rgba(34,197,94,0.5)]" />
      {children}
    </motion.span>
  )
}