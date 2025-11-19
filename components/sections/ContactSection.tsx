"use client"

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { SlideIn } from "@/components/animations"

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "Drop me a message anytime",
      link: "mailto:namansaini464@gmail.com",
      label: "namansaini464@gmail.com"
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "GitHub",
      description: "Check out my projects",
      link: "https://github.com/namans4ini",
      label: "github.com/namans4ini"
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      title: "LinkedIn",
      description: "Let's connect professionally",
      link: "https://linkedin.com/in/namans4ini",
      label: "linkedin.com/in/namans4ini"
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <SlideIn direction="up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-50 text-center">
            Let's Connect
          </h2>
        </SlideIn>
        <SlideIn direction="up" delay={0.2}>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 text-center max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
        </SlideIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <SlideIn key={index} direction="up" delay={0.3 + index * 0.1}>
              <a 
                href={method.link}
                target={method.link.startsWith('mailto') ? undefined : "_blank"}
                rel={method.link.startsWith('mailto') ? undefined : "noopener noreferrer"}
                className="block h-full"
              >
                <Card className="cursor-target p-6 h-full flex flex-col items-center text-center hover:shadow-lg transition-all group bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-zinc-400 dark:text-zinc-600" />
                  </div>
                  <div className="mb-4 p-4 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50">
                    {method.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    {method.description}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 font-mono mt-auto">
                    {method.label}
                  </p>
                </Card>
              </a>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  )
}
