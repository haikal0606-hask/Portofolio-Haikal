import { Link as ScrollLink } from 'react-scroll'
import { FiGithub, FiLinkedin, FiInstagram, FiArrowUp } from 'react-icons/fi'
import { HiMail } from 'react-icons/hi'

const SOCIAL_LINKS = [
  { icon: <FiGithub    size={20} />, href: 'https://github.com/haikal0606-hask', label: 'GitHub'    },
  { icon: <FiLinkedin  size={20} />, href: 'https://www.linkedin.com/in/muhammad-haikal-41035737b/', label: 'LinkedIn'  },
  { icon: <FiInstagram size={20} />, href: 'https://www.instagram.com/haikal_qhifari/', label: 'Instagram' },
  { icon: <HiMail      size={20} />, href: 'mailto:muhammadqhifari10@gmail.com', label: 'Email' },
]

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Education', 'Certificates', 'Projects', 'Contact']

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 pt-12 pb-6 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center font-bold text-slate-900 text-lg">
                MH
              </div>
              <span className="text-white font-semibold text-lg">Muhammad Haikal</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full Stack Developer · Data Enthusiast · Creative Designer.
              Siap berkolaborasi dalam proyek teknologi yang bermakna.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((nav) => (
                <li key={nav}>
                  <ScrollLink
                    to={nav.toLowerCase()}
                    smooth
                    duration={600}
                    offset={-80}
                    className="text-slate-400 hover:text-cyan-400 text-sm cursor-pointer
                               transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {nav}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Snapshot */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Kontak</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p>📧 muhammadqhifari10@gmail.com</p>
              <p>📱 +62 821-6293-0491</p>
              <p>📍 Banda Aceh, Aceh, Indonesia</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center
                             text-slate-400 hover:text-cyan-400 hover:border-cyan-400
                             transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {year} <span className="text-cyan-400 font-medium">Muhammad Haikal</span>. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with ❤️ using React + Vite + Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <ScrollLink
        to="hero"
        smooth
        duration={600}
        className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-cyan-500 hover:bg-cyan-400
                   flex items-center justify-center text-slate-900 shadow-cyan-glow cursor-pointer
                   hover:-translate-y-1 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <FiArrowUp size={20} />
      </ScrollLink>
    </footer>
  )
}

export default Footer
