import { motion } from 'framer-motion'
import { Users, Clock, Star, ChevronRight, FileText, Video, CheckSquare, Play, BookOpen } from 'lucide-react'

const courses = [
  {
    gradient: 'from-blue-700 to-blue-500',
    badge: 'Most Popular', badgeC: 'bg-white/20 text-white',
    icon: <FileText size={30} className="text-white" />,
    title: 'Visa Preparation Masterclass',
    desc: 'End-to-end visa guidance: DS-160/CAS, financial docs, embassy appointments, and interview prep.',
    modules: ['Visa Categories & Eligibility', 'Document Checklist Builder', 'Embassy Interview Simulation', 'Mock Interview Sessions'],
    students: 3840, hours: 12, rating: 4.9, progress: 78, moduleCount: 8,
  },
  {
    gradient: 'from-violet-700 to-violet-500',
    badge: 'New', badgeC: 'bg-violet-200/30 text-violet-100',
    icon: <BookOpen size={30} className="text-white" />,
    title: 'Pre-Departure Essentials',
    desc: 'Everything before flying: housing, banking, healthcare, campus navigation, and cultural readiness.',
    modules: ['Pre-Departure Checklist', 'Accommodation & Banking', 'Culture & Social Life', 'Arrival Day Walkthrough'],
    students: 2210, hours: 8, rating: 4.8, progress: 55, moduleCount: 6,
  },
  {
    gradient: 'from-teal-700 to-teal-500',
    badge: 'High Impact', badgeC: 'bg-teal-200/30 text-teal-100',
    icon: <Star size={30} className="text-white" />,
    title: 'English Readiness Program',
    desc: 'Structured IELTS/TOEFL prep: practice tests, vocabulary modules, writing feedback, speaking sessions.',
    modules: ['Listening & Reading Skills', 'Academic Writing Workshop', 'Speaking Practice Sessions', 'Full Mock Exam'],
    students: 1870, hours: 20, rating: 4.9, progress: 40, moduleCount: 10,
  },
]

const moduleIcons = [<FileText size={14}/>, <CheckSquare size={14}/>, <Video size={14}/>, <Play size={14}/>]

export default function SlideCourses() {
  return (
    <div className="slide bg-white">
      <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-10 lg:px-16 py-4 gap-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-1"
        >
          <span className="slide-label">Course Library</span>
          <h2 className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight">
            Courses built for{' '}
            <span className="gradient-text">migration readiness</span>
          </h2>
          <p className="text-slate-500 text-base">
            Start from templates or build your own. Every course includes modules, resources, practice tests, assignments, and VC session slots.
          </p>
        </motion.div>

        {/* Course cards — flex-1 so they fill the remaining height */}
        <div className="flex-1 grid grid-cols-3 gap-5 min-h-0">
          {courses.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="card-base overflow-hidden flex flex-col"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-br ${c.gradient} px-6 py-5 relative overflow-hidden flex-shrink-0`}>
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">{c.icon}</div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.badgeC}`}>{c.badge}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight">{c.title}</h3>
                  <p className="text-white/70 text-sm mt-1.5 leading-relaxed">{c.desc}</p>
                </div>
              </div>

              {/* Body — flex-1 with space distributed */}
              <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {c.modules.map((m, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">{moduleIcons[j]}</div>
                      {m}
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5"><Users size={13}/>{c.students.toLocaleString()} students</span>
                    <span className="flex items-center gap-1.5"><Clock size={13}/>{c.hours}h</span>
                    <span className="flex items-center gap-1.5 ml-auto"><Star size={13} className="fill-amber-400 text-amber-400"/><span className="font-semibold text-slate-600">{c.rating}</span></span>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-400">{c.moduleCount} modules</span>
                      <span className="font-semibold text-zoho-700">{c.progress}% enrolled</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }} animate={{ width: `${c.progress}%` }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.9, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-zoho-600 to-zoho-400 rounded-full"
                      />
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-zoho-200 text-zoho-700 font-semibold rounded-xl text-sm hover:bg-zoho-50 transition-colors">
                    Preview Course <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
