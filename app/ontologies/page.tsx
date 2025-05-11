import Link from "next/link"
import { Filter, Database, ArrowRight, Download, AlertTriangle, BookOpen, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FeaturedOntology } from "@/components/featured-ontology"

// This would normally be fetched from your Strapi CMS and MOBI API
const ontologies = [
  {
    id: 1,
    title: "Aerospace Components Ontology",
    description: "Standardized vocabulary for aerospace structural components.",
    status: "Adopted",
    version: "2.3",
    domain: "Structures",
    category: "Domain",
    slug: "aerospace-components",
    featured: true,
  },
  {
    id: 2,
    title: "Propulsion Systems Ontology",
    description: "Comprehensive model of propulsion systems and their relationships.",
    status: "Recommended",
    version: "1.5",
    domain: "Propulsion",
    category: "Domain",
    slug: "propulsion-systems",
    featured: false,
  },
  {
    id: 3,
    title: "Mission Planning Ontology",
    description: "Concepts and relationships for aerospace mission planning.",
    status: "Under Review",
    version: "0.9",
    domain: "Operations",
    category: "Domain",
    slug: "mission-planning",
    featured: false,
  },
  {
    id: 4,
    title: "Basic Formal Ontology (BFO)",
    description: "Upper-level ontology that provides a framework for domain ontologies.",
    status: "Adopted",
    version: "2.0",
    domain: "Foundation",
    category: "Foundation",
    slug: "bfo",
    featured: true,
  },
  {
    id: 5,
    title: "Enterprise Ontology",
    description: "Core enterprise concepts and relationships for organizational modeling.",
    status: "Adopted",
    version: "1.5",
    domain: "Enterprise",
    category: "Enterprise",
    slug: "enterprise-ontology",
    featured: true,
  },
  {
    id: 6,
    title: "Materials Properties Ontology",
    description: "Comprehensive ontology of aerospace materials and their properties.",
    status: "Recommended",
    version: "2.0",
    domain: "Materials",
    category: "Domain",
    slug: "materials-properties",
    featured: false,
  },
]

