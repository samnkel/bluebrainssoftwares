/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#050B1D',
        'navy-2': '#081226',
        electric: '#1E90FF',
        'neon-cyan': '#00D4FF',
        muted: '#94A3B8',
        'muted-2': '#CBD5E1',
        beige: 'hsl(221, 64%, 65%)',
        'beige-2': 'rgb(48, 172, 254)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        nav: '0 12px 50px rgba(2,6,18,0.35), inset 0 1px 0 rgba(255,255,255,0.6)',
        'glow-blue': '0 0 40px rgba(30,144,255,0.18)',
        'glow-blue-strong': '0 0 60px rgba(30,144,255,0.35)',
        'glow-cyan': '0 0 40px rgba(0,212,255,0.25)',
        'btn-blue': '0 8px 28px rgba(30,144,255,0.45), inset 0 1px 0 rgba(255,255,255,0.25)',
        'btn-blue-hover': '0 14px 36px rgba(30,144,255,0.55)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        blink: 'blink 0.85s step-end infinite',
        'pulse-glow': 'pulseGlow 2.2s ease-in-out infinite',
        'spin-slower': 'spinSlow 42s linear infinite',
        'spin-slow-rev': 'spinRev 60s linear infinite',
        'spin-slowest': 'spinSlowest 78s linear infinite',
        drift: 'drift 18s ease-in-out infinite alternate',
        'stream-up': 'streamUp 7s linear infinite',
        wheel: 'wheel 1.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(0.82)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translate(-50%, 0)' },
          '50%': { transform: 'translate(-50%, 9px)' },
        },
        spinSlow: {
          from: { transform: 'translate(-50%,-50%) rotate(0deg)' },
          to: { transform: 'translate(-50%,-50%) rotate(360deg)' },
        },
        spinRev: {
          from: { transform: 'translate(-50%,-50%) rotate(0deg)' },
          to: { transform: 'translate(-50%,-50%) rotate(-360deg)' },
        },
        spinSlowest: {
          from: { transform: 'translate(-50%,-50%) rotate(0deg)' },
          to: { transform: 'translate(-50%,-50%) rotate(360deg)' },
        },
        drift: {
          from: { transform: 'translateY(0) translateX(0)' },
          to: { transform: 'translateY(-22px) translateX(16px)' },
        },
        streamUp: {
          '0%': { transform: 'translateY(70px)', opacity: '0' },
          '12%': { opacity: '0.9' },
          '85%': { opacity: '0.55' },
          '100%': { transform: 'translateY(-160px)', opacity: '0' },
        },
        wheel: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '70%': { transform: 'translateY(9px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
        nodePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.8)', opacity: '0.35' },
        },
      },
    },
  },
  plugins: [],
}
