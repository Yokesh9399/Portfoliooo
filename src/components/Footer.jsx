import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 glass" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-lg font-black gradient-text">Yokesh G</span>
            <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>Full Stack Developer · Java Developer</p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/Yokesh9399' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/yokesh-g-509283323' },
              { icon: Mail, href: 'mailto:yokesh_g2024cse@sece.ac.in' },
            ].map(({ icon: Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center transition-all duration-200 hover:scale-110 hover:text-indigo-400"
                style={{ color: 'var(--muted)', border: '1px solid var(--border)' }}>
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="text-center sm:text-right">
            <p className="text-xs flex items-center gap-1 justify-center sm:justify-end" style={{ color: 'var(--muted)' }}>
              Built with <Heart size={12} className="text-red-400 fill-red-400" /> using React & Tailwind
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>© 2025 Yokesh G. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
