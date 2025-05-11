import Link from "next/link"
import { ArrowLeft, FileText, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PatternPageProps {
  params: {
    slug: string
  }
}

export default function PatternPage({ params }: PatternPageProps) {
  // In a real application, this would fetch data from your Strapi CMS
  // For this example, we'll use hardcoded data
  const pattern = {
    title: "Component Assembly Pattern",
    description: "Pattern for modeling hierarchical assemblies of components.",
    longDescription:
      "The Component Assembly Pattern provides a standardized approach for modeling hierarchical assemblies of components in aerospace systems. It defines the relationships between assemblies, sub-assemblies, and individual components, enabling consistent representation of complex structures.",
    category: "Structural",
    complexity: "Medium",
    applicability: [
      "Use when modeling complex assemblies with multiple levels of hierarchy",
      "Appropriate for representing physical structures with part-whole relationships",
      "Useful for systems that need to track component relationships for maintenance or analysis",
    ],
    structure: `# OWL Representation
@prefix aco: <https://example.com/ontologies/aerospace-components#> .

aco:Assembly rdfs:subClassOf aco:Component ;
  rdfs:comment "A component that consists of other components" .

aco:hasComponent rdf:type owl:ObjectProperty ;
  rdfs:domain aco:Assembly ;
  rdfs:range aco:Component ;
  rdfs:comment "Relates an assembly to its components" .

aco:isComponentOf rdf:type owl:ObjectProperty ;
  owl:inverseOf aco:hasComponent ;
  rdfs:domain aco:Component ;
  rdfs:range aco:Assembly ;
  rdfs:comment "Relates a component to its parent assembly" .`,
    consequences: [
      "Enables representation of complex hierarchical structures",
      "Supports queries for component containment and traversal",
      "May require additional properties to represent specific assembly constraints",
      "Can lead to deep hierarchies that require specialized visualization",
    ],
    relatedPatterns: [
      { name: "Material Properties Pattern", slug: "material-properties" },
      { name: "System Interfaces Pattern", slug: "system-interfaces" },
    ],
    relatedResources: [
      {
        type: "article",
        title: "Ontology Design Patterns for Aerospace Engineering",
        slug: "ontology-design-patterns-aerospace",
      },
      {
        type: "tutorial",
        title: "Implementing Component Hierarchies in OWL",
        slug: "component-hierarchies-owl",
      },
    ],
    examples: [
      {
        title: "Wing Assembly Example",
        description: "Example of modeling a wing assembly using the Component Assembly Pattern",
        code: `# Example in Turtle format
@prefix aco: <https://example.com/ontologies/aerospace-components#> .
@prefix ex: <https://example.com/instances/> .

ex:WingAssembly a aco:Assembly ;
  aco:hasDesignation "Main Wing Assembly" ;
  aco:hasComponent ex:WingSpar ;
  aco:hasComponent ex:WingRib01 ;
  aco:hasComponent ex:WingRib02 ;
  aco:hasComponent ex:WingSkin .

ex:WingSpar a aco:Component ;
  aco:hasDesignation "Wing Main Spar" ;
  aco:isComponentOf ex:WingAssembly .`,
      },
    ],
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Simple":
        return "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-800/20 dark:text-green-400"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-800/20 dark:text-yellow-400"
      case "Complex":
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
              href="/resources/patterns"
              className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Modeling Patterns
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{pattern.title}</h1>
                <Badge className={getComplexityColor(pattern.complexity)} variant="outline">
                  {pattern.complexity}
                </Badge>
              </div>
              <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">{pattern.description}</p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Pattern Details</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Category</dt>
                    <dd className="text-sm font-semibold">{pattern.category}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Complexity</dt>
                    <dd className="text-sm font-semibold">{pattern.complexity}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
                <div className="space-y-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <h2>Description</h2>
                    <p>{pattern.longDescription}</p>

                    <h2>Applicability</h2>
                    <ul>
                      {pattern.applicability.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h2>Structure</h2>
                    <div className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-x-auto">
                      <pre className="text-sm">
                        <code>{pattern.structure}</code>
                      </pre>
                    </div>

                    <h2>Consequences</h2>
                    <ul>
                      {pattern.consequences.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Related Patterns</CardTitle>
                      <CardDescription>Patterns that complement or relate to this one</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {pattern.relatedPatterns.map((relatedPattern, index) => (
                          <li key={index}>
                            <Link
                              href={`/resources/patterns/${relatedPattern.slug}`}
                              className="text-sm font-medium text-primary hover:underline"
                            >
                              {relatedPattern.name}
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
                {pattern.examples.map((example, index) => (
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
            <TabsContent value="resources" className="mt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Related Resources</h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Articles, tutorials, and other resources related to the {pattern.title}
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {pattern.relatedResources.map((resource, index) => (
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
                      <CardFooter>
                        <Link
                          href={`/resources/${resource.type === "tutorial" ? "tutorials" : "articles"}/${resource.slug}`}
                          className="w-full"
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
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
