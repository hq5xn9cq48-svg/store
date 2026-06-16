import { VeltrixLogo } from '@/components/veltrix-logo'

const columns = [
  {
    title: 'Services',
    links: ['Streaming', 'AI Tools', 'Gaming', 'Music', 'VPN'],
  },
  {
    title: 'Company',
    links: ['About', 'Why Veltrix', 'Reviews', 'Careers'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact', 'FAQ', 'Status'],
  },
  {
    title: 'Legal',
    links: ['Terms', 'Privacy', 'Refunds', 'Cookies'],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-3/4 rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklch, var(--gold) 18%, transparent), transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <VeltrixLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The next generation digital marketplace for premium entertainment,
              AI and gaming. Unlimited, instant, elite.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-sm font-semibold text-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} VELTRIX. All rights reserved.</p>
          <p>
            Crafted for the future of digital entertainment ·{' '}
            <span className="text-gold">veltrix.me</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
