import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Twitter, Github, Linkedin, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg blur-lg opacity-50" />
              </div>
              <span className="text-2xl font-bold gradient-text">Liveblocks</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The platform for adding collaborative experiences to your product, 
              trusted by thousands of developers worldwide.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/liveblocks"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/liveblocks"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/liveblocks"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">
                  Product
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link
                      href="/products/multiplayer-editing"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Multiplayer Editing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/comments"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Comments
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/notifications"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Notifications
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold">
                  Developers
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link
                      href="/docs"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      Documentation
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/api"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      API Reference
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/examples"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Examples
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">
                  Company
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      Careers
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Hiring
                      </Badge>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold">
                  Legal
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/security"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Separator className="mt-12 bg-border/50" />
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Liveblocks Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              All systems operational
            </span>
            <Link href="/status" className="hover:text-foreground transition-colors">
              Status
            </Link>
            <Link href="/changelog" className="hover:text-foreground transition-colors">
              Changelog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}