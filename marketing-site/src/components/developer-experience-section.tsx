"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Terminal,
  Rocket,
  Package,
  GitBranch,
  FileCode2,
  Braces,
  Timer,
  Shield
} from "lucide-react"

const codeExamples = {
  react: `import { RoomProvider, useOthers } from "@liveblocks/react";

function App() {
  return (
    <RoomProvider id="my-room">
      <CollaborativeEditor />
    </RoomProvider>
  );
}

function CollaborativeEditor() {
  const others = useOthers();
  
  return (
    <div>
      {/* Your editor with real-time cursors */}
      {others.map(({ presence }) => (
        <Cursor key={presence.id} {...presence.cursor} />
      ))}
    </div>
  );
}`,
  typescript: `import { createClient } from "@liveblocks/client";
import type { Presence, Storage } from "./types";

const client = createClient({
  publicApiKey: "your-public-key",
});

// TypeScript types for your collaborative state
type MyPresence = {
  cursor: { x: number; y: number };
  selectedIds: string[];
};

type MyStorage = {
  drawings: LiveList<Drawing>;
  layers: LiveMap<string, Layer>;
};`,
  vue: `<template>
  <div id="app">
    <Room :room-id="roomId">
      <div v-for="user in others" :key="user.connectionId">
        <Cursor :x="user.presence.cursor.x" :y="user.presence.cursor.y" />
      </div>
    </Room>
  </div>
</template>

<script setup>
import { useOthers } from "@liveblocks/vue";

const others = useOthers();
</script>`,
  rest: `# Create a room
curl -X POST https://api.liveblocks.io/v2/rooms/my-room \\
  -H "Authorization: Bearer YOUR_SECRET_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "defaultAccesses": ["room:write"],
    "metadata": {
      "name": "Project Planning",
      "type": "document"
    }
  }'

# Get room users
curl https://api.liveblocks.io/v2/rooms/my-room/users \\
  -H "Authorization: Bearer YOUR_SECRET_KEY"`
}

const devFeatures = [
  {
    icon: Rocket,
    title: "5-minute setup",
    description: "Get up and running with just a few lines of code"
  },
  {
    icon: Package,
    title: "NPM packages",
    description: "Install via npm, yarn, or pnpm and start building"
  },
  {
    icon: GitBranch,
    title: "Version control friendly",
    description: "Works seamlessly with your existing Git workflow"
  },
  {
    icon: FileCode2,
    title: "Framework agnostic",
    description: "Use with React, Vue, Angular, or vanilla JavaScript"
  },
  {
    icon: Braces,
    title: "Full TypeScript support",
    description: "Complete type safety and autocompletion"
  },
  {
    icon: Shield,
    title: "Built-in security",
    description: "Authentication and authorization out of the box"
  }
]

export function DeveloperExperienceSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Terminal className="w-3 h-3 mr-1" />
            Developer Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for <span className="gradient-text">Developers</span>, by Developers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We obsess over developer experience so you can focus on building great products. 
            Simple APIs, great docs, and powerful tools.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
              <CardHeader>
                <CardTitle>Start building in seconds</CardTitle>
                <CardDescription>
                  Choose your framework and copy the code to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs defaultValue="react" className="w-full">
                  <TabsList className="w-full justify-start rounded-none border-b bg-transparent h-auto p-0">
                    <TabsTrigger 
                      value="react" 
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                    >
                      React
                    </TabsTrigger>
                    <TabsTrigger 
                      value="typescript"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                    >
                      TypeScript
                    </TabsTrigger>
                    <TabsTrigger 
                      value="vue"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                    >
                      Vue
                    </TabsTrigger>
                    <TabsTrigger 
                      value="rest"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                    >
                      REST API
                    </TabsTrigger>
                  </TabsList>
                  {Object.entries(codeExamples).map(([key, code]) => (
                    <TabsContent key={key} value={key} className="mt-0">
                      <div className="relative">
                        <pre className="p-6 overflow-x-auto">
                          <code className="text-sm font-mono text-muted-foreground">
                            {code}
                          </code>
                        </pre>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="text-xs">
                            Copy
                          </Badge>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {devFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
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
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <Card className="inline-flex items-center gap-8 p-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-primary/20">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Timer className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">Ship 10x faster</h3>
                </div>
                <p className="text-muted-foreground">
                  Stop building infrastructure. Start shipping features.
                </p>
              </div>
              <div className="text-left border-l pl-8">
                <div className="text-3xl font-bold gradient-text mb-1">80%</div>
                <p className="text-sm text-muted-foreground">
                  Less development time
                </p>
              </div>
              <div className="text-left border-l pl-8">
                <div className="text-3xl font-bold gradient-text mb-1">3 days</div>
                <p className="text-sm text-muted-foreground">
                  Average integration time
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}