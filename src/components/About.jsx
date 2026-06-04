import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { GraduationCap, Target, Zap, TrendingUp } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section-pad" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="About Me" subtitle="My background and goals" />

        <motion.div
          ref={ref}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Education */}
          <motion.div variants={fadeUp} className="glass rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <GraduationCap size={20} color="white" />
              </div>
              <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Education</h3>
            </div>
            <div className="relative pl-6" style={{ borderLeft: '2px solid rgba(99,102,241,0.4)' }}>
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full gradient-bg" />
              <div className="glass rounded-xl p-4" style={{ border: '1px solid var(--border)' }}>
                <p className="font-bold text-base" style={{ color: 'var(--text)' }}>Sri Eshwar College of Engineering</p>
                <p className="text-sm font-medium mt-1" style={{ color: '#818cf8' }}>B.E Computer Science and Engineering</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs" style={{ color: 'var(--muted)' }}>2024 – 2028</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8' }}>
                    CGPA: 7.9
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Career Objective */}
          <motion.div variants={fadeUp} className="glass rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <Target size={20} color="white" />
              </div>
              <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Career Objective</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Seeking opportunities to apply my Full Stack and Java skills in building innovative software solutions.
              Passionate about contributing to product-based companies and growing as a professional software engineer
              through challenging real-world projects.
            </p>
          </motion.div>

          {/* Technical Interests */}
          <motion.div variants={fadeUp} className="glass rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <Zap size={20} color="white" />
              </div>
              <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Technical Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Full Stack Development', 'Java Programming', 'DSA & Problem Solving', 'REST API Design', 'Database Design', 'Cloud Technologies'].map(i => (
                <span key={i} className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{ background: 'rgba(99,102,241,0.12)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.2)' }}>
                  {i}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Professional Goals */}
          <motion.div variants={fadeUp} className="glass rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <TrendingUp size={20} color="white" />
              </div>
              <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Professional Goals</h3>
            </div>
            <ul className="space-y-2">
              {[
                'Land a role at a top product-based company',
                'Master system design and scalable architectures',
                'Contribute to open-source projects',
                'Build impactful full-stack applications',
              ].map((g, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#6366f1' }} />
                  {g}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-sm font-medium mb-2" style={{ color: '#818cf8' }}>
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-black"
        style={{ color: 'var(--text)' }}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '4rem' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-1 gradient-bg rounded-full mx-auto mt-3"
      />
    </div>
  )
}
