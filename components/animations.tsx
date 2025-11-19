"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export function FadeIn({ children, delay = 0, duration = 0.5 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}

interface TypewriterProps {
  text: string
  delay?: number
  speed?: number
}

export function Typewriter({ text, delay = 0, speed = 0.05 }: TypewriterProps) {
  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: speed, delayChildren: delay },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  return (
    <motion.span
      style={{ display: "inline-block", whiteSpace: "pre" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} style={{ display: "inline-block" }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

interface GradientTextProps {
  children: ReactNode
  className?: string
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-[linear-gradient(to_right,rgb(37,99,235),rgb(147,51,234),rgb(219,39,119))] dark:bg-[linear-gradient(to_right,rgb(96,165,250),rgb(192,132,252),rgb(244,114,182))] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}

interface SlideInProps {
  children: ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
}

export function SlideIn({ children, direction = "up", delay = 0 }: SlideInProps) {
  const directions = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
