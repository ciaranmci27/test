"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  MessageSquare, 
  Bell, 
  Zap, 
  Users, 
  Lock,
  Globe,
  Cpu,
  Gauge,
  CheckCircle2
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Multiplayer Editing",
    description: "Real-time presence, cursors, and collaborative editing",
    badge: "Most Popular",
    highlights: [
      "Live cursors & selection",
      "Presence indicators",
      "Conflict-free sync",
      "Collaborative undo/redo"
    ]
  },
  {
    icon: MessageSquare,
    title: "Comments & Threads",
    description: "Contextual discussions with rich threading support",
    badge: "New",
    highlights: [
      "Inline comments",
      "@mentions",
      "Rich text formatting",
      "File attachments"
    ]
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Keep users engaged with real-time updates",
    highlights: [
      "In-app notifications",
      "Email digests",
      "Custom events",
      "Unread indicators"
    ]
  },
  {
    icon: Zap,
    title: "AI-Powered Features",
    description: "Enhance collaboration with intelligent assistance",
    badge: "Beta",
    highlights: [
      "Smart suggestions",
      "Auto-completion",
      "Content generation",
      "Semantic search"
    ]
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade security for your sensitive data",
    highlights: [
      "SOC 2 Type II",
      "GDPR compliant",
      "End-to-end encryption",
      "SSO support"
    ]
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Lightning-fast performance worldwide",
    highlights: [
      "99.9% uptime SLA",
      "Global edge network",
      "Auto-scaling",
      "DDoS protection"
    ]
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Powerful Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Build{" "}
            <span className="gradient-text">Collaborative Apps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pre-built, modular features that integrate seamlessly with your application. 
            Ship faster with our production-ready components.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    {feature.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 p-6 bg-card/50 backdrop-blur-sm rounded-lg border">
            <div className="flex items-center gap-2">
              <Gauge className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold">{"<"}50ms</div>
                <div className="text-sm text-muted-foreground">Latency</div>
              </div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold">10M+</div>
                <div className="text-sm text-muted-foreground">Messages/sec</div>
              </div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold">5 min</div>
                <div className="text-sm text-muted-foreground">Integration</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}