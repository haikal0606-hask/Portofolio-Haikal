import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const NAV_LINKS = [
  { label: 'Home',         to: 'hero' },
  { label: 'About',        to: 'about' },
  { label: 'Skills',       to: 'skills' },
  { label: 'Experience',   to: 'experience' },
  { label: 'Education',    to: 'education' },
  { label: 'Certificates', to: 'certificates' },
  { label: 'Projects',     to: 'projects' },
  { label: 'Contact',      to: 'contact' },
]

function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <ScrollLink
            to="hero"
            smooth
            duration={600}
            className="cursor-pointer flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center font-bold text-slate-900 text-lg group-hover:shadow-cyan-glow transition-all duration-300">
              MH
            </div>
            <span className="hidden sm:block text-white font-semibold group-hover:text-cyan-400 transition-colors duration-200">
              Muhammad Haikal
            </span>
          </ScrollLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <ScrollLink
                  to={to}
                  smooth
                  duration={600}
                  offset={-80}
                  spy
                  onSetActive={() => setActiveSection(to)}
                  className={`cursor-pointer text-sm font-medium transition-colors duration-200 relative
                    after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-cyan-400
                    after:transition-all after:duration-300
                    ${activeSection === to
                      ? 'text-cyan-400 after:w-full'
                      : 'text-slate-300 hover:text-cyan-400 after:w-0 hover:after:w-full'
                    }`}
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1 pb-4 pt-2 bg-slate-900/95 backdrop-blur-md rounded-b-2xl border-t border-slate-800/60">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <ScrollLink
                  to={to}
                  smooth
                  duration={600}
                  offset={-80}
                  className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40 rounded-xl mx-2 transition-all duration-200 cursor-pointer font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
