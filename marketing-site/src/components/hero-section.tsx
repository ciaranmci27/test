"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code2, Sparkles, Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 animate-glow" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="gradient" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Trusted by 10,000+ developers
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Build{" "}
          <span className="gradient-text">Real-Time Collaboration</span>
          <br />
          in Days, Not Months
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          Liveblocks is a developer-focused platform that makes it easy to add 
          real-time collaboration and AI-enabled features to your application. 
          Ship multiplayer experiences without building custom infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button size="lg" variant="gradient" className="glow group">
            Start Building for Free
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            <Code2 className="mr-2 h-4 w-4" />
            View Documentation
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            99.9% Uptime SLA
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            50M+ Active Users
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            5-Minute Integration
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-3xl" />
            <div className="relative bg-card/50 backdrop-blur-sm border rounded-lg p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              
              <div className="space-y-2 text-left font-mono text-sm">
                <div className="text-muted-foreground">
                  <span className="text-blue-400">import</span> {" { "} RoomProvider, useOthers {" } "} <span className="text-blue-400">from</span> <span className="text-green-400">"@liveblocks/react"</span>;
                </div>
                <div className="text-muted-foreground">
                  <span className="text-blue-400">import</span> {" { "} Cursor {" } "} <span className="text-blue-400">from</span> <span className="text-green-400">"./Cursor"</span>;
                </div>
                <br />
                <div className="text-muted-foreground">
                  <span className="text-blue-400">function</span> <span className="text-yellow-400">CollaborativeApp</span>() {" {"}
                </div>
                <div className="text-muted-foreground pl-4">
                  <span className="text-blue-400">const</span> others = <span className="text-yellow-400">useOthers</span>();
                </div>
                <br />
                <div className="text-muted-foreground pl-4">
                  <span className="text-blue-400">return</span> (
                </div>
                <div className="text-muted-foreground pl-8">
                  {"<>"} 
                </div>
                <div className="text-muted-foreground pl-12">
                  {"{"}others.<span className="text-yellow-400">map</span>((other) =&gt; (
                </div>
                <div className="text-muted-foreground pl-16">
                  &lt;<span className="text-green-400">Cursor</span> key={"{"}other.id{"}"} color={"{"}other.color{"}"} /&gt;
                </div>
                <div className="text-muted-foreground pl-12">
                  )){"}"}
                </div>
                <div className="text-muted-foreground pl-8">
                  {"</>"}
                </div>
                <div className="text-muted-foreground pl-4">
                  );
                </div>
                <div className="text-muted-foreground">
                  {"}"}
                </div>
              </div>

              <div className="absolute -top-4 -right-4 animate-float">
                <div className="bg-blue-500 text-white rounded-full p-2 shadow-lg">
                  <div className="w-4 h-4" />
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 animate-float" style={{ animationDelay: "2s" }}>
                <div className="bg-purple-500 text-white rounded-full p-2 shadow-lg">
                  <div className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}