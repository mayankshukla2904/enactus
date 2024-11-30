"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import EventList from './event-list'

const EventsPreview = () => {
  return (
    <section className="py-16 bg-black text-yellow-400">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Upcoming Events
        </motion.h2>
        <EventList limit={2} />
        <div className="mt-12 text-center">
          <Link href="/events">
            <Button variant="outline" size="lg" className="bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 border-yellow-400 transition-colors duration-300">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EventsPreview

