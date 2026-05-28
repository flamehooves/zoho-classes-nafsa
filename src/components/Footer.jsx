import { motion } from 'framer-motion'
import { GraduationCap, Twitter, Linkedin, Youtube, Mail, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  Platform: ['Courses & Modules', 'Assignments & Tests', 'Private Feeds', 'Progress Tracking', 'Virtual Sessions', 'Announcements'],
  'Use Cases': ['Visa Preparation', 'Pre-Departure Programs', 'English Readiness', 'Embassy Interview Prep', 'Cultural Orientation', 'Student Onboarding'],
  Company: ['About Zoho', 'Zoho Classes', 'Privacy Policy', 'Terms of Service', 'Contact Sales', 'Support Center'],
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-zoho-700 to-zoho-500 flex items-center justify-center shadow-glow">
                <GraduationCap size={18} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Zoho Classes</p>
                <p className="text-[10px] text-zoho-400 font-medium tracking-wide uppercase">Student Preparation Platform</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5 max-w-xs">
              The platform built for international student recruiters. Structured courses, secure communication, and complete preparation management — all in one place.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Get platform updates"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-zoho-500 transition-colors min-w-0"
              />
              <button className="bg-zoho-700 hover:bg-zoho-600 text-white rounded-xl p-2 transition-colors flex-shrink-0">
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: <Twitter size={15} />, label: 'Twitter' },
                { icon: <Linkedin size={15} />, label: 'LinkedIn' },
                { icon: <Youtube size={15} />, label: 'YouTube' },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-slate-400 hover:text-white"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-white font-semibold text-sm mb-4">{title}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* NAFSA strip */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-amber-500 font-bold">🏅 NAFSA 2026</span>
            <span className="text-slate-500">Booth #1842 · Colorado Convention Center, Denver, CO · June 2–5, 2026</span>
          </div>
          <a href="#lead" className="text-xs font-semibold text-zoho-400 hover:text-zoho-300 transition-colors flex items-center gap-1">
            Book a meeting at the booth <ArrowRight size={11} />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© 2026 Zoho Corporation. All rights reserved. Zoho Classes is a product of Zoho.</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
