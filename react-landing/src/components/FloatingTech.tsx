import { motion } from 'framer-motion'
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiFlutter,
  SiPython,
  SiDocker,
  SiSupabase,
} from 'react-icons/si'

const TECHS = [
  { icon: SiReact, label: 'React', pos: `left-[44%] top-[3%]`, delay: 0 },
  { icon: SiTypescript, label: 'TypeScript', pos: `left-[3%] top-[22%]`, delay: 0.6 },
  { icon: SiNodedotjs, label: 'Node.js', pos: `right-[1%] top-[27%]`, delay: 1.2 },
  { icon: SiFlutter, label: 'Flutter', pos: `left-0 bottom-[30%]`, delay: 1.8 },
  { icon: SiPython, label: 'Python', pos: `left-[36%] bottom-[5%]`, delay: 2.4 },
  { icon: SiDocker, label: 'Docker', pos: `right-[3%] bottom-[18%]`, delay: 3 },
  { icon: SiSupabase, label: 'Supabase', pos: `left-[-1%] top-[46%]`, delay: 3.6 },
]

interface FloatingTechProps {
  className?: string
}

export default function FloatingTech({ className = '' }: FloatingTechProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-[8] ${className}`} aria-hidden="true">
      {TECHS.map((tech) => {
        const Icon = tech.icon
        return (
          <motion.div
            key={tech.label}
            className={`absolute ${tech.pos}`}
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 6,
              delay: tech.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.16 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/15 bg-[rgba(10,22,52,0.85)] text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_0_rgba(30,144,255,0)] backdrop-blur-[12px] transition-all duration-300 hover:border-electric/70 hover:shadow-[0_14px_36px_rgba(0,0,0,0.55),0_0_30px_rgba(30,144,255,0.35)]">
              <Icon size={22} />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}