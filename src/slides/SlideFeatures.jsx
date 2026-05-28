import { motion } from 'framer-motion'
import { BookOpen, Bell, Video, BarChart2, FileText, Users, CheckSquare, MessageCircle } from 'lucide-react'

const features = [
  { icon: <BookOpen size={20} />,     color: 'bg-zoho-50 text-zoho-700',    title: 'Structured Courses',        body: 'Multi-module courses with video, PDFs, and quizzes.' },
  { icon: <Bell size={20} />,         color: 'bg-amber-50 text-amber-600',   title: 'Announcements',             body: 'Deadline alerts pushed into each student\'s feed.' },
  { icon: <Video size={20} />,        color: 'bg-blue-50 text-blue-600',     title: 'VC Session Links',          body: 'Zoom/Meet/Teams links — enrolled students only.' },
  { icon: <BarChart2 size={20} />,    color: 'bg-green-50 text-green-600',   title: 'Progress Tracking',         body: 'Completion rates and assignment status per student.' },
  { icon: <FileText size={20} />,     color: 'bg-violet-50 text-violet-600', title: 'Document Uploads',          body: 'Visa checklists, SOP guides, and country resources.' },
  { icon: <Users size={20} />,        color: 'bg-teal-50 text-teal-600',     title: 'Private Student Feeds',     body: 'Secure, cohort-specific communication spaces.' },
  { icon: <CheckSquare size={20} />,  color: 'bg-pink-50 text-pink-600',     title: 'Assignments & Tests',       body: 'Task submissions and practice tests with scoring.' },
  { icon: <MessageCircle size={20} />,color: 'bg-orange-50 text-orange-600', title: 'Discussion Spaces',         body: 'Peer Q&A boards for student-to-student support.' },
]

const cohorts = [
  { name: 'Fall 2026 — Canada',    students: 48, progress: 82, color: 'from-blue-500 to-blue-400' },
  { name: 'UK Pathway — Spring 26', students: 31, progress: 64, color: 'from-violet-500 to-violet-400' },
  { name: 'Australia Prep',        students: 22, progress: 45, color: 'from-teal-500 to-teal-400' },
]

export default function SlideFeatures() {
  return (
    <div className="slide bg-white">
      <div className="flex-1 flex items-center max-w-7xl mx-auto w-full px-10 lg:px-16 gap-10">

        {/* Left: Recruiter dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-[320px] xl:w-[360px]"
        >
          <div className="bg-gradient-to-br from-zoho-900 to-zoho-700 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -left-6 w-24 h-24 rounded-full bg-white/5" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-white font-bold text-sm">Recruiter Overview</p>
                <span className="bg-green-500/20 text-green-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-green-500/30">Live</span>
              </div>
              {cohorts.map((c, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className="bg-white/10 border border-white/10 rounded-xl p-3 space-y-2"
                >
                  <div className="flex justify-between">
                    <p className="text-white text-xs font-semibold">{c.name}</p>
                    <span className="text-white/50 text-[10px]">{c.students} students</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }} animate={{ width: `${c.progress}%` }}
                      transition={{ delay: 0.5 + i * 0.12, duration: 0.9, ease: 'easeOut' }}
                      className={`h-full bg-gradient-to-r ${c.color} rounded-full`}
                    />
                  </div>
                  <p className="text-white/40 text-[9px]">{c.progress}% preparation complete</p>
                </motion.div>
              ))}
              <div className="grid grid-cols-3 gap-2">
                {[['101', 'Active'], ['14', 'Courses'], ['6', 'Due Soon']].map(([v, l]) => (
                  <div key={l} className="bg-white/10 rounded-xl p-2 text-center border border-white/10">
                    <p className="text-white font-bold text-base">{v}</p>
                    <p className="text-white/40 text-[9px]">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Features grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex-1 space-y-5"
        >
          <div className="space-y-2">
            <span className="slide-label">Platform Features</span>
            <h2 className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              One platform.{' '}
              <span className="gradient-text">Complete preparation.</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Everything your students need — visa guidance to pre-departure orientation — organized in one beautiful platform.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.07 }}
                whileHover={{ y: -2 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-card transition-all duration-150"
              >
                <div className={`w-10 h-10 rounded-xl ${f.color} flex items-center justify-center flex-shrink-0`}>{f.icon}</div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{f.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{f.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
