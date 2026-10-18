import Image from 'next/image'
import veltrixArtwork from '@/public/شعار VELTRIX الهندسي الذهبي.png'
import { cn } from '@/lib/utils'

export function VeltrixLogo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <div
      className={cn('inline-flex shrink-0 items-center gap-2.5', className)}
      role="img"
      aria-label="VELTRIX"
    >
      {/* Frame the symbol from the original square artwork for a horizontal logo. */}
      <span
        className="relative block h-10 w-11 shrink-0 overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src={veltrixArtwork}
          alt=""
          sizes="84px"
          className="absolute -left-5 -top-[18px] h-[84px] w-[84px] max-w-none mix-blend-screen"
        />
      </span>
      {showWordmark && (
        <span
          className="font-heading text-lg font-bold tracking-[0.2em] text-foreground"
          aria-hidden="true"
        >
          VELTRIX
        </span>
      )}
    </div>
  )
}
