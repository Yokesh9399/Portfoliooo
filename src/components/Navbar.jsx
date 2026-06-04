import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Home','About','Skills','Projects','Coding Profiles','Achievements','Resume','Contact']

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase().replace(/ /g, '-'))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : ''}`}
      style={{ background: scrolled ? 'var(--card)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: scrolled ? '1px solid var(--border)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold gradient-text cursor-pointer"
          onClick={() => scrollTo('home')}
        >
          YG
        </motion.span>

        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="px-3 py-1.5 text-sm rounded-lg transition-all duration-200 hover:text-indigo-400 cursor-pointer"
              style={{ color: 'var(--muted)' }}
            >
              {l}
            </button>
          ))}
          <ThemeToggle dark={dark} setDark={setDark} />
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle dark={dark} setDark={setDark} />
          <button onClick={() => setOpen(!open)} style={{ color: 'var(--text)' }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            {links.map(l => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="block w-full text-left px-6 py-3 text-sm transition-colors hover:text-indigo-400"
                style={{ color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}
              >
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative flex items-center w-14 h-7 rounded-full transition-all duration-300 cursor-pointer"
      style={{ background: dark ? 'rgba(99,102,241,0.3)' : 'rgba(99,102,241,0.15)', border: '1px solid var(--border)' }}
    >
      <motion.div
        animate={{ x: dark ? 2 : 30 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute w-5 h-5 rounded-full gradient-bg flex items-center justify-center"
      >
        {dark ? <Moon size={11} color="white" /> : <Sun size={11} color="white" />}
      </motion.div>
      <Sun size={12} className="absolute left-1.5" style={{ color: dark ? 'transparent' : '#f59e0b', opacity: dark ? 0 : 1, transition: 'opacity 0.3s' }} />
      <Moon size={12} className="absolute right-1.5" style={{ color: dark ? '#818cf8' : 'transparent', opacity: dark ? 1 : 0, transition: 'opacity 0.3s' }} />
    </button>
  )
}
