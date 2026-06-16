'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { VeltrixLogo } from '@/components/veltrix-logo'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Why Veltrix', href: '#why' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 md:px-6',
            scrolled ? 'glass border border-border shadow-luxury' : 'border border-transparent',
          )}
        >
          <a href="#top" aria-label="VELTRIX home">
            <VeltrixLogo />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              variant="ghost"
              className="text-foreground hover:bg-secondary"
              asChild
            >
              <a href="#contact">Sign In</a>
            </Button>
            <Button
              className="bg-primary font-medium text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="#services">Join Veltrix</a>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="glass mt-2 rounded-2xl border border-border p-4 shadow-luxury md:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <Button
                className="mt-2 w-full bg-primary font-medium text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="#services" onClick={() => setOpen(false)}>
                  Join Veltrix
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
