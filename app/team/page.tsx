import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TeamMember } from "@/components/team-member"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would normally be fetched from your Strapi CMS
const teamMembers = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    role: "Ontology Lead",
    image: "/placeholder.svg?height=300&width=300",
    email: "jane.smith@example.com",
    phone: "+1 (555) 123-4567",
    expertise: ["Foundation Ontologies", "Ontology Integration"],
    team: "Core",
    slug: "jane-smith",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Domain Ontology Specialist",
    image: "/placeholder.svg?height=300&width=300",
    email: "john.doe@example.com",
    phone: "+1 (555) 234-5678",
    expertise: ["Aerospace Components", "Materials"],
    team: "Domain",
    slug: "john-doe",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Knowledge Graph Engineer",
    image: "/placeholder.svg?height=300&width=300",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 345-6789",
    expertise: ["Knowledge Graphs", "SPARQL"],
    team: "Technical",
    slug: "sarah-johnson",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Semantic Integration Specialist",
    image: "/placeholder.svg?height=300&width=300",
    email: "michael.chen@example.com",
    phone: "+1 (555) 456-7890",
    expertise: ["Data Integration", "Semantic Modeling"],
    team: "Technical",
    slug: "michael-chen",
  },
  {
    id: 5,
    name: "Lisa Wong",
    role: "Ontology Developer",
    image: "/placeholder.svg?height=300&width=300",
    email: "lisa.wong@example.com",
    phone: "+1 (555) 567-8901",
    expertise: ["Ontology Development", "OWL"],
    team: "Domain",
    slug: "lisa-wong",
  },
  {
    id: 6,
    name: "Robert Johnson",
    role: "Aerospace Domain Expert",
    image: "/placeholder.svg?height=300&width=300",
    email: "robert.johnson@example.com",
    phone: "+1 (555) 678-9012",
    expertise: ["Aerospace Engineering", "Systems Integration"],
    team: "Domain",
    slug: "robert-johnson",
  },
  {
    id: 7,
    name: "Emily Davis",
    role: "Ontology Governance Lead",
    image: "/placeholder.svg?height=300&width=300",
    email: "emily.davis@example.com",
    phone: "+1 (555) 789-0123",
    expertise: ["Ontology Governance", "Quality Assurance"],
    team: "Core",
    slug: "emily-davis",
  },
  {
    id: 8,
    name: "David Wilson",
    role: "Semantic Web Developer",
    image: "/placeholder.svg?height=300&width=300",
    email: "david.wilson@example.com",
    phone: "+1 (555) 890-1234",
    expertise: ["Semantic Web", "RDF", "Triple Stores"],
    team: "Technical",
    slug: "david-wilson",
  },
]

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Team</h1>
              <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
                Meet the experts behind our ontology initiatives. Our team is ready to help you navigate the semantic
                landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Our Team</CardTitle>
                <CardDescription>
                  Need help with ontologies? Our team is ready to assist you with any questions or challenges.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">General Inquiries</h3>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                    <a href="mailto:ontology-team@example.com" className="text-primary hover:underline">
                      ontology-team@example.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                    <a href="tel:+15551234567" className="text-primary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Technical Support</h3>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                    <a href="mailto:ontology-support@example.com" className="text-primary hover:underline">
                      ontology-support@example.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                    <a href="tel:+15552345678" className="text-primary hover:underline">
                      +1 (555) 234-5678
                    </a>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact">
                  <Button>Request Consultation</Button>
                </Link>
              </CardFooter>
            </Card>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">Team Members</h2>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="core">Core Team</TabsTrigger>
                  <TabsTrigger value="domain">Domain Experts</TabsTrigger>
                  <TabsTrigger value="technical">Technical Team</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member) => (
                      <TeamMember
                        key={member.id}
                        name={member.name}
                        role={member.role}
                        image={member.image}
                        email={member.email}
                        phone={member.phone}
                        expertise={member.expertise}
                        slug={member.slug}
                      />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="core" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers
                      .filter((member) => member.team === "Core")
                      .map((member) => (
                        <TeamMember
                          key={member.id}
                          name={member.name}
                          role={member.role}
                          image={member.image}
                          email={member.email}
                          phone={member.phone}
                          expertise={member.expertise}
                          slug={member.slug}
                        />
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="domain" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers
                      .filter((member) => member.team === "Domain")
                      .map((member) => (
                        <TeamMember
                          key={member.id}
                          name={member.name}
                          role={member.role}
                          image={member.image}
                          email={member.email}
                          phone={member.phone}
                          expertise={member.expertise}
                          slug={member.slug}
                        />
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="technical" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers
                      .filter((member) => member.team === "Technical")
                      .map((member) => (
                        <TeamMember
                          key={member.id}
                          name={member.name}
                          role={member.role}
                          image={member.image}
                          email={member.email}
                          phone={member.phone}
                          expertise={member.expertise}
                          slug={member.slug}
                        />
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
