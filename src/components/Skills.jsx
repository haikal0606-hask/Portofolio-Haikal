import { useState } from 'react'
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiPhp, SiMysql, SiPython, SiTailwindcss, SiGit,
  SiCanva, SiFigma, SiMicrosoftoffice,
  SiVite, SiPostman,
} from 'react-icons/si'
import { FaDatabase, FaPaintBrush } from 'react-icons/fa'

const FALLBACK_SKILLS = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5',       level: 90, icon: 'html5' },
      { name: 'CSS3',        level: 88, icon: 'css3' },
      { name: 'JavaScript',  level: 82, icon: 'js' },
      { name: 'React',       level: 80, icon: 'react' },
      { name: 'Tailwind CSS',level: 85, icon: 'tailwind' },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Node.js',     level: 75, icon: 'nodejs' },
      { name: 'PHP',         level: 78, icon: 'php' },
      { name: 'MySQL',       level: 82, icon: 'mysql' },
      { name: 'Python',      level: 70, icon: 'python' },
      { name: 'Database',    level: 78, icon: 'database' },
    ],
  },
  {
    category: 'Tools & Design',
    skills: [
      { name: 'Git',             level: 80, icon: 'git' },
      { name: 'CorelDRAW',       level: 85, icon: 'corel' },
      { name: 'Canva',           level: 90, icon: 'canva' },
      { name: 'Figma',           level: 70, icon: 'figma' },
      { name: 'MS Office',       level: 88, icon: 'office' },
      { name: 'Vite',            level: 75, icon: 'vite' },
      { name: 'Postman',         level: 72, icon: 'postman' },
    ],
  },
]

const ICON_MAP = {
  html5:    <SiHtml5            className="text-orange-500" />,
  css3:     <SiCss3             className="text-blue-500" />,
  js:       <SiJavascript       className="text-yellow-400" />,
  react:    <SiReact            className="text-cyan-400" />,
  nodejs:   <SiNodedotjs        className="text-green-500" />,
  php:      <SiPhp              className="text-indigo-400" />,
  mysql:    <SiMysql            className="text-blue-400" />,
  python:   <SiPython           className="text-yellow-300" />,
  tailwind: <SiTailwindcss      className="text-cyan-400" />,
  git:      <SiGit              className="text-orange-400" />,
  corel:    <FaPaintBrush       className="text-green-400" />,
  canva:    <SiCanva            className="text-pink-400" />,
  figma:    <SiFigma            className="text-purple-400" />,
  office:   <SiMicrosoftoffice  className="text-red-400" />,
  vite:     <SiVite             className="text-violet-400" />,
  postman:  <SiPostman          className="text-orange-400" />,
  database: <FaDatabase         className="text-teal-400" />,
}

const LEVEL_LABEL = (lvl) => {
  if (lvl >= 85) return { label: 'Expert',        color: 'text-green-400'  }
  if (lvl >= 70) return { label: 'Intermediate',  color: 'text-cyan-400'   }
  return             { label: 'Beginner',       color: 'text-yellow-400' }
}

function SkillBar({ name, level, icon }) {
  const { label, color } = LEVEL_LABEL(level)
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
          <span className="text-base">{ICON_MAP[icon] ?? <FaDatabase />}</span>
          {name}
        </div>
        <span className={`text-xs font-semibold ${color}`}>{label} · {level}%</span>
      </div>
      <div className="h-2 bg-slate-700/60 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

function Skills() {
  const categories = FALLBACK_SKILLS
  const [active, setActive] = useState(0)

  return (
    <section id="skills" className="py-24 bg-slate-800/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <p className="section-subtitle">What I Know</p>
          <h2 className="section-title text-white">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Category Tabs */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActive(idx)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === idx
                  ? 'bg-cyan-500 text-slate-900 shadow-cyan-glow'
                  : 'border border-slate-700 text-slate-400 hover:border-cyan-400 hover:text-cyan-400'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {categories[active]?.skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>

        {/* All Skill Badges */}
        <div data-aos="fade-up" data-aos-delay="300" className="mt-14 text-center">
          <p className="text-slate-400 text-sm mb-4 uppercase tracking-widest">All Technologies</p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.flatMap((c) => c.skills).map((s) => (
              <span key={s.name} className="badge-slate flex items-center gap-1.5 px-3 py-1.5 text-sm">
                <span className="text-base">{ICON_MAP[s.icon] ?? null}</span>
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
