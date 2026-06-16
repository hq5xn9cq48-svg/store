'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '@/lib/products'
import { Button } from '@/components/ui/button'

export function ServiceCard({ product }: { product: Product }) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [glow, setGlow] = useState({ x: 50, y: 50 })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setTilt({ ry: (px - 0.5) * 10, rx: (0.5 - py) * 10 })
    setGlow({ x: px * 100, y: py * 100 })
  }

  const reset = () => setTilt({ rx: 0, ry: 0 })

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="group relative h-full"
    >
      {/* glow border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at ${glow.x}% ${glow.y}%, ${product.accent}55, transparent 70%)`,
        }}
      />
      <div className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-luxury transition-colors duration-300 group-hover:border-[color:var(--gold)]/40">
        <div className="flex items-start justify-between gap-3">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/95 p-2.5 ring-1 ring-black/5"
            style={{ boxShadow: `0 8px 24px -10px ${product.accent}aa` }}
          >
            {product.logo ? (
              <Image
                src={product.logo || '/placeholder.svg'}
                alt={`${product.name} logo`}
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
            ) : (
              <span
                className="font-heading text-sm font-bold"
                style={{ color: product.accent }}
              >
                {product.mono}
              </span>
            )}
          </div>
          <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            {product.category}
          </span>
        </div>

        <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
          <div>
            <span className="font-heading text-2xl font-bold text-foreground">
              ${product.price}
            </span>
            <span className="text-sm text-muted-foreground">
              {' '}
              / {product.period}
            </span>
          </div>
          <Button
            size="sm"
            className="group/btn h-9 bg-primary font-medium text-primary-foreground hover:bg-primary/90"
          >
            Buy Now
            <ArrowUpRight className="ml-0.5 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
