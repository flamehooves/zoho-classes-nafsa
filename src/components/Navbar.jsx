import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap, ArrowRight } from 'lucide-react'

const links = [
  { label: 'Features',    href: '#features' },
  { label: 'Workflows',   href: '#workflows' },
  { label: 'Courses',     href: '#courses' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'NAFSA 2026',  href: '#nafsa', highlight: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zoho-700 to-zoho-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <GraduationCap className="w-4.5 h-4.5 text-white" size={18} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-slate-900 text-sm tracking-tight">Zoho Classes</span>
              <span className="text-[10px] text-zoho-600 font-medium tracking-wide uppercase">Student Preparation</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  l.highlight
                    ? 'bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#lead" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Contact Us
            </a>
            <a href="#lead" className="btn-primary text-sm px-5 py-2.5">
              Book a Demo <ArrowRight size={15} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-zoho-50 hover:text-zoho-700 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2">
                <a href="#lead" className="btn-primary w-full justify-center">
                  Book a Demo <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
