import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Puzzle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RecentArticle } from "@/components/recent-article"
import { PatternCard } from "@/components/pattern-card"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learning Resources</h1>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                Explore our comprehensive collection of articles, tutorials, patterns, and use cases to master ontology
                concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="pb-2">
                <FileText className="h-8 w-8 text-slate-800 dark:text-slate-200" />
                <CardTitle className="text-xl">Articles</CardTitle>
                <CardDescription>In-depth articles on ontology topics</CardDescription>
              </CardHeader>
              <CardContent className="pb-2 flex-grow">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Read detailed articles on ontology applications and best practices in aerospace.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources/articles" className="w-full">
                  <Button variant="outline" className="w-full">
                    Browse Articles
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="pb-2">
                <BookOpen className="h-8 w-8 text-slate-800 dark:text-slate-200" />
                <CardTitle className="text-xl">Tutorials</CardTitle>
                <CardDescription>Step-by-step guides and tutorials</CardDescription>
              </CardHeader>
              <CardContent className="pb-2 flex-grow">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Learn how to effectively use ontologies in your projects with our detailed tutorials.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources/tutorials" className="w-full">
                  <Button variant="outline" className="w-full">
                    Browse Tutorials
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
              <CardContent className="pb-2 flex-grow">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Discover best practices and patterns for solving common ontology modeling challenges.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources/patterns" className="w-full">
                  <Button variant="outline" className="w-full">
                    Browse Patterns
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Articles</h2>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                Explore our most popular and recently added articles.
              </p>
            </div>
          </div>
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
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Tutorials</h2>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                Step-by-step guides to help you master ontology concepts and techniques.
              </p>
            </div>
          </div>
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
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Recommended Modeling Patterns</h2>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
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
            <Link href="/patterns">
              <Button>
                Explore All Patterns
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contribute to Our Knowledge Base</h2>
                <p className="max-w-[600px] text-slate-700 md:text-xl dark:text-slate-300">
                  Share your expertise and help expand our collection of resources.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="px-8">Submit a Resource</Button>
                </Link>
                <Link href="/team">
                  <Button variant="outline" className="px-8">
                    Contact the Team
                  </Button>
                </Link>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Resource Guidelines</CardTitle>
                <CardDescription>Guidelines for contributing to our resource collection</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>Resources should be relevant to aerospace ontologies and semantic technologies</li>
                  <li>Content should be clear, concise, and accessible to the target audience</li>
                  <li>Include practical examples and applications where possible</li>
                  <li>Follow our style guide and formatting conventions</li>
                  <li>All submissions will be reviewed by our editorial team</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/resources/guidelines" className="w-full">
                  <Button variant="outline" className="w-full">
                    View Full Guidelines
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
