import { cn } from '@/lib/utils'

export function VeltrixLogo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          className="h-9 w-9"
          aria-hidden="true"
          fill="none"
        >
          <defs>
            <linearGradient id="veltrix-v" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="oklch(0.92 0.07 92)" />
              <stop offset="55%" stopColor="oklch(0.8 0.122 85)" />
              <stop offset="100%" stopColor="oklch(0.66 0.1 70)" />
            </linearGradient>
          </defs>
          <rect
            x="1"
            y="1"
            width="38"
            height="38"
            rx="11"
            stroke="url(#veltrix-v)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <path
            d="M11 12 L20 28 L29 12"
            stroke="url(#veltrix-v)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showWordmark && (
        <span className="font-heading text-lg font-bold tracking-[0.2em] text-foreground">
          VELTRIX
        </span>
      )}
    </div>
  )
}
