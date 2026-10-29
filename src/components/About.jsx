import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FiCode, FiDatabase, FiLayout } from 'react-icons/fi'

const FALLBACK = {
  name:     'Muhammad Haikal',
  bio:      'Saya adalah lulusan Teknologi Informasi yang memiliki kombinasi keahlian di bidang pengembangan web, pengelolaan data, dan desain media visual. Dengan pengalaman kerja sebagai operator dan teknisi, saya terbiasa bekerja dalam lingkungan yang dinamis dan terus berkembang. Saya bersemangat untuk terus belajar dan mengaplikasikan teknologi terkini dalam setiap proyek yang saya kerjakan.',
  email:    'muhammadqhifari10@gmail.com',
  phone:    '082162930491',
  location: 'Kayee Lee, Banda Aceh, Aceh, Indonesia',
}

const STATS = [
  { value: '2+',   label: 'Pengalaman Kerja',  icon: <FiCode      size={20} /> },
  { value: '10',   label: 'Sertifikat',         icon: <FiDatabase  size={20} /> },
  { value: '2+',   label: 'Tahun Belajar',      icon: <FiLayout    size={20} /> },
]

const EXPERTISE = [
  { title: 'Web Development',  desc: 'React, Node.js, PHP, HTML/CSS',      color: 'from-cyan-500 to-blue-500' },
  { title: 'Data Management',  desc: 'MySQL, Excel, Data Entry & Analysis', color: 'from-violet-500 to-purple-500' },
  { title: 'Visual Design',    desc: 'CorelDRAW, Canva, Photoshop',         color: 'from-pink-500 to-rose-500' },
]

function About() {
  const profile = FALLBACK

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <p className="section-subtitle">Get to Know Me</p>
          <h2 className="section-title text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left – Text */}
          <div data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-2xl font-bold text-white mb-4">
              Halo! Saya <span className="text-cyan-400">Muhammad Haikal</span> 👋
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {profile?.bio ?? FALLBACK.bio}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {[
                { icon: <HiMail           size={18} />, label: 'Email',    value: profile?.email    ?? FALLBACK.email,    href: `mailto:${profile?.email ?? FALLBACK.email}` },
                { icon: <HiPhone          size={18} />, label: 'Phone',    value: profile?.phone    ?? FALLBACK.phone,    href: `tel:${profile?.phone ?? FALLBACK.phone}` },
                { icon: <HiLocationMarker size={18} />, label: 'Location', value: profile?.location ?? FALLBACK.location, href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3 text-slate-300">
                  <span className="text-cyan-400">{icon}</span>
                  <span className="text-slate-500 text-sm w-16">{label}:</span>
                  {href
                    ? <a href={href} className="hover:text-cyan-400 transition-colors duration-200">{value}</a>
                    : <span>{value}</span>
                  }
                </div>
              ))}
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['React', 'Node.js', 'PHP', 'MySQL', 'Tailwind', 'Python', 'CorelDRAW', 'Canva'].map((tag) => (
                <span key={tag} className="badge-cyan">{tag}</span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map(({ value, label, icon }) => (
                <div key={label} className="card text-center py-4">
                  <div className="text-cyan-400 flex justify-center mb-1">{icon}</div>
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Photo + expertise cards */}
          <div data-aos="fade-left" data-aos-delay="200" className="flex flex-col items-center gap-6">
            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 blur-xl" />
              <div className="relative w-full max-w-xs rounded-3xl overflow-hidden border-2 border-slate-700/60 shadow-card">
                <img
                  src="/assets/foto1.jpeg"
                  alt="Muhammad Haikal – Wisuda"
                  className="w-full object-cover"
                  onError={(e) => { e.target.src = '/assets/foto2.jpeg' }}
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl py-2 px-3 text-center">
                  <p className="text-white font-semibold text-sm">Sarjana Teknologi Informasi</p>
                  <p className="text-cyan-400 text-xs">UIN Ar-Raniry Banda Aceh</p>
                </div>
              </div>
            </div>

            {/* Expertise Cards */}
            <div className="w-full grid gap-3">
              {EXPERTISE.map(({ title, desc, color }) => (
                <div key={title} className="card flex items-center gap-4 py-3 px-4">
                  <div className={`w-2 h-10 rounded-full bg-gradient-to-b ${color} flex-shrink-0`} />
                  <div>
                    <p className="font-semibold text-white text-sm">{title}</p>
                    <p className="text-slate-400 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
