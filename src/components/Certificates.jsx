import { useState } from 'react'
import { HiExternalLink } from 'react-icons/hi'
import { BsAward } from 'react-icons/bs'

const FALLBACK = [
  { id: 1, name: 'Pembuatan Web Menggunakan Node.JS Dan React I', issuer: 'BLK Banda Aceh (BPVP)', year: '2026', category: 'Web Development', credentialUrl: '/certificates/sertifikat haikal node.js dan react I.pdf' },
  { id: 2, name: 'AI For Image Creation I', issuer: 'BLK Banda Aceh (BPVP)', year: '2026', category: 'Design', credentialUrl: '/certificates/SERTIFIKAT - AI For Image Creation I_MUHAMMAD HAIKAL.pdf' },
  { id: 3, name: 'Machine Learning', issuer: 'Dicoding', year: '2026', category: 'Data Science', credentialUrl: '/certificates/sertifikat_course_ML Haikal.pdf' },
  { id: 4, name: 'Python Programming', issuer: 'Dicoding', year: '2026', category: 'Programming', credentialUrl: '/certificates/sertifikat_course_python haikal.pdf' },
  { id: 5, name: 'GitHub', issuer: 'Dicoding', year: '2026', category: 'Tools', credentialUrl: '/certificates/sertifikat_course_Github.pdf' },
  { id: 6, name: 'Logika Pemrograman', issuer: 'Dicoding', year: '2026', category: 'Programming', credentialUrl: '/certificates/sertifikat_course_Logika pemrograman.pdf' },
  { id: 7, name: 'Software Engineering', issuer: 'Dicoding', year: '2026', category: 'Software Engineering', credentialUrl: '/certificates/sertifikat_course_software.pdf' },
  { id: 8, name: 'IBM SkillsBuild Certificate 1', issuer: 'IBM SkillsBuild', year: '2025', category: 'Digital Skills', credentialUrl: '/certificates/Completion Certificate _ SkillsBuild.pdf' },
  { id: 9, name: 'IBM SkillsBuild Certificate 2', issuer: 'IBM SkillsBuild', year: '2025', category: 'Digital Skills', credentialUrl: '/certificates/Completion Certificate _ SkillsBuild(2).pdf' },
  { id: 10, name: 'IBM SkillsBuild Certificate 3', issuer: 'IBM SkillsBuild', year: '2025', category: 'Digital Skills', credentialUrl: '/certificates/Completion Certificate _ SkillsBuild(3).pdf' },
]

const ISSUER_COLORS = {
  'Dicoding': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
  'BLK Banda Aceh (BPVP)': 'bg-green-500/20 text-green-400 border-green-400/30',
  'IBM SkillsBuild': 'bg-indigo-500/20 text-indigo-400 border-indigo-400/30',
}

function CertCard({ cert }) {
  const issuerStyle = ISSUER_COLORS[cert.issuer] ?? 'bg-slate-700/60 text-slate-300 border-slate-600/50'
  return (
    <div data-aos="zoom-in" className="card group flex flex-col h-full">
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30
                        flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
          <BsAward className="text-cyan-400" size={20} />
        </div>
        <span className="text-xs text-slate-500">{cert.year}</span>
      </div>

      {/* Name */}
      <h3 className="text-sm font-semibold text-white mb-1 flex-1 leading-snug">
        {cert.name}
      </h3>

      {/* Issuer */}
      <span className={`badge border text-xs mb-3 ${issuerStyle}`}>{cert.issuer}</span>

      {/* Link */}
      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors duration-200"
        >
          <HiExternalLink size={14} />
          Lihat Sertifikat
        </a>
      )}
    </div>
  )
}

function Certificates() {
  const certs = FALLBACK

  const categories = ['Semua', ...new Set(certs.map((c) => c.category))]
  const [active, setActive] = useState('Semua')

  const filtered = active === 'Semua' ? certs : certs.filter((c) => c.category === active)

  return (
    <section id="certificates" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <p className="section-subtitle">Achievements</p>
          <h2 className="section-title text-white">
            My <span className="text-cyan-400">Certificates</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-sm">{certs.length} Sertifikat dari berbagai institusi</p>
        </div>

        {/* Filter Tabs */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-cyan-500 text-slate-900 shadow-cyan-glow'
                  : 'border border-slate-700 text-slate-400 hover:border-cyan-400 hover:text-cyan-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            <BsAward size={48} className="mx-auto mb-4 opacity-30" />
            <p>Tidak ada sertifikat di kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certificates
