"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plug, ArrowRight, Check } from "lucide-react"

const integrations = [
  {
    name: "React",
    logo: "⚛️",
    description: "Full React hooks and components",
    popular: true
  },
  {
    name: "Next.js",
    logo: "▲",
    description: "Server and client components support",
    popular: true
  },
  {
    name: "Vue.js",
    logo: "🟢",
    description: "Vue 3 composition API",
    popular: false
  },
  {
    name: "Angular",
    logo: "🔺",
    description: "Angular services and directives",
    popular: false
  },
  {
    name: "Svelte",
    logo: "🔥",
    description: "Svelte stores integration",
    popular: false
  },
  {
    name: "Node.js",
    logo: "🟩",
    description: "Server-side SDK",
    popular: true
  },
  {
    name: "Python",
    logo: "🐍",
    description: "Python client library",
    popular: false
  },
  {
    name: "Redux",
    logo: "🟣",
    description: "Redux middleware support",
    popular: false
  }
]

const useCases = [
  {
    title: "Design Tools",
    examples: ["Figma-like editors", "Whiteboard apps", "Diagram tools"],
    icon: "🎨"
  },
  {
    title: "Productivity",
    examples: ["Document editors", "Project management", "Note-taking apps"],
    icon: "📝"
  },
  {
    title: "Education",
    examples: ["Virtual classrooms", "Code playgrounds", "Learning platforms"],
    icon: "🎓"
  },
  {
    title: "Gaming",
    examples: ["Multiplayer games", "Game editors", "Virtual worlds"],
    icon: "🎮"
  }
]

export function IntegrationsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Plug className="w-3 h-3 mr-1" />
            Integrations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Works with Your <span className="gradient-text">Favorite Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Liveblocks integrates seamlessly with modern frameworks and tools. 
            Use the technology you already know and love.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all cursor-pointer">
                  <CardContent className="p-6 text-center">
                    {integration.popular && (
                      <Badge 
                        variant="secondary" 
                        className="absolute top-2 right-2 text-xs"
                      >
                        Popular
                      </Badge>
                    )}
                    <div className="text-4xl mb-3">{integration.logo}</div>
                    <h3 className="font-semibold mb-1">{integration.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {integration.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-12">
              Perfect for Any Use Case
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
                    <CardContent className="p-6">
                      <div className="text-3xl mb-4">{useCase.icon}</div>
                      <h4 className="font-semibold mb-3">{useCase.title}</h4>
                      <ul className="space-y-2">
                        {useCase.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <Card className="bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-blue-600/5" />
              <CardContent className="relative p-12 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Don't See Your Framework?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Liveblocks works with any JavaScript framework. Our vanilla JS SDK 
                  gives you full control to integrate with any technology stack.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="gradient" size="lg" className="group">
                    View All Integrations
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Request Integration
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}