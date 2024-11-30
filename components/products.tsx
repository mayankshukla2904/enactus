"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const products = [
  {
    name: "Gulsair Soap",
    description: "Handmade soap from repurposed floral waste",
    price: "₹99",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Scented Candle",
    description: "Natural scented candles for a calming atmosphere",
    price: "₹149",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Seed Box",
    description: "Eco-friendly gardening kit with seed balls and clay pot",
    price: "₹299",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Tote Bag",
    description: "Stylish and sustainable tote bag",
    price: "₹199",
    image: "/placeholder.svg?height=200&width=200"
  }
]

const Products = () => {
  return (
    <section id="products" className="py-16 bg-black text-yellow-400">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Our Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-yellow-400 text-black">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription className="text-black/70">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                  <p className="text-2xl font-bold">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-black text-yellow-400 hover:bg-yellow-300 hover:text-black">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

