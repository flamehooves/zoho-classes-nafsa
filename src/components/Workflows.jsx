import { motion } from 'framer-motion'
import { Shield, FileText, DollarSign, Globe, Plane, Mic, Home, Sun, BookOpen, CheckCircle, Users, Map } from 'lucide-react'
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/animations'

const workflows = [
  { icon: <Shield size={18} />,      color: 'bg-blue-50 text-blue-600 border-blue-100',       title: 'Visa Preparation',             desc: 'Structured visa guidance modules with checklists and document templates.' },
  { icon: <FileText size={18} />,    color: 'bg-violet-50 text-violet-600 border-violet-100', title: 'SOP & Document Guidance',       desc: 'Workshops and examples to help students write compelling statements of purpose.' },
  { icon: <DollarSign size={18} />,  color: 'bg-green-50 text-green-600 border-green-100',    title: 'Financial Proof Prep',          desc: 'Templates, guidelines, and bank statement explainers for proof of funds.' },
  { icon: <BookOpen size={18} />,    color: 'bg-amber-50 text-amber-600 border-amber-100',    title: 'English Readiness',             desc: 'IELTS/TOEFL practice tests, vocabulary modules, and speaking confidence content.' },
  { icon: <Mic size={18} />,         color: 'bg-pink-50 text-pink-600 border-pink-100',       title: 'Embassy Interview Prep',        desc: 'Mock Q&As, common interview scenarios, and confidence-building exercises.' },
  { icon: <Plane size={18} />,       color: 'bg-sky-50 text-sky-600 border-sky-100',          title: 'Pre-Departure Orientation',     desc: 'Checklists, packing guides, airport tips, and arrival day essentials.' },
  { icon: <Home size={18} />,        color: 'bg-teal-50 text-teal-600 border-teal-100',       title: 'Accommodation Preparation',     desc: 'Housing search guides, lease agreement basics, and dorm setup resources.' },
  { icon: <Globe size={18} />,       color: 'bg-indigo-50 text-indigo-600 border-indigo-100', title: 'Country-Specific Guidance',     desc: 'Dedicated modules for Canada, UK, Australia, USA, Germany, and more.' },
  { icon: <Sun size={18} />,         color: 'bg-orange-50 text-orange-600 border-orange-100', title: 'Cultural Adaptation',           desc: 'Norms, etiquette, social life tips, and managing culture shock content.' },
  { icon: <Users size={18} />,       color: 'bg-rose-50 text-rose-600 border-rose-100',       title: 'Student Onboarding',            desc: 'Welcome sequences, platform orientation, and first-week action items.' },
  { icon: <CheckCircle size={18} />, color: 'bg-emerald-50 text-emerald-600 border-emerald-100', title: 'Immigration Compliance',    desc: 'Compliance basics, reporting obligations, and what students must know on arrival.' },
  { icon: <Map size={18} />,         color: 'bg-cyan-50 text-cyan-600 border-cyan-100',       title: 'Travel Readiness',             desc: 'Flight booking guidance, customs, travel insurance, and first 48 hours plans.' },
]

export default function Workflows() {
  return (
    <section className="section-pad bg-zoho-50/40" id="workflows">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.div variants={fadeInUp}>
            <span className="section-label">Preparation Programs</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="mt-4 text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Build programs that match{' '}
            <span className="gradient-text">real workflows</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-600">
            Zoho Classes supports every workflow in the international recruitment lifecycle — from the first inquiry to the student's first day on campus.
          </motion.p>
        </motion.div>

        {/* Workflow grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {workflows.map((w, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group bg-white rounded-2xl border ${w.color.split(' ')[2]} p-5 shadow-sm hover:shadow-card transition-all duration-200 cursor-default`}
            >
              <div className={`w-10 h-10 rounded-xl border ${w.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                {w.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-tight">{w.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 text-sm mb-4">All programs include courses, assignments, practice tests, resources, and VC session links.</p>
          <a href="#lead" className="btn-primary">
            See It in Action
          </a>
        </motion.div>
      </div>
    </section>
  )
}
