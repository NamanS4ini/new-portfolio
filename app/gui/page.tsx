"use client"

import TargetCursor from '@/components/TargetCursor'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import { useState, useEffect } from 'react'

export default function GuiPage() {
  const [themedCursor, setThemedCursor] = useState(false)

  useEffect(() => {
    const savedPreference = localStorage.getItem('themedCursor')
    if (savedPreference !== null) {
      setThemedCursor(savedPreference === 'true')
    }
  }, [])

  const toggleCursor = () => {
    const newValue = !themedCursor
    setThemedCursor(newValue)
    localStorage.setItem('themedCursor', String(newValue))
  }

  return (
    <div className={themedCursor ? "custom-cursor" : ""}>
      {themedCursor && (
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
        />
      )}
      <Navbar onToggleCursor={toggleCursor} themedCursor={themedCursor} />
      <div className="min-h-dvh bg-white dark:bg-zinc-950 transition-colors">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )}