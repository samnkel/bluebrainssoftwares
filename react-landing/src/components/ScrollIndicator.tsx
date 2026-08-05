import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="pointer-events-none absolute bottom-6 left-1/2 z-[12] flex -translate-x-1/2 animate-bounce-slow flex-col items-center gap-2"
    >
      <span className="flex h-[34px] w-[22px] justify-center rounded-[12px] border-[1.5px] border-muted/50 pt-1.5">
        <span className="h-[6px] w-[2.5px] animate-wheel rounded-[2px] bg-neon-cyan shadow-[0_0_8px_#00D4FF]" />
      </span>
      <span className="text-[0.68rem] font-medium uppercase tracking-[3px] text-muted">
        Scroll to Explore
      </span>
    </motion.div>
  )
}