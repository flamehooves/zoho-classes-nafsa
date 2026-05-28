import { motion } from 'framer-motion'
import { BookOpen, Bell, Video, BarChart2, FileText, Users, CheckSquare, MessageCircle } from 'lucide-react'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from '../utils/animations'

const features = [
  { icon: <BookOpen size={20} />, color: 'bg-zoho-50 text-zoho-700',    title: 'Structured Courses',         body: 'Build multi-module courses with video, PDFs, and quizzes for every preparation stage.' },
  { icon: <Bell size={20} />,     color: 'bg-amber-50 text-amber-600',   title: 'Announcements & Reminders', body: 'Push deadline alerts and updates directly into each student\'s feed and notification inbox.' },
  { icon: <Video size={20} />,    color: 'bg-blue-50 text-blue-600',     title: 'Virtual Session Links',     body: 'Share Zoom, Meet, or Teams links inside courses and feeds — only enrolled students receive them.' },
  { icon: <BarChart2 size={20} />,color: 'bg-green-50 text-green-600',   title: 'Progress Tracking',         body: 'Monitor individual and cohort readiness with completion rates and assignment status.' },
  { icon: <FileText size={20} />, color: 'bg-violet-50 text-violet-600', title: 'Document Uploads',          body: 'Share SOP guides, visa checklists, financial templates, and country-specific resources.' },
  { icon: <Users size={20} />,    color: 'bg-teal-50 text-teal-600',     title: 'Private Student Feeds',     body: 'Give each cohort a private, organized space for communication and resource sharing.' },
  { icon: <CheckSquare size={20} />, color: 'bg-pink-50 text-pink-600',  title: 'Assignments & Tests',       body: 'Assign tasks, collect submissions, and run practice tests for embassy interview readiness.' },
  { icon: <MessageCircle size={20} />, color: 'bg-orange-50 text-orange-600', title: 'Discussion Spaces',   body: 'Peer-to-peer Q&A and discussion boards so students support each other through the process.' },
]

export default function HowItWorks() {
  return (
    <section className="section-pad bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-zoho-900 to-zoho-700 rounded-3xl p-6 shadow-2xl overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5" />
              <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-white/5" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white font-bold text-sm">Recruiter Overview</p>
                  <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-500/30">Live</span>
                </div>

                {/* Cohort cards */}
                {[
                  { name: 'Fall 2026 Cohort — Canada', students: 48, progress: 82, color: 'from-blue-500 to-blue-400' },
                  { name: 'UK Pathway — Spring 2026',  students: 31, progress: 64, color: 'from-violet-500 to-violet-400' },
                  { name: 'Australia Prep Program',    students: 22, progress: 45, color: 'from-teal-500 to-teal-400' },
                ].map((cohort, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/15 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-white text-xs font-semibold">{cohort.name}</p>
                      <span className="text-white/60 text-xs">{cohort.students} students</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${cohort.progress}%` }}
                        viewport={viewportConfig}
                        transition={{ delay: 0.4 + i * 0.15, duration: 1, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${cohort.color} rounded-full`}
                      />
                    </div>
                    <p className="text-white/50 text-[10px] mt-1">{cohort.progress}% preparation complete</p>
                  </motion.div>
                ))}

                {/* Quick stats row */}
                <div className="grid grid-cols-3 gap-3 pt-1">
                  {[
                    { label: 'Active', value: '101' },
                    { label: 'Courses', value: '14' },
                    { label: 'Due Soon', value: '6' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                      <p className="text-white font-bold text-lg">{s.value}</p>
                      <p className="text-white/50 text-[10px] font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating alert */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card border border-slate-100 p-4 max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-slate-800">Action Needed</span>
              </div>
              <p className="text-[11px] text-slate-600">3 students haven't submitted financial docs</p>
            </motion.div>
          </motion.div>

          {/* Right: features grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeInUp}>
              <span className="section-label">Platform Features</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="mt-4 text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
              One platform.{' '}
              <span className="gradient-text">Complete preparation.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-600 leading-relaxed">
              Everything your students need — from visa guidance to pre-departure orientation — organized in a single, beautiful platform.
            </motion.p>

            <motion.div variants={staggerContainer} className="mt-8 grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -3 }}
                  className="group p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-card transition-all duration-200"
                >
                  <div className={`w-9 h-9 rounded-xl ${f.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    {f.icon}
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 mb-1">{f.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{f.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
