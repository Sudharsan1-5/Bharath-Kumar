export default function Skills() {
  const skillCategories = [
    {
      category: "Marketing",
      skills: [
        "Digital Marketing",
        "Brand Strategy",
        "Content Marketing",
        "SEO/SEM",
        "Social Media Marketing",
        "Marketing Analytics",
      ],
    },
    {
      category: "Sales",
      skills: [
        "Sales Management",
        "Business Development",
        "Account Management",
        "Sales Strategy",
        "Negotiation",
        "CRM Systems",
      ],
    },
    {
      category: "Leadership",
      skills: [
        "Team Building",
        "Strategic Planning",
        "Project Management",
        "Decision Making",
        "Communication",
        "Mentoring",
      ],
    },
    {
      category: "Technical",
      skills: ["Google Analytics", "Salesforce", "HubSpot", "Excel", "Data Analysis", "Marketing Automation"],
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a52]">Skills & Expertise</h2>
            <div className="h-1 w-16 sm:w-20 bg-[#0d7377] rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.category}
                className="bg-white p-4 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#1a3a52] mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#0d7377]/10 text-[#0d7377] rounded-full text-xs sm:text-sm font-medium hover:bg-[#0d7377]/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
