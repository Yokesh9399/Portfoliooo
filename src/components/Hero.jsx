import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, Eye, MessageCircle } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-60 h-60 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent)', animationDelay: '2s' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 glass"
            style={{ color: '#818cf8' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-black mb-4 tracking-tight"
        >
          <span className="gradient-text">Yokesh G</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl font-semibold mb-6"
          style={{ color: 'var(--muted)' }}
        >
          Full Stack Developer &nbsp;|&nbsp; Java Developer &nbsp;|&nbsp; Software Engineering Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--muted)' }}
        >
          CSE student at Sri Eshwar College of Engineering, passionate about building scalable web applications
          and solving complex problems through clean, efficient code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button onClick={() => scrollTo('projects')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm gradient-bg text-white transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
            style={{ boxShadow: '0 0 20px rgba(99,102,241,0.4)' }}>
            <Eye size={16} /> View Projects
          </button>
          <a href="/resume.pdf" download
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm glass transition-all duration-300 hover:scale-105"
            style={{ color: 'var(--text)', border: '1px solid var(--border)' }}>
            <Download size={16} /> Download Resume
          </a>
          <button onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ color: '#818cf8', border: '1px solid rgba(99,102,241,0.4)', borderRadius: '0.75rem' }}>
            <MessageCircle size={16} /> Contact Me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-5 mb-16"
        >
          {[
            { icon: Github, href: 'https://github.com/Yokesh9399' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/yokesh-g-509283323' },
            { icon: Mail, href: 'mailto:yokesh_g2024cse@sece.ac.in' },
          ].map(({ icon: Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-indigo-400"
              style={{ color: 'var(--muted)' }}>
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center cursor-pointer"
          onClick={() => scrollTo('about')}
        >
          <ArrowDown size={22} style={{ color: 'var(--muted)' }} />
        </motion.div>
      </div>
    </section>
  )
}
