import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from './Logo'
import headerLogo from '../assets/ChatGPT Image Aug 3, 2026, 02_54_20 PM.png'

const LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = LINKS.map((link) => document.getElementById(link.id))
      const scrollPos = window.scrollY + 120

      let current = 'home'
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPos) {
          current = section.id
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileOpen])

  return (
    <motion.header
      initial={{ opacity: 0, y: -18, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed left-1/2 top-3 z-50 w-[96%] max-w-[1400px]"
    >
      <nav className="relative flex h-[72px] items-center justify-between rounded-[24px] bg-white/95 px-4 shadow-nav backdrop-blur-2xl dark:bg-navy/95 dark:shadow-[0_12px_50px_rgba(0,0,0,0.5)] sm:px-6">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <a href="#home" className="flex shrink-0 items-center pl-2">
            <Logo size={58} src={headerLogo} />
          </a>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/90 text-electric shadow-sm shadow-electric/10 transition hover:bg-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Links */}
        <ul className="hidden items-center gap-1 lg:ml-auto lg:mr-[40px] lg:flex">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-electric/5 hover:text-electric ${
                  active === link.id ? 'text-electric' : 'text-slate-600 dark:text-slate-200'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute bottom-1 left-1/2 h-[2px] w-[55%] -translate-x-1/2 rounded-full bg-gradient-to-r from-electric to-neon-cyan" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
<a
            href="#contact"
            className="group flex items-center gap-1.5 rounded-[14px] bg-gradient-to-br from-electric via-[#0a6fd8] to-neon-cyan px-6 py-3.5 text-sm font-semibold text-white shadow-btn-blue transition-all duration-300 hover:translate-y-[-2px] hover:scale-[1.02] hover:shadow-btn-blue-hover"
          >
            Start a Project
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-x-0 top-[72px] z-40 h-[calc(100vh-72px)] overflow-y-auto rounded-b-[32px] bg-slate-950/100 px-5 py-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-3">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-[16px] px-4 py-3 text-base font-medium transition-colors duration-200 hover:bg-electric/5 hover:text-electric ${
                      active === link.id ? 'text-electric' : 'text-slate-600 dark:text-slate-200'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
<a
              href="#contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-[14px] bg-gradient-to-br from-electric via-[#0a6fd8] to-neon-cyan px-6 py-3.5 text-sm font-semibold text-white shadow-btn-blue transition-all duration-300 hover:translate-y-[-2px] hover:scale-[1.02] hover:shadow-btn-blue-hover"
            >
              Start a Project
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        )}
      </nav>
    </motion.header>  
  )
}