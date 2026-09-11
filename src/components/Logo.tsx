import bblogo from '../assets/bblogo.png'

interface LogoProps {
  size?: number
  showWordmark?: boolean
  light?: boolean
  src?: string
}

export function Monogram({ size = 64, src = bblogo }: { size?: number; src?: string }) {
  return (
    <img
      src={src}
      alt="BlueBrains Software logo"
      width={size}
      height={size}
      className="logo-heartbeat rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  )
}

interface WordmarkProps {
  light?: boolean
}

function Wordmark({ light = false }: WordmarkProps) {
  return (
    <div className="flex flex-col">
      <span
        className="text-xl font-bold leading-none tracking-tight"
        style={{ fontFamily: "'Inter', sans-serif", color: light ? '#FFFFFF' : '#111111' }}
      >
        <span className="text-[#2563EB]">Blue</span>
        <span className="text-white">Brains</span>
      </span>
      <span
        className="mt-1.5 flex items-center gap-2 text-[8px] font-thin uppercase tracking-[3px]"
        style={{ fontFamily: "'Inter', sans-serif", color: '#7A8699', letterSpacing: '3px' }}
      >
        <span className="inline-block h-px w-6 bg-[#2563EB]" />
        SOFTWARE
        <span className="inline-block h-px w-6 bg-[#2563EB]" />
      </span>
    </div>
  )
}

export default function Logo({
  size = 64,
  showWordmark = true,
  light = false,
  src,
}: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <Monogram size={size} src={src} />
      {showWordmark && <Wordmark light={light} />}
    </div>
  )
}
