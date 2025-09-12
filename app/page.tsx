"use client"

import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactForm } from "@/components/contact-form"
import { AnimatedSection, ParticleBackground, AnimatedGradientBackground } from "@/components/client-animations"
import { Badge } from "@/components/ui/badge"
import { TechBadge } from "@/components/tech-badge"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t, isRTL } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-muted/50 relative">
  <div className="container mx-auto max-w-6xl relative z-10">
    <AnimatedSection>
      <h2 className="text-3xl font-bold mb-8 text-center">{t.technicalSkills}</h2>
    </AnimatedSection>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {/* AI & ML */}
      <AnimatedSection direction="up" delay={0.2}>
        <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className={`text-xl font-semibold mb-4 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center ${isRTL ? "ml-3" : "mr-3"}`}>
              <span className="text-primary text-sm font-bold">AI</span>
            </span>
            {t.aiMachineLearning}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            
<TechBadge tech="Python" />
            <TechBadge tech="PyTorch" />
            <TechBadge tech="TensorFlow" />
            <TechBadge tech="Keras" />
            <TechBadge tech="Scikit-learn" />
            <TechBadge tech="Transformers" />
            <TechBadge tech="Hugging Face" />
            <TechBadge tech="Model Fine-tuning" />

          </div>
        </div>
      </AnimatedSection>

      {/* NLP & LLM */}
      <AnimatedSection direction="up" delay={0.3}>
        <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className={`text-xl font-semibold mb-4 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className={`w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center ${isRTL ? "ml-3" : "mr-3"}`}>
              <span className="text-secondary text-sm font-bold">NLP</span>
            </span>
            {t.nlpLlm}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <TechBadge tech="Tokenization" />
            <TechBadge tech="Prompt Engineering" />
            <TechBadge tech="RAG (basics)" />
            <TechBadge tech="Sequence Models" />
            <TechBadge tech="Text Classification" />
            <TechBadge tech="NER / Entity Extraction" />

          </div>
        </div>
      </AnimatedSection>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Computer Vision */}
      <AnimatedSection direction="up" delay={0.4}>
        <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className={`text-xl font-semibold mb-4 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className={`w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center ${isRTL ? "ml-3" : "mr-3"}`}>
              <span className="text-secondary text-sm font-bold">CV</span>
            </span>
            {t.computerVision}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            
            <TechBadge tech="OpenCV" />
            <TechBadge tech="CNNs" />
            <TechBadge tech="Transfer Learning" />
            <TechBadge tech="Data Augmentation" />
            <TechBadge tech="Image Preprocessing" />
            <TechBadge tech="Multi-task Learning" />

          </div>
        </div>
      </AnimatedSection>

      
      <AnimatedSection direction="up" delay={0.5}>
        <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className={`text-xl font-semibold mb-4 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center ${isRTL ? "ml-3" : "mr-3"}`}>
              <span className="text-primary text-sm font-bold">CS</span>
            </span>
            {t.programmingFundamentals}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            
            <TechBadge tech="Algorithms" />
            <TechBadge tech="Data Structures" />
            <TechBadge tech="OOP" />
            <TechBadge tech="Complexity Analysis" />
            <TechBadge tech="Problem Solving" />
            <TechBadge tech="Clean Code" />

          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.5}>
        <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className={`text-xl font-semibold mb-4 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center ${isRTL ? "ml-3" : "mr-3"}`}>
              <span className="text-primary text-sm font-bold">WEB</span>
            </span>
            {t.backendFrontend}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <TechBadge tech="FastAPI" />
            <TechBadge tech="REST APIs" />
            <TechBadge tech="WebSockets" />
            <TechBadge tech="Next.js" />
            <TechBadge tech="React" />
            <TechBadge tech="Tailwind CSS" />
            <TechBadge tech="JavaScript (ES6+)" />
            <TechBadge tech="TypeScript" />

          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.5}>
        <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className={`text-xl font-semibold mb-4 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center ${isRTL ? "ml-3" : "mr-3"}`}>
              <span className="text-primary text-sm font-bold">DEV</span>
            </span>
            {t.devOpsTools}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            
            <TechBadge tech="Docker" />
            <TechBadge tech="CI/CD" />
            <TechBadge tech="Vercel" />
            <TechBadge tech="Render" />
            <TechBadge tech="Azure" />
            <TechBadge tech="Containerization" />

          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.5}>
        <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className={`text-xl font-semibold mb-4 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center ${isRTL ? "ml-3" : "mr-3"}`}>
              <span className="text-primary text-sm font-bold">DB</span>
            </span>
            {t.databasesStorage}
          </h3>
          <div className="grid grid-cols-2 gap-3">
             
            <TechBadge tech="PostgreSQL" />
            <TechBadge tech="Prisma ORM" />
            <TechBadge tech="Supabase" />
            <TechBadge tech="Authentication" />
            <TechBadge tech="Migrations" />
            <TechBadge tech="Schema Design" />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.5}>
        <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className={`text-xl font-semibold mb-4 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center ${isRTL ? "ml-3" : "mr-3"}`}>
              <span className="text-primary text-sm font-bold">TOOL</span>
            </span>
            {t.toolsPlatforms }
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <TechBadge tech="Git" />
            <TechBadge tech="GitHub" />
            <TechBadge tech="Postman" />
            <TechBadge tech="VS Code" />
            <TechBadge tech="Jupyter Notebook" />
            <TechBadge tech="Testing & Debugging" />
          </div>
        </div>
      </AnimatedSection>
    </div>

    {/* Additional Technologies */}
    <AnimatedSection delay={0.6}>
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-6">{t.additionalTechnologies}</h3>
        <div className="flex flex-wrap justify-center gap-3">
           <Badge variant="outline" className="px-4 py-2 text-sm bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">Linux / WSL</Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">Debugging & Testing</Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">Automation / Scripts</Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">Node.js / NPM</Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">AI Tools (ChatGPT, Copilot)</Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">n8n / Zapier</Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">NLTK</Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">Pandas / Numpy</Badge>
        </div>
      </div>
    </AnimatedSection>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-background relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">{t.aboutMe}</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <p
                  className={`text-lg text-muted-foreground leading-relaxed mb-6 ${isRTL ? "text-right" : "text-left"}`}
                >
                  {t.aboutDescription1}
                </p>
                <p
                  className={`text-lg text-muted-foreground leading-relaxed mb-6 ${isRTL ? "text-right" : "text-left"}`}
                >
                  {t.aboutDescription2}
                </p>
                <p className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
                  {t.aboutDescription3}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/50 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">{t.contactHeadline}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t.contactDescription}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction={isRTL ? "right" : "left"} delay={0.2}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div
                    className={`flex items-center hover:${isRTL ? "translate-x-1" : "translate-x-1"} transition-transform duration-300 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <Github className={`w-5 h-5 text-primary ${isRTL ? "ml-3" : "mr-3"}`} />
                    <a
                      href="https://github.com/Med-Amine-03"
                      target="_blank"
                      className="text-foreground hover:text-primary transition-colors"
                      rel="noreferrer"
                    >
                      {t.githubProfile}
                    </a>
                  </div>
                  <div
                    className={`flex items-center hover:${isRTL ? "translate-x-1" : "translate-x-1"} transition-transform duration-300 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <Linkedin className={`w-5 h-5 text-primary ${isRTL ? "ml-3" : "mr-3"}`} />
                    <a
                      href="https://www.linkedin.com/in/amine-othmani-354b12296/"
                      target="_blank"
                      className="text-foreground hover:text-primary transition-colors"
                      rel="noreferrer"
                    >
                      {t.linkedinProfile}
                    </a>
                  </div>
                  <div
                    className={`flex items-center hover:${isRTL ? "translate-x-1" : "translate-x-1"} transition-transform duration-300 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <Mail className={`w-5 h-5 text-primary ${isRTL ? "ml-3" : "mr-3"}`} />
                    <a
                      href="mailto:amineothmani56@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      amineothmani56@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction={isRTL ? "left" : "right"} delay={0.3}>
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div
            className={`flex flex-col md:flex-row justify-between items-center ${isRTL ? "md:flex-row-reverse" : ""}`}
          >
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Mohamed Amine Othmani</h2>
              <p className="text-muted-foreground">{t.builtWith}</p>
            </div>
            <div className={`flex space-x-4 ${isRTL ? "space-x-reverse" : ""}`}>
              <Link
                href="https://github.com/Med-Amine-03"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 duration-300"
                aria-label={t.githubProfile}
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/amine-othmani-354b12296/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 duration-300"
                aria-label={t.linkedinProfile}
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:amineothmani56@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 duration-300"
                aria-label={t.emailContact}
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-muted-foreground text-sm">
            <p>
              © {new Date().getFullYear()} Mohamed Amine Othmani — {t.builtWith}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
