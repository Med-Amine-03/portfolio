"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { sendContactEmail } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export function ContactForm() {
  const { toast } = useToast()
  const { t, isRTL } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        toast({
          title: t.messageSent,
          description: t.messageSentDescription,
          variant: "default",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast({
          title: t.error,
          description: result.error || t.errorDescription,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: t.error,
        description: t.errorGeneric,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  }

  return (
    <motion.form
      className="space-y-4"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className={`text-sm font-medium ${isRTL ? "text-right" : "text-left"} block`}>
            {t.name}
          </label>
          <motion.input
            id="name"
            type="text"
            className={`w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground ${isRTL ? "text-right" : "text-left"}`}
            placeholder={t.yourName}
            value={formData.name}
            onChange={handleChange}
            required
            whileFocus="focus"
            variants={inputVariants}
            dir={isRTL ? "rtl" : "ltr"}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className={`text-sm font-medium ${isRTL ? "text-right" : "text-left"} block`}>
            {t.email}
          </label>
          <motion.input
            id="email"
            type="email"
            className={`w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground ${isRTL ? "text-right" : "text-left"}`}
            placeholder={t.yourEmail}
            value={formData.email}
            onChange={handleChange}
            required
            whileFocus="focus"
            variants={inputVariants}
            dir={isRTL ? "rtl" : "ltr"}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className={`text-sm font-medium ${isRTL ? "text-right" : "text-left"} block`}>
          {t.subject}
        </label>
        <motion.input
          id="subject"
          type="text"
          className={`w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground ${isRTL ? "text-right" : "text-left"}`}
          placeholder={t.subject}
          value={formData.subject}
          onChange={handleChange}
          required
          whileFocus="focus"
          variants={inputVariants}
          dir={isRTL ? "rtl" : "ltr"}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className={`text-sm font-medium ${isRTL ? "text-right" : "text-left"} block`}>
          {t.message}
        </label>
        <motion.textarea
          id="message"
          rows={5}
          className={`w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground resize-none ${isRTL ? "text-right" : "text-left"}`}
          placeholder={t.yourMessage}
          value={formData.message}
          onChange={handleChange}
          required
          whileFocus="focus"
          variants={inputVariants}
          dir={isRTL ? "rtl" : "ltr"}
        ></motion.textarea>
      </div>
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
          <span className="relative z-10">{isSubmitting ? t.sending : t.sendMessage}</span>
          <span className="absolute inset-0 bg-white dark:bg-background opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </Button>
      </motion.div>
    </motion.form>
  )
}
