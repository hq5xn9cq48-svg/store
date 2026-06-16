import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const reviews = [
  {
    name: 'Adam R.',
    role: 'Verified buyer',
    text: 'Got my Netflix and Spotify within two minutes of paying. The whole experience feels insanely premium.',
    initials: 'AR',
  },
  {
    name: 'Lina M.',
    role: 'Verified buyer',
    text: 'Veltrix is now my go-to for every subscription. Prices are unreal and support actually responds instantly.',
    initials: 'LM',
  },
  {
    name: 'Karim S.',
    role: 'Verified buyer',
    text: 'The site looks like a billion-dollar startup. Smooth, fast, and everything just works. Highly recommend.',
    initials: 'KS',
  },
  {
    name: 'Nora T.',
    role: 'Verified buyer',
    text: 'Bought ChatGPT Plus and Canva Pro together. Instant delivery, zero issues. Five stars without a doubt.',
    initials: 'NT',
  },
  {
    name: 'Yusuf A.',
    role: 'Verified buyer',
    text: 'Best prices I have found anywhere for IPTV. Crystal-clear 4K and rock-solid uptime. Worth every cent.',
    initials: 'YA',
  },
  {
    name: 'Maya K.',
    role: 'Verified buyer',
    text: 'Customer service helped me at 3am. That kind of support is rare. Veltrix earned a customer for life.',
    initials: 'MK',
  },
]

export function ReviewsSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Trusted by thousands"
          subtitle="Real feedback from members enjoying premium without limits."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-luxury"
            >
              <div className="flex items-center gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${r.text}"`}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary font-heading text-sm font-semibold text-gold">
                  {r.initials}
                </span>
                <span>
                  <span className="block text-sm font-medium text-foreground">
                    {r.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {r.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
