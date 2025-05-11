import Link from "next/link"
import { ArrowLeft, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RecentArticle } from "@/components/recent-article"

export default function TutorialsPage() {
  // In a real application, this would fetch data from your Strapi CMS
  // For this example, we'll use hardcoded data
  const tutorials = [
    {
      title: "Getting Started with Ontology Modeling",
      description: "A beginner's guide to creating your first ontology model.",
      date: "April 12, 2025",
      author: "Michael Chen",
      slug: "ontology-modeling-basics",
      level: "Beginner",
    },
    {
      title: "SPARQL Query Patterns for Aerospace Data",
      description: "Learn effective query patterns for aerospace knowledge graphs.",
      date: "April 8, 2025",
      author: "Lisa Wong",
      slug: "sparql-aerospace-patterns",
      level: "Intermediate",
    },
    {
      title: "Integrating Ontologies with CAD Systems",
      description: "Step-by-step guide to connecting semantic models with engineering tools.",
      date: "April 3, 2025",
      author: "Robert Johnson",
      slug: "ontology-cad-integration",
      level: "Advanced",
    },
    {
      title: "Building a Knowledge Graph with MOBI",
      description: "Learn how to build and populate a knowledge graph using our internal MOBI instance.",
      date: "March 25, 2025",
      author: "Dr. Jane Smith",
      slug: "knowledge-graph-mobi",
      level: "Intermediate",
    },
    {
      title: "Ontology Validation Techniques",
      description: "Methods and tools for validating your ontology models.",
      date: "March 18, 2025",
      author: "John Doe",
      slug: "ontology-validation",
      level: "Intermediate",
    },
    {
      title: "Semantic Reasoning for Aerospace Applications",
      description: "Implementing semantic reasoning in aerospace engineering applications.",
      date: "March 10, 2025",
      author: "Sarah Johnson",
      slug: "semantic-reasoning",
      level: "Advanced",
    },
    {
      title: "Modeling with the Aerospace Components Ontology",
      description: "Learn how to use the Aerospace Components Ontology in your models.",
      date: "March 5, 2025",
      author: "Michael Chen",
      slug: "modeling-with-aco",
      level: "Beginner",
    },
    {
      title: "Creating Custom SPARQL Endpoints",
      description: "Set up and configure custom SPARQL endpoints for your ontology data.",
      date: "February 28, 2025",
      author: "Lisa Wong",
      slug: "custom-sparql-endpoints",
      level: "Advanced",
    },
    {
      title: "Ontology Visualization Techniques",
      description: "Tools and methods for visualizing ontology models and knowledge graphs.",
      date: "February 20, 2025",
      author: "Robert Johnson",
      slug: "ontology-visualization",
      level: "Beginner",
    },
  ]

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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tutorials</h1>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                Step-by-step guides to help you effectively use ontologies in your projects.
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
                    <Input id="search" placeholder="Search tutorials..." className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="level" className="text-sm font-medium">
                      Level
                    </label>
                    <Select>
                      <SelectTrigger id="level">
                        <SelectValue placeholder="All Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="author" className="text-sm font-medium">
                      Author
                    </label>
                    <Select>
                      <SelectTrigger id="author">
                        <SelectValue placeholder="All Authors" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Authors</SelectItem>
                        <SelectItem value="jane-smith">Dr. Jane Smith</SelectItem>
                        <SelectItem value="john-doe">John Doe</SelectItem>
                        <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                        <SelectItem value="michael-chen">Michael Chen</SelectItem>
                        <SelectItem value="lisa-wong">Lisa Wong</SelectItem>
                        <SelectItem value="robert-johnson">Robert Johnson</SelectItem>
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
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {tutorials.map((tutorial, index) => (
                  <RecentArticle
                    key={index}
                    title={tutorial.title}
                    description={tutorial.description}
                    date={tutorial.date}
                    author={tutorial.author}
                    slug={tutorial.slug}
                    type="tutorial"
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
