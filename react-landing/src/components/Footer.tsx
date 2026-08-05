import { Mail, Linkedin, Github } from 'lucide-react'
import Logo from './Logo'
import footerLogo from '../assets/ChatGPT Image Aug 3, 2026, 02_54_20 PM.png'

const YEAR = new Date().getFullYear()

const SOCIALS = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:samnkelisiwempiyonke@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/samnkelisiwe-mpiyonke-3419573b1/',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/samnkel',
  },
]

const SERVICES = [
  'Web Development',
  'Software Systems',
  'Online Business',
  'Maintenance & Support',
]

const CONTACT = [
  'samnkelisiwempiyonke@gmail.com',
  '+27 66 038 2755',
  '10122 liwa street philippi east',
  'Cape Town, RSA 7750',
]

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0d1b2a] py-16 text-slate-300">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
<div className="mb-3">
              <Logo size={64} light src={footerLogo} />
            </div>
            <p className="mb-6 max-w-[300px] leading-relaxed">
              Building digital excellence for businesses that want to thrive online.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-white/5 text-slate-300 transition-all duration-300 hover:bg-electric hover:text-white hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#services" className="transition-colors duration-300 hover:text-electric">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="transition-colors duration-300 hover:text-electric">
                  About Us
                </a>
              </li>
              <li>
                <a href="mailto:samnkelisiwempiyonke@gmail.com" className="transition-colors duration-300 hover:text-electric">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-[0.9rem]">
              {CONTACT.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; {YEAR} BlueBrains Software. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}