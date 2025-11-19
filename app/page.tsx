"use client"

import TargetCursor from '@/components/TargetCursor'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <Navbar />
      <div className="min-h-dvh bg-white dark:bg-zinc-950 transition-colors">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}

