import { HiAcademicCap } from 'react-icons/hi'

const FALLBACK = [
  {
    id: 1,
    school:      'UIN Ar-Raniry Banda Aceh',
    degree:      'Sarjana (S1)',
    field:       'Teknologi Informasi',
    period:      '2022-2026',
    gpa:         '3.49',
    description: 'Menyelesaikan studi di Prodi Teknologi Informasi dengan fokus pada pengembangan perangkat lunak, basis data, dan jaringan komputer.',
    achievements: ['Lulusan dengan predikat Sangat Memuaskan', 'Aktif dalam organisasi mahasiswa'],
  },
  {
    id: 2,
    school:      'SMKN 1 Al-Mubarkeya Aceh Besar',
    degree:      'Sekolah Menengah Kejuruan',
    field:       'Akuntansi',
    period:      '2018-2021',
    gpa:         '',
    description: 'Menyelesaikan pendidikan SMK Jurusan Akuntansi',
    achievements: [],
  },
]

function EducationCard({ edu, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 120}
      className="card group flex flex-col sm:flex-row gap-5"
    >
      {/* Icon Column */}
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30
                        flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
          <HiAcademicCap className="text-cyan-400" size={28} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
              {edu.school}
            </h3>
            <p className="text-cyan-400 font-medium text-sm">{edu.degree} - {edu.field}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="badge-cyan">{edu.period}</span>
            {edu.gpa && (
              <p className="text-xs text-slate-400 mt-1">IPK: <span className="text-white font-semibold">{edu.gpa}</span></p>
            )}
          </div>
        </div>

        {edu.description && (
          <p className="text-slate-400 text-sm leading-relaxed mb-3">{edu.description}</p>
        )}

        {edu.achievements?.length > 0 && (
          <ul className="space-y-1">
            {edu.achievements.map((a) => (
              <li key={a} className="text-xs text-slate-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function Education() {
  const list = FALLBACK

  return (
    <section id="education" className="py-24 bg-slate-800/30 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <p className="section-subtitle">Academic Background</p>
          <h2 className="section-title text-white">
            My <span className="text-cyan-400">Education</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="flex flex-col gap-6">
          {list.map((edu, idx) => (
            <EducationCard key={edu.id ?? idx} edu={edu} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
