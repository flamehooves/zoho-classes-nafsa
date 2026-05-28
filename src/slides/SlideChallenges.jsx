import { motion } from 'framer-motion'
import { AlertCircle, MessageSquare, Map, BarChart2, Clock, FileX } from 'lucide-react'

const pains = [
  { icon: <AlertCircle size={24} />, color: 'text-red-500 bg-red-50',     border: 'border-red-100',    title: 'Students arrive unprepared',       body: 'Without structured guidance, students miss critical visa steps and financial requirements, leading to rejections.' },
  { icon: <MessageSquare size={24} />, color: 'text-orange-500 bg-orange-50', border: 'border-orange-100', title: 'Communication is scattered',     body: 'Updates, session links, and documents buried in WhatsApp groups and emails. Students can\'t keep track.' },
  { icon: <Map size={24} />,         color: 'text-amber-500 bg-amber-50',  border: 'border-amber-100',  title: 'No structured preparation path',   body: 'Recruiters rely on one-off calls. There\'s no repeatable program that moves students through each stage.' },
  { icon: <BarChart2 size={24} />,   color: 'text-violet-500 bg-violet-50', border: 'border-violet-100', title: 'Impossible to track progress',    body: 'With hundreds of students at different stages, recruiters can\'t see who\'s ready and who needs help.' },
  { icon: <Clock size={24} />,       color: 'text-teal-500 bg-teal-50',   border: 'border-teal-100',   title: 'Orientation materials get ignored', body: 'PDFs sent over email rarely get read. Pre-departure content disappears, leaving students confused.' },
  { icon: <FileX size={24} />,       color: 'text-pink-500 bg-pink-50',   border: 'border-pink-100',   title: 'Students miss critical deadlines', body: 'Without reminders and assignment tracking, students miss financial docs, SOP deadlines, and interview prep.' },
]

export default function SlideChallenges() {
  return (
    <div className="slide bg-slate-50">
      <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-10 lg:px-16 py-5 gap-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2 flex-shrink-0"
        >
          <span className="slide-label">The Problem</span>
          <h2 className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight">
            The real gaps in international{' '}
            <span className="gradient-text">student preparation</span>
          </h2>
          <p className="text-slate-500 text-base max-w-2xl">
            Recruiters and education consultants face these structural challenges every intake cycle. Zoho Classes was built to solve each one.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex-1 grid grid-cols-3 gap-4 min-h-0">
          {pains.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className={`card-base p-6 flex flex-col gap-4 border ${p.border}`}
            >
              <div className={`w-12 h-12 rounded-xl ${p.color} flex items-center justify-center flex-shrink-0`}>
                {p.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resolution note */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="flex items-center gap-3 bg-white border border-zoho-200 rounded-xl px-5 py-3 shadow-sm flex-shrink-0"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <p className="text-base font-semibold text-slate-700">Zoho Classes resolves every one of these gaps — in one organized platform.</p>
        </motion.div>
      </div>
    </div>
  )
}
