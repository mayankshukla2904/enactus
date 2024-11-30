"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Image from 'next/image'

// Define the Product type
interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

const products: Product[] = [
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
  },
  {
    name: "Potpourri",
    description: "Fragrant dried floral mix for natural home freshening",
    price: "₹129",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Gulal",
    description: "Vibrant, natural colored powder for festive celebrations",
    price: "₹79",
    image: "/placeholder.svg?height=200&width=200"
  }
]

const ProductList = ({ limit = products.length }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null) // Type the state as Product or null
  const [quantity, setQuantity] = useState(1)

  const handleBuy = (product: Product) => {
    setSelectedProduct(product)
    setQuantity(1)
  }

  const handleWhatsApp = () => {
    if (selectedProduct) {
      const message = encodeURIComponent(`Hi, I'm interested in buying ${quantity} ${selectedProduct.name}(s) at ${selectedProduct.price} each. Could you provide more information?`)
      window.open(`https://wa.me/919910083434?text=${message}`, '_blank')
    }
  }

  const handleEmail = () => {
    if (selectedProduct) {
      const subject = encodeURIComponent(`Inquiry about ${selectedProduct.name}`)
      const body = encodeURIComponent(`Hi,

I'm interested in buying ${quantity} ${selectedProduct.name}(s) at ${selectedProduct.price} each. Could you provide more information?

Thank you.`)
      window.location.href = `mailto:infoenactus@gmail.com?subject=${subject}&body=${body}`
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.slice(0, limit).map((product, index) => (
        <motion.div
          key={product.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="transform transition duration-500 hover:shadow-2xl"
        >
          <Card className="bg-gradient-to-br from-yellow-300 to-yellow-400 text-black overflow-hidden h-full flex flex-col">
            <CardHeader className="relative h-48 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <CardTitle className="text-white text-2xl font-bold">{product.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-black/70 mb-2">{product.description}</CardDescription>
              <p className="text-2xl font-bold">{product.price}</p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="w-full bg-black text-yellow-300 hover:bg-yellow-400 hover:text-black transition-colors duration-300"
                    onClick={() => handleBuy(product)}
                  >
                    Buy Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Purchase {selectedProduct?.name}</DialogTitle>
                    <DialogDescription>
                      Choose how you'd like to proceed with your purchase.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="quantity" className="text-right">
                        Quantity
                      </Label>
                      <Input
                        id="quantity"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        className="col-span-3"
                        min="1"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button onClick={handleWhatsApp}>Contact via WhatsApp</Button>
                    <Button onClick={handleEmail}>Contact via Email</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default ProductList
