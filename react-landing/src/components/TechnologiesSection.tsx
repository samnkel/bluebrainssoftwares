import { motion } from 'framer-motion'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPhp,
  SiFlutter,
  SiFirebase,
  SiSupabase,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
SiCss,
  SiHtml5,
  SiPython,
} from 'react-icons/si'

const TECHS = [
  { icon: SiReact, label: 'React' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiNodedotjs, label: 'Node.js' },
  { icon: SiPhp, label: 'PHP' },
  { icon: SiFlutter, label: 'Flutter' },
  { icon: SiFirebase, label: 'Firebase' },
  { icon: SiSupabase, label: 'Supabase' },
  { icon: SiMysql, label: 'MySQL' },
  { icon: SiPostgresql, label: 'PostgreSQL' },
{ icon: SiCss, label: 'CSS' },
  { icon: SiHtml5, label: 'HTML' },
  { icon: SiPython, label: 'Python' },
  { icon: SiGit, label: 'Git' },
  { icon: SiGithub, label: 'GitHub' },
]

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="relative z-10 py-20 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-4 py-2 text-sm font-semibold text-electric">
            Technology Stack
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Technologies We Use
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            We harness a modern, enterprise-grade stack to build software that is fast, secure, and future-ready.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TECHS.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="group flex items-center gap-4 rounded-[24px] border border-white/10 bg-slate-950/70 p-5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-electric/30 hover:shadow-[0_24px_64px_rgba(30,144,255,0.18)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/5 text-2xl text-electric shadow-[0_10px_34px_rgba(30,144,255,0.18)] transition duration-300 group-hover:bg-electric/15">
                  <Icon />
                </span>
                <span className="font-semibold text-slate-100">{tech.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
