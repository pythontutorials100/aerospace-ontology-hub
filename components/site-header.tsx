"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Mountain,
  Menu,
  X,
  Users,
  Puzzle,
  Activity,
  BookOpen,
  FileText,
  Layers,
  Database,
  AlertTriangle,
  UserPlus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/resources",
      label: "Resources",
      active: pathname === "/resources" || pathname.startsWith("/resources/"),
      dropdown: true,
      items: [
        { href: "/resources/articles", label: "Articles" },
        { href: "/resources/tutorials", label: "Tutorials" },
        { href: "/resources/patterns", label: "Modeling Patterns" },
        { href: "/resources/use-cases", label: "Use Cases" },
      ],
    },
    {
      href: "/ontologies",
      label: "Ontologies",
      active: pathname === "/ontologies" || pathname.startsWith("/ontologies/"),
      dropdown: true,
      items: [
        { href: "/ontologies/domain", label: "Domain Ontologies" },
        { href: "/ontologies/foundation", label: "Foundation Ontologies" },
        { href: "/ontologies/enterprise", label: "Enterprise Ontology" },
        { href: "/ontologies/catalog", label: "Ontology Catalog" },
      ],
    },
    {
      href: "/team",
      label: "Team",
      active: pathname === "/team" || pathname.startsWith("/team/"),
    },
    {
      href: "/projects",
      label: "Projects",
      active: pathname === "/projects" || pathname.startsWith("/projects/"),
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-6 w-6" />
            <span className="inline-block font-bold">Aerospace Ontology Hub</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {routes.map((route) =>
              route.dropdown ? (
                <DropdownMenu key={route.href}>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                    <span className={route.active ? "text-primary" : "text-muted-foreground"}>{route.label}</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuLabel>{route.label}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {route.items?.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors hover:text-primary",
                    route.active ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {route.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-2">
            {/* MOBI Access Buttons */}
            <a href="https://mobi.example.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100"
              >
                <Database className="mr-1 h-4 w-4" />
                MOBI
              </Button>
            </a>
            <a href="https://mobi-tech.example.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="bg-red-50 text-red-700 border-red-300 hover:bg-red-100">
                <AlertTriangle className="mr-1 h-4 w-4" />
                MOBI Tech
              </Button>
            </a>

            {/* Signup Button */}
            <Link href="/signup">
              <Button size="sm">
                <UserPlus className="mr-1 h-4 w-4" />
                Sign Up
              </Button>
            </Link>

            <ThemeToggle />
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <a href="https://mobi.example.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-8 w-8 bg-cyan-50 text-cyan-700 border-cyan-200">
                <Database className="h-4 w-4" />
                <span className="sr-only">MOBI Access</span>
              </Button>
            </a>
            <a href="https://mobi-tech.example.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-8 w-8 bg-red-50 text-red-700 border-red-300">
                <AlertTriangle className="h-4 w-4" />
                <span className="sr-only">MOBI Tech Access</span>
              </Button>
            </a>
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus:ring-0">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <div className="flex flex-col space-y-3 pr-6">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <Mountain className="h-6 w-6" />
                    <span className="inline-block font-bold">Aerospace Ontology Hub</span>
                  </Link>
                  <div className="flex justify-end">
                    <Button
                      variant="ghost"
                      className="px-0 text-base hover:bg-transparent focus:ring-0"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close Menu</span>
                    </Button>
                  </div>
                </div>
                <nav className="flex flex-col space-y-4 mt-4">
                  <Link
                    href="/"
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === "/" ? "text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">Resources</div>
                    <div className="ml-4 flex flex-col space-y-2">
                      <Link
                        href="/resources"
                        className={cn(
                          "text-sm transition-colors hover:text-primary",
                          pathname === "/resources" ? "text-primary" : "text-muted-foreground",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <BookOpen className="mr-2 inline-block h-4 w-4" />
                        All Resources
                      </Link>
                      <Link
                        href="/resources/articles"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        <FileText className="mr-2 inline-block h-4 w-4" />
                        Articles
                      </Link>
                      <Link
                        href="/resources/tutorials"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        <BookOpen className="mr-2 inline-block h-4 w-4" />
                        Tutorials
                      </Link>
                      <Link
                        href="/resources/patterns"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        <Puzzle className="mr-2 inline-block h-4 w-4" />
                        Modeling Patterns
                      </Link>
                      <Link
                        href="/resources/use-cases"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Use Cases
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">Ontologies</div>
                    <div className="ml-4 flex flex-col space-y-2">
                      <Link
                        href="/ontologies"
                        className={cn(
                          "text-sm transition-colors hover:text-primary",
                          pathname === "/ontologies" ? "text-primary" : "text-muted-foreground",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <Layers className="mr-2 inline-block h-4 w-4" />
                        All Ontologies
                      </Link>
                      <Link
                        href="/ontologies/domain"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Domain Ontologies
                      </Link>
                      <Link
                        href="/ontologies/foundation"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Foundation Ontologies
                      </Link>
                      <Link
                        href="/ontologies/enterprise"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Enterprise Ontology
                      </Link>
                      <Link
                        href="/ontologies/catalog"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Ontology Catalog
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/team"
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === "/team" || pathname.startsWith("/team/") ? "text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Users className="mr-2 inline-block h-4 w-4" />
                    Team
                  </Link>
                  <Link
                    href="/projects"
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === "/projects" || pathname.startsWith("/projects/")
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Activity className="mr-2 inline-block h-4 w-4" />
                    Projects
                  </Link>

                  {/* Sign Up Link in Mobile Menu */}
                  <div className="pt-4 border-t">
                    <Link
                      href="/signup"
                      className="flex items-center text-sm font-medium text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      <UserPlus className="mr-2 inline-block h-4 w-4" />
                      Sign Up
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
