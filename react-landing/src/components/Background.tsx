import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'
import bgImage from '../assets/ChatGPT Image Aug 3, 2026, 02_39_11 PM.png'

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 1.5 + 0.5,
  delay: Math.random() * 6,
  duration: Math.random() * 8 + 6,
}))

export default function Background() {
  const bgOffset = useParallax({ speed: 0.1, max: 40 })

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* User's background image — fixed for the whole website */}
      <motion.div
        style={{ y: bgOffset }}
        className="absolute inset-0 overflow-hidden"
      >
        <img
          src={bgImage}
          alt="Cape Town skyline background"
          className="h-full w-full object-cover blur-sm brightness-90"
        />
      </motion.div>

      {/* Subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,29,0.45)_0%,rgba(5,11,29,0.78)_100%)]" />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-electric/50"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ opacity: [0.2, 1, 0.2], y: [0, -20, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
