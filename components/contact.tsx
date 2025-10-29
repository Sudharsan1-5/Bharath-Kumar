"use client"

import type React from "react"

import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a3a52]">Get In Touch</h2>
            <div className="h-1 w-20 bg-[#0d7377] rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm always interested in hearing about new opportunities and collaborations. Feel free to reach out
                through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-[#0d7377] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#1a3a52] mb-1">Email</h3>
                    <a
                      href="mailto:bharathpspk2527@gmail.com"
                      className="text-foreground/80 hover:text-[#0d7377] transition-colors"
                    >
                      bharathpspk2527@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-[#0d7377] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#1a3a52] mb-1">Phone</h3>
                    <a href="tel:+918296625627" className="text-foreground/80 hover:text-[#0d7377] transition-colors">
                      +91 8296625627
                    </a>
                  </div>
                </div>

                {/* NEW LOCATION BLOCK ADDED HERE */}
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#0d7377] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#1a3a52] mb-1">Location</h3>
                    <p className="text-foreground/80">
                      Vijayapura, Devanahalli Taluk,
                      <br />
                      Bangalore Rural, Karnataka - 562135
                    </p>
                  </div>
                </div>
                {/* END NEW LOCATION BLOCK */}

              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg border border-border">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1a3a52] mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="border-border focus:border-[#0d7377] focus:ring-[#0d7377]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1a3a52] mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="border-border focus:border-[#0d7377] focus:ring-[#0d7377]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1a3a52] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-[#0d7377] focus:ring-2 focus:ring-[#0d7377]/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#1a3a52] hover:bg-[#0d7377] text-white py-6 text-base font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
