"use client"
import { useRouter } from "next/navigation"
import { Terminal, Layout } from "lucide-react"
import { FadeIn } from "@/components/animations"
import TiltedCard from '@/components/TiltedCard'

export default function Home() {
  const router = useRouter()

  const options = [
    {
      id: "gui",
      title: "GUI Mode",
      description: "Experience the visual portfolio with modern design and animations",
      icon: <Layout className="w-16 h-16" />,
      path: "/gui",
      imageSrc: "/gui-preview.jpg"
    },
    {
      id: "terminal",
      title: "Terminal Mode",
      description: "Explore my portfolio through a Linux-style command line interface",
      icon: <Terminal className="w-16 h-16" />,
      path: "/terminal",
      imageSrc: "/terminal-preview.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6 py-20">
      
      <div className="max-w-5xl w-full flex flex-col items-center">
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-zinc-50 text-center">
            Naman Saini
          </h1>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="text-xl text-zinc-400 mb-16 text-center">
            Choose your experience
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {options.map((option, index) => (
            <FadeIn key={option.id} delay={0.6 + index * 0.2}>
              <div 
              className="cursor-pointer"
                onClick={() => router.push(option.path)} 
              >
                <TiltedCard
                  imageSrc={option.imageSrc}
                  altText={option.title}
                  captionText={option.title}
                  containerHeight="350px"
                  containerWidth="350px"
                  imageHeight="350px"
                  imageWidth="350px"
                  rotateAmplitude={12}
                  scaleOnHover={1.15}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="text-center space-y-2 p-6">
                      <div className="flex justify-center mb-4">
                        {option.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        {option.title}
                      </h2>
                      <p className="text-sm text-zinc-300">
                        {option.description}
                      </p>
                      <p className="text-xs text-zinc-400 mt-4">
                        Click to enter →
                      </p>
                    </div>
                  }
                />
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={1.2}>
          <p className="text-center text-zinc-600 mt-12 text-sm">
            Full Stack Developer • Problem Solver • Tech Enthusiast
          </p>
        </FadeIn>
      </div>
    </div>
  )
}

