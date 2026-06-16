export type Product = {
  id: string
  name: string
  category: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: "linen-shirt",
    name: "Oversized Linen Shirt",
    category: "Shirts",
    price: 128,
    image: "/products/linen-shirt.png",
  },
  {
    id: "wool-coat",
    name: "Camel Wool Overcoat",
    category: "Outerwear",
    price: 420,
    image: "/products/wool-coat.png",
  },
  {
    id: "knit-sweater",
    name: "Chunky Knit Sweater",
    category: "Knitwear",
    price: 165,
    image: "/products/knit-sweater.png",
  },
  {
    id: "wide-trousers",
    name: "Wide-Leg Trousers",
    category: "Trousers",
    price: 148,
    image: "/products/wide-trousers.png",
  },
  {
    id: "silk-dress",
    name: "Silk Slip Dress",
    category: "Dresses",
    price: 198,
    image: "/products/silk-dress.png",
  },
  {
    id: "cotton-tee",
    name: "Organic Cotton Tee",
    category: "Essentials",
    price: 48,
    image: "/products/cotton-tee.png",
  },
  {
    id: "denim-jacket",
    name: "Washed Denim Jacket",
    category: "Outerwear",
    price: 185,
    image: "/products/denim-jacket.png",
  },
  {
    id: "leather-bag",
    name: "Leather Tote Bag",
    category: "Accessories",
    price: 240,
    image: "/products/leather-bag.png",
  },
]
