'use client'

import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Skip on touch / coarse pointers
    if (window.matchMedia('(pointer: coarse)').matches) return

    let raf = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl will-change-transform"
      style={{
        background:
          'radial-gradient(circle, color-mix(in oklch, var(--gold) 22%, transparent), transparent 60%)',
      }}
    />
  )
}
