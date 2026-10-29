import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { HiCode } from 'react-icons/hi'
import { BsRocket } from 'react-icons/bs'

const PROJECTS = [
  {
    id: 'stunting',
    title: 'Website Edukasi Pencegahan Stunting',
    description: 'Website edukasi untuk membantu remaja SMA di Banda Aceh memahami gizi, gaya hidup sehat, dan pencegahan stunting.',
    tech: ['React', 'Bootstrap', 'Express.js', 'MongoDB'],
    status: 'completed',
    demo: 'https://website-stunting-care.vercel.app/',
  },
]

function ProjectCard({ project, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="card group flex flex-col h-full"
    >
      {/* Thumbnail */}
      <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5 bg-slate-700/40">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <HiCode className="text-slate-600" size={48} />
          </div>
        )}
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`badge text-xs font-semibold ${
            project.status === 'completed'
              ? 'bg-green-500/20 text-green-400 border border-green-400/30'
              : project.status === 'in-progress'
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                : 'bg-slate-700/60 text-slate-300 border border-slate-600/50'
          }`}>
            {project.status === 'completed' ? 'Selesai' : project.status === 'in-progress' ? 'Dalam Pengerjaan' : 'Personal Project'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech?.map((t) => (
            <span key={t} className="badge-cyan text-xs">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              <FiGithub size={16} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
            >
              <FiExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function ComingSoonPlaceholder() {
  return (
    <div data-aos="fade-up" className="col-span-full">
      <div className="max-w-md mx-auto text-center py-20">
        {/* Animated Rocket */}
        <div className="w-24 h-24 rounded-full bg-cyan-500/10 border border-cyan-400/30
                        flex items-center justify-center mx-auto mb-6 animate-float">
          <BsRocket className="text-cyan-400" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Coming <span className="text-cyan-400">Soon</span> 🚀
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          Proyek-proyek menarik sedang dalam pengerjaan. Kembali lagi nanti untuk melihat hasilnya!
        </p>
        <div className="flex justify-center gap-3">
          {['React', 'Node.js', 'MySQL', 'Tailwind'].map((tech) => (
            <span key={tech} className="badge-cyan text-xs">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const projects = PROJECTS

  return (
    <section id="projects" className="py-24 bg-slate-800/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <p className="section-subtitle">My Work</p>
          <h2 className="section-title text-white">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="section-divider" />
          {projects.length > 0 && (
            <p className="text-slate-400 text-sm">{projects.length} proyek dipublikasikan</p>
          )}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length > 0
            ? projects.map((p, i) => <ProjectCard key={p.id ?? i} project={p} index={i} />)
            : <ComingSoonPlaceholder />}
        </div>
      </div>
    </section>
  )
}

export default Projects
