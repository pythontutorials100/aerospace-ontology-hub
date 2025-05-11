"use client"

import { useState } from "react"
import { Search, ZoomIn, ZoomOut, RefreshCw } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"

interface OntologyVisualizerProps {
  ontologyId: string
  title?: string
  height?: number
  compact?: boolean
  initialSearchTerm?: string
}

export function OntologyVisualizer({
  ontologyId,
  title,
  height = 500,
  compact = false,
  initialSearchTerm = "",
}: OntologyVisualizerProps) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [selectedNode, setSelectedNode] = useState<{ name: string; type: string; group?: string } | null>(null)
  const { theme } = useTheme()

  // Mock node selection for demonstration
  const handleNodeSelection = () => {
    setSelectedNode({
      name: "Component",
      type: "Class",
      group: "Core",
    })
  }

  return (
    <Card className="w-full">
      <CardHeader className={compact ? "pb-2" : ""}>
        {title && <CardTitle>{title}</CardTitle>}
        <div className="flex flex-col sm:flex-row gap-2 justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search ontology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <div className="flex gap-1">
            <Button variant="outline" size="icon" title="Zoom In">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" title="Zoom Out">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" title="Reset View">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className={compact ? "pt-0" : ""}>
        <div className="relative">
          {/* Placeholder for the graph visualization */}
          <div
            style={{
              height: `${height}px`,
              background: theme === "dark" ? "#1f2937" : "#f9fafb",
              borderRadius: "0.5rem",
              position: "relative",
              overflow: "hidden",
            }}
            className="border border-border"
            onClick={handleNodeSelection}
          >
            {/* Static visualization placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Ontology Visualization Placeholder</p>
                <p className="text-sm text-muted-foreground mb-4">Interactive graph would appear here</p>

                {/* Sample nodes and connections */}
                <div className="relative w-80 h-80 mx-auto">
                  {/* Central node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-purple-600 dark:bg-purple-800 flex items-center justify-center text-white font-medium shadow-lg">
                    Component
                  </div>

                  {/* Surrounding nodes */}
                  <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-blue-500 dark:bg-blue-700 flex items-center justify-center text-white text-sm shadow-md">
                    Assembly
                  </div>
                  <div className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full bg-blue-500 dark:bg-blue-700 flex items-center justify-center text-white text-sm shadow-md">
                    Part
                  </div>
                  <div className="absolute bottom-1/4 left-1/4 w-12 h-12 rounded-full bg-green-500 dark:bg-green-700 flex items-center justify-center text-white text-sm shadow-md">
                    Material
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-green-500 dark:bg-green-700 flex items-center justify-center text-white text-sm shadow-md">
                    Property
                  </div>

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                    {/* Center to top-left */}
                    <line
                      x1="50%"
                      y1="50%"
                      x2="25%"
                      y2="25%"
                      stroke={theme === "dark" ? "#6b7280" : "#9ca3af"}
                      strokeWidth="2"
                    />
                    {/* Center to top-right */}
                    <line
                      x1="50%"
                      y1="50%"
                      x2="75%"
                      y2="25%"
                      stroke={theme === "dark" ? "#6b7280" : "#9ca3af"}
                      strokeWidth="2"
                    />
                    {/* Center to bottom-left */}
                    <line
                      x1="50%"
                      y1="50%"
                      x2="25%"
                      y2="75%"
                      stroke={theme === "dark" ? "#6b7280" : "#9ca3af"}
                      strokeWidth="2"
                    />
                    {/* Center to bottom-right */}
                    <line
                      x1="50%"
                      y1="50%"
                      x2="75%"
                      y2="75%"
                      stroke={theme === "dark" ? "#6b7280" : "#9ca3af"}
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <p className="text-sm text-muted-foreground mt-4">Click on nodes to see details</p>
              </div>
            </div>
          </div>

          {/* Node details panel */}
          {selectedNode && (
            <div className="absolute bottom-4 right-4 w-64 bg-card border rounded-lg shadow-lg p-4">
              <h3 className="font-bold text-lg mb-1">{selectedNode.name}</h3>
              <Badge className="mb-2">{selectedNode.type}</Badge>
              {selectedNode.group && <p className="text-sm">Group: {selectedNode.group}</p>}
              <div className="mt-2 flex justify-end">
                <Button variant="outline" size="sm" onClick={() => setSelectedNode(null)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-800 mr-2"></div>
            <span className="text-sm">Class</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></div>
            <span className="text-sm">Property</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-green-500 dark:bg-green-700 mr-2"></div>
            <span className="text-sm">Individual</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
