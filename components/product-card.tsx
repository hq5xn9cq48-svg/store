"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import type { Product } from "@/lib/products"
import { useCart } from "@/components/cart-provider"

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={() => addItem(product)}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-medium leading-tight text-foreground">
            {product.name}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
            {product.category}
          </p>
        </div>
        <p className="text-sm text-foreground">${product.price}</p>
      </div>
    </div>
  )
}
