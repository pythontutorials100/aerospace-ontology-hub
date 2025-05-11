import Link from "next/link"
import { ArrowLeft, Filter, Puzzle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PatternCard } from "@/components/pattern-card"

// This would normally be fetched from your Strapi CMS
const patterns = [
  {
    id: 1,
    title: "Component Assembly Pattern",
    description: "Pattern for modeling hierarchical assemblies of components.",
    category: "Structural",
    complexity: "Medium",
    slug: "component-assembly",
  },
  {
    id: 2,
    title: "Material Properties Pattern",
    description: "Pattern for representing material properties and their values.",
    category: "Properties",
    complexity: "Simple",
    slug: "material-properties",
  },
  {
    id: 3,
    title: "System Interfaces Pattern",
    description: "Pattern for modeling interfaces between systems and components.",
    category: "Systems",
    complexity: "Complex",
    slug: "system-interfaces",
  },
]

export default function PatternsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link
              href="/resources"
              className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Resources
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Modeling Patterns</h1>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                Reusable design patterns to solve common modeling challenges in aerospace ontologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Filters</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="search" className="text-sm font-medium">
                      Search
                    </label>
                    <Input id="search" placeholder="Search patterns..." className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Category
                    </label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="structural">Structural</SelectItem>
                        <SelectItem value="properties">Properties</SelectItem>
                        <SelectItem value="systems">Systems</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="complexity" className="text-sm font-medium">
                      Complexity
                    </label>
                    <Select>
                      <SelectTrigger id="complexity">
                        <SelectValue placeholder="All Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="simple">Simple</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="complex">Complex</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    <Filter className="mr-2 h-4 w-4" />
                    Apply Filters
                  </Button>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Puzzle className="mr-2 h-5 w-5" />
                    Why Use Patterns?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Ontology design patterns provide reusable solutions to common modeling problems. They help ensure
                    consistency, interoperability, and best practices across your ontology development.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/resources/articles/ontology-design-patterns">
                    <Button variant="outline" size="sm">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="md:w-3/4">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {patterns.map((pattern) => (
                  <PatternCard
                    key={pattern.id}
                    title={pattern.title}
                    description={pattern.description}
                    category={pattern.category}
                    complexity={pattern.complexity as any}
                    slug={pattern.slug}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
