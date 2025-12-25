"use client"

import { Home, User, Briefcase, Mail, Terminal, Mouse, MousePointer2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface NavbarProps {
  onToggleCursor?: () => void
  themedCursor?: boolean
}

export default function Navbar({ onToggleCursor, themedCursor }: NavbarProps = {}) {
  const router = useRouter()
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Desktop Navbar - Top */}
      <nav className="fixed z-999 top-6 left-1/2 -translate-x-1/2 hidden md:flex gap-3">
        <div className="backdrop-blur-xs bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-full px-6 py-3 shadow-lg">
          <ul className="flex items-center gap-2">
            <li>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-target cursor-pointer rounded-full"
                onClick={() => scrollToSection('hero')}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-target cursor-pointer rounded-full"
                onClick={() => scrollToSection('about')}
              >
                <User className="w-4 h-4 mr-2" />
                About
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-target cursor-pointer rounded-full"
                onClick={() => scrollToSection('projects')}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Projects
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-target cursor-pointer rounded-full"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </li>
          </ul>
        </div>
        <div className="backdrop-blur-xs bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-full px-6 py-3 shadow-lg">
          <ul className="flex items-center gap-2">
            <li>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-target cursor-pointer rounded-full"
                onClick={() => router.push('/terminal')}
              >
                <Terminal className="w-4 h-4 mr-2" />
                Terminal
              </Button>
            </li>
            {onToggleCursor && (
              <li>
                <Button
                  variant="ghost"
                  size="sm"
                  className="cursor-target cursor-pointer rounded-full"
                  onClick={onToggleCursor}
                  title={themedCursor ? "Switch to default cursor" : "Switch to themed cursor"}
                >
                  {themedCursor ? <Mouse className="w-4 h-4 mr-2" /> : <MousePointer2 className="w-4 h-4 mr-2" />}
                  Cursor
                </Button>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar - Bottom */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-999 md:hidden w-[70%] max-w-sm">
        <div className="backdrop-blur-xs bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg">
          <ul className="flex">
            <li>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-target cursor-pointer rounded-full h-12 w-12 p-0"
                onClick={() => scrollToSection('hero')}
              >
                <Home className="w-5 h-5" />
                <span className="sr-only">Home</span>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-target cursor-pointer rounded-full h-12 w-12 p-0"
                onClick={() => scrollToSection('about')}
              >
                <User className="w-5 h-5" />
                <span className="sr-only">About</span>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-target cursor-pointer rounded-full h-12 w-12 p-0"
                onClick={() => scrollToSection('projects')}
              >
                <Briefcase className="w-5 h-5" />
                <span className="sr-only">Projects</span>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-target cursor-pointer rounded-full h-12 w-12 p-0"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Contact</span>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-target cursor-pointer rounded-full h-12 w-12 p-0"
                onClick={() => router.push('/terminal')}
              >
                <Terminal className="w-5 h-5" />
                <span className="sr-only">Terminal</span>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
