export default function Experience() {
  const experiences = [
    {
      title: "Marketing and Sales Executive",
      company: "Private Sector",
      period: "2023 – Present",
      description:
        "Identified new business opportunities and maintained strong client relationships. Executed digital and traditional marketing campaigns to boost brand awareness and sales. Created performance reports and data analyses using Excel and marketing tools. Collaborated with cross-functional teams to exceed sales targets.",
      highlights: [
        "Explored new business opportunities",
        "Led digital and traditional campaigns",
        "Collaborated across multiple teams",
        "Built lasting client relationships",
        "Analyzed performance and sales data",
      ],
    },
    {
      title: "Internship Experience",
      company: "Bimal Auto Agency",
      period: "2022 – 2023",
      description:
        "Conducted detailed analysis of customer preferences and market trends. Applied insights to evaluate and enhance sales strategies, contributing to improved customer engagement and conversion efficiency.",
      highlights: [
        "Studied customer behavior and buying patterns",
        "Assisted in developing targeted sales approaches",
        "Evaluated campaign results and recommended improvements",
        "Gained hands-on experience in data-driven marketing and sales",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a52]">Professional Experience</h2>
            <div className="h-1 w-16 sm:w-20 bg-[#0d7377] rounded-full"></div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg border border-[#0d7377]/10 p-4 sm:p-6 hover:border-[#0d7377]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d7377]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Header with title and period */}
                  <div className="flex flex-col gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1a3a52] group-hover:text-[#0d7377] transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-base sm:text-lg text-[#0d7377] font-semibold mt-1">{exp.company}</p>
                    </div>
                    <span className="inline-block text-xs sm:text-sm font-medium text-white bg-[#0d7377] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4 sm:mb-6">
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0d7377] mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm text-foreground/70">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
