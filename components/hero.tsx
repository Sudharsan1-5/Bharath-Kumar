"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-[#f0f9ff] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Profile Image Container with responsive sizing */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d7377] to-[#1a3a52] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>

              {/* Profile Image (Replaced next/image with standard <img> tag) */}
              <img
                src="/images/design-mode/Gemini_Generated_Image_nohd5inohd5inohd.png"
                alt="Bharath Kumar S Profile Photo"
                className="rounded-full object-cover border-4 border-white shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 absolute inset-0 w-full h-full"
              />

              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-br from-[#0d7377] via-transparent to-[#1a3a52] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1a3a52] text-balance">Bharath Kumar S</h1>
          <p className="text-xl sm:text-2xl text-[#0d7377] font-semibold">Marketing & Sales Executive</p>
        </div>

        <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed text-balance">
          Driving business growth through strategic marketing initiatives and high-performing sales teams. Passionate
          about building brands and creating meaningful customer relationships.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild className="bg-[#1a3a52] hover:bg-[#0d7377] text-white px-8 py-6 text-lg">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#1a3a52] text-[#1a3a52] hover:bg-[#0d7377] **hover:text-white** px-8 py-6 text-lg bg-transparent transition-colors duration-300"
          >
            {/* Download link added here. The user must ensure the PDF is at this path. */}
            <a href="/Bharath_Kumar_S_Resume.pdf" download="Bharath_Kumar_S_Resume.pdf">
              Download Resume
            </a>
          </Button>
        </div>

        <div className="pt-12 animate-bounce">
          <ArrowDown className="mx-auto text-[#0d7377]" size={32} />
        </div>
      </div>
    </section>
  )
}
