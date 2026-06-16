import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      {eyebrow && (
        <span className="inline-block rounded-full border border-border glass px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-heading text-balance text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}
