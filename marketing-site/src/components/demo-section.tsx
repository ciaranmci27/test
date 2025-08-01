"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Play, 
  Pause, 
  Users, 
  MessageSquare, 
  FileText, 
  MousePointer2,
  Edit3,
  Hash,
  Sparkles
} from "lucide-react"

const demoFeatures = [
  {
    id: "cursors",
    title: "Live Cursors",
    icon: MousePointer2,
    description: "See everyone's cursor position in real-time",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "presence",
    title: "Presence",
    icon: Users,
    description: "Show who's online and their status",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "comments",
    title: "Comments",
    icon: MessageSquare,
    description: "Add contextual comments anywhere",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "editing",
    title: "Collaborative Editing",
    icon: Edit3,
    description: "Edit documents together in real-time",
    color: "from-orange-500 to-red-500"
  }
]

export function DemoSection() {
  const [activeDemo, setActiveDemo] = useState("cursors")
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Play className="w-3 h-3 mr-1" />
            Interactive Demo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See <span className="gradient-text">Liveblocks in Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of real-time collaboration. 
            Try our interactive demos below.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Try it yourself</h3>
                {demoFeatures.map((feature) => (
                  <motion.button
                    key={feature.id}
                    onClick={() => setActiveDemo(feature.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      activeDemo === feature.id 
                        ? "border-primary bg-primary/10" 
                        : "border-border hover:border-primary/50 bg-card/50"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color} text-white`}>
                        <feature.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              <Card className="mt-6 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Ready to build?</CardTitle>
                  <CardDescription>
                    Add these features to your app in minutes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="gradient" className="w-full">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Live Demo</CardTitle>
                    <CardDescription>
                      {demoFeatures.find(f => f.id === activeDemo)?.title}
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-muted/20 overflow-hidden">
                    <AnimatePresence mode="wait">
                      {activeDemo === "cursors" && (
                        <motion.div
                          key="cursors"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 p-8"
                        >
                          <div className="relative h-full">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute"
                                animate={{
                                  x: [0, 300, 300, 0, 0],
                                  y: [0, 0, 200, 200, 0],
                                }}
                                transition={{
                                  duration: 5,
                                  repeat: Infinity,
                                  delay: i * 1.5,
                                  ease: "easeInOut"
                                }}
                              >
                                <div className={`flex items-center gap-2 ${
                                  i === 0 ? "text-blue-500" : 
                                  i === 1 ? "text-purple-500" : 
                                  "text-green-500"
                                }`}>
                                  <MousePointer2 className="w-6 h-6 fill-current" />
                                  <span className="text-sm font-medium bg-background/90 px-2 py-1 rounded">
                                    User {i + 1}
                                  </span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {activeDemo === "presence" && (
                        <motion.div
                          key="presence"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 p-8"
                        >
                          <div className="flex flex-wrap gap-4">
                            {[
                              { name: "Sarah", status: "editing", avatar: "SC" },
                              { name: "Marcus", status: "viewing", avatar: "MR" },
                              { name: "Emily", status: "commenting", avatar: "EW" },
                              { name: "David", status: "idle", avatar: "DK" }
                            ].map((user, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3 bg-card p-3 rounded-lg border"
                              >
                                <div className="relative">
                                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-medium">
                                    {user.avatar}
                                  </div>
                                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                                    user.status === "editing" ? "bg-green-500" :
                                    user.status === "viewing" ? "bg-blue-500" :
                                    user.status === "commenting" ? "bg-yellow-500" :
                                    "bg-gray-500"
                                  }`} />
                                </div>
                                <div>
                                  <p className="font-medium text-sm">{user.name}</p>
                                  <p className="text-xs text-muted-foreground">{user.status}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {activeDemo === "comments" && (
                        <motion.div
                          key="comments"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 p-8"
                        >
                          <div className="space-y-4">
                            <div className="bg-card/80 p-4 rounded-lg border">
                              <p className="text-sm mb-4">
                                This is a sample document where users can add comments...
                              </p>
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="inline-block"
                              >
                                <div className="bg-yellow-500/20 border border-yellow-500 rounded px-2 py-1 text-sm">
                                  <span className="text-yellow-600 font-medium">@sarah:</span> Great point here!
                                </div>
                              </motion.div>
                            </div>
                            <motion.div
                              initial={{ x: -50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 1 }}
                              className="bg-card p-3 rounded-lg border ml-8"
                            >
                              <div className="flex items-start gap-2">
                                <MessageSquare className="w-4 h-4 text-muted-foreground mt-0.5" />
                                <div className="flex-1">
                                  <p className="text-sm font-medium">Marcus replied</p>
                                  <p className="text-xs text-muted-foreground">
                                    I agree, we should emphasize this in the docs
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}

                      {activeDemo === "editing" && (
                        <motion.div
                          key="editing"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 p-8"
                        >
                          <div className="bg-card/80 p-6 rounded-lg border h-full">
                            <div className="flex items-center gap-2 mb-4">
                              <FileText className="w-5 h-5" />
                              <span className="font-medium">project-brief.md</span>
                              <div className="ml-auto flex -space-x-2">
                                {[...Array(3)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-2 border-background"
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="space-y-2 font-mono text-sm">
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                              >
                                ## Project Overview
                              </motion.p>
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="text-blue-500"
                              >
                                The goal is to build a collaborative platform...
                              </motion.p>
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                                className="text-purple-500"
                              >
                                <span className="animate-pulse">|</span> that enables real-time editing
                              </motion.p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="absolute bottom-4 right-4">
                      <Badge variant="secondary" className="text-xs">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                        Live Demo
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Want to see more?
          </p>
          <Button variant="outline" size="lg">
            <Play className="w-4 h-4 mr-2" />
            Watch Full Demo
          </Button>
        </motion.div>
      </div>
    </section>
  )
}