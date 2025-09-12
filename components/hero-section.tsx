"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedText, ClientMotion } from "@/components/client-animations"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isRTL ? "md:flex-row-reverse" : ""}`}>
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <AnimatedText
                text={t.heroHeadline}
                className={`text-4xl md:text-5xl font-bold tracking-tight ${isRTL ? "text-right" : "text-left"}`}
              />
              <AnimatedText
                text={t.heroTagline}
                className={`text-2xl md:text-3xl font-semibold mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${isRTL ? "text-right" : "text-left"}`}
                once={true}
              />
              <AnimatedText
                text={t.heroSubtagline}
                className={`text-lg md:text-xl font-medium mt-2 text-muted-foreground ${isRTL ? "text-right" : "text-left"}`}
                once={true}
              />
            </div>
            <ClientMotion
              className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? "text-right" : "text-left"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {t.heroDescription}
            </ClientMotion>
            <ClientMotion
              className={`flex flex-wrap gap-4 ${isRTL ? "justify-end md:justify-start" : "justify-start"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button asChild className="relative overflow-hidden group">
                <Link href="#projects">
                  <span className="relative z-10">{t.viewMyWork}</span>
                  <span className="absolute inset-0 bg-white dark:bg-background opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button variant="outline" asChild className="relative overflow-hidden group bg-transparent">
                <Link href="/documents/CV_MohamedAmineOthmnai.pdf" target="_blank" download>
                  <Download className="w-4 h-4 mr-2" />
                  <span className="relative z-10">{t.downloadResume}</span>
                  <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Link>
              </Button>
            </ClientMotion>
            <ClientMotion
              className={`flex gap-4 pt-2 ${isRTL ? "justify-end md:justify-start" : "justify-start"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link
                href="https://github.com/Med-Amine-03"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 duration-300"
                aria-label={t.githubProfile}
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/amine-othmani-354b12296/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300"
                aria-label={t.linkedinProfile}
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:amineothmani56@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors transform hover:scale-110 duration-300"
                aria-label={t.emailContact}
              >
                <Mail className="w-6 h-6" />
              </Link>
            </ClientMotion>
          </div>
          <ClientMotion
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="/professional-headshot-of-mohamed-amine-othmani--ai.jpg"
                alt="Mohamed Amine Othmani"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay" />
            </div>
          </ClientMotion>
        </div>

        <ClientMotion
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Link
            href="#projects"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to projects section"
          >
            <ArrowDown className="w-6 h-6" />
          </Link>
        </ClientMotion>
      </div>
    </section>
  )
}
