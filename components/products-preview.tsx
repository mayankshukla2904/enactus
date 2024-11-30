"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ProductList from './product-list'

const ProductsPreview = () => {
  return (
    <section id="products" className="py-16 bg-black text-yellow-300">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Our Products
        </motion.h2>
        <ProductList limit={3} />
        <div className="mt-12 text-center">
          <Link href="/products">
            <Button variant="outline" size="lg" className="bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 border-yellow-400 transition-colors duration-300">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsPreview

