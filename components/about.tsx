"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const About = () => {
  return (
    <section id="about" className="py-16 bg-black text-yellow-400">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          About Enactus MSI
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Enactus MSI Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <p className="text-lg mb-6 text-yellow-200">
              Established in 2019, Enactus MSI is a student-run organization focused on uplifting communities through entrepreneurial action. Guided by experts, our student leaders identify community needs and implement projects for long-term impact.
            </p>
            <p className="text-lg mb-6 text-yellow-200">
              As part of ENACTUS, an international non-profit in 39 countries with over 70,000 active students, we motivate students to use entrepreneurship to enhance lives. Our teams tackle global issues by addressing environmental, social, and economic challenges through business, innovation, and collaboration.
            </p>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Our Vision</h3>
              <p className="text-lg text-yellow-200">
                To create meaningful, lasting change in local communities by using entrepreneurial solutions, fostering a culture of social responsibility among students.
              </p>
            </div>
            <Link href="/team">
              <Button variant="outline" size="lg" className="bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 border-yellow-400 transition-colors duration-300">
                Meet Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

