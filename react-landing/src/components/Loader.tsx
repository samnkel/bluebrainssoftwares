import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-navy/95 px-4 text-center text-white"
    >
      <div className="flex min-h-[200px] w-full max-w-[420px] flex-col items-center justify-center gap-5 rounded-[28px] border border-electric/20 bg-white/5 p-8 shadow-[0_32px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-electric border-t-transparent bg-white/5 text-electric shadow-[0_0_20px_rgba(0,212,255,0.3)] animate-spin" />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-electric/70">BlueBrains Loader</p>
          <h2 className="mt-3 text-2xl font-semibold">Preparing your digital experience</h2>
          <p className="mt-2 text-sm text-slate-200">This appears only on your first visit to create a polished first impression.</p>
        </div>
      </div>
    </motion.div>
  )
}
