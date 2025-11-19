"use client"

import { Heart } from "lucide-react"
import { SiGithub, SiLinkedin, SiX, SiLeetcode } from 'react-icons/si'

export default function Footer() {
  const socialLinks = [
    { icon: <SiGithub className="w-5 h-5" />, href: "https://github.com/namans4ini", label: "GitHub" },
    { icon: <SiLinkedin className="w-5 h-5" />, href: "https://linkedin.com/in/namans4ini", label: "LinkedIn" },
    { icon: <SiX className="w-5 h-5" />, href: "https://twitter.com/namans4ini", label: "Twitter" },
    { icon: <SiLeetcode className="w-5 h-5" />, href: "https://leetcode.com/namans4ini", label: "LeetCode" },
  ]

  return (
    <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-zinc-600 dark:text-zinc-400 text-sm">
            <p className="flex items-center gap-2">
              &copy; {new Date().getFullYear()} Naman Saini. Built with 
              <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" />
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Optional: Back to top link */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-target text-sm text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
