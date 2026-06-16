'use client'

import { motion } from 'motion/react'
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Particles } from '@/components/particles'

const stats = [
  { value: '40K+', label: 'Happy members' },
  { value: '16+', label: 'Premium services' },
  { value: '4.9/5', label: 'Average rating' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
    >
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklch, var(--gold) 16%, transparent), transparent 70%)',
        }}
      />
      <Particles />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            The future of digital entertainment
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-heading text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            <span className="text-gradient-gold">Unlimited</span>
            <br />
            Entertainment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Premium digital services without limits. Streaming, AI, gaming and
            more — delivered instantly with secure payments and 24/7 support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="group h-12 w-full bg-primary px-7 text-base font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto border-gold-glow"
              asChild
            >
              <a href="#services">
                Explore Services
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full border-border bg-transparent px-7 text-base text-foreground hover:bg-secondary sm:w-auto"
              asChild
            >
              <a href="#pricing">Join Veltrix</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-gold" /> Instant delivery
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-gold" /> Secure payments
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-gold" /> 24/7 support
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl border border-border p-5 text-center shadow-luxury"
            >
              <div className="font-heading text-2xl font-bold text-gradient-gold md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
