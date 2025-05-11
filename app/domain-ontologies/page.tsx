import Link from "next/link"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// This would normally be fetched from your Strapi CMS and MOBI API
const ontologies = [
  {
    id: 1,
    title: "Aerospace Components Ontology",
    description: "Standardized vocabulary for aerospace structural components.",
    status: "Adopted",
    version: "2.3",
    domain: "Structures",
    slug: "aerospace-components",
  },
  {
    id: 2,
    title: "Propulsion Systems Ontology",
    description: "Comprehensive model of propulsion systems and their relationships.",
    status: "Recommended",
    version: "1.5",
    domain: "Propulsion",
    slug: "propulsion-systems",
  },
  {
    id: 3,
    title: "Mission Planning Ontology",
    description: "Concepts and relationships for aerospace mission planning.",
    status: "Under Review",
    version: "0.9",
    domain: "Operations",
    slug: "mission-planning",
  },
  {
    id: 4,
    title: "Avionics Systems Ontology",
    description: "Standardized model for avionics systems and components.",
    status: "Adopted",
    version: "3.1",
    domain: "Avionics",
    slug: "avionics-systems",
  },
  {
    id: 5,
    title: "Materials Properties Ontology",
    description: "Comprehensive ontology of aerospace materials and their properties.",
    status: "Recommended",
    version: "2.0",
    domain: "Materials",
    slug: "materials-properties",
  },
  {
    id: 6,
    title: "Flight Dynamics Ontology",
    description: "Concepts and relationships for flight dynamics and control.",
    status: "Under Review",
    version: "0.8",
    domain: "Dynamics",
    slug: "flight-dynamics",
  },
  {
    id: 7,
    title: "Aerospace Testing Ontology",
    description: "Standardized vocabulary for aerospace testing procedures and results.",
    status: "Adopted",
    version: "1.7",
    domain: "Testing",
    slug: "aerospace-testing",
  },
  {
    id: 8,
    title: "Systems Engineering Ontology",
    description: "Comprehensive model for systems engineering processes in aerospace.",
    status: "Recommended",
    version: "2.2",
    domain: "Systems",
    slug: "systems-engineering",
  },
  {
    id: 9,
    title: "Aerospace Manufacturing Ontology",
    description: "Concepts and relationships for aerospace manufacturing processes.",
    status: "Deprecated",
    version: "1.0",
    domain: "Manufacturing",
    slug: "aerospace-manufacturing",
  },
]

export default function DomainOntologiesPage() {
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

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Domain Ontologies</h1>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                Explore our comprehensive collection of domain-specific ontologies for aerospace applications.
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
                    <Input id="search" placeholder="Search ontologies..." className="w-full" />
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
                        <SelectItem value="avionics">Avionics</SelectItem>
                        <SelectItem value="materials">Materials</SelectItem>
                        <SelectItem value="dynamics">Dynamics</SelectItem>
                        <SelectItem value="testing">Testing</SelectItem>
                        <SelectItem value="systems">Systems</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
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
                  <h2 className="text-xl font-bold">{ontologies.length} Ontologies</h2>
                  <TabsList>
                    <TabsTrigger value="grid">Grid</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="grid" className="mt-0">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {ontologies.map((ontology) => (
                      <Card key={ontology.id} className="flex flex-col h-full">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">{ontology.title}</CardTitle>
                            <Badge className={getStatusColor(ontology.status)} variant="outline">
                              {ontology.status}
                            </Badge>
                          </div>
                          <CardDescription>
                            Version {ontology.version} • {ontology.domain}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-sm text-slate-700 dark:text-slate-300">{ontology.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Link href={`/domain-ontologies/${ontology.slug}`} className="w-full">
                            <Button variant="outline" className="w-full">
                              View Details
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
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
                            <Badge className={getStatusColor(ontology.status)} variant="outline">
                              {ontology.status}
                            </Badge>
                          </div>
                          <CardDescription>
                            Version {ontology.version} • {ontology.domain}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-slate-700 dark:text-slate-300">{ontology.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Link href={`/domain-ontologies/${ontology.slug}`}>
                            <Button variant="outline">View Details</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
