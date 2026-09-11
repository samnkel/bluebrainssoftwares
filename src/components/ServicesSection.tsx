import { motion } from 'framer-motion'
import {
  Globe,
  Code2,
  ShoppingCart,
  Wrench,
  Check,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Custom, responsive websites and web applications built with modern technologies that convert visitors into loyal customers.',
    iconBg: 'bg-electric/10',
    iconColor: 'text-electric',
    accent: 'group-hover:border-electric/40',
    features: [
      'Responsive and Mobile-First Design',
      'SEO and Performance Optimized',
      'CMS and Admin Dashboard',
      'API Integrations',
    ],
  },
  {
    icon: Code2,
    title: 'Software Systems',
    desc: 'Tailored CRM, ERP, and business automation solutions that streamline operations and scale with your growth.',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    accent: 'group-hover:border-emerald-500/40',
    featured: true,
    features: [
      'Custom CRM and ERP Systems',
      'Database Architecture',
      'REST and GraphQL APIs',
      'Cloud Infrastructure',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Online Business',
    desc: 'End-to-end e-commerce and digital marketing solutions designed to grow your revenue and market presence.',
    iconBg: 'bg-pink-500/10',
    iconColor: 'text-pink-500',
    accent: 'group-hover:border-pink-500/40',
    features: [
      'E-commerce Store Development',
      'Payment Gateway Integration',
      'Marketing Automation',
      'Conversion Optimization',
    ],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    desc: 'Comprehensive ongoing support, security updates, and performance tuning to keep your digital assets running flawlessly.',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-500',
    accent: 'group-hover:border-amber-500/40',
    features: [
      '24/7 Uptime Monitoring',
      'Security Patches and Updates',
      'Performance Optimization',
      'Monthly Reports',
    ],
  },
]

export default function ServicesSection() {
  return (
<section id="services" className="relative z-10 py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-4 py-1.5 text-sm font-semibold text-electric">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Services Built for <span className="text-gradient-blue">Your Success</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                className={`group cursor-pointer rounded-[24px] border-2 bg-white/90 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(30,144,255,0.15)] dark:bg-navy/80 dark:text-white ${service.accent} ${
                  service.featured ? 'border-electric shadow-[0_0_0_1px_#1E90FF]' : 'border-slate-100 dark:border-white/10'
                }`}
              >
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${service.iconBg} ${service.iconColor}`}>
                  <Icon size={32} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mb-6 text-[0.95rem] leading-relaxed text-slate-500 dark:text-slate-300">{service.desc}</p>
                <ul className="space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-200">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                        <Check size={12} className="text-emerald-500" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}