const columns = [
  { title: "Shop", links: ["New In", "Clothing", "Knitwear", "Accessories"] },
  { title: "About", links: ["Our Story", "Materials", "Sustainability", "Stockists"] },
  { title: "Help", links: ["Shipping", "Returns", "Size Guide", "Contact"] },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl tracking-tight">Maren</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Considered, everyday essentials made from natural fabrics in
              limited runs.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Maren Studio. All rights reserved.</p>
          <p>Made with considered care.</p>
        </div>
      </div>
    </footer>
  )
}
