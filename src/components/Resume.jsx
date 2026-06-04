import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'
import { Download, FileText } from 'lucide-react'

export default function Resume() {
  const [ref, inView] = useInView()

  return (
    <section id="resume" className="section-pad" style={{ background: 'var(--surface)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Resume" subtitle="My professional document" />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 text-center"
          style={{ border: '1px solid var(--border)' }}
        >
          <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6"
            style={{ boxShadow: '0 0 40px rgba(99,102,241,0.3)' }}>
            <FileText size={36} color="white" />
          </div>
          <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>Yokesh G — Resume</h3>
          <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
            B.E CSE | Full Stack Developer | Java Developer
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              ['Full Stack Development', '#6366f1'],
              ['Java & Spring Boot', '#8b5cf6'],
              ['DSA & Problem Solving', '#06b6d4'],
              ['MERN Stack', '#10b981'],
            ].map(([skill, color]) => (
              <div key={skill} className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                <span className="text-sm" style={{ color: 'var(--text)' }}>{skill}</span>
              </div>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download="Yokesh_G_Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-semibold text-sm gradient-bg text-white transition-all duration-300 hover:scale-105"
            style={{ boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}
          >
            <Download size={18} />
            Download Resume
          </a>

          <p className="text-xs mt-4" style={{ color: 'var(--muted)' }}>
            PDF Format • Updated 2025
          </p>
        </motion.div>
      </div>
    </section>
  )
}
