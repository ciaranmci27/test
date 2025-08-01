"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for side projects and experimentation",
    features: [
      "Up to 100 monthly active users",
      "10GB bandwidth",
      "Community support",
      "Basic presence features",
      "7-day data retention"
    ],
    cta: "Start Building",
    variant: "outline" as const
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "For growing teams building production apps",
    badge: "Most Popular",
    features: [
      "Up to 10,000 monthly active users",
      "1TB bandwidth",
      "Priority support",
      "Advanced collaboration features",
      "90-day data retention",
      "Custom branding",
      "Analytics dashboard"
    ],
    cta: "Start Free Trial",
    variant: "gradient" as const
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced needs",
    features: [
      "Unlimited users",
      "Unlimited bandwidth",
      "24/7 dedicated support",
      "Advanced security features",
      "Unlimited data retention",
      "Custom integrations",
      "SLA guarantees",
      "On-premise deployment option"
    ],
    cta: "Contact Sales",
    variant: "outline" as const
  }
]

export function PricingSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-600/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Free, Scale as You{" "}
            <span className="gradient-text">Grow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing that scales with your business. 
            No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 1 ? "md:-mt-4" : ""}
            >
              <Card className={`h-full ${index === 1 ? "border-primary shadow-lg shadow-primary/20" : ""} bg-card/50 backdrop-blur-sm`}>
                <CardHeader>
                  {plan.badge && (
                    <Badge variant="gradient" className="w-fit mb-2">
                      {plan.badge}
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={plan.variant} 
                    className="w-full group"
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 rounded-lg border">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your App?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of developers building the future of collaborative software. 
              Start with our generous free tier and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gradient" className="group">
                Start Building for Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}