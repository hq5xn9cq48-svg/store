import { CartProvider } from "@/components/cart-provider"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { SiteFooter } from "@/components/site-footer"
import { CartSheet } from "@/components/cart-sheet"

export default function Page() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          <Hero />
          <ProductGrid />
        </main>
        <SiteFooter />
        <CartSheet />
      </div>
    </CartProvider>
  )
}
