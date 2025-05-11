"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchBar() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would navigate to search results
    console.log("Searching for:", query)
    // window.location.href = `/search?q=${encodeURIComponent(query)}`
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSearch} className="relative">
        <Input
          type="search"
          placeholder="Search ontologies, articles, tutorials..."
          className="w-full pr-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          type="submit"
          size="icon"
          variant="ghost"
          className="absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground"
        >
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </form>
    </div>
  )
}
