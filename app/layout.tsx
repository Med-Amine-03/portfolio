import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Mohamed Amine Othmani — AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of AI/ML and full-stack projects: LLMs, computer vision, NLP, FastAPI, Next.js. Demos, code, and contact.",
  openGraph: {
    title: "Mohamed Amine Othmani — AI Engineer & Full-Stack Developer",
    description:
      "Portfolio of AI/ML and full-stack projects: LLMs, computer vision, NLP, FastAPI, Next.js. Demos, code, and contact.",
    type: "website",
    locale: "en_US",
    siteName: "Mohamed Amine Othmani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Amine Othmani — AI Engineer & Full-Stack Developer",
    description:
      "Portfolio of AI/ML and full-stack projects: LLMs, computer vision, NLP, FastAPI, Next.js. Demos, code, and contact.",
  },
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "LLM",
    "Computer Vision",
    "NLP",
    "FastAPI",
    "Next.js",
    "Python",
    "TensorFlow",
    "Mohamed Amine Othmani",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={dmSans.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
