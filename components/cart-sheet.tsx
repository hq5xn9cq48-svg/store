"use client"

import Image from "next/image"
import { Minus, Plus, ShoppingBag, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"

export function CartSheet() {
  const { items, isOpen, setOpen, count, subtotal, updateQuantity, removeItem } =
    useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="w-full gap-0 sm:max-w-md">
        <SheetHeader className="border-b border-border px-6 py-5">
          <SheetTitle className="font-serif text-xl">
            Your Bag {count > 0 && `(${count})`}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag
              className="h-10 w-10 text-muted-foreground"
              strokeWidth={1}
            />
            <div>
              <p className="font-medium text-foreground">Your bag is empty</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Add a few pieces to get started.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="flex flex-col gap-5">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-md bg-secondary">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-medium leading-tight text-foreground">
                            {item.name}
                          </h3>
                          <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
                            {item.category}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground transition-colors hover:text-foreground"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-border">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:text-accent"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                          <span className="w-6 text-center text-sm tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:text-accent"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="text-sm font-medium tabular-nums text-foreground">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <SheetFooter className="border-t border-border px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-serif text-xl tabular-nums text-foreground">
                  ${subtotal}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="mt-2 w-full rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Checkout
              </button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
