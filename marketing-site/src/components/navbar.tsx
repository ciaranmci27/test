"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { useScroll } from "@/hooks/use-scroll"
import { Code2, Sparkles, Menu, X } from "lucide-react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Multiplayer Editing",
    href: "/products/multiplayer-editing",
    description:
      "Real-time presence, cursors, annotations, and undo/redo for collaborative editing.",
  },
  {
    title: "Comments",
    href: "/products/comments",
    description:
      "Add contextual comments to any part of your application with notifications.",
  },
  {
    title: "Notifications",
    href: "/products/notifications",
    description:
      "Real-time notifications system with unread indicators and inbox UI.",
  },
  {
    title: "Text Editor",
    href: "/products/text-editor",
    description: "Collaborative rich text editor with real-time sync.",
  },
]

export function Navbar() {
  const scrolled = useScroll()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 ease-out",
      scrolled 
        ? "bg-background/70 backdrop-blur-xl border-b border-border/30 shadow-lg supports-[backdrop-filter]:bg-background/70" 
        : "bg-transparent border-b border-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg blur-lg opacity-50 animate-glow" />
          </div>
          <span className="font-bold text-xl gradient-text">Liveblocks</span>
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Code2 className="h-6 w-6 mb-2" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Documentation
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Everything you need to build collaborative experiences.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Getting Started">
                      Start building in minutes with our quickstart guide.
                    </ListItem>
                    <ListItem href="/docs/api" title="API Reference">
                      Complete API documentation for all Liveblocks features.
                    </ListItem>
                    <ListItem href="/examples" title="Examples">
                      Browse example projects and starter templates.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/pricing" className={navigationMenuTriggerStyle()}>
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/blog" className={navigationMenuTriggerStyle()}>
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Actions - Hidden on mobile */}
        <div className="ml-auto hidden md:flex items-center space-x-4">
          <Link
            href="/docs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Documentation
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </Link>
          <Button variant="gradient" size="sm" className="glow">
            <Sparkles className="w-4 h-4 mr-2" />
            Get started
          </Button>
        </div>

        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="ml-auto md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu - Only visible when open */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border/30 bg-background/95 backdrop-blur-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <div className="px-3 py-2">
                <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Products</h3>
                <div className="mt-2 space-y-1">
                  {components.map((component) => (
                    <Link
                      key={component.title}
                      href={component.href}
                      className="block px-3 py-2 text-sm hover:bg-accent/50 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="font-medium">{component.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {component.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="px-3 py-2">
                <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Developers</h3>
                <div className="mt-2 space-y-1">
                  <Link
                    href="/docs"
                    className="block px-3 py-2 text-sm hover:bg-accent/50 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="font-medium">Getting Started</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Start building in minutes with our quickstart guide.
                    </div>
                  </Link>
                  <Link
                    href="/docs/api"
                    className="block px-3 py-2 text-sm hover:bg-accent/50 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="font-medium">API Reference</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Complete API documentation for all Liveblocks features.
                    </div>
                  </Link>
                  <Link
                    href="/examples"
                    className="block px-3 py-2 text-sm hover:bg-accent/50 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="font-medium">Examples</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Browse example projects and starter templates.
                    </div>
                  </Link>
                </div>
              </div>

              <div className="px-3 py-2 space-y-1">
                <Link
                  href="/pricing"
                  className="block px-3 py-2 text-sm font-medium hover:bg-accent/50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-2 text-sm font-medium hover:bg-accent/50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="border-t border-border/30 pt-4 space-y-2">
              <Link
                href="/docs"
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link
                href="/login"
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign in
              </Link>
              <div className="px-3 py-2">
                <Button variant="gradient" size="sm" className="w-full glow">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"