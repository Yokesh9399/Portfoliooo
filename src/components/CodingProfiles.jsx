import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'
import { ExternalLink } from 'lucide-react'

const profiles = [
  {
    name: 'GitHub',
    handle: 'Yokesh9399',
    url: 'https://github.com/Yokesh9399',
    stat: '3+ Repos',
    statLabel: 'Public Projects',
    color: '#e2e8f0',
    bg: '#161b22',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'yokesh-g-509283323',
    url: 'https://www.linkedin.com/in/yokesh-g-509283323',
    stat: 'Connected',
    statLabel: 'Professional Network',
    color: '#0a66c2',
    bg: '#0a66c2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'LeetCode',
    handle: 'Yokesh9399',
    url: 'https://leetcode.com/u/Yokesh9399/',
    stat: '100+',
    statLabel: 'Problems Solved',
    color: '#ffa116',
    bg: '#1a1a1a',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
  },
  {
    name: 'SkillRack',
    handle: 'Yokesh G',
    url: 'https://www.skillrack.com/faces/ui/profile.xhtml',
    stat: '1120+',
    statLabel: 'Problems Solved',
    color: '#00b4d8',
    bg: '#0077b6',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    name: 'HackerRank',
    handle: 'yokesh_g2024cse',
    url: 'https://www.hackerrank.com/profile/yokesh_g2024cse',
    stat: 'Active',
    statLabel: 'Coder Profile',
    color: '#00ea64',
    bg: '#00ea64',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 11.885 0 13S13.287 24 12 24s-9.75-4.885-10.392-6c-.645-1.115-.645-11.885 0-13C2.25 3.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.78c0-.141-.115-.258-.258-.258H8.34c-.141 0-.256.117-.256.258v10.44c0 .141.115.258.256.258h1.365c.143 0 .258-.117.258-.258v-4.006h4.074v4.006c0 .141.115.258.258.258H15.66c.141 0 .256-.117.256-.258V6.78c0-.141-.115-.258-.256-.258h-1.365z"/>
      </svg>
    ),
  },
]

export default function CodingProfiles() {
  const [ref, inView] = useInView()

  return (
    <section id="coding-profiles" className="section-pad" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Coding Profiles" subtitle="Where I practice & contribute" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {profiles.map(({ name, handle, url, stat, statLabel, color, icon }) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-5 flex flex-col gap-4 group cursor-pointer"
              style={{ border: '1px solid var(--border)', textDecoration: 'none' }}
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}18`, color }}>
                  {icon}
                </div>
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--muted)' }} />
              </div>
              <div>
                <h3 className="font-bold text-base" style={{ color: 'var(--text)' }}>{name}</h3>
                <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>@{handle}</p>
              </div>
              <div className="pt-3 mt-auto" style={{ borderTop: '1px solid var(--border)' }}>
                <span className="text-xl font-black" style={{ color }}>{stat}</span>
                <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{statLabel}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
