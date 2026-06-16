'use client'

import { useEffect, useState } from 'react'

type Dot = {
  id: number
  left: number
  top: number
  size: number
  delay: number
  duration: number
  opacity: number
}

export function Particles({ count = 28 }: { count?: number }) {
  // Generate only on the client after mount to avoid hydration mismatch
  const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    setDots(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 10,
        opacity: 0.15 + Math.random() * 0.45,
      })),
    )
  }, [count])

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            opacity: d.opacity,
            animation: `veltrix-float ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes veltrix-float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-24px) translateX(10px); }
        }
      `}</style>
    </div>
  )
}