export default function OntologiesPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Adopted":
        return "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-800/20 dark:text-green-400"
      case "Recommended":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-800/20 dark:text-blue-400"
      case "Under Review":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-800/20 dark:text-yellow-400"
      case "Deprecated":
        return "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-800/20 dark:text-red-400"
      default:
        return "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800/20 dark:text-slate-400"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Domain":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-800/20 dark:text-purple-400"
      case "Foundation":
        return "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800/20 dark:text-slate-400"
      case "Enterprise":
        return "bg-cyan-100 text-cyan-800 hover:bg-cyan-200 dark:bg-cyan-800/20 dark:text-cyan-400"
      default:
        return "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800/20 dark:text-slate-400"
    }
  }

  const featuredOntologies = ontologies.filter((ontology) => ontology.featured)

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unified Ontology Catalog</h1>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                Explore our comprehensive collection of domain, foundation, and enterprise ontologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          {/* Consolidated Ontology Resources Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Ontology Resources</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Ontology Catalog Card */}
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center">
                    <BookOpen className="h-6 w-6 mr-2 text-slate-600 dark:text-slate-400" />
                    <CardTitle>Ontology Catalog</CardTitle>
                  </div>
                  <CardDescription>Browse our complete ontology collection</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Access our comprehensive catalog of domain, foundation, and enterprise ontologies with detailed
                    documentation.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2 w-full">
                    <Link href="#ontology-catalog" className="w-full">
                      <Button variant="outline" className="w-full">
                        <Search className="mr-2 h-4 w-4" />
                        Browse Catalog
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>

              {/* Standard MOBI Access Card */}
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center">
                    <Database className="h-6 w-6 mr-2 text-cyan-600 dark:text-cyan-400" />
                    <CardTitle>MOBI Access</CardTitle>
                  </div>
                  <CardDescription>Standard ontology management interface</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Access our standard MOBI instance for browsing, searching, and downloading ontologies without
                    technical metadata.
                  </p>
                </CardContent>
                <CardFooter>
                  <a href="https://mobi.example.com" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                      <Database className="mr-2 h-4 w-4" />
                      Launch MOBI
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              {/* MOBI Tech Data Card */}
              <Card className="flex flex-col h-full border-red-600">
                <CardHeader>
                  <div className="flex items-center">
                    <AlertTriangle className="h-6 w-6 mr-2 text-red-600 dark:text-red-400" />
                    <CardTitle className="text-red-600">MOBI Tech Data</CardTitle>
                  </div>
                  <CardDescription>Technical ontology management interface</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Access our technical MOBI instance with complete metadata, technical specifications, and advanced
                    features.
                  </p>
                </CardContent>
                <CardFooter>
                  <a href="https://mobi-tech.example.com" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Launch MOBI Tech Data
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Featured Ontologies Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Ontologies</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredOntologies.map((ontology) => (
                <FeaturedOntology
                  key={ontology.id}
                  title={ontology.title}
                  description={ontology.description}
                  status={ontology.status as any}
                  version={ontology.version}
                  slug={ontology.slug}
                  category={ontology.category as any}
                />
              ))}
            </div>
          </div>

          {/* Complete Ontology Catalog Section */}
          <div id="ontology-catalog">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Complete Ontology Catalog</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Filters</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="search" className="text-sm font-medium">
                        Search
                      </label>
                      <Input id="search" placeholder="Search ontologies..." className="w-full" />
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
                          <SelectItem value="domain">Domain</SelectItem>
                          <SelectItem value="foundation">Foundation</SelectItem>
                          <SelectItem value="enterprise">Enterprise</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="status" className="text-sm font-medium">
                        Status
                      </label>
                      <Select>
                        <SelectTrigger id="status">
                          <SelectValue placeholder="All Statuses" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Statuses</SelectItem>
                          <SelectItem value="adopted">Adopted</SelectItem>
                          <SelectItem value="recommended">Recommended</SelectItem>
                          <SelectItem value="under-review">Under Review</SelectItem>
                          <SelectItem value="deprecated">Deprecated</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="domain" className="text-sm font-medium">
                        Domain
                      </label>
                      <Select>
                        <SelectTrigger id="domain">
                          <SelectValue placeholder="All Domains" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Domains</SelectItem>
                          <SelectItem value="structures">Structures</SelectItem>
                          <SelectItem value="propulsion">Propulsion</SelectItem>
                          <SelectItem value="operations">Operations</SelectItem>
                          <SelectItem value="materials">Materials</SelectItem>
                          <SelectItem value="foundation">Foundation</SelectItem>
                          <SelectItem value="enterprise">Enterprise</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">
                      <Filter className="mr-2 h-4 w-4" />
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:w-3/4">
                <Tabs defaultValue="grid" className="w-full">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium">All Ontologies ({ontologies.length})</h3>
                    <TabsList>
                      <TabsTrigger value="grid">Grid</TabsTrigger>
                      <TabsTrigger value="list">List</TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="grid" className="mt-0">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {ontologies.map((ontology) => (
                        <FeaturedOntology
                          key={ontology.id}
                          title={ontology.title}
                          description={ontology.description}
                          status={ontology.status as any}
                          version={ontology.version}
                          slug={ontology.slug}
                          category={ontology.category as any}
                        />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="list" className="mt-0">
                    <div className="space-y-4">
                      {ontologies.map((ontology) => (
                        <Card key={ontology.id}>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle>{ontology.title}</CardTitle>
                              <div className="flex gap-2">
                                <Badge className={getCategoryColor(ontology.category)} variant="outline">
                                  {ontology.category}
                                </Badge>
                                <Badge className={getStatusColor(ontology.status)} variant="outline">
                                  {ontology.status}
                                </Badge>
                              </div>
                            </div>
                            <CardDescription>
                              Version {ontology.version} • {ontology.domain}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <p className="text-sm text-slate-700 dark:text-slate-300">{ontology.description}</p>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Link href={`/ontologies/${ontology.category.toLowerCase()}/${ontology.slug}`}>
                              <Button variant="outline">
                                View Details <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                            <Button variant="outline" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
