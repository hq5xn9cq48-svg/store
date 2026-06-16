'use client'

import { useState } from 'react'
import { Mail, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-luxury md:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                'radial-gradient(circle, color-mix(in oklch, var(--gold) 30%, transparent), transparent 70%)',
            }}
          />
          <div className="relative grid gap-10 md:grid-cols-2">
            <div>
              <SectionHeading
                className="mx-0 text-left"
                eyebrow="Contact"
                title="Let's get you set up"
              />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Have a question or a custom request? Our team replies within
                minutes, 24 hours a day.
              </p>
              <div className="mt-7 space-y-3">
                <a
                  href="mailto:hello@veltrix.me"
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-colors hover:border-[color:var(--gold)]/40"
                >
                  <Mail className="h-4 w-4 text-gold" />
                  hello@veltrix.me
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-colors hover:border-[color:var(--gold)]/40"
                >
                  <MessageCircle className="h-4 w-4 text-gold" />
                  Live chat — available 24/7
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="flex flex-col gap-3"
            >
              <input
                required
                type="text"
                placeholder="Your name"
                aria-label="Your name"
                className="h-12 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[color:var(--gold)]/50"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="h-12 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[color:var(--gold)]/50"
              />
              <textarea
                required
                rows={4}
                placeholder="How can we help?"
                aria-label="Message"
                className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[color:var(--gold)]/50"
              />
              <Button
                type="submit"
                className="h-12 bg-primary font-medium text-primary-foreground hover:bg-primary/90"
              >
                {sent ? 'Message sent — thank you!' : 'Send message'}
                {!sent && <Send className="ml-1 h-4 w-4" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
