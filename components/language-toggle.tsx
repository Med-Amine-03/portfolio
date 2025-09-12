"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const [language, setLanguage] = useState("EN")

  const toggleLanguage = () => {
    const newLanguage = language === "EN" ? "AR" : "EN"
    setLanguage(newLanguage)

    // Update document direction for RTL support
    if (newLanguage === "AR") {
      document.documentElement.setAttribute("dir", "rtl")
      document.documentElement.setAttribute("lang", "ar")
    } else {
      document.documentElement.setAttribute("dir", "ltr")
      document.documentElement.setAttribute("lang", "en")
    }

    // TODO: Implement actual content translation
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-sm font-medium hover:text-primary"
      aria-label={`Switch to ${language === "EN" ? "Arabic" : "English"}`}
    >
      <Globe className="w-4 h-4 mr-1" />
      {language} | {language === "EN" ? "AR" : "EN"}
    </Button>
  )
}
