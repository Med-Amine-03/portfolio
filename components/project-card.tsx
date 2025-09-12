import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  project: {
    id: string
    slug: string
    title: string
    description: string
    image: string
    tech: string[]
    github: string
    demo: string
    category: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card group overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-video relative rounded-t-lg overflow-hidden bg-muted">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}   
            height={600}
            className="object-contain transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 pb-4">
          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground mt-1">{project.category}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-1 px-6 pb-4">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105 transition-all duration-300 border border-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 p-4 pt-0 ">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex-1 bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300"
        >
          <Link href={`/projects/${project.slug}`}>
            <Eye className="w-4 h-4 mr-2" />
            Details
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex-1 bg-transparent hover:bg-secondary/10 hover:text-secondary hover:border-secondary/50 transition-all duration-300"
        >
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Link>
        </Button>
        <Button
          asChild
          size="sm"
          className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
