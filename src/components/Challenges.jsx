import { motion } from 'framer-motion'
import { AlertCircle, MessageSquare, Map, BarChart2, Clock, FileX } from 'lucide-react'
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/animations'

const pains = [
  {
    icon: <AlertCircle size={22} />,
    color: 'text-red-500 bg-red-50',
    title: 'Students arrive unprepared',
    body: 'Without structured guidance, students miss critical visa steps, financial requirements, and pre-departure essentials — leading to rejections and delays.',
  },
  {
    icon: <MessageSquare size={22} />,
    color: 'text-orange-500 bg-orange-50',
    title: 'Communication is scattered',
    body: "Important updates, session links, and documents get buried in WhatsApp groups, emails, and shared drives. Students can't keep track.",
  },
  {
    icon: <Map size={22} />,
    color: 'text-amber-500 bg-amber-50',
    title: 'No structured preparation path',
    body: 'Recruiters rely on one-off calls and ad hoc checklists. There\'s no repeatable, scalable program that moves students through every stage.',
  },
  {
    icon: <BarChart2 size={22} />,
    color: 'text-violet-500 bg-violet-50',
    title: 'Impossible to track progress',
    body: "With dozens or hundreds of students in different stages, recruiters can't easily see who's ready, who's falling behind, or who needs support.",
  },
  {
    icon: <Clock size={22} />,
    color: 'text-teal-500 bg-teal-50',
    title: 'Orientation materials get ignored',
    body: 'PDFs sent over email rarely get read. Pre-departure content disappears in inboxes, leaving students confused about their next steps.',
  },
  {
    icon: <FileX size={22} />,
    color: 'text-pink-500 bg-pink-50',
    title: 'Missed deadlines and requirements',
    body: 'Without reminders and centralized assignment tracking, students miss financial proof submissions, SOP deadlines, and embassy preparation windows.',
  },
]

export default function Challenges() {
  return (
    <section className="section-pad bg-slate-50" id="challenges">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="section-label">The Problem</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="mt-4 text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            The real gaps in international{' '}
            <span className="gradient-text">student preparation</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-600">
            Recruiters and education consultants face the same structural challenges every cycle. Zoho Classes was built to solve exactly these.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pains.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-base p-7 group"
            >
              <div className={`w-11 h-11 rounded-2xl ${p.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bridge text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-zoho-200 rounded-2xl px-6 py-4 shadow-card">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="text-sm font-semibold text-slate-700">
              Zoho Classes resolves every one of these gaps — in one organized platform.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
