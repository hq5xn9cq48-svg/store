import Image from 'next/image'
import { products } from '@/lib/products'
import { SectionHeading } from '@/components/section-heading'

export function TrendingSection() {
  // Duplicate the list so the marquee loops seamlessly
  const row = [...products, ...products]

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Trending Now"
          title="Loved by members worldwide"
          subtitle="The most popular premium services on Veltrix right now."
        />
      </div>

      <div className="relative mt-12">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-[veltrix-marquee_38s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
          {row.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              className="flex w-56 shrink-0 items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-luxury"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 p-2 ring-1 ring-black/5">
                {p.logo ? (
                  <Image
                    src={p.logo || '/placeholder.svg'}
                    alt={`${p.name} logo`}
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                ) : (
                  <span
                    className="font-heading text-xs font-bold"
                    style={{ color: p.accent }}
                  >
                    {p.mono}
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">
                  {p.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  from ${p.price}/{p.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes veltrix-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
