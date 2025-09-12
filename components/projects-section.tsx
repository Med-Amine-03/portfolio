"use client"

import { ProjectCard } from "@/components/project-card"
import { AnimatedSection } from "@/components/client-animations"
import { useLanguage } from "@/contexts/language-context"
import projectsData from "@/data/projects.json"

export function ProjectsSection() {
  const { t } = useLanguage()
  const featuredProjects = projectsData.projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-16 px-4 bg-background relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">{t.featuredProjects}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={0.2 + index * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
