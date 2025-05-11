// app/projects/[slug]/page.tsx
// OR app/projects/[[slug]]/page.tsx - adjust imports if necessary based on actual path

import Link from "next/link"
import { ArrowLeft, Calendar, Download, ExternalLink, FileText, Users, Activity, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// --- Data for Projects ---
// IMPORTANT: Populate this array with ALL your project details.
// This data will be used by generateStaticParams and to render individual pages.
const allProjectsData = [
  {
    slug: "wing-design-kg", // This must match the slug in your links and URLs
    title: "Wing Design Knowledge Graph",
    description: "Creating a comprehensive knowledge graph for wing design and analysis.",
    longDescription:
      "The Wing Design Knowledge Graph project aims to create a semantic model of wing design knowledge, integrating data from multiple sources including CAD models, simulation results, test data, and design requirements. This knowledge graph will enable more efficient design processes, better traceability, and improved knowledge reuse across projects.",
    status: "In Progress",
    completion: 75,
    team: "Structures Team",
    organization: "Aerospace Engineering Division",
    startDate: "January 15, 2025",
    estimatedCompletion: "August 30, 2025",
    projectLead: "Dr. Jane Smith",
    objectives: [
      "Create a comprehensive ontology for wing structural components",
      "Develop automated processes for populating the knowledge graph from existing data sources",
      "Implement query interfaces for design engineers to access relevant knowledge",
      "Integrate with existing CAD and simulation tools",
      "Demonstrate improved design efficiency through knowledge reuse",
    ],
    teamMembers: [
      { name: "Dr. Jane Smith", role: "Project Lead", image: "/placeholder.svg?height=40&width=40", slug: "jane-smith" },
      { name: "John Doe", role: "Domain Ontology Specialist", image: "/placeholder.svg?height=40&width=40", slug: "john-doe" },
      { name: "Sarah Johnson", role: "Knowledge Graph Engineer", image: "/placeholder.svg?height=40&width=40", slug: "sarah-johnson" },
      { name: "Michael Chen", role: "Semantic Integration Specialist", image: "/placeholder.svg?height=40&width=40", slug: "michael-chen" },
    ],
    relatedOntologies: [
      { name: "Aerospace Components Ontology", slug: "aerospace-components" },
      { name: "Materials Properties Ontology", slug: "materials-properties" },
      { name: "Engineering Analysis Ontology", slug: "engineering-analysis" },
    ],
    relatedResources: [
      { type: "article", title: "Knowledge Graphs for Aerospace Engineering", slug: "knowledge-graphs-aerospace" },
      { type: "tutorial", title: "Building a Knowledge Graph with MOBI", slug: "knowledge-graph-mobi" },
      { type: "article", title: "Semantic Integration of CAD and Simulation Data", slug: "semantic-integration-cad" },
    ],
    milestones: [
      { title: "Requirements Analysis", description: "Define project scope and requirements", date: "January 15 - February 28, 2025", status: "Completed", completion: 100 },
      // ... more milestones
    ],
  },
  {
    slug: "component-digital-twin",
    title: "Component Digital Twin Initiative",
    description: "Developing digital twins for critical aerospace components using ontology-based models.",
    longDescription: "Detailed information about the Component Digital Twin Initiative...",
    status: "Active",
    completion: 40,
    team: "Digital Engineering Team",
    organization: "Aerospace Engineering Division",
    startDate: "February 1, 2025",
    estimatedCompletion: "December 31, 2025",
    projectLead: "Michael Chen",
    objectives: ["Objective 1 for digital twin", "Objective 2"],
    teamMembers: [ /* ... team members ... */],
    relatedOntologies: [ /* ... ontologies ... */],
    relatedResources: [ /* ... resources ... */],
    milestones: [ /* ... milestones ... */],
  },
  {
    slug: "propulsion-ontology-dev",
    title: "Propulsion Systems Ontology Development",
    description: "Expanding and refining the propulsion systems ontology for broader application.",
    longDescription: "Detailed information about Propulsion Systems Ontology Development...",
    status: "Planning",
    completion: 15,
    team: "Propulsion Team",
    organization: "Aerospace Engineering Division",
    startDate: "March 1, 2025",
    estimatedCompletion: "October 31, 2025",
    projectLead: "Lisa Wong",
    objectives: ["Objective 1 for propulsion dev", "Objective 2"],
    teamMembers: [ /* ... team members ... */],
    relatedOntologies: [ /* ... ontologies ... */],
    relatedResources: [ /* ... resources ... */],
    milestones: [ /* ... milestones ... */],
  },
  // ... ADD ALL OTHER PROJECTS HERE with their respective details ...
];

// Function to generate static paths for Next.js build
export async function generateStaticParams() {
  return allProjectsData.map((project) => ({
    // If your folder is [[slug]], params.slug will be an array.
    // For generateStaticParams, you provide the parts of the path.
    // If it's truly optional catch-all, you might also want a path with no slug.
    // But if you always expect a slug, this is fine.
    slug: project.slug,
  }));
}

// Helper function to find project data by slug
function getProjectBySlug(slug: string | string[] | undefined) {
  // Adjust if slug can be an array (for [[...slug]] type routes)
  const actualSlug = Array.isArray(slug) ? slug[0] : slug;
  return allProjectsData.find((project) => project.slug === actualSlug);
}

interface ProjectPageProps {
  params: {
    // If your folder is [[slug]], params.slug would be string[] | undefined
    // If your folder is [slug], params.slug would be string
    slug: string // Assuming it's effectively treated as a single slug for these pages
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <p>The requested project with slug "{Array.isArray(params.slug) ? params.slug.join('/') : params.slug}" could not be found.</p>
        <Link href="/projects">
          <Button className="mt-4">Back to Projects</Button>
        </Link>
      </div>
    );
  }

  // Your existing getStatusColor function can remain here or be moved to a utils file
  const getStatusColor = (status: string) => {
    // ... (implementation as before)
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-800/20 dark:text-green-400";
      case "In Progress": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-800/20 dark:text-yellow-400";
      case "Active": return "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-800/20 dark:text-green-400"; // Example, adjust as needed
      case "Planning": return "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-800/20 dark:text-blue-400"; // Example
      case "Not Started": return "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800/20 dark:text-slate-400";
      default: return "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800/20 dark:text-slate-400";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Projects
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
                <Badge
                  className={getStatusColor(project.status)} // Use project.status from dynamic data
                  variant="outline"
                >
                  {project.status}
                </Badge>
              </div>
              <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Project Documentation
                </Button>
                <Button variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View in Project Portal
                </Button>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Organization</dt>
                    <dd className="text-sm font-semibold">{project.organization}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Team</dt>
                    <dd className="text-sm font-semibold">{project.team}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Project Lead</dt>
                    <dd className="text-sm font-semibold">{project.projectLead}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Start Date</dt>
                    <dd className="text-sm font-semibold">{project.startDate}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Estimated Completion</dt>
                    <dd className="text-sm font-semibold">{project.estimatedCompletion}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Progress</dt>
                    <dd className="mt-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span>{project.completion}% Complete</span>
                      </div>
                      <Progress value={project.completion} className="h-2" />
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rest of your page using project.* properties (project.longDescription, project.objectives, etc.) */}
      {/* Make sure to map over project.teamMembers, project.milestones, project.relatedOntologies, project.relatedResources */}

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="milestones">Milestones</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
                <div className="space-y-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <h2>Project Description</h2>
                    <p>{project.longDescription}</p>

                    <h2>Objectives</h2>
                    <ul>
                      {project.objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Related Ontologies</CardTitle>
                      <CardDescription>Ontologies used in this project</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {project.relatedOntologies.map((ontology, index) => (
                          <li key={index}>
                            <Link
                              // Adjust this link based on where your ontology detail pages are
                              href={`/ontologies/domain/${ontology.slug}`}
                              className="text-sm font-medium text-primary hover:underline"
                            >
                              {ontology.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="team" className="mt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Project Team</h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Meet the team members working on the {project.title} project.
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {project.teamMembers.map((member, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{member.name}</CardTitle>
                            <CardDescription>{member.role}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardFooter>
                        <Link href={`/team/${member.slug}`} className="w-full">
                          <Button variant="outline" size="sm" className="w-full">
                            View Profile
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
             <TabsContent value="milestones" className="mt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Project Milestones</h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Key milestones and progress for the {project.title} project.
                </p>
                <div className="space-y-4">
                  {project.milestones.map((milestone, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{milestone.title}</CardTitle>
                          <Badge className={getStatusColor(milestone.status)} variant="outline">
                            {milestone.status}
                          </Badge>
                        </div>
                        <CardDescription className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {milestone.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-slate-700 dark:text-slate-300">{milestone.description}</p>
                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>{milestone.completion}% Complete</span>
                          </div>
                          <Progress value={milestone.completion} className="h-1" />
                        </div>
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
                  Articles, tutorials, and other resources related to the {project.title} project.
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {project.relatedResources.map((resource, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          {resource.type === "tutorial" ? (
                            <Badge variant="outline" className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-800/20 dark:text-purple-400">
                              Tutorial
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800/20 dark:text-slate-400">
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

      <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Interested in This Project?</h2>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                Contact the project team for more information or to discuss potential collaboration.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={`/team/${project.teamMembers[0]?.slug || 'team'}`}> {/* Fallback if teamMembers[0] is undefined */}
                <Button className="px-8">
                  <Users className="mr-2 h-4 w-4" />
                  Contact Project Lead
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className="px-8">
                  <Activity className="mr-2 h-4 w-4" />
                  View Other Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}