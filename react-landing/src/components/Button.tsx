import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  href?: string
  onClick?: () => void
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href = 'mailto:samnkelisiwempiyonke@gmail.com',
  onClick,
}: ButtonProps) {
  const base =
    'group inline-flex min-w-[180px] items-center justify-center gap-2.5 rounded-[14px] px-6 py-3.5 text-[0.98rem] font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric sm:px-7 sm:py-4 sm:min-w-[180px]'

  const variants = {
    primary:
      'bg-gradient-to-br from-electric via-[#0a6fd8] to-neon-cyan text-white shadow-btn-blue hover:shadow-btn-blue-hover',
    secondary:
      'border border-white/15 bg-white/5 text-white backdrop-blur-[12px] hover:bg-white/10 hover:border-electric/50 hover:shadow-[0_14px_36px_rgba(0,0,0,0.3),0_0_30px_rgba(30,144,255,0.12)]',
  }

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  )
}