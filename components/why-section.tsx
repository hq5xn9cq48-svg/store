import {
  Zap,
  ShieldCheck,
  Headphones,
  BadgeCheck,
  Infinity as InfinityIcon,
  CreditCard,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const features = [
  {
    icon: Zap,
    title: 'Instant Access',
    desc: 'Get your subscription delivered automatically within minutes of purchase.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    desc: 'Bank-grade encryption and trusted gateways protect every transaction.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Real humans ready to help you any hour, any day of the week.',
  },
  {
    icon: BadgeCheck,
    title: 'Trusted Service',
    desc: 'Thousands of verified members and a 4.9-star satisfaction rating.',
  },
  {
    icon: InfinityIcon,
    title: 'No Limits',
    desc: 'Stream, play and create without restrictions across all your devices.',
  },
  {
    icon: CreditCard,
    title: 'Fair Pricing',
    desc: 'Premium services at a fraction of the standard retail price.',
  },
]

export function WhySection() {
  return (
    <section id="why" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Why Choose Veltrix"
          title="Built for an elite experience"
          subtitle="Every detail is engineered to feel premium, fast and effortless."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-luxury transition-colors hover:border-[color:var(--gold)]/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary text-gold transition-colors group-hover:border-[color:var(--gold)]/40">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
