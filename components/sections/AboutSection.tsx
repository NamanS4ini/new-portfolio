"use client"

import LogoLoop from '@/components/LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiNodedotjs, SiCplusplus, SiPython, SiGithub, SiLinkedin, SiX, SiLeetcode } from 'react-icons/si'
import { SlideIn } from "@/components/animations"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
        { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
        { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
        { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
        { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    ]

    return (
        <section id="about" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-4xl mx-auto">
                <SlideIn direction="up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-900 dark:text-zinc-50">
                        About Me
                    </h2>
                </SlideIn>
                <SlideIn direction="up" delay={0.2}>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">

                        Hi, I'm Naman Saini, a Computer Science student at the Central University of Haryana in Mahendergarh. Currently, I am pursuing my bachelor's degree. I completed my high school education at Happy Evergreen Sr. Sec. School, achieving a score of 96%.
                        <br />
                        <br />
                        My journey into coding began in the 11th grade, driven by my desire to showcase my creativity through the things I build. I believe creativity can be harnessed to create beautiful and impactful solutions, and coding is my chosen medium to express this creativity.
                        <br />
                        <br />
                        I am continuously learning and evolving in my field. For me, learning is a lifelong journey, and I firmly believe it should be for everyone. I am passionate about expanding my knowledge and skills, and I am always eager to take on new challenges.

                    </p>
                </SlideIn>
                <SlideIn direction="up" delay={0.3}>
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">
                            Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <LogoLoop
                                className="cursor-target"
                                logos={techLogos}
                                speed={120}
                                direction="left"
                                logoHeight={48}
                                gap={40}
                                hoverSpeed={20}
                                scaleOnHover
                                fadeOut
                                ariaLabel="Technology partners"
                            />
                        </div>
                    </div>
                </SlideIn>
                <SlideIn direction="up" delay={0.4}>
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">
                            Connect with Me
                        </h3>
                        <div className="flex gap-6 flex-wrap items-center">
                            <a 
                                href="https://github.com/namans4ini" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cursor-target p-2 flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors group"
                            >
                                <SiGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                <span className="font-medium">GitHub</span>
                            </a>
                            <a 
                                href="https://linkedin.com/in/namans4ini" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cursor-target p-2 flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors group"
                            >
                                <SiLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                <span className="font-medium">LinkedIn</span>
                            </a>
                            <a 
                                href="https://twitter.com/namans4ini" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cursor-target p-2 flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors group"
                            >
                                <SiX className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                <span className="font-medium">Twitter</span>
                            </a>
                            <a 
                                href="https://leetcode.com/namansaini" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cursor-target p-2 flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors group"
                            >
                                <SiLeetcode className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                <span className="font-medium">LeetCode</span>
                            </a>
                        </div>
                    </div>
                </SlideIn>
            </div>
        </section>
    )
}
