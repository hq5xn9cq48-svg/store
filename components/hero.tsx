export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center py-20 text-center md:py-28">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Autumn Collection 2026
        </p>
        <h1 className="max-w-4xl text-balance font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Considered clothing for everyday life
        </h1>
        <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Timeless essentials cut from natural fabrics. Made to be worn, kept,
          and loved for seasons to come.
        </p>
        <a
          href="#shop"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Shop the collection
        </a>
      </div>
    </section>
  )
}
