import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

interface FeaturedOntologyProps {
  title: string
  description: string
  status: "Adopted" | "Recommended" | "Under Review" | "Deprecated"
  version: string
  slug: string
  category: "Domain" | "Foundation" | "Enterprise"
}

export function FeaturedOntology({ title, description, status, version, slug, category }: FeaturedOntologyProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Adopted":
        return "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-800/20 dark:text-green-400"
      case "Recommended":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-800/20 dark:text-blue-400"
      case "Under Review":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-800/20 dark:text-yellow-400"
      case "Deprecated":
        return "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-800/20 dark:text-red-400"
      default:
        return "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800/20 dark:text-slate-400"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Domain":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-800/20 dark:text-purple-400"
      case "Foundation":
        return "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800/20 dark:text-slate-400"
      case "Enterprise":
        return "bg-cyan-100 text-cyan-800 hover:bg-cyan-200 dark:bg-cyan-800/20 dark:text-cyan-400"
      default:
        return "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800/20 dark:text-slate-400"
    }
  }

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="flex gap-2">
            <Badge className={getCategoryColor(category)} variant="outline">
              {category}
            </Badge>
            <Badge className={getStatusColor(status)} variant="outline">
              {status}
            </Badge>
          </div>
        </div>
        <CardDescription>Version {version}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-slate-700 dark:text-slate-300">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/ontologies/${category.toLowerCase()}/${slug}`}>
          <Button variant="ghost" size="sm">
            Details <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
        <Button variant="outline" size="sm">
          <Download className="mr-1 h-4 w-4" /> Download
        </Button>
      </CardFooter>
    </Card>
  )
}
