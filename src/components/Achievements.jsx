import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'
import { Trophy, Award, CheckCircle } from 'lucide-react'

const achievements = [
  { icon: Trophy, text: 'Solved 1120+ problems on SkillRack', color: '#f59e0b' },
  { icon: Trophy, text: 'Solved 100+ problems on LeetCode', color: '#ffa116' },
  { icon: CheckCircle, text: 'Strong problem-solving and algorithmic thinking', color: '#10b981' },
  { icon: CheckCircle, text: 'Built multiple full-stack applications', color: '#6366f1' },
  { icon: CheckCircle, text: 'Active learner of Java, DSA, and Web Development', color: '#8b5cf6' },
]

const certifications = [
  { name: 'The Complete Java Programmer', issuer: 'Udemy', color: '#ef4444' },
  { name: 'SQL Advanced', issuer: 'HackerRank', color: '#00ea64' },
  { name: 'Java (Oracle)', issuer: 'Oracle', color: '#f59e0b' },
  { name: 'Mastering Data Structures and Algorithms', issuer: 'Udemy', color: '#6366f1' },
  { name: 'Completion of C++ Training', issuer: 'SkillRack', color: '#06b6d4' },
  { name: 'Completion of C Training', issuer: 'SkillRack', color: '#8b5cf6' },
]

export default function Achievements() {
  const [ref, inView] = useInView()

  return (
    <section id="achievements" className="section-pad">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Achievements & Certifications" subtitle="Recognition & learning milestones" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Achievements */}
          <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            className="glass rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <Trophy size={20} color="white" />
              </div>
              <h3 className="font-bold text-lg" style={{ color: 'var(--text)' }}>Achievements</h3>
            </div>
            <div className="space-y-3">
              {achievements.map(({ icon: Icon, text, color }) => (
                <motion.div
                  key={text}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 p-3 rounded-xl transition-all"
                  style={{ background: 'var(--card)' }}
                >
                  <Icon size={18} className="flex-shrink-0 mt-0.5" style={{ color }} />
                  <p className="text-sm" style={{ color: 'var(--text)' }}>{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
            className="glass rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <Award size={20} color="white" />
              </div>
              <h3 className="font-bold text-lg" style={{ color: 'var(--text)' }}>Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map(({ name, issuer, color }) => (
                <motion.div
                  key={name}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between p-3 rounded-xl"
                  style={{ background: 'var(--card)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                    <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>{name}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-md flex-shrink-0 ml-2"
                    style={{ background: `${color}18`, color, border: `1px solid ${color}25` }}>
                    {issuer}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
