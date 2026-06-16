"use client"

import { createContext, useContext, useMemo, useState, type ReactNode } from "react"
import type { Product } from "@/lib/products"

export type CartItem = Product & { quantity: number }

type CartContextValue = {
  items: CartItem[]
  isOpen: boolean
  count: number
  subtotal: number
  openCart: () => void
  closeCart: () => void
  setOpen: (open: boolean) => void
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  function addItem(product: Product) {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsOpen(true)
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  function updateQuantity(id: string, quantity: number) {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const { count, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        acc.count += item.quantity
        acc.subtotal += item.quantity * item.price
        return acc
      },
      { count: 0, subtotal: 0 },
    )
  }, [items])

  const value: CartContextValue = {
    items,
    isOpen,
    count,
    subtotal,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    setOpen: setIsOpen,
    addItem,
    removeItem,
    updateQuantity,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
