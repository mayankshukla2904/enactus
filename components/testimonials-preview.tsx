"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import TestimonialList from './testimonial-list'

const TestimonialsPreview = () => {
  return (
    <section className="py-16 bg-black text-yellow-400">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          What People Say
        </motion.h2>
        <TestimonialList />
        <div className="mt-8 text-center">
          <Link href="/testimonials">
            <Button variant="outline" size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300">
              View All Testimonials
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsPreview

