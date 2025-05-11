import Link from "next/link"
import { ArrowRight, Layers, Users, Puzzle, BookOpen, Database, AlertTriangle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeaturedOntology } from "@/components/featured-ontology"
import { RecentArticle } from "@/components/recent-article"
import { SearchBar } from "@/components/search-bar"
import { TeamMember } from "@/components/team-member"
import { ProjectCard } from "@/components/project-card"
import { PatternCard } from "@/components/pattern-card"
import { OntologyVisualizer } from "@/components/ontology-visualizer"

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Aerospace Ontology Hub
                </h1>
                <p className="max-w-[600px] text-slate-700 md:text-xl dark:text-slate-300">
                  Your central portal for discovering, understanding, and utilizing standardized ontologies within our
                  organization.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/resources">
                  <Button className="px-8">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore Resources
                  </Button>
                </Link>
                <Link href="/ontologies">
                  <Button variant="outline" className="px-8">
                    <Layers className="mr-2 h-4 w-4" />
                    Browse Ontologies
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Resources</h2>
              <p className="max-w-[900px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our latest articles, tutorials, and learning materials.
              </p>
            </div>
          </div>
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            </TabsList>
            <TabsContent value="articles" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <RecentArticle
                  title="Understanding Basic Formal Ontology (BFO)"
                  description="Learn about the foundational ontology that underpins our semantic architecture."
                  date="April 15, 2025"
                  author="Dr. Jane Smith"
                  slug="understanding-bfo"
                />
                <RecentArticle
                  title="Ontology-Driven Data Integration"
                  description="How ontologies can solve complex data integration challenges in aerospace."
                  date="April 10, 2025"
                  author="John Doe"
                  slug="ontology-data-integration"
                />
                <RecentArticle
                  title="Semantic Interoperability in Aerospace"
                  description="Achieving true interoperability through semantic technologies."
                  date="April 5, 2025"
                  author="Sarah Johnson"
                  slug="semantic-interoperability"
                />
                <RecentArticle
                  title="The Role of Ontologies in Digital Twins"
                  description="How ontologies enable more effective digital twin implementations."
                  date="March 28, 2025"
                  author="Michael Chen"
                  slug="ontologies-digital-twins"
                />
                <RecentArticle
                  title="Knowledge Graphs for Aerospace Engineering"
                  description="Building and utilizing knowledge graphs in aerospace applications."
                  date="March 20, 2025"
                  author="Lisa Wong"
                  slug="knowledge-graphs-aerospace"
                />
                <RecentArticle
                  title="Ontology Governance Best Practices"
                  description="Establishing effective governance for your ontology ecosystem."
                  date="March 15, 2025"
                  author="Robert Johnson"
                  slug="ontology-governance"
                />
              </div>
              <div className="mt-8 text-center">
                <Link href="/resources/articles">
                  <Button>
                    View All Articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="tutorials" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <RecentArticle
                  title="Getting Started with Ontology Modeling"
                  description="A beginner's guide to creating your first ontology model."
                  date="April 12, 2025"
                  author="Michael Chen"
                  slug="ontology-modeling-basics"
                  type="tutorial"
                />
                <RecentArticle
                  title="SPARQL Query Patterns for Aerospace Data"
                  description="Learn effective query patterns for aerospace knowledge graphs."
                  date="April 8, 2025"
                  author="Lisa Wong"
                  slug="sparql-aerospace-patterns"
                  type="tutorial"
                />
                <RecentArticle
                  title="Integrating Ontologies with CAD Systems"
                  description="Step-by-step guide to connecting semantic models with engineering tools."
                  date="April 3, 2025"
                  author="Robert Johnson"
                  slug="ontology-cad-integration"
                  type="tutorial"
                />
                <RecentArticle
                  title="Building a Knowledge Graph with MOBI"
                  description="Learn how to build and populate a knowledge graph using our internal MOBI instance."
                  date="March 25, 2025"
                  author="Dr. Jane Smith"
                  slug="knowledge-graph-mobi"
                  type="tutorial"
                />
                <RecentArticle
                  title="Ontology Validation Techniques"
                  description="Methods and tools for validating your ontology models."
                  date="March 18, 2025"
                  author="John Doe"
                  slug="ontology-validation"
                  type="tutorial"
                />
                <RecentArticle
                  title="Semantic Reasoning for Aerospace Applications"
                  description="Implementing semantic reasoning in aerospace engineering applications."
                  date="March 10, 2025"
                  author="Sarah Johnson"
                  slug="semantic-reasoning"
                  type="tutorial"
                />
              </div>
              <div className="mt-8 text-center">
                <Link href="/resources/tutorials">
                  <Button>
                    View All Tutorials
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discover Our Knowledge Base
              </h2>
              <p className="max-w-[900px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Access our comprehensive collection of ontologies, patterns, resources, and more.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="pb-2">
                <BookOpen className="h-8 w-8 text-slate-800 dark:text-slate-200" />
                <CardTitle className="text-xl">Articles & Tutorials</CardTitle>
                <CardDescription>In-depth learning materials</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Explore our comprehensive collection of articles, tutorials, and guides
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources">
                  <Button variant="ghost" size="sm">
                    Browse <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="pb-2">
                <Layers className="h-8 w-8 text-slate-800 dark:text-slate-200" />
                <CardTitle className="text-xl">Ontologies</CardTitle>
                <CardDescription>Unified ontology catalog</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Access domain, foundational, and enterprise ontologies in one place
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/ontologies">
                  <Button variant="ghost" size="sm">
                    Browse <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="pb-2">
                <Puzzle className="h-8 w-8 text-slate-800 dark:text-slate-200" />
                <CardTitle className="text-xl">Modeling Patterns</CardTitle>
                <CardDescription>Reusable ontology design patterns</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Discover best practices and patterns for ontology modeling
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources/patterns">
                  <Button variant="ghost" size="sm">
                    Explore <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-slate-800 dark:text-slate-200" />
                <CardTitle className="text-xl">Team</CardTitle>
                <CardDescription>Meet our ontology experts</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Connect with the people behind our ontology initiatives
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/team">
                  <Button variant="ghost" size="sm">
                    Meet <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Ontologies</h2>
              <p className="max-w-[900px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our most widely used ontologies across the organization.
              </p>
            </div>
          </div>

          {/* Interactive Ontology Visualizer */}
          <div className="mb-8">
            <OntologyVisualizer
              ontologyId="aerospace-components"
              title="Explore Aerospace Components Ontology"
              height={400}
              initialSearchTerm="component"
            />
          </div>

          {/* Access Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/ontologies">
              <Button className="px-6">
                <Search className="mr-2 h-4 w-4" />
                Browse Catalog
              </Button>
            </Link>
            <a href="https://mobi.example.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="px-6 bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100">
                <Database className="mr-2 h-4 w-4" />
                MOBI Access
              </Button>
            </a>
            <a href="https://mobi-tech.example.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="px-6 bg-red-50 text-red-700 border-red-300 hover:bg-red-100">
                <AlertTriangle className="mr-2 h-4 w-4" />
                MOBI Tech Data
              </Button>
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeaturedOntology
              title="Aerospace Components Ontology"
              description="Standardized vocabulary for aerospace structural components."
              status="Adopted"
              version="2.3"
              slug="aerospace-components"
              category="Domain"
            />
            <FeaturedOntology
              title="Basic Formal Ontology (BFO)"
              description="Upper-level ontology that provides a framework for domain ontologies."
              status="Adopted"
              version="2.0"
              slug="bfo"
              category="Foundation"
            />
            <FeaturedOntology
              title="Enterprise Ontology"
              description="Core enterprise concepts and relationships for organizational modeling."
              status="Adopted"
              version="1.5"
              slug="enterprise-ontology"
              category="Enterprise"
            />
          </div>
          <div className="mt-8 text-center">
            <Link href="/ontologies">
              <Button>
                View All Ontologies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Modeling Patterns</h2>
              <p className="max-w-[900px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Reusable design patterns to solve common modeling challenges.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PatternCard
              title="Component Assembly Pattern"
              description="Pattern for modeling hierarchical assemblies of components."
              category="Structural"
              complexity="Medium"
              slug="component-assembly"
            />
            <PatternCard
              title="Material Properties Pattern"
              description="Pattern for representing material properties and their values."
              category="Properties"
              complexity="Simple"
              slug="material-properties"
            />
            <PatternCard
              title="System Interfaces Pattern"
              description="Pattern for modeling interfaces between systems and components."
              category="Systems"
              complexity="Complex"
              slug="system-interfaces"
            />
          </div>
          <div className="mt-8 text-center">
            <Link href="/resources/patterns">
              <Button>
                Explore All Patterns
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The experts behind our ontology initiatives.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <TeamMember
              name="Dr. Jane Smith"
              role="Ontology Lead"
              image="/placeholder.svg?height=300&width=300"
              email="jane.smith@example.com"
              phone="+1 (555) 123-4567"
              expertise={["Foundation Ontologies", "Ontology Integration"]}
              slug="jane-smith"
            />
            <TeamMember
              name="John Doe"
              role="Domain Ontology Specialist"
              image="/placeholder.svg?height=300&width=300"
              email="john.doe@example.com"
              phone="+1 (555) 234-5678"
              expertise={["Aerospace Components", "Materials"]}
              slug="john-doe"
            />
            <TeamMember
              name="Sarah Johnson"
              role="Knowledge Graph Engineer"
              image="/placeholder.svg?height=300&width=300"
              email="sarah.johnson@example.com"
              phone="+1 (555) 345-6789"
              expertise={["Knowledge Graphs", "SPARQL"]}
              slug="sarah-johnson"
            />
            <TeamMember
              name="Michael Chen"
              role="Semantic Integration Specialist"
              image="/placeholder.svg?height=300&width=300"
              email="michael.chen@example.com"
              phone="+1 (555) 456-7890"
              expertise={["Data Integration", "Semantic Modeling"]}
              slug="michael-chen"
            />
          </div>
          <div className="mt-8 text-center">
            <Link href="/team">
              <Button>
                View Full Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
            <div>
              <div className="flex flex-col items-start space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ongoing Projects</h2>
                  <p className="max-w-[600px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                    See how ontologies are being applied in select projects across our organization.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <ProjectCard
                    title="Wing Design Knowledge Graph"
                    description="Creating a comprehensive knowledge graph for wing design and analysis."
                    status="In Progress"
                    completion={75}
                    team="Structures Team"
                    slug="wing-design-kg"
                  />
                  <ProjectCard
                    title="Component Digital Twin Initiative"
                    description="Developing digital twins for critical aerospace components using ontology-based models."
                    status="Active"
                    completion={40}
                    team="Digital Engineering Team"
                    slug="component-digital-twin"
                  />
                </div>
                <div className="pt-4">
                  <Link href="/projects">
                    <Button variant="outline">
                      View All Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                  <CardDescription>
                    Get in touch with our ontology experts for guidance on your specific use case.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Whether you're looking to adopt an existing ontology or develop a new one, our team can provide the
                    expertise you need.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="font-medium">Ontology Support:</div>
                      <div className="ml-2">ontology-support@example.com</div>
                    </div>
                    <div className="flex items-center">
                      <div className="font-medium">Technical Help:</div>
                      <div className="ml-2">tech-help@example.com</div>
                    </div>
                    <div className="flex items-center">
                      <div className="font-medium">General Inquiries:</div>
                      <div className="ml-2">+1 (555) 123-4567</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full">Request Consultation</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
