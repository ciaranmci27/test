"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Liveblocks cut our development time by 80%. We shipped real-time collaboration in days instead of months.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "SC",
    rating: 5,
    company: "Series B Startup"
  },
  {
    quote: "The infrastructure just works. We handle millions of concurrent users without any scaling headaches.",
    author: "Marcus Rodriguez",
    role: "Lead Engineer at Collab.io",
    avatar: "MR",
    rating: 5,
    company: "YC W23"
  },
  {
    quote: "Best developer experience I've had with any real-time platform. The APIs are intuitive and well-documented.",
    author: "Emily Watson",
    role: "Senior Developer at Notion",
    avatar: "EW",
    rating: 5,
    company: "Enterprise"
  },
  {
    quote: "We replaced our custom WebSocket infrastructure with Liveblocks and reduced our server costs by 60%.",
    author: "David Kim",
    role: "VP Engineering at Canvas",
    avatar: "DK",
    rating: 5,
    company: "Scale-up"
  },
  {
    quote: "The presence features transformed our app. Users love seeing who's working on what in real-time.",
    author: "Lisa Thompson",
    role: "Product Manager at Figma",
    avatar: "LT",
    rating: 5,
    company: "Design Tool"
  },
  {
    quote: "Liveblocks handles all the edge cases we didn't even know existed. Rock-solid reliability.",
    author: "Alex Murphy",
    role: "Founder at StartupXYZ",
    avatar: "AM",
    rating: 5,
    company: "Bootstrapped"
  }
]

const companies = [
  { name: "Vercel", logo: "V" },
  { name: "Stripe", logo: "S" },
  { name: "Linear", logo: "L" },
  { name: "Framer", logo: "F" },
  { name: "Pitch", logo: "P" },
  { name: "Miro", logo: "M" }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Quote className="w-3 h-3 mr-1" />
            Social Proof
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">10,000+ Developers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of teams building the future of collaborative software
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center font-bold">
                  {company.logo}
                </div>
                <span className="text-lg font-semibold text-muted-foreground">
                  {company.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-muted-foreground/20 mb-4" />
                  
                  <p className="text-base mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`/avatar-${index}.jpg`} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center p-8 bg-card/50 backdrop-blur-sm rounded-lg border">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Avatar key={i} className="w-8 h-8 border-2 border-background">
                    <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">+10,000 developers</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ))}
              <span className="ml-2 font-semibold">4.9/5 average rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}