"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { SlideIn } from "@/components/animations"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql, SiPython, SiFlask, SiFirebase, SiRedux, SiStripe, SiSocketdotio } from 'react-icons/si'
import { TbBrandOpenai } from 'react-icons/tb'
import { MdOutlineStyle } from 'react-icons/md'
import projectsData from '@/data/projects.json'

export default function ProjectsSection() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  const techIcons: { [key: string]: React.ReactNode } = {
    "Next.js": <SiNextdotjs className="w-5 h-5" />,
    "TypeScript": <SiTypescript className="w-5 h-5" />,
    "Tailwind CSS": <SiTailwindcss className="w-5 h-5" />,
    "React": <SiReact className="w-5 h-5" />,
    "Node.js": <SiNodedotjs className="w-5 h-5" />,
    "MongoDB": <SiMongodb className="w-5 h-5" />,
    "PostgreSQL": <SiPostgresql className="w-5 h-5" />,
    "Python": <SiPython className="w-5 h-5" />,
    "Flask": <SiFlask className="w-5 h-5" />,
    "Firebase": <SiFirebase className="w-5 h-5" />,
    "Redux": <SiRedux className="w-5 h-5" />,
    "Stripe": <SiStripe className="w-5 h-5" />,
    "Socket.io": <SiSocketdotio className="w-5 h-5" />,
    "OpenAI API": <TbBrandOpenai className="w-5 h-5" />,
    "GSAP": <MdOutlineStyle className="w-5 h-5" />,
    "Material-UI": <MdOutlineStyle className="w-5 h-5" />,
  }

  return (
    <>
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SlideIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-zinc-900 dark:text-zinc-50">
              Featured Projects
            </h2>
          </SlideIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.projects.map((project, index) => (
              <SlideIn key={project.id} direction="up" delay={index * 0.1}>
                <Card className="group overflow-hidden h-full cursor-target flex flex-col hover:shadow-lg transition-all bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                  <div 
                    className="relative w-full h-56 bg-zinc-100 dark:bg-zinc-800 overflow-hidden cursor-pointer"
                    onClick={() => setExpandedImage(project.image)}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover cursor-target grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                <div className="p-6 flex flex-col grow items-center">
                  <h3 className="text-2xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50 text-center">
                    {project.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 grow text-center">
                    {project.description}
                  </p>
                  <div className="flex gap-4 mb-6">
                    {project.tech.map((tech, i) => (
                      <div
                        key={i}
                        className="text-zinc-700 dark:text-zinc-300 hover:scale-110 transition-transform"
                        title={tech}
                      >
                        {techIcons[tech]}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cursor-target flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cursor-target flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  </div>
                </div>
              </Card>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>

    {/* Image Modal */}
    {expandedImage && (
      <div 
        className="fixed inset-0 z-50000 bg-black/95 flex items-center justify-center p-8"
        onClick={() => setExpandedImage(null)}
      >
        <div className="relative w-full cursor-target h-full mx-auto max-w-[75vw] max-h-[75vh]">
          <Image
            src={expandedImage}
            alt="Expanded project image"
            fill
            className="object-contain"
            sizes="95vw"
          />
        </div>
      </div>
    )}
    </>
  )
}
