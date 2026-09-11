import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from './Button'
import TypingText from './TypingText'
import CodeCard from './CodeCard'
import ServicesCard from './ServicesCard'
import ScrollIndicator from './ScrollIndicator'
import FloatingTech from './FloatingTech'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center px-4 pt-24 pb-12 sm:px-6 lg:px-8 sm:pt-28"
    >
      <div className="grid w-full max-w-[1400px] gap-10 lg:grid-cols-[44fr_56fr] lg:items-center">
        {/* ====== LEFT CONTENT (45%) ====== */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.h1
            variants={item}
            className="mt-3 text-[1.9rem] font-extrabold leading-[1.02] tracking-[-1px] text-white sm:text-[2.6rem] md:text-[3rem] xl:text-[3.6rem]"
          >
            <span className="block">
              Building <span className="text-gradient-blue">Digital</span>
            </span>
            <span className="block">
              <span className="text-gradient-blue">Solutions</span>
            </span>
            <span className="block">That Drive</span>
            <span className="block">Business Forward</span>
          </motion.h1>

          <motion.div variants={item} className="mt-3 flex h-[1.9rem] items-center">
            <TypingText />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-3 max-w-[540px] text-[0.95rem] font-normal leading-[1.5] text-muted sm:max-w-[640px]"
          >
            We help businesses and organizations transform ideas into modern,
            scalable and impactful digital solutions.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
<Button href="#contact">
              Start Your Project
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary" href="#technologies">
              View Our Technologies
            </Button>
          </motion.div>
        </motion.div>

        {/* ====== RIGHT CONTENT (55%) ====== */}
        <div className="relative h-[520px] w-full max-w-[640px] lg:mx-auto sm:h-[520px] md:h-[560px] xl:h-[620px]">
          {/* Orbital dashed rings */}
          <div className="absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 animate-spin-slower rounded-full border border-dashed border-electric/15 sm:h-[190px] sm:w-[190px] lg:h-[210px] lg:w-[210px]">
            <span className="absolute -top-[3px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-neon-cyan shadow-[0_0_12px_#00D4FF]" />
          </div>
          <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow-rev rounded-full border border-dashed border-neon-cyan/10 sm:h-[260px] sm:w-[260px] lg:h-[280px] lg:w-[280px]">
            <span className="absolute -top-[3px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-electric shadow-[0_0_12px_#1E90FF]" />
          </div>
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-spin-slowest rounded-full border border-dashed border-white/5 sm:h-[360px] sm:w-[360px] lg:h-[400px] lg:w-[400px]">
            <span className="absolute -top-[3px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
          </div>

          {/* Connecting network lines */}
          <svg className="pointer-events-none absolute inset-0 z-[4] h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line x1="44" y1="14" x2="82" y2="30" stroke="rgba(30,144,255,0.4)" strokeWidth="0.22" strokeDasharray="6 5">
              <animate attributeName="stroke-dashoffset" from="0" to="-22" dur="3.4s" repeatCount="indefinite" />
            </line>
            <line x1="82" y1="30" x2="30" y2="48" stroke="rgba(30,144,255,0.32)" strokeWidth="0.22" strokeDasharray="6 5">
              <animate attributeName="stroke-dashoffset" from="0" to="-22" dur="3.4s" begin="0.55s" repeatCount="indefinite" />
            </line>
            <line x1="30" y1="48" x2="6" y2="20" stroke="rgba(30,144,255,0.3)" strokeWidth="0.22" strokeDasharray="6 5">
              <animate attributeName="stroke-dashoffset" from="0" to="-22" dur="3.4s" begin="1.1s" repeatCount="indefinite" />
            </line>
            <line x1="30" y1="48" x2="96" y2="70" stroke="rgba(0,212,255,0.28)" strokeWidth="0.22" strokeDasharray="6 5">
              <animate attributeName="stroke-dashoffset" from="0" to="-22" dur="3.4s" begin="1.65s" repeatCount="indefinite" />
            </line>
            <line x1="30" y1="48" x2="0" y2="74" stroke="rgba(30,144,255,0.26)" strokeWidth="0.22" strokeDasharray="6 5">
              <animate attributeName="stroke-dashoffset" from="0" to="-22" dur="3.4s" begin="2.2s" repeatCount="indefinite" />
            </line>
            <line x1="96" y1="70" x2="36" y2="94" stroke="rgba(0,212,255,0.24)" strokeWidth="0.22" strokeDasharray="6 5">
              <animate attributeName="stroke-dashoffset" from="0" to="-22" dur="3.4s" begin="2.75s" repeatCount="indefinite" />
            </line>
            <line x1="12" y1="6" x2="44" y2="14" stroke="rgba(30,144,255,0.26)" strokeWidth="0.22" strokeDasharray="6 5">
              <animate attributeName="stroke-dashoffset" from="0" to="-22" dur="3.4s" begin="1.3s" repeatCount="indefinite" />
            </line>
          </svg>

          {/* Glowing network nodes */}
          {[
            { pos: 'left-1/2 top-1/2', delay: '0s' },
            { pos: 'left-1/2 top-[12%]', delay: '0.6s' },
            { pos: 'left-[7%] top-1/2', delay: '1.2s' },
            { pos: 'left-[40%] bottom-[6%]', delay: '1.8s' },
            { pos: 'right-[4%] top-[28%]', delay: '2.4s' },
            { pos: 'right-[4%] bottom-[30%]', delay: '0.9s' },
          ].map((node, i) => (
            <span
              key={i}
              className={`absolute ${node.pos} z-[5] h-[7px] w-[7px] animate-[nodePulse_3s_ease-in-out_infinite] rounded-full bg-neon-cyan shadow-[0_0_14px_#00D4FF,0_0_30px_rgba(0,212,255,0.5)]`}
              style={{ animationDelay: node.delay }}
            />
          ))}

          {/* Floating tech icons */}
          <FloatingTech />

          {/* Code editor card */}
          <CodeCard />

          {/* What We Do card */}
          <ServicesCard />
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  )
}
