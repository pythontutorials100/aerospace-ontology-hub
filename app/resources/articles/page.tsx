import Link from "next/link"
import { ArrowLeft, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RecentArticle } from "@/components/recent-article"

export default function ArticlesPage() {
  // In a real application, this would fetch data from your Strapi CMS
  // For this example, we'll use hardcoded data
  const articles = [
    {
      title: "Understanding Basic Formal Ontology (BFO)",
      description: "Learn about the foundational ontology that underpins our semantic architecture.",
      date: "April 15, 2025",
      author: "Dr. Jane Smith",
      slug: "understanding-bfo",
      category: "Foundations",
    },
    {
      title: "Ontology-Driven Data Integration",
      description: "How ontologies can solve complex data integration challenges in aerospace.",
      date: "April 10, 2025",
      author: "John Doe",
      slug: "ontology-data-integration",
      category: "Applications",
    },
    {
      title: "Semantic Interoperability in Aerospace",
      description: "Achieving true interoperability through semantic technologies.",
      date: "April 5, 2025",
      author: "Sarah Johnson",
      slug: "semantic-interoperability",
      category: "Applications",
    },
    {
      title: "The Role of Ontologies in Digital Twins",
      description: "How ontologies enable more effective digital twin implementations.",
      date: "March 28, 2025",
      author: "Michael Chen",
      slug: "ontologies-digital-twins",
      category: "Applications",
    },
    {
      title: "Knowledge Graphs for Aerospace Engineering",
      description: "Building and utilizing knowledge graphs in aerospace applications.",
      date: "March 20, 2025",
      author: "Lisa Wong",
      slug: "knowledge-graphs-aerospace",
      category: "Applications",
    },
    {
      title: "Ontology Governance Best Practices",
      description: "Establishing effective governance for your ontology ecosystem.",
      date: "March 15, 2025",
      author: "Robert Johnson",
      slug: "ontology-governance",
      category: "Governance",
    },
    {
      title: "Introduction to the Aerospace Components Ontology",
      description: "An overview of our standardized vocabulary for aerospace structural components.",
      date: "March 10, 2025",
      author: "Dr. Jane Smith",
      slug: "intro-aerospace-components",
      category: "Domain Ontologies",
    },
    {
      title: "Best Practices for Component Classification",
      description: "Guidelines for classifying aerospace components using our ontologies.",
      date: "March 5, 2025",
      author: "John Doe",
      slug: "component-classification-best-practices",
      category: "Best Practices",
    },
    {
      title: "The Enterprise Ontology Explained",
      description: "Understanding the core enterprise ontology that underpins our semantic architecture.",
      date: "February 28, 2025",
      author: "Sarah Johnson",
      slug: "enterprise-ontology-explained",
      category: "Foundations",
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Articles</h1>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                In-depth articles on ontology topics, applications, and best practices.
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
                    <Input id="search" placeholder="Search articles..." className="w-full" />
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
                        <SelectItem value="foundations">Foundations</SelectItem>
                        <SelectItem value="domain-ontologies">Domain Ontologies</SelectItem>
                        <SelectItem value="applications">Applications</SelectItem>
                        <SelectItem value="best-practices">Best Practices</SelectItem>
                        <SelectItem value="governance">Governance</SelectItem>
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
                {articles.map((article, index) => (
                  <RecentArticle
                    key={index}
                    title={article.title}
                    description={article.description}
                    date={article.date}
                    author={article.author}
                    slug={article.slug}
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
