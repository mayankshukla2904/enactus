"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import ProductsPreview from '@/components/products-preview'
import EventsPreview from '@/components/events-preview'
import TestimonialsPreview from '@/components/testimonials-preview'
import Footer from '@/components/footer'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <main className="min-h-screen bg-black text-yellow-400 overflow-hidden">
      <Header />
      <motion.div style={{ y }} className="relative z-0">
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <About />
        <ProductsPreview />
        <EventsPreview />
        <TestimonialsPreview />
      </motion.div>
      <Footer />
    </main>
  )
}

