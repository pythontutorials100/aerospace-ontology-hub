import Link from "next/link"
import { ArrowRight, Puzzle } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PatternCardProps {
  title: string
  description: string
  category: string
  complexity: "Simple" | "Medium" | "Complex"
  slug: string
}

export function PatternCard({ title, description, category, complexity, slug }: PatternCardProps) {
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
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <Puzzle className="mr-2 h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          <Badge className={getComplexityColor(complexity)} variant="outline">
            {complexity}
          </Badge>
        </div>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-slate-700 dark:text-slate-300">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/resources/patterns/${slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Pattern <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
