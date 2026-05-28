import { motion } from 'framer-motion'
import { Shield, FileText, DollarSign, Globe, Plane, Mic, Home, Sun, BookOpen, CheckCircle, Users, Map } from 'lucide-react'

const workflows = [
  { icon: <Shield size={20} />,       c: 'bg-blue-50 text-blue-600 border-blue-100',     title: 'Visa Preparation',          desc: 'Structured guidance, checklists, document templates.' },
  { icon: <FileText size={20} />,     c: 'bg-violet-50 text-violet-600 border-violet-100', title: 'SOP & Document Guidance',  desc: 'Workshops and examples for compelling statements.' },
  { icon: <DollarSign size={20} />,   c: 'bg-green-50 text-green-600 border-green-100',   title: 'Financial Proof Prep',      desc: 'Templates and bank statement explainers.' },
  { icon: <BookOpen size={20} />,     c: 'bg-amber-50 text-amber-600 border-amber-100',   title: 'English Readiness',         desc: 'IELTS/TOEFL practice tests and vocabulary modules.' },
  { icon: <Mic size={20} />,          c: 'bg-pink-50 text-pink-600 border-pink-100',       title: 'Embassy Interview Prep',    desc: 'Mock Q&As and confidence-building exercises.' },
  { icon: <Plane size={20} />,        c: 'bg-sky-50 text-sky-600 border-sky-100',          title: 'Pre-Departure Orientation', desc: 'Checklists, packing guides, arrival day essentials.' },
  { icon: <Home size={20} />,         c: 'bg-teal-50 text-teal-600 border-teal-100',       title: 'Accommodation Prep',        desc: 'Housing search, lease basics, dorm setup guides.' },
  { icon: <Globe size={20} />,        c: 'bg-indigo-50 text-indigo-600 border-indigo-100', title: 'Country-Specific Guidance', desc: 'Dedicated modules for CA, UK, AU, US, DE and more.' },
  { icon: <Sun size={20} />,          c: 'bg-orange-50 text-orange-600 border-orange-100', title: 'Cultural Adaptation',       desc: 'Norms, etiquette, social life, managing culture shock.' },
  { icon: <Users size={20} />,        c: 'bg-rose-50 text-rose-600 border-rose-100',       title: 'Student Onboarding',        desc: 'Welcome sequence and first-week action items.' },
  { icon: <CheckCircle size={20} />,  c: 'bg-emerald-50 text-emerald-600 border-emerald-100', title: 'Immigration Compliance', desc: 'Reporting obligations and what students must know.' },
  { icon: <Map size={20} />,          c: 'bg-cyan-50 text-cyan-600 border-cyan-100',       title: 'Travel Readiness',          desc: 'Customs, travel insurance, and 48-hour arrival plans.' },
]

export default function SlideWorkflows() {
  return (
    <div className="slide bg-zoho-50/40">
      <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-10 lg:px-16 py-5 gap-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-1.5 flex-shrink-0"
        >
          <span className="slide-label">Preparation Programs</span>
          <h2 className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight">
            Build programs that match{' '}
            <span className="gradient-text">real workflows</span>
          </h2>
          <p className="text-slate-500 text-base">
            Supports every workflow in the international recruitment lifecycle — from first inquiry to first day on campus.
          </p>
        </motion.div>

        {/* 4×3 grid */}
        <div className="flex-1 grid grid-cols-4 gap-3 min-h-0">
          {workflows.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.045, duration: 0.4 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className={`bg-white rounded-xl border ${w.c.split(' ')[2]} p-4 shadow-sm hover:shadow-card transition-all cursor-default flex flex-col`}
            >
              <div className={`w-10 h-10 rounded-xl border ${w.c} flex items-center justify-center mb-3 flex-shrink-0`}>{w.icon}</div>
              <p className="text-sm font-bold text-slate-900 leading-tight mb-1.5">{w.title}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="text-center text-sm text-slate-400 flex-shrink-0"
        >
          All programs include courses, assignments, practice tests, resources, and VC session links.
        </motion.p>
      </div>
    </div>
  )
}
