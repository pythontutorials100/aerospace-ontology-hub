import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface RecentArticleProps {
  title: string
  description: string
  date: string
  author: string
  slug: string
  type?: "article" | "tutorial"
}

export function RecentArticle({ title, description, date, author, slug, type = "article" }: RecentArticleProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          {type === "tutorial" && (
            <Badge
              variant="outline"
              className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-800/20 dark:text-purple-400"
            >
              Tutorial
            </Badge>
          )}
        </div>
        <CardDescription className="flex items-center gap-4 text-xs">
          <span className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" />
            {date}
          </span>
          <span className="flex items-center">
            <User className="mr-1 h-3 w-3" />
            {author}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-slate-700 dark:text-slate-300">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/resources/${type === "tutorial" ? "tutorials" : "articles"}/${slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            Read {type === "tutorial" ? "Tutorial" : "Article"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
