import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function ProductGrid() {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between border-b border-border pb-6">
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
          The Collection
        </h2>
        <p className="text-sm text-muted-foreground">{products.length} pieces</p>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
