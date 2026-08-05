import { motion } from 'framer-motion'
import {
  Code2,
  Globe,
  Smartphone,
  Users,
  Cloud,
  PanelsTopLeft,
  ChevronRight,
  Zap,
} from 'lucide-react'

const SERVICES = [
  { icon: Code2, title: 'Custom Software Development' },
  { icon: Globe, title: 'Web Applications' },
  { icon: Smartphone, title: 'Mobile App Development' },
  { icon: Users, title: 'HR & Payroll Systems' },
  { icon: Cloud, title: 'Cloud Solutions' },
  { icon: PanelsTopLeft, title: 'UI/UX Design' },
]

export default function ServicesCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      className="absolute right-[1%] top-[42%] z-[9] w-[272px] rounded-[20px] border border-white/10 bg-[rgba(13,27,60,0.72)] p-4 shadow-[0_26px_66px_rgba(0,0,0,0.5),0_0_44px_rgba(30,144,255,0.1),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[20px]"
    >
      {/* Title */}
      <h4 className="mb-3.5 flex items-center gap-2 text-sm font-bold tracking-wide text-white">
        <Zap size={16} className="fill-electric text-electric" />
        <span>
          What <span className="text-gradient-blue">We Do</span>
        </span>
      </h4>

      {/* List */}
      <ul>
        {SERVICES.map((service) => {
          const Icon = service.icon
          return (
            <li
              key={service.title}
              className="group flex cursor-pointer items-center gap-3 border-b border-white/5 py-[0.47rem] transition-all duration-200 last:border-none hover:translate-x-[3px]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] border border-electric/20 bg-electric/15 text-neon-cyan transition-all duration-200 group-hover:bg-electric/30 group-hover:shadow-[0_0_16px_rgba(30,144,255,0.3)]">
                <Icon size={13} strokeWidth={2} />
              </span>
              <span className="flex-1 text-[0.79rem] font-medium text-muted-2 transition-colors duration-200 group-hover:text-white">
                {service.title}
              </span>
              <ChevronRight
                size={14}
                className="shrink-0 text-white/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-electric"
              />
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}