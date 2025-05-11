import Link from "next/link"
import { Filter, Activity, ArrowRight, FileText, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProjectCard } from "@/components/project-card"
import { RecentArticle } from "@/components/recent-article"

// This would normally be fetched from your Strapi CMS
const projects = [
  {
    id: 1,
    title: "Wing Design Knowledge Graph",
    description: "Creating a comprehensive knowledge graph for wing design and analysis.",
    status: "In Progress",
    completion: 75,
    team: "Structures Team",
    slug: "wing-design-kg",
  },
  {
    id: 2,
    title: "Component Digital Twin Initiative",
    description: "Developing digital twins for critical aerospace components using ontology-based models.",
    status: "Active",
    completion: 40,
    team: "Digital Engineering Team",
    slug: "component-digital-twin",
  },
  {
    id: 3,
    title: "Propulsion Systems Ontology Development",
    description: "Expanding and refining the propulsion systems ontology for broader application.",
    status: "Planning",
    completion: 15,
    team: "Propulsion Team",
    slug: "propulsion-ontology-dev",
  },
]

// Related resources for projects
const relatedResources = [
  {
    title: "Ontologies in Digital Twin Applications",
    description: "How ontologies form the backbone of effective digital twin implementations.",
    date: "March 28, 2025",
    author: "Michael Chen",
    slug: "ontologies-digital-twins",
  },
  {
    title: "Knowledge Graph Development Best Practices",
    description: "Guidelines for building robust knowledge graphs for aerospace applications.",
    date: "March 20, 2025",
    author: "Lisa Wong",
    slug: "knowledge-graph-best-practices",
  },
  {
    title: "Ontology-Driven Engineering Workflows",
    description: "Integrating ontologies into engineering workflows for improved efficiency.",
    date: "March 15, 2025",
    author: "Robert Johnson",
    slug: "ontology-engineering-workflows",
    type: "tutorial",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ongoing Projects</h1>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                Explore select projects where ontologies are being applied in real-world aerospace applications.
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
                    <Input id="search" placeholder="Search projects..." className="w-full" />
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
                        <SelectItem value="planning">Planning</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="on-hold">On Hold</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="team" className="text-sm font-medium">
                      Team
                    </label>
                    <Select>
                      <SelectTrigger id="team">
                        <SelectValue placeholder="All Teams" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Teams</SelectItem>
                        <SelectItem value="structures">Structures Team</SelectItem>
                        <SelectItem value="propulsion">Propulsion Team</SelectItem>
                        <SelectItem value="digital-engineering">Digital Engineering Team</SelectItem>
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
                    <Activity className="mr-2 h-5 w-5" />
                    Project Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium">Active Projects</div>
                      <div className="text-2xl font-bold">
                        {projects.filter((p) => p.status === "Active" || p.status === "In Progress").length}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Teams Involved</div>
                      <div className="text-2xl font-bold">{new Set(projects.map((p) => p.team)).size}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/team">
                    <Button variant="outline" size="sm">
                      Contact Project Teams <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="md:w-3/4">
              <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    status={project.status as any}
                    completion={project.completion}
                    team={project.team}
                    slug={project.slug}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Related Resources</h2>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                Articles and tutorials related to project implementation and ontology applications.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedResources.map((resource, index) => (
              <RecentArticle
                key={index}
                title={resource.title}
                description={resource.description}
                date={resource.date}
                author={resource.author}
                slug={resource.slug}
                type={resource.type || "article"}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/resources/articles">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Browse Related Articles
                </Button>
              </Link>
              <Link href="/resources/tutorials">
                <Button variant="outline">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Related Tutorials
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Interested in Starting a Project?</h2>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                Our team can help you apply ontologies to solve your aerospace engineering challenges.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/team">
                <Button className="px-8">Contact Our Team</Button>
              </Link>
              <Link href="/resources/tutorials/project-planning">
                <Button variant="outline" className="px-8">
                  Project Planning Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
