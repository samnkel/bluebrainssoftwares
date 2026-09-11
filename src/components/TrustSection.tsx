import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Sparkles, ShieldCheck, Users, Award, Star } from 'lucide-react'

const COUNTERS = [
  { label: 'Solutions Delivered', value: 20, suffix: '+', icon: Sparkles },
  { label: 'Happy Clients', value: 10, suffix: '+', icon: Users },
  { label: 'Years Experience', value: 5, suffix: '+', icon: Award },
  { label: 'Client Satisfaction', value: 99, suffix: '%', icon: ShieldCheck },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 900
    const startTime = performance.now()

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const nextValue = Math.floor(progress * value)
      setCurrent(nextValue)
      if (progress < 1) requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  }, [inView, value])

  return (
    <div ref={ref} className="text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
      {current}
      <span className="text-electric">{suffix}</span>
    </div>
  )
}

export default function TrustSection() {
  return (
    <section className="relative z-10 overflow-hidden py-20 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1400px] rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-4 py-2 text-sm font-semibold text-electric">
              Trusted by Growing Teams
            </span>
            <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Trusted by startups and growing businesses for premium digital product delivery.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              BlueBrains delivers modern software experiences that feel polished, reliable, and deeply aligned with client goals.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <Star size={18} className="text-electric" />
              <span className="font-semibold text-white">★★★★★</span>
              <span className="text-slate-300">Trusted by startups and growing businesses.</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {COUNTERS.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6 }}
                  className="rounded-[22px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                    <Icon size={22} />
                  </div>
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                  <p className="mt-3 text-sm font-medium text-slate-300">{item.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
