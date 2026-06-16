"use client"

import { ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart-provider"

const navLinks = ["New In", "Clothing", "Knitwear", "Accessories"]

export function SiteHeader() {
  const { count, openCart } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <nav className="hidden flex-1 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#shop"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="font-serif text-2xl tracking-tight md:flex-1 md:text-center"
        >
          Maren
        </a>

        <div className="flex flex-1 items-center justify-end">
          <button
            type="button"
            onClick={openCart}
            className="group relative flex items-center gap-2 text-sm text-foreground"
            aria-label={`Open cart, ${count} items`}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            <span className="hidden sm:inline">Cart</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-medium text-accent-foreground">
              {count}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
