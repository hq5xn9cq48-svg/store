'use client'

import { useMemo, useState } from 'react'
import { products } from '@/lib/products'
import { ServiceCard } from '@/components/service-card'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function ServicesSection() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(products.map((p) => p.category)))],
    [],
  )
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <section id="services" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Premium Services"
          title="Everything you love, in one place"
          subtitle="Hand-picked premium subscriptions delivered instantly. Choose a category to explore."
        />

        <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-all',
                active === c
                  ? 'border-[color:var(--gold)]/50 bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:border-[color:var(--gold)]/30 hover:text-foreground',
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ServiceCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
