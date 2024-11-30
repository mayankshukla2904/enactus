"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-yellow-400 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-yellow-400 opacity-10"
          initial={{ scale: 0, borderRadius: '100%' }}
          animate={{ scale: 2, borderRadius: '0%' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold mb-6 text-yellow-400"
        >
          Enactus MSI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl mb-8 text-yellow-200"
        >
          Empowering communities through entrepreneurial action
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link href="#about">
            <Button
              variant="outline"
              size="lg"
              className="bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 border-yellow-400 transition-colors duration-300"
            >
              Learn More
            </Button>
          </Link>
          <Link href="#products">
            <Button
              variant="outline"
              size="lg"
              className="bg-black text-yellow-400 hover:bg-yellow-400 hover:text-black border-yellow-400 transition-colors duration-300"
            >
              Our Products
            </Button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <Link href="#about">
          <div className="animate-bounce cursor-pointer">
            <svg className="w-6 h-6 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero

