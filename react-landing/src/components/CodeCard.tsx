import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      className="absolute right-[40%] top-[14%] z-[9] w-[280px] sm:w-[300px] rounded-[18px] border border-electric/30 bg-[rgba(10,21,48,0.86)] p-4 font-mono text-[0.66rem] leading-[1.72] text-[#93C5FD] shadow-[0_28px_70px_rgba(0,0,0,0.55),0_0_50px_rgba(30,144,255,0.13),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[18px] transition-shadow duration-300 hover:shadow-[0_34px_80px_rgba(0,0,0,0.6),0_0_70px_rgba(30,144,255,0.2)]"
    >
      {/* Window controls */}
      <div className="mb-3 flex items-center gap-1.5 border-b border-white/10 pb-2.5">
        <span className="h-[9px] w-[9px] rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.6)]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.6)]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.6)]" />
        <span className="ml-1 text-[0.6rem] text-slate-300">solution.ts</span>
      </div>

      {/* Code */}
      <pre className="whitespace-pre">
        <code>
          <span className="text-neon-cyan">const</span>{' '}
          <span className="text-white">solution</span>{' '}
          <span className="text-white/50">=</span>{' '}
          <span className="text-neon-cyan">new</span>{' '}
          <span className="text-[#FFD479]">Idea</span>
          <span className="text-white/50">();</span>
          {'\n\n'}
          <span className="text-white">solution</span>
          {'\n'}
          <span className="text-white/50">  .</span>
          <span className="text-[#FFD479]">build</span>
          <span className="text-white/50">()</span>
          {'\n'}
          <span className="text-white/50">  .</span>
          <span className="text-[#FFD479]">design</span>
          <span className="text-white/50">()</span>
          {'\n'}
          <span className="text-white/50">  .</span>
          <span className="text-[#FFD479]">develop</span>
          <span className="text-white/50">()</span>
          {'\n'}
          <span className="text-white/50">  .</span>
          <span className="text-[#FFD479]">deploy</span>
          <span className="text-white/50">();</span>
          {'\n\n'}
          <span className="italic text-slate-300">// We build. You grow.</span>
        </code>
      </pre>

      {/* Bottom pill */}
      <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-electric/20 text-electric">
          <Check size={14} />
        </span>
        <span className="text-sm font-medium text-white/80">
          Clean Code.
          <span className="text-electric"> Scalable Solutions.</span>
        </span>
      </div>
    </motion.div>
  )
}