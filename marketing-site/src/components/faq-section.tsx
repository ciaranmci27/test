"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react"

const faqs = [
  {
    category: "Technical",
    questions: [
      {
        q: "How does Liveblocks handle scaling?",
        a: "Liveblocks automatically scales to handle millions of concurrent connections. Our infrastructure uses global edge servers and intelligent load balancing to ensure low latency and high availability. You don't need to worry about scaling—we handle it all for you."
      },
      {
        q: "What's the latency like?",
        a: "With our global edge network, most users experience sub-50ms latency. We have servers in 30+ regions worldwide, automatically routing connections to the nearest server. Real-time updates typically propagate in 10-30ms."
      },
      {
        q: "Can I self-host Liveblocks?",
        a: "Currently, Liveblocks is offered as a fully-managed cloud service. This allows us to provide the best performance, security, and reliability. Enterprise customers can discuss on-premise options with our sales team."
      },
      {
        q: "How secure is my data?",
        a: "Very secure. We're SOC 2 Type II certified, GDPR compliant, and use end-to-end encryption. All data is encrypted at rest and in transit. We also support SSO, custom data retention policies, and have a 99.9% uptime SLA."
      }
    ]
  },
  {
    category: "Pricing",
    questions: [
      {
        q: "How does pricing work?",
        a: "Pricing is based on Monthly Active Users (MAUs). Our free tier includes up to 100 MAUs and 10GB bandwidth—perfect for prototypes and small projects. Paid plans start at $99/month for up to 10,000 MAUs."
      },
      {
        q: "What counts as a Monthly Active User?",
        a: "A MAU is any unique user who connects to your Liveblocks-powered application within a calendar month. Users are identified by the ID you provide when authenticating them."
      },
      {
        q: "Are there any hidden costs?",
        a: "No hidden costs. Our pricing includes everything: hosting, bandwidth, support, and all features. You only pay based on your MAU usage. No surprise bills or overage charges."
      },
      {
        q: "Can I change plans anytime?",
        a: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we'll prorate any payments."
      }
    ]
  },
  {
    category: "Implementation",
    questions: [
      {
        q: "How long does integration take?",
        a: "Most developers have Liveblocks running in their app within 5 minutes. A full production implementation typically takes 1-3 days, depending on your use case. We provide extensive documentation and examples to help."
      },
      {
        q: "Do I need to change my backend?",
        a: "No backend changes required for basic features. Liveblocks works alongside your existing backend. For advanced features like permissions, you'll implement a simple auth endpoint that we'll call to verify users."
      },
      {
        q: "What frameworks are supported?",
        a: "We have official SDKs for React, Vue, Angular, and vanilla JavaScript. Our REST API works with any language. Most popular frameworks like Next.js, Nuxt, and SvelteKit have dedicated examples."
      },
      {
        q: "Can I migrate from my existing solution?",
        a: "Yes! We've helped many teams migrate from custom WebSocket implementations, Firebase, and other real-time solutions. Our team can provide migration guides and support."
      }
    ]
  }
]

export function FAQSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <HelpCircle className="w-3 h-3 mr-1" />
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Got Questions? We've Got{" "}
            <span className="gradient-text">Answers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Liveblocks. 
            Can't find what you're looking for? Our team is here to help.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                {category.category}
              </h3>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                        <AccordionTrigger className="px-6 text-left hover:no-underline hover:bg-accent/50 transition-colors">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle>Still Have Questions?</CardTitle>
                <CardDescription>
                  Our team is here to help you succeed
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" className="group">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat with Sales
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline">
                  Browse Documentation
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}