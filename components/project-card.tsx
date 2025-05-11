import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface ProjectCardProps {
  title: string
  description: string
  status: "Planning" | "In Progress" | "Active" | "Completed" | "On Hold"
  completion: number
  team: string
  slug: string
}

export function ProjectCard({ title, description, status, completion, team, slug }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Planning":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-800/20 dark:text-blue-400"
      case "In Progress":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-800/20 dark:text-yellow-400"
      case "Active":
        return "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-800/20 dark:text-green-400"
      case "Completed":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-800/20 dark:text-purple-400"
      case "On Hold":
        return "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-800/20 dark:text-red-400"
      default:
        return "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800/20 dark:text-slate-400"
    }
  }

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge className={getStatusColor(status)} variant="outline">
            {status}
          </Badge>
        </div>
        <CardDescription>{team}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <p className="text-sm text-slate-700 dark:text-slate-300">{description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{completion}%</span>
          </div>
          <Progress value={completion} className="h-2" />
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/projects/${slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
