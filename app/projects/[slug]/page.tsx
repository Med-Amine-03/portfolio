import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import projectsData from "@/data/projects.json"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    slug: project.slug,
  }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Mohamed Amine Othmani`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Mohamed Amine Othmani`,
      description: project.description,
      images: [project.image],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  // Project-specific detailed content based on PRD template
  const getProjectDetails = (projectId: string) => {
    const details: Record<string, any> = {
  "genius-chatbot": {
    "problem": "Developers need a single assistant to read code snippets, answer technical questions, and reason over images/UI.",
    "features": [
      "Upload code/text/image and get contextual responses",
      "Syntax-aware code formatting and inline diffs",
      "Streaming responses with interruption",
      "Session history and export to markdown"
    ],
    "architecture": {
      "model": "LLaMA (quantized for faster inference) via Transformers",
      "backend": "FastAPI, task queue for long jobs, WebSockets for streaming",
      "frontend": "Next.js (app router), file uploader, chat UI with markdown renderer",
      "deployment": "API on Render, UI on Vercel, Dockerized, CI/CD from GitHub"
    },
    "results": "~1.8× faster inference after quantization; stable latency under 2.5s for small prompts.",
    "challenges": "Prompt formatting, multimodal preprocessing, streaming UX."
  },

  "tunimind": {
    "problem": "Lack of accessible, AI-driven mental health tools that combine emotional understanding with conversational support.",
    "features": [
      "Real-time emotion detection from facial expressions",
      "Integrated LLM chatbot for empathetic responses",
      "Privacy-focused design with optional local inference",
      "Multi-language support for broader accessibility"
    ],
    "architecture": {
      "model": "CNN-based emotion recognition + fine-tuned LLM for dialogue",
      "backend": "FastAPI for API endpoints and session management",
      "frontend": "Next.js with real-time camera integration and chat UI",
      "deployment": "Dockerized services, API on Render, UI on Vercel"
    },
    "results": "Delivered a functional prototype capable of detecting 7 emotions and generating context-aware responses in under 2.5s.",
    "challenges": "Balancing inference speed with accuracy, ensuring privacy for sensitive data, and creating a natural conversational flow."
  },

  "resume-analyzer": {
    "problem": "Recruiters and job seekers need a quick way to analyze resumes for skills, experience, and job fit without manual effort.",
    "features": [
      "Resume parsing and structured data extraction",
      "Skill and experience matching against job descriptions",
      "Scoring system for candidate-job fit",
      "Clean, responsive UI for uploading and viewing results"
    ],
    "architecture": {
      "model": "Hugging Face Transformer-based NLP pipeline for entity extraction",
      "backend": "FastAPI for parsing, scoring, and API endpoints",
      "frontend": "Next.js for file upload and result visualization",
      "deployment": "API on Render, UI on Vercel, CI/CD with GitHub Actions"
    },
    "results": "Processed resumes in under 3 seconds with 90% accuracy in skill extraction on test data.",
    "challenges": "Handling diverse resume formats, improving entity recognition for non-standard job titles."
  },

  "blog-app": {
    "problem": "Need for a modern, developer-friendly blogging platform with markdown support and authentication.",
    "features": [
      "Markdown-based content creation",
      "Tagging and search functionality",
      "User authentication and role-based access",
      "Responsive design with dark/light mode"
    ],
    "architecture": {
      "model": "No ML model; focus on full-stack web architecture",
      "backend": "Next.js API routes with Prisma ORM and Supabase DB",
      "frontend": "Next.js with Tailwind CSS for responsive UI",
      "deployment": "Deployed on Vercel with Supabase as backend service"
    },
    "results": "Delivered a fully functional blog platform with secure auth and fast rendering.",
    "challenges": "Optimizing database queries for search and ensuring smooth markdown rendering."
  },

  "storage-app": {
    "problem": "Users need a secure, easy-to-use platform for storing and sharing files online.",
    "features": [
      "File upload and download with progress tracking",
      "User authentication and role-based permissions",
      "Folder organization and file sharing",
      "Responsive UI for mobile and desktop"
    ],
    "architecture": {
      "model": "No ML model; focus on scalable storage architecture",
      "backend": "Next.js API routes with Prisma ORM and Supabase storage",
      "frontend": "Next.js with Tailwind CSS for responsive UI",
      "deployment": "Deployed on Vercel with Supabase for storage and auth"
    },
    "results": "Enabled secure file storage and sharing with minimal latency and robust auth.",
    "challenges": "Handling large file uploads and ensuring data security."
  },

  "en-ar-translator": {
    "problem": "Existing translation tools often fail to capture context and cultural nuances in English-to-Arabic translation.",
    "features": [
      "Fine-tuned translation model for EN→AR",
      "Batch and single-sentence translation modes",
      "Confidence scoring for translations",
      "Simple, responsive UI for quick usage"
    ],
    "architecture": {
      "model": "Pre-trained Transformer fine-tuned on EN-AR parallel corpus",
      "backend": "FastAPI for inference and batching",
      "frontend": "Next.js for text input/output and history tracking",
      "deployment": "Dockerized model served via API on Render, UI on Vercel"
    },
    "results": "Improved BLEU score by 12% over baseline on custom EN-AR dataset.",
    "challenges": "Handling idiomatic expressions and maintaining inference speed."
  },

  "age-mood-gender-detection": {
    "problem": "Applications like marketing, UX, and security need accurate age, mood, and gender detection from images.",
    "features": [
      "Predicts age range, mood, and gender from images",
      "Supports single and batch image processing",
      "Confidence scores for each prediction",
      "Optimized for real-time inference"
    ],
    "architecture": {
      "model": "Multi-task CNN fine-tuned on age, gender, and emotion datasets",
      "backend": "FastAPI with OpenCV preprocessing and TensorFlow Serving",
      "frontend": "Next.js with drag-and-drop image upload and result display",
      "deployment": "Model served via TensorFlow Serving, API on Render, UI on Vercel"
    },
    "results": "Achieved 85% accuracy for gender, ±4 years MAE for age, and 70% accuracy for mood detection.",
    "challenges": "Dataset imbalance, lighting variations, and optimizing multi-task learning."
  },

  "titanic-predictor": {
    "problem": "Predicting passenger survival on Titanic dataset as a benchmark for ML classification tasks.",
    "features": [
      "Feature engineering and preprocessing pipeline",
      "Multiple ML models with hyperparameter tuning",
      "REST API for predictions",
      "Minimal UI for input and result display"
    ],
    "architecture": {
      "model": "Scikit-learn models (Logistic Regression, Random Forest) with GridSearchCV",
      "backend": "FastAPI for serving predictions",
      "frontend": "Next.js for form-based input and result visualization",
      "deployment": "Containerized with Docker, API on Render, UI on Vercel"
    },
    "results": "Achieved 79% accuracy on Kaggle Titanic dataset with optimized Random Forest.",
    "challenges": "Handling missing values, feature scaling, and model interpretability."
  }
}


    return (
      details[projectId] || {
        problem: `${project.title} addresses a specific need in the ${project.category.toLowerCase()} domain.`,
        features: [
          "Modern, responsive user interface",
          "Optimized performance and scalability",
          "Clean, maintainable codebase",
          "Comprehensive testing and documentation",
        ],
        architecture: {
          model: "State-of-the-art algorithms and models",
          backend: "FastAPI with robust API design",
          frontend: "Next.js with modern React patterns",
          deployment: "Cloud deployment with CI/CD pipeline",
        },
        results: "Successfully deployed with positive user feedback and reliable performance.",
        challenges: "Performance optimization, user experience design, scalable architecture.",
      }
    )
  }

  const details = getProjectDetails(project.id)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/#projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </nav>

      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="aspect-video relative rounded-lg overflow-hidden mb-6 bg-muted">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={1000}   // or any size
              height={600}
              className="object-contain "
              priority
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-4 mb-6">
            <Button asChild>
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Problem */}
          <Card>
            <CardHeader>
              <CardTitle>Problem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{details.problem}</p>
            </CardContent>
          </Card>

          {/* Solution & Features */}
          <Card>
            <CardHeader>
              <CardTitle>Solution & Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {details.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Architecture */}
          <Card>
            <CardHeader>
              <CardTitle>Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Model / Algorithms</h4>
                  <p className="text-sm text-muted-foreground">{details.architecture.model}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <p className="text-sm text-muted-foreground">{details.architecture.backend}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <p className="text-sm text-muted-foreground">{details.architecture.frontend}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Deployment</h4>
                  <p className="text-sm text-muted-foreground">{details.architecture.deployment}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{details.results}</p>
            </CardContent>
          </Card>

          {/* Challenges & Learnings */}
          <Card>
            <CardHeader>
              <CardTitle>Challenges & Learnings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{details.challenges}</p>
            </CardContent>
          </Card>

          {/* Links */}
          <Card>
            <CardHeader>
              <CardTitle>Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Repository
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
