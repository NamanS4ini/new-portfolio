"use client"

import LogoLoop from '@/components/LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiNodedotjs, SiCplusplus, SiPython, SiGithub, SiLinkedin, SiX, SiLeetcode } from 'react-icons/si'
import { SlideIn } from "@/components/animations"

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
                        I'm Naman Saini, a Full Stack Developer who builds fast, reliable, and user focused web apps that solve real world problems. I enjoy taking an idea from zero to deployment and turning it into something people actually use.
                        <br />
                        <br />
                        I’ve contributed to multiple software projects at the Central University of Haryana, including building and deploying the university’s official Library website and management system used daily by students and faculty. I also developed core parts of the internal academic citation tool that the university now relies on.
                        <br />
                        <br />
                        I love working across the stack. From designing clean interfaces to engineering scalable backend systems, I aim for products that feel smooth, load fast, and make a genuine difference. My project ytpla.in is a good example of this approach. It started as a small idea and turned into a full tool that helps users understand YouTube playlists with clear metrics and advanced sorting.
                        <br />
                        <br />
                        I’ve also built full stack applications like Linkify, and I’m continuously expanding my knowledge through hands-on projects, university contributions, and consistent DSA practice. With 300+ LeetCode problems solved and a strong command of algorithms and data structures, I bring both practical engineering skills and solid CS fundamentals.
                        <br />
                        <br />
                        I’m always pushing myself to learn more, build better, and take on challenges that sharpen my problem solving mindset.
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
