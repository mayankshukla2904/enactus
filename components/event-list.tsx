"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const events = [
  {
    name: "Prastaav",
    description: "Annual business plan competition showcasing innovative solutions to real-world challenges.",
    date: "September 15, 2024",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Enactus Nationals",
    description: "National competition where Enactus teams present their social entrepreneurship projects.",
    date: "August 25-26, 2024",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Project Gulsair Workshop",
    description: "Learn about floral waste repurposing and sustainable product creation.",
    date: "July 10, 2024",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Sanrakshan Eco-Fair",
    description: "Showcase of sustainable gifting solutions and eco-friendly practices.",
    date: "October 5, 2024",
    image: "/placeholder.svg?height=200&width=200"
  }
]

const EventList = ({ limit = events.length }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {events.slice(0, limit).map((event, index) => (
        <motion.div
          key={event.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-black text-yellow-300 overflow-hidden">
            <CardHeader className="relative h-48">
              <Image
                src={event.image}
                alt={event.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <CardTitle className="text-2xl font-bold text-yellow-300">{event.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardDescription className="text-yellow-100 mb-2">{event.date}</CardDescription>
              <p className="text-white">{event.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default EventList

