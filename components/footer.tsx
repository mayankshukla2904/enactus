"use client"

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <h3 className="text-2xl font-bold">Enactus MSI</h3>
            <p className="text-yellow-200">Empowering communities through entrepreneurial action</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <Link href="#" className="text-yellow-400 hover:text-yellow-200 transition-colors">
              <Facebook />
            </Link>
            <Link href="#" className="text-yellow-400 hover:text-yellow-200 transition-colors">
              <Instagram />
            </Link>
            <Link href="#" className="text-yellow-400 hover:text-yellow-200 transition-colors">
              <Twitter />
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-yellow-200"
        >
          <p>&copy; 2024 Enactus MSI. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

