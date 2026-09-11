import { motion } from 'framer-motion'
import { Rocket, Layers, Shield, Cloud, DollarSign, LifeBuoy } from 'lucide-react'

const REASONS = [
  {
    icon: Rocket,
    title: 'Fast Delivery',
    desc: 'Rapid execution and launch-ready delivery without sacrificing quality.',
  },
  {
    icon: Layers,
    title: 'Modern Technologies',
    desc: 'Built with the latest tools, frameworks, and cloud platforms.',
  },
  {
    icon: Shield,
    title: 'Secure Software',
    desc: 'Security-first systems designed to protect your data and users.',
  },
  {
    icon: Cloud,
    title: 'Scalable Solutions',
    desc: 'Infrastructure that grows with your business and traffic demands.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    desc: 'Premium software delivered with transparent, value-focused pricing.',
  },
  {
    icon: LifeBuoy,
    title: 'Dedicated Support',
    desc: 'Responsive support and maintenance for every stage of your project.',
  },
]

export default function WhyChooseSection() {
  return (
    <section className="relative z-10 py-12 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-3 py-1 text-sm font-semibold text-electric">
            Why Choose BlueBrains
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Why Choose BlueBrains
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            We blend design, engineering and business insight to build software that feels premium, performs reliably, and delivers measurable growth.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.15)] backdrop-blur-xl transition duration-250 hover:-translate-y-0.5 hover:border-electric/30"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-electric via-[#0a6fd8] to-neon-cyan opacity-40" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-electric shadow-[0_8px_24px_rgba(30,144,255,0.12)] transition duration-300 group-hover:scale-[1.03]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-5 text-slate-300">{reason.desc}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
