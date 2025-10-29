"use client"

import { useEffect, useState } from "react"

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("education-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const education = [
    {
      degree: "Bachelor of Commerce (Finance & Marketing)",
      institution: "Government First Grade College, Yelahanka",
      year: "2019–2022",
      details: "Specialized in marketing analytics, consumer behavior, and financial management.",
      highlights: [
        "Completed a project on Digital Branding Strategies for Local Businesses",
        "Active member of the Marketing Club",
        "Participated in inter-college business fests",
      ],
    },
    {
      degree: "12th Standard (PU)",
      institution: "Pragathi PU College, Vijayapura",
      year: "2021",
      details: "Studied Commerce stream with focus on Business Studies, Accountancy, and Economics.",
      highlights: ["Participated in cultural and academic activities"],
    },
    {
      degree: "10th Standard (High School)",
      institution: "Shrungeri Sharada High School, Vijayapura",
      year: "2019",
      details: "Completed SSLC with distinction.",
      highlights: ["Represented school in district-level competitions"],
    },
  ]

  return (
    <section id="education-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a52]">Education</h2>
            <div className="h-1 w-16 sm:w-20 bg-[#0d7377] rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-4 sm:gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`bg-white p-4 sm:p-6 rounded-lg border border-border hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#0d7377] to-[#1a3a52] flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white font-bold text-base sm:text-lg">🎓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1a3a52] mb-1">{edu.degree}</h3>
                    <p className="text-sm sm:text-base text-[#0d7377] font-semibold mb-1">{edu.institution}</p>
                    <p className="text-xs sm:text-sm text-foreground/60 mb-2 sm:mb-3 font-medium">{edu.year}</p>
                    <p className="text-sm sm:text-base text-foreground/80 mb-3 sm:mb-4 leading-relaxed">
                      {edu.details}
                    </p>

                    <ul className="space-y-1.5 sm:space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 sm:gap-3 text-foreground/75 text-xs sm:text-sm"
                          style={{
                            transitionDelay: isVisible ? `${index * 100 + idx * 50}ms` : "0ms",
                          }}
                        >
                          <span className="text-[#0d7377] font-bold mt-0.5 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
