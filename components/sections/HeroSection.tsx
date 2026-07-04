"use client"

import { Mail, ExternalLink } from "lucide-react"
import Image from "next/image"
import Particles from '@/components/Particles'
import Link from "next/link"
import TextPressure from '@/components/TextPressure'
import { Button } from "@/components/ui/button"
import { FadeIn, Typewriter } from "@/components/animations"

export default function HeroSection() {
    return (<>
        <FadeIn delay={0.4}>

            <div className="absolute -z-10 top-0 left-0 w-screen h-screen">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={false}
                />
            </div>
        </FadeIn>
        <section id="hero" className="h-dvh flex items-center justify-center px-6 md:py-20">
            <div className="max-w-7xl mx-auto w-full">
                <FadeIn delay={0.4}>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="w-full z-10 my-auto" style={{ position: 'relative' }}>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-lg">
                                Hi, I'm
                            </p>
                            <TextPressure
                                text="Naman Saini"
                                flex={true}
                                alpha={false}
                                stroke={false}
                                width={true}
                                weight={true}
                                italic={true}
                                textColor="#ffffff"
                                strokeColor="#ff0000"
                                minFontSize={36}
                            />
                        </div>
                        <div className="flex mx-auto md:w-1/2 justify-end p-20 items-end">
                            <Link target="_blank" className="z-100 cursor-target" href="https://github.com/namans4ini">
                                <Image
                                    src="/profile.png"
                                    alt="Profie"
                                    width={300}
                                    height={300}
                                    className="rounded-full mx-auto"
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                </FadeIn>
                <div className="text-3xl z-100 md:text-5xl font-semibold mb-8 text-zinc-800 dark:text-zinc-200 h-16">
                    <Typewriter text="Full Stack Developer" delay={0.8} />
                </div>
                <FadeIn delay={1.5}>
                    <p className="text-xl z-100 text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
                        Crafting beautiful, performant, and user-friendly web experiences
                        with modern technologies.
                    </p>
                </FadeIn>
                <FadeIn delay={1.8}>
                    <div className="flex gap-4 flex-wrap">
                        <Button size="lg" className="z-100 cursor-target rounded-full">
                            <a href="#contact" className="flex items-center gap-2">
                                Get in touch
                                <Mail className="w-4 h-4" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="z-100 cursor-target rounded-full">
                            <a href="#projects" className="flex items-center gap-2">
                                View projects
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    </>
    )
}
