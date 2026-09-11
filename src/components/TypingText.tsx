import { TypeAnimation } from 'react-type-animation'

const WORDS = [
  'Web Applications',
  1800,
  'Mobile Applications',
  1800,
  'Custom Software',
  1800,
  'HR Systems',
  1800,
  'Cloud Solutions',
  1800,
]

export default function TypingText() {
  return (
    <span className="inline-flex items-center text-[1.32rem] font-semibold text-neon-cyan [text-shadow:0_0_22px_rgba(0,212,255,0.35)]">
      <span className="mr-1.5 text-[1.1rem] font-medium text-muted">We build</span>
      <TypeAnimation
        sequence={WORDS}
        wrapper="span"
        speed={42}
        repeat={Infinity}
        cursor={false}
      />
      <span className="ml-1 inline-block h-[1.25em] w-[2px] animate-blink rounded-sm bg-neon-cyan shadow-[0_0_12px_#00D4FF]" />
    </span>
  )
}