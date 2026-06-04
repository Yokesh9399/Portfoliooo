import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react'

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'yokesh_g2024cse@sece.ac.in', href: 'mailto:yokesh_g2024cse@sece.ac.in', color: '#ef4444' },
  { icon: Linkedin, label: 'LinkedIn', value: 'yokesh-g-509283323', href: 'https://www.linkedin.com/in/yokesh-g-509283323', color: '#0a66c2' },
  { icon: Github, label: 'GitHub', value: 'Yokesh9399', href: 'https://github.com/Yokesh9399', color: '#e2e8f0' },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:yokesh_g2024cse@sece.ac.in?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.name + '\nEmail: ' + form.email)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Contact" subtitle="Let's connect" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Contact Info */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text)' }}>Let's Work Together</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                I'm actively looking for internship and full-time opportunities. Whether you have a project idea,
                a job opportunity, or just want to connect — feel free to reach out!
              </p>
            </div>
            {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4, scale: 1.01 }}
                className="flex items-center gap-4 glass rounded-xl p-4"
                style={{ border: '1px solid var(--border)', textDecoration: 'none' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}18`, color }}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: 'var(--muted)' }}>{label}</p>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
            className="glass rounded-2xl p-6"
            style={{ border: '1px solid var(--border)' }}
          >
            <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--text)' }}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { name: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--muted)' }}>{label}</label>
                  <input
                    type={type}
                    required
                    placeholder={placeholder}
                    value={form[name]}
                    onChange={e => setForm({ ...form, [name]: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--muted)' }}>Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all resize-none"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm gradient-bg text-white transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{ boxShadow: '0 0 20px rgba(99,102,241,0.3)' }}
              >
                {sent ? <><CheckCircle size={16} /> Message Sent!</> : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
