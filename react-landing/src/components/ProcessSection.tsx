import { motion } from 'framer-motion'
import { Search, CalendarDays, LayoutGrid, Code2, CheckCircle2, Rocket } from 'lucide-react'

const STEPS = [
  { title: 'Discovery', desc: 'Understand your vision, audience, and goals.', icon: Search },
  { title: 'Planning', desc: 'Define milestones, scope, and delivery timelines.', icon: CalendarDays },
  { title: 'UI/UX Design', desc: 'Create intuitive interfaces and polished experience flows.', icon: LayoutGrid },
  { title: 'Development', desc: 'Build fast, secure, and scalable software solutions.', icon: Code2 },
  { title: 'Testing', desc: 'Validate performance, accessibility, and quality.', icon: CheckCircle2 },
  { title: 'Launch', desc: 'Deploy with confidence and support your next growth phase.', icon: Rocket },
]

export default function ProcessSection() {
  return (
    <section id="process" className="relative z-10 py-20 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-4 py-2 text-sm font-semibold text-electric">
            How We Work
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            A proven framework for delivering digital products with clarity, speed, and strong collaboration.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.2)] backdrop-blur-xl">
          <div className="absolute inset-y-0 left-10 hidden w-px bg-gradient-to-b from-electric/50 via-transparent to-electric/50 lg:block" />
          <div className="grid gap-6 lg:grid-cols-3">
            {STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="relative rounded-[24px] border border-white/10 bg-white/5 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl"
                >
                  <div className="absolute -left-6 top-8 hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-navy/90 text-electric lg:flex">
                    <span className="text-sm font-semibold">{index + 1}</span>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-electric/10 text-electric shadow-[0_10px_30px_rgba(30,144,255,0.18)]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
