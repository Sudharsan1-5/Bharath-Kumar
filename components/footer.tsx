export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a3a52] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bharath Kumar S</h3>
            <p className="text-white/80">Marketing & Sales Executive | Business Growth Strategist</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#about" className="hover:text-[#7dd3c0] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#7dd3c0] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#7dd3c0] transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#7dd3c0] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="mailto:bharath@example.com" className="hover:text-[#7dd3c0] transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/60 text-sm">
            © {currentYear} Bharath Kumar S. All rights reserved. | Designed with care
          </p>
        </div>
      </div>
    </footer>
  )
}
