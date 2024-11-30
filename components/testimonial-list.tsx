"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Community Member",
    testimonial: "Enactus MSI's Project Gulsair has transformed our community's approach to waste management. Their innovative solutions are both eco-friendly and economically viable.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Dr. Amit Patel",
    position: "Environmental Scientist",
    testimonial: "The Seed Box initiative by Enactus MSI is a brilliant way to promote urban gardening and sustainability. It's inspiring to see young minds tackling global issues.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Priya Sharma",
    position: "Local Business Owner",
    testimonial: "Collaborating with Enactus MSI on their sustainable product line has been a game-changer for my business. Their innovative approach and dedication to quality have helped us attract environmentally conscious customers.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Rahul Gupta",
    position: "Student Volunteer",
    testimonial: "Being part of Enactus MSI has been an incredible learning experience. The skills I've gained and the impact we've made on our community are truly rewarding.",
    image: "/placeholder.svg?height=100&width=100"
  }
]

const TestimonialList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-yellow-400 text-black">
            <CardHeader>
              <CardTitle>{testimonial.name}</CardTitle>
              <CardDescription className="text-black/70">{testimonial.position}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                <p className="italic">{testimonial.testimonial}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default TestimonialList

