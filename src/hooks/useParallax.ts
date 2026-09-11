import { useEffect, useState } from 'react'

interface ParallaxOptions {
  speed?: number
  max?: number
}

/**
 * Returns a scroll-based parallax offset for a given element.
 * Usage: const y = useParallax({ speed: 0.2 })
 */
export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.2, max = 120 } = options
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let raf = 0

    const handleScroll = () => {
      raf = requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const value = Math.max(-max, Math.min(max, scrollY * speed))
        setOffset(value)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(raf)
    }
  }, [speed, max])

  return offset
}
