import { HiBriefcase, HiExternalLink } from 'react-icons/hi'

const FALLBACK = [
  {
    id: 1,
    company: 'Fakultas Sains dan Teknologi Prodi Teknik Fisika',
    role: 'Creative Media & Graphic Design Intern',
    period: 'Juni – Agustus 2025',
    type: 'Magang',
    location: 'Banda Aceh',
    description: [
      'Merancang materi visual promosi, poster kegiatan akademik dan seminar, serta e-sertifikat peserta dan pemateri.',
      'Memproduksi dan menyunting video profil Program Studi Teknik Fisika untuk media publikasi.',
      'Menyusun laporan kegiatan berkala dan mendukung kebutuhan branding visual fakultas.',
    ],
    skills: ['Desain Grafis', 'Video Editing', 'Publikasi Digital'],
  },
  {
    id: 2,
    company: 'Kantor Wilayah Direktorat Jenderal Bea Cukai Aceh',
    role: 'Data Entry Intern',
    period: 'Februari – April 2019',
    type: 'Magang',
    location: 'Banda Aceh',
    description: [
      'Menginput dan memvalidasi data dokumen kepabeanan ke dalam sistem internal dengan teliti.',
      'Memeriksa kelengkapan berkas administrasi serta membantu pengarsipan dokumen digital dan fisik.',
    ],
    skills: ['Data Entry', 'Validasi Data', 'Administrasi'],
  },
]

function TimelineCard({ experience, index }) {
  const isLeft = index % 2 === 0

  return (
    <div
      data-aos={isLeft ? 'fade-right' : 'fade-left'}
      data-aos-delay={index * 100}
      className={`flex items-start gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'} w-full`}
    >
      {/* Card */}
      <div className="flex-1 card group">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
              {experience.role}
            </h3>
            <p className="text-cyan-400 font-semibold text-sm">{experience.company}</p>
          </div>
          <div className="flex-shrink-0 text-right">
            <span className="badge-cyan text-xs">{experience.type}</span>
          </div>
        </div>

        {/* Meta */}
        {(experience.period || experience.location) && (
          <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-3">
            {experience.period && (
              <span className="flex items-center gap-1">📅 {experience.period}</span>
            )}
            {experience.location && (
              <span className="flex items-center gap-1">📍 {experience.location}</span>
            )}
          </div>
        )}

        {/* Description */}
        {Array.isArray(experience.description) ? (
          <ul className="text-slate-400 text-sm leading-relaxed mb-4 space-y-2">
            {experience.description.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        ) : (
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{experience.description}</p>
        )}

        {experience.websiteUrl && (
          <a
            href={experience.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium mb-4"
          >
            <HiExternalLink size={16} />
            Lihat Website
          </a>
        )}

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2">
          {experience.skills?.map((s) => (
            <span key={s} className="badge-slate text-xs">{s}</span>
          ))}
        </div>
      </div>

      {/* Timeline Node */}
      <div className="flex-shrink-0 flex flex-col items-center gap-1 self-stretch">
        <div className="w-10 h-10 rounded-full bg-cyan-500/20 border-2 border-cyan-400
                        flex items-center justify-center shadow-cyan-glow mt-1">
          <HiBriefcase className="text-cyan-400" size={18} />
        </div>
        <div className="flex-1 w-0.5 bg-gradient-to-b from-cyan-400/60 to-transparent min-h-4" />
      </div>

      {/* Spacer for alternating layout on desktop */}
      <div className="flex-1 hidden lg:block" />
    </div>
  )
}

function Experience() {
  const experiences = FALLBACK

  return (
    <section id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <p className="section-subtitle">Work &amp; Projects</p>
          <h2 className="section-title text-white">
            My <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <TimelineCard key={exp.id ?? idx} experience={exp} index={idx} />
          ))}
        </div>

        {/* Empty State */}
        {experiences.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            <HiBriefcase size={48} className="mx-auto mb-4 opacity-30" />
            <p>Belum ada data pengalaman kerja.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience
