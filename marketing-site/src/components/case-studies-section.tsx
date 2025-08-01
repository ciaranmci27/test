"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Clock,
  ArrowRight,
  Quote,
  BarChart3,
  Zap
} from "lucide-react"

const caseStudies = [
  {
    company: "DesignHub",
    logo: "🎨",
    industry: "Design Tools",
    description: "Collaborative design platform serving 2M+ designers",
    quote: "Liveblocks transformed our product. We went from a static design tool to a real-time collaborative platform in just 2 weeks.",
    author: "Alex Chen",
    role: "CTO & Co-founder",
    metrics: [
      { label: "User Engagement", value: "+340%", icon: TrendingUp },
      { label: "Time to Ship", value: "2 weeks", icon: Clock },
      { label: "Active Users", value: "2.1M", icon: Users },
      { label: "Infrastructure Cost", value: "-65%", icon: BarChart3 }
    ],
    features: ["Real-time cursors", "Collaborative editing", "Comments", "Version history"]
  },
  {
    company: "EduLearn",
    logo: "📚",
    industry: "EdTech",
    description: "Virtual classroom platform for remote learning",
    quote: "Our students love the real-time interaction. It feels like they're in the same room, even when they're continents apart.",
    author: "Dr. Sarah Martinez",
    role: "Head of Product",
    metrics: [
      { label: "Student Satisfaction", value: "94%", icon: TrendingUp },
      { label: "Session Length", value: "+85%", icon: Clock },
      { label: "Daily Active Users", value: "500K", icon: Users },
      { label: "Development Time", value: "-80%", icon: Zap }
    ],
    features: ["Live whiteboards", "Screen sharing", "Breakout rooms", "Real-time quizzes"]
  },
  {
    company: "ProjectFlow",
    logo: "📊",
    industry: "Project Management",
    description: "Agile project management for distributed teams",
    quote: "Liveblocks gave us the real-time features our users demanded without the complexity of building it ourselves.",
    author: "Marcus Johnson",
    role: "VP Engineering",
    metrics: [
      { label: "Team Productivity", value: "+45%", icon: TrendingUp },
      { label: "Feature Velocity", value: "3x", icon: Zap },
      { label: "Monthly Active Teams", value: "50K", icon: Building2 },
      { label: "Churn Rate", value: "-40%", icon: BarChart3 }
    ],
    features: ["Live task updates", "Team presence", "Real-time dashboards", "Instant notifications"]
  }
]

export function CaseStudiesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Building2 className="w-3 h-3 mr-1" />
            Case Studies
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Results from <span className="gradient-text">Real Companies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how leading companies use Liveblocks to build 
            collaborative experiences that users love.
          </p>
        </motion.div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{study.logo}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{study.company}</h3>
                      <p className="text-muted-foreground">{study.industry}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg mb-6">{study.description}</p>
                  
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-6">
                    <CardContent className="p-6">
                      <Quote className="w-8 h-8 text-primary/20 mb-4" />
                      <p className="text-lg italic mb-4">"{study.quote}"</p>
                      <div>
                        <p className="font-semibold">{study.author}</p>
                        <p className="text-sm text-muted-foreground">{study.role}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-medium text-muted-foreground">Key Features Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {study.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="grid grid-cols-2 gap-4">
                    {study.metrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <Card className="bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
                          <CardContent className="p-6">
                            <metric.icon className="w-5 h-5 text-primary mb-2" />
                            <div className="text-3xl font-bold gradient-text mb-1">
                              {metric.value}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {metric.label}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <Card className="inline-block bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Join These Success Stories</CardTitle>
              <CardDescription className="text-base">
                Start building your collaborative features today
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg" className="group">
                  Start Your Success Story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  View All Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}