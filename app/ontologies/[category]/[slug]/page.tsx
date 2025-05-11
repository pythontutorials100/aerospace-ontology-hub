// app/ontologies/[[category]]/[[slug]]/page.tsx

import Link from "next/link"
import { ArrowLeft, Download, ExternalLink, FileText, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OntologyVisualizer } from "@/components/ontology-visualizer" // Make sure this component doesn't cause issues for static export

// --- Data for All Ontologies (across categories) ---
// IMPORTANT: Populate this array with ALL your ontology details, including their category and slug.
const allOntologiesData = [
  {
    category: "Domain", // Make sure this matches what you expect in the URL path
    slug: "aerospace-components",
    title: "Aerospace Components Ontology",
    description: "Standardized vocabulary for aerospace structural components.",
    longDescription: "The Aerospace Components Ontology provides...",
    status: "Adopted",
    version: "2.3",
    domain: "Structures", // This might be redundant if category is 'Domain' or could be more specific
    lastUpdated: "March 15, 2025",
    maintainer: "Structures Domain Team",
    iri: "https://example.com/ontologies/aerospace-components",
    license: "Company Internal",
    dependencies: [{ name: "Basic Formal Ontology (BFO)", version: "2.0", slug: "bfo" }],
    usageGuidelines: "This ontology should be used as the primary vocabulary...",
    examples: [{ title: "Component Classification", description: "...", code: "..." }],
    relatedProjects: [{ name: "Wing Design Knowledge Graph", slug: "wing-design-kg" }],
    relatedResources: [{ type: "article", title: "Intro to ACO", slug: "intro-aerospace-components" }],
  },
  {
    category: "Foundation",
    slug: "bfo",
    title: "Basic Formal Ontology (BFO)",
    description: "Upper-level ontology that provides a framework for domain ontologies.",
    longDescription: "The Basic Formal Ontology (BFO) is an upper-level ontology...",
    status: "Adopted",
    version: "2.0",
    domain: "Foundation",
    lastUpdated: "January 1, 2024",
    maintainer: "Foundation Ontology Team",
    iri: "https://example.com/ontologies/bfo",
    license: "Open Source",
    dependencies: [],
    usageGuidelines: "Guidelines for BFO...",
    examples: [],
    relatedProjects: [],
    relatedResources: [],
  },
  {
    category: "Enterprise",
    slug: "enterprise-ontology",
    title: "Enterprise Ontology",
    description: "Core enterprise concepts and relationships for organizational modeling.",
    longDescription: "The Enterprise Ontology provides a standardized vocabulary...",
    status: "Adopted",
    version: "1.5",
    domain: "Enterprise",
    lastUpdated: "February 1, 2025",
    maintainer: "Enterprise Architecture Team",
    iri: "https://example.com/ontologies/enterprise-ontology",
    license: "Company Internal",
    dependencies: [{ name: "Basic Formal Ontology (BFO)", version: "2.0", slug: "bfo" }],
    usageGuidelines: "Guidelines for Enterprise Ontology...",
    examples: [],
    relatedProjects: [],
    relatedResources: [],
  },
  // ... ADD ALL OTHER ONTOLOGIES HERE (Domain, Foundation, Enterprise) with their details ...
  // e.g., from your /ontologies/page.tsx:
  // propulsion-systems (Domain), mission-planning (Domain), materials-properties (Domain)
];

// Function to generate static paths for Next.js build
export async function generateStaticParams() {
  return allOntologiesData.map((ontology) => ({
    category: ontology.category.toLowerCase(), // Ensure category matches URL path (e.g., 'domain', not 'Domain')
    slug: ontology.slug,
  }));
}

// Helper function to find ontology data by category and slug
function getOntologyByCatAndSlug(categoryParam?: string | string[], slugParam?: string | string[]) {
  const category = Array.isArray(categoryParam) ? categoryParam[0] : categoryParam;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  if (!category || !slug) return undefined;

  return allOntologiesData.find(
    (ont) => ont.category.toLowerCase() === category.toLowerCase() && ont.slug === slug
  );
}

interface OntologyPageProps {
  params: {
    category?: string | string[] // If your folder name is [[category]]
    slug?: string | string[]     // If your folder name is [[slug]]
  }
}

export default function OntologyPage({ params }: OntologyPageProps) {
  const ontology = getOntologyByCatAndSlug(params.category, params.slug);

  if (!ontology) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-2xl font-bold">Ontology Not Found</h1>
        <p>The requested ontology could not be found.</p>
        <Link href="/ontologies">
          <Button className="mt-4">Back to Ontologies</Button>
        </Link>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    // ... (Your getStatusColor function)
    switch (status) {
      case "Adopted": return "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-800/20 dark:text-green-400";
      // ... other cases
      default: return "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800/20 dark:text-slate-400";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link
              href="/ontologies"
              className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Ontologies
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
                  {/* Ensure your `ontology` object has `domain` if you use it here, or use `ontology.category` */}
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Category/Domain</dt>
                    <dd className="text-sm font-semibold">{ontology.domain || ontology.category}</dd>
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

      {/* Interactive Ontology Visualizer might need conditional rendering or props if it's client-side heavy */}
      {typeof window !== 'undefined' && ontology.slug && ( // Simple check to ensure it runs client-side
         <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <OntologyVisualizer ontologyId={ontology.slug} title={`Explore ${ontology.title}`} height={500} />
            </div>
         </section>
      )}


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
                              // Adjust link based on how dependency slugs are structured
                              href={`/ontologies/${dep.slug.includes("bfo") ? "foundation" : "domain"}/${dep.slug}`}
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
                      <pre className="text-sm"><code>{example.code}</code></pre>
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
                      <CardHeader><CardTitle>{project.name}</CardTitle></CardHeader>
                      <CardContent>
                        <Link href={`/projects/${project.slug}`}>
                          <Button variant="outline" className="w-full">View Project</Button>
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
                            <Badge variant="outline" className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-800/20 dark:text-purple-400">Tutorial</Badge>
                          ) : (
                            <Badge variant="outline" className="bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800/20 dark:text-slate-400">Article</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Link href={`/resources/${resource.type === "tutorial" ? "tutorials" : "articles"}/${resource.slug}`}>
                          <Button variant="outline" className="w-full">
                            {resource.type === "tutorial" ? <BookOpen className="mr-2 h-4 w-4" /> : <FileText className="mr-2 h-4 w-4" />}
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
                <Button className="px-8"><Users className="mr-2 h-4 w-4" />Contact Domain Experts</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8">Request Support</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}