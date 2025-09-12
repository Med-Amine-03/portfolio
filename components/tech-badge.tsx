import { Badge } from "@/components/ui/badge"

interface TechBadgeProps {
  tech: string
  variant?: "default" | "secondary" | "outline"
  className?: string
}

export function TechBadge({ tech, variant = "secondary", className = "" }: TechBadgeProps) {
  return (
    <Badge
      variant={variant}
      className={`text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors ${className}`}
    >
      {tech}
    </Badge>
  )
}
