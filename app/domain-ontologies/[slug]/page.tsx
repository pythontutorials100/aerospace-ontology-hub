// app/domain-ontologies/[slug]/page.tsx

import Link from "next/link"
import { ArrowLeft, Download, ExternalLink, FileText, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// --- Data for Domain Ontologies ---
// IMPORTANT: Populate this array with ALL your domain ontology details.
// This data will be used by generateStaticParams and to render individual pages.
const domainOntologiesData = [
  {
    slug: "aerospace-components", // This must match the slug in your links and URLs
    title: "Aerospace Components Ontology",
    description: "Standardized vocabulary for aerospace structural components.",
    longDescription:
      "The Aerospace Components Ontology provides a comprehensive semantic model for structural components used in aerospace engineering. It defines classes, properties, and relationships that enable consistent representation of components across different systems and applications.",
    status: "Adopted",
    version: "2.3",
    domain: "Structures",
    lastUpdated: "March 15, 2025",
    maintainer: "Structures Domain Team",
    iri: "https://example.com/ontologies/aerospace-components",
    license: "Company Internal",
    dependencies: [
      { name: "Basic Formal Ontology (BFO)", version: "2.0", slug: "bfo" },
      { name: "Enterprise Ontology", version: "1.5", slug: "enterprise-ontology" },
      { name: "Materials Properties Ontology", version: "2.0", slug: "materials-properties" },
    ],
    usageGuidelines:
      "This ontology should be used as the primary vocabulary for all structural component modeling within the organization. It provides standardized terms for components, their properties, and relationships.",
    examples: [
      {
        title: "Component Classification",
        description: "Example of how to classify a structural component using the ontology",
        code: `# Example in Turtle format...`, // Keep your code example
      },
      {
        title: "Component Relationships",
        description: "Example of how to model relationships between components",
        code: `# Example in Turtle format...`, // Keep your code example
      },
    ],
    relatedProjects: [
      { name: "Wing Design Knowledge Graph", slug: "wing-design-kg" },
      { name: "Component Digital Twin Initiative", slug: "component-digital-twin" },
      { name: "Structural Analysis Automation", slug: "structural-analysis-automation" },
    ],
    relatedResources: [
      { type: "article", title: "Introduction to the Aerospace Components Ontology", slug: "intro-aerospace-components" },
      { type: "tutorial", title: "Modeling Structural Components with ACO", slug: "modeling-with-aco" },
      { type: "article", title: "Best Practices for Component Classification", slug: "component-classification-best-practices" },
    ],
  },
  {
    slug: "propulsion-systems",
    title: "Propulsion Systems Ontology",
    description: "Comprehensive model of propulsion systems and their relationships.",
    longDescription: "Detailed information about the Propulsion Systems Ontology...",
    status: "Recommended",
    version: "1.5",
    domain: "Propulsion",
    lastUpdated: "April 1, 2025",
    maintainer: "Propulsion Team",
    iri: "https://example.com/ontologies/propulsion-systems",
    license: "Company Internal",
    dependencies: [ { name: "Basic Formal Ontology (BFO)", version: "2.0", slug: "bfo" }],
    usageGuidelines: "Guidelines for using the Propulsion Systems Ontology...",
    examples: [],
    relatedProjects: [],
    relatedResources: [],
  },
  {
    slug: "mission-planning",
    title: "Mission Planning Ontology",
    description: "Concepts and relationships for aerospace mission planning.",
    longDescription: "Detailed information about the Mission Planning Ontology...",
    status: "Under Review",
    version: "0.9",
    domain: "Operations",
    lastUpdated: "May 1, 2025",
    maintainer: "Operations Team",
    iri: "https://example.com/ontologies/mission-planning",
    license: "Company Internal",
    dependencies: [],
    usageGuidelines: "Guidelines for Mission Planning Ontology...",
    examples: [],
    relatedProjects: [],
    relatedResources: [],
  },
  // ... ADD ALL OTHER DOMAIN ONTOLOGIES HERE with their respective details ...
  // Example:
  // { slug: "avionics-systems", title: "Avionics Systems Ontology", description: "...", ... },
  // { slug: "materials-properties", title: "Materials Properties Ontology", description: "...", ... },
];

// Function to generate static paths for Next.js build
export async function generateStaticParams() {
  return domainOntologiesData.map((ontology) => ({
    slug: ontology.slug,
  }));
}

// Helper function to find ontology data by slug
function getOntologyBySlug(slug: string) {
  return domainOntologiesData.find((ontology) => ontology.slug === slug);
}

interface OntologyPageProps {
  params: {
    slug: string
  }
}

export default function OntologyPage({ params }: OntologyPageProps) {
  const ontology = getOntologyBySlug(params.slug);

  if (!ontology) {
    // This case should ideally not be hit if generateStaticParams covers all valid slugs
    // and you don't have links to non-existent slugs.
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-2xl font-bold">Ontology Not Found</h1>
        <p>The requested ontology with slug "{params.slug}" could not be found.</p>
        <Link href="/domain-ontologies">
          <Button className="mt-4">Back to Domain Ontologies</Button>
        </Link>
      </div>
    );
  }

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
          <div className="mb-8">
            <Link
              href="/domain-ontologies" // Next.js Link handles basePath automatically
              className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Domain Ontologies
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{ontology.title}</h1>
                <Badge className={getStatusColor(ontology.status)} variant="outline">
                  {ontology.status}
                </Badge>
              </div>
              <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">{ontology.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download Ontology
                </Button>
                <Button variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View in MOBI Catalog
                </Button>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Ontology Details</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Version</dt>
                    <dd className="text-sm font-semibold">{ontology.version}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Domain</dt>
                    <dd className="text-sm font-semibold">{ontology.domain}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Last Updated</dt>
                    <dd className="text-sm font-semibold">{ontology.lastUpdated}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Maintainer</dt>
                    <dd className="text-sm font-semibold">{ontology.maintainer}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">IRI</dt>
                    <dd className="text-sm font-semibold break-all">{ontology.iri}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">License</dt>
                    <dd className="text-sm font-semibold">{ontology.license}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="documentation" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="documentation" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
                <div className="space-y-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <h2>Description</h2>
                    <p>{ontology.longDescription}</p>

                    <h2>Usage Guidelines</h2>
                    <p>{ontology.usageGuidelines}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Dependencies</CardTitle>
                      <CardDescription>This ontology depends on the following ontologies</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {ontology.dependencies.map((dep, index) => (
                          <li key={index}>
                            <Link
                              href={`/domain-ontologies/${dep.slug}`} // Assuming dependencies are also domain ontologies for now
                              className="text-sm font-medium text-primary hover:underline"
                            >
                              {dep.name} (v{dep.version})
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="examples" className="mt-6">
              <div className="space-y-8">
                {ontology.examples.map((example, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-bold">{example.title}</h3>
                    <p className="text-slate-700 dark:text-slate-300">{example.description}</p>
                    <div className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-x-auto">
                      <pre className="text-sm">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="projects" className="mt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Related Projects</h2>
                <p className="text-slate-700 dark:text-slate-300">Projects that use the {ontology.title}</p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {ontology.relatedProjects.map((project, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{project.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Link href={`/projects/${project.slug}`}>
                          <Button variant="outline" className="w-full">
                            View Project
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="resources" className="mt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Related Resources</h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Articles, tutorials, and other resources related to the {ontology.title}
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {ontology.relatedResources.map((resource, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          {resource.type === "tutorial" ? (
                            <Badge
                              variant="outline"
                              className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-800/20 dark:text-purple-400"
                            >
                              Tutorial
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800/20 dark:text-slate-400"
                            >
                              Article
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Link
                          href={`/resources/${resource.type === "tutorial" ? "tutorials" : "articles"}/${resource.slug}`}
                        >
                          <Button variant="outline" className="w-full">
                            {resource.type === "tutorial" ? (
                              <BookOpen className="mr-2 h-4 w-4" />
                            ) : (
                              <FileText className="mr-2 h-4 w-4" />
                            )}
                            Read {resource.type === "tutorial" ? "Tutorial" : "Article"}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need Help?</h2>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                Contact our ontology experts for guidance on using the {ontology.title}.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/team">
                <Button className="px-8">
                  <Users className="mr-2 h-4 w-4" />
                  Contact Domain Experts
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8">
                  Request Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}