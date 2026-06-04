import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'

const skillGroups = [
  {
    label: 'Programming Languages',
    color: '#6366f1',
    skills: ['Java', 'Python', 'C', 'C++', 'JavaScript'],
  },
  {
    label: 'Frontend',
    color: '#8b5cf6',
    skills: ['HTML', 'CSS', 'ReactJS'],
  },
  {
    label: 'Backend',
    color: '#06b6d4',
    skills: ['NodeJS', 'ExpressJS', 'Spring Boot'],
  },
  {
    label: 'Database',
    color: '#10b981',
    skills: ['SQL', 'MongoDB'],
  },
  {
    label: 'Tools',
    color: '#f59e0b',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    label: 'Core Concepts',
    color: '#ef4444',
    skills: ['DSA', 'OOPs', 'DBMS', 'REST APIs'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="section-pad">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Skills" subtitle="My technical toolkit" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillGroups.map(({ label, color, skills }) => (
            <motion.div
              key={label}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-5"
              style={{ border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-6 rounded-full" style={{ background: color }} />
                <h3 className="font-bold text-sm" style={{ color: 'var(--text)' }}>{label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map(s => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 cursor-default"
                    style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
