import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'HostelX',
    desc: 'A hostel management platform that manages student registration, room allocation, and hostel administration with secure authentication.',
    tech: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'JWT'],
    github: 'https://github.com/Yokesh9399/HostelX',
    color: '#6366f1',
    emoji: '🏠',
  },
  {
    name: 'Anonymous Feedback Portal',
    desc: 'A secure platform allowing users to provide anonymous feedback while maintaining privacy and improving communication within organizations.',
    tech: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
    github: 'https://github.com/Yokesh9399/Ananmyous-feedback-portal',
    color: '#8b5cf6',
    emoji: '💬',
  },
  {
    name: 'TaskFlow',
    desc: 'A task management application that helps users organize, track, and manage daily activities efficiently through an intuitive interface.',
    tech: ['ReactJS', 'NodeJS', 'MongoDB'],
    github: 'https://github.com/Yokesh9399/taskflow',
    color: '#06b6d4',
    emoji: '✅',
  },
]

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="section-pad" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Projects" subtitle="What I've built" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map(({ name, desc, tech, github, color, emoji }) => (
            <motion.div
              key={name}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="glass rounded-2xl p-6 flex flex-col group"
              style={{ border: '1px solid var(--border)' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${color}20` }}>
                  {emoji}
                </div>
                <a href={github} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
                  style={{ color: 'var(--muted)', border: '1px solid var(--border)' }}>
                  <Github size={16} />
                </a>
              </div>

              <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text)' }}>{name}</h3>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--muted)' }}>{desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md font-medium"
                    style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}>
                    {t}
                  </span>
                ))}
              </div>

              <a href={github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:opacity-80"
                style={{ color }}>
                <Github size={15} /> View on GitHub <ExternalLink size={13} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
