import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { HiDownload, HiMail } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'

const FALLBACK_PROFILE = {
  name:     'Muhammad Haikal',
  tagline:  'Teknologi Informasi | Pengembangan Web | Pengelolaan Data | Desain Media Visual',
  email:    'muhammadqhifari10@gmail.com',
  phone:    '082162930491',
  location: 'Kayee Lee, Banda Aceh, Aceh, Indonesia',
  photo:    '/assets/foto2.jpeg',
}

const TAGLINES = [
  'Teknologi Informasi',
  'Pengembangan Web',
  'Pengelolaan Data',
  'Desain Media Visual',
]

function Particle({ style }) {
  return <div className="particle" style={style} />
}

function TypingText({ texts }) {
  const [displayed, setDisplayed] = useState('')
  const [textIdx,   setTextIdx]   = useState(0)
  const [charIdx,   setCharIdx]   = useState(0)
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const current = texts[textIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 80)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 45)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setTextIdx((i) => (i + 1) % texts.length)
    }

    setDisplayed(current.substring(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, textIdx, texts])

  return (
    <span className="text-cyan-400 font-semibold">
      {displayed}
      <span className="typing-cursor" />
    </span>
  )
}

function Hero() {
  const profile = FALLBACK_PROFILE

  const particles = Array.from({ length: 12 }, (_, i) => ({
    width:  `${6 + (i % 4) * 4}px`,
    height: `${6 + (i % 4) * 4}px`,
    top:    `${10 + (i * 7) % 80}%`,
    left:   `${5  + (i * 8) % 90}%`,
    animationDelay:    `${(i * 0.4).toFixed(1)}s`,
    animationDuration: `${3 + (i % 3)}s`,
    opacity: 0.2 + (i % 5) * 0.07,
  }))

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-cyan-950/20" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      {/* Particles */}
      {particles.map((style, i) => <Particle key={i} style={style} />)}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Block */}
          <div className="flex-1 text-center lg:text-left">
            <p
              className="text-cyan-400 font-semibold text-sm md:text-base tracking-normal mb-4 animate-fade-in"
            >
              Halo, saya
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              {profile?.name ?? FALLBACK_PROFILE.name}
            </h1>

            <div className="text-xl sm:text-2xl text-slate-300 mb-6 h-8 flex items-center justify-center lg:justify-start gap-2">
              <TypingText texts={TAGLINES} />
            </div>

            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Saya lulusan Teknologi Informasi dengan keahlian di bidang{' '}
              <span className="text-cyan-400">pengembangan web</span>,{' '}
              <span className="text-cyan-400">pengelolaan data</span>, dan{' '}
              <span className="text-cyan-400">desain media visual</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="/assets/CV_Muhammad_Haikal.pdf"
                download
                className="btn-primary text-base"
              >
                <HiDownload size={20} />
                Download CV
              </a>
              <ScrollLink to="contact" smooth duration={600} offset={-80}>
                <button className="btn-outline text-base w-full sm:w-auto">
                  <HiMail size={20} />
                  Hubungi Saya
                </button>
              </ScrollLink>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: <FiGithub  size={20} />, href: 'https://github.com/haikal0606-hask', label: 'GitHub'    },
                { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/muhammad-haikal-41035737b/', label: 'LinkedIn'  },
                { icon: <FiInstagram size={20} />, href: 'https://www.instagram.com/haikal_qhifari/', label: 'Instagram' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-slate-700 flex items-center justify-center
                             text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-cyan-glow
                             transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Photo Block */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-400 opacity-30 blur-md" />
              {/* Border ring */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full
                              border-4 border-cyan-400/60 p-1 shadow-cyan-glow-lg overflow-hidden">
                <img
                  src={profile?.photo ?? '/assets/foto2.jpeg'}
                  alt="Muhammad Haikal"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => { e.target.src = '/assets/foto2.jpeg' }}
                />
              </div>

              {/* Badge: Available */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full
                              bg-cyan-500 text-slate-900 text-xs font-bold shadow-cyan-glow
                              flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 bg-slate-900 rounded-full" />
                Available for Work
              </div>
            </div>

            {/* Quick Info Pills */}
            <div className="flex gap-3 flex-wrap justify-center mt-4">
              {[
                { value: '2+', label: 'Years Exp.' },
                { value: '10+', label: 'Certificates' },
                { value: '5+', label: 'Projects' },
              ].map(({ value, label }) => (
                <div key={label} className="glass rounded-2xl px-4 py-2 text-center">
                  <div className="text-cyan-400 font-bold text-lg leading-none">{value}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 animate-bounce-slow">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center pt-1">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
