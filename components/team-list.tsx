"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const teamMembers = [
  {
    name: "Pankhuri Agarwal",
    position: "President",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Doyel",
    position: "Vice President",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Nadini",
    position: "Operations Head",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "John Doe",
    position: "Marketing Director",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Jane Smith",
    position: "Finance Manager",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Alex Johnson",
    position: "Project Coordinator",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Emily Brown",
    position: "Outreach Specialist",
    image: "/placeholder.svg?height=200&width=200"
  }
]

const TeamList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-yellow-400 text-black">
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription className="text-black/70">{member.position}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-full mb-4" />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default TeamList

