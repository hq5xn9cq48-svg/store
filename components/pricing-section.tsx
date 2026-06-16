import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Starter',
    price: 4.99,
    desc: 'Perfect for trying your first premium service.',
    features: [
      '1 premium subscription',
      'Instant delivery',
      'Email support',
      '30-day warranty',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    price: 12.99,
    desc: 'Our most popular bundle for true entertainment fans.',
    features: [
      'Up to 3 subscriptions',
      'Priority instant delivery',
      '24/7 live support',
      '90-day warranty',
      'Exclusive member deals',
    ],
    featured: true,
  },
  {
    name: 'Elite',
    price: 24.99,
    desc: 'The ultimate access pass to everything Veltrix.',
    features: [
      'Up to 6 subscriptions',
      'VIP instant delivery',
      'Dedicated account manager',
      'Lifetime warranty',
      'Early access to new services',
    ],
    featured: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Pricing Plans"
          title="Choose your level of premium"
          subtitle="Transparent monthly pricing. Cancel anytime, no hidden fees."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-2xl border bg-card p-7 shadow-luxury',
                plan.featured
                  ? 'border-[color:var(--gold)]/50 border-gold-glow'
                  : 'border-border',
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="font-heading text-4xl font-bold text-gradient-gold">
                  ${plan.price}
                </span>
                <span className="mb-1 text-sm text-muted-foreground">
                  / month
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  'mt-7 h-11 w-full font-medium',
                  plan.featured
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border bg-transparent text-foreground hover:bg-secondary',
                )}
              >
                Get {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
