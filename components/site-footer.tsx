import Link from "next/link"
import { Mountain } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-5 w-5" />
            <span className="inline-block font-bold">Aerospace Ontology Hub</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-6">
          <nav className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <Link
              href="/team"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
