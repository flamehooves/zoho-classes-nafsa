import { motion } from 'framer-motion'
import { FileText, CheckCircle, Clock, AlertCircle, BarChart2, Star, Target, ChevronRight } from 'lucide-react'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from '../utils/animations'

const assignments = [
  {
    title: 'Visa Document Checklist Submission',
    course: 'Visa Preparation Masterclass',
    due: 'Due in 2 days',
    status: 'pending',
    statusColor: 'text-amber-600 bg-amber-50 border-amber-200',
    dueColor: 'text-amber-600',
    points: 100,
    submitted: 31,
    total: 48,
  },
  {
    title: 'Statement of Purpose — Draft 1',
    course: 'SOP & Document Workshop',
    due: 'Submitted · Reviewed',
    status: 'graded',
    statusColor: 'text-green-600 bg-green-50 border-green-200',
    dueColor: 'text-green-600',
    points: 85,
    submitted: 48,
    total: 48,
  },
  {
    title: 'IELTS Mock Exam — Reading Module',
    course: 'English Readiness Program',
    due: 'Due in 5 days',
    status: 'in_progress',
    statusColor: 'text-blue-600 bg-blue-50 border-blue-200',
    dueColor: 'text-blue-600',
    points: 120,
    submitted: 18,
    total: 48,
  },
]

const testResults = [
  { label: 'Embassy Interview Simulation', score: 87, max: 100, icon: '🎤', trend: '+5' },
  { label: 'Visa Knowledge Assessment', score: 94, max: 100, icon: '📋', trend: '+12' },
  { label: 'Financial Docs Comprehension', score: 76, max: 100, icon: '💰', trend: '+8' },
]

export default function Assignments() {
  return (
    <section className="section-pad bg-zoho-950 relative overflow-hidden" id="assignments">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-zoho-800/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zoho-800/30 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 text-zoho-300 font-semibold text-sm tracking-wide uppercase bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
              Assignments & Practice Tests
            </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="mt-4 text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Track every student's{' '}
            <span className="bg-gradient-to-r from-zoho-300 to-zoho-100 bg-clip-text text-transparent">readiness</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-white/60 leading-relaxed">
            Assign tasks, collect submissions, run timed practice tests, and instantly see who's prepared and who needs support.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Assignments panel */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-zoho-300" />
                  <span className="text-white font-semibold text-sm">Active Assignments</span>
                </div>
                <span className="bg-accent-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">3 pending</span>
              </div>

              <div className="p-4 space-y-3">
                {assignments.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig}
                    transition={{ delay: i * 0.12 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold text-sm leading-tight">{a.title}</p>
                        <p className="text-white/40 text-xs mt-0.5">{a.course}</p>
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border flex-shrink-0 ${a.statusColor}`}>
                        {a.status === 'pending' ? 'Pending' : a.status === 'graded' ? 'Graded' : 'In Progress'}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs">
                      <span className={`font-medium ${a.dueColor}`}>{a.due}</span>
                      <span className="text-white/40">·</span>
                      <span className="text-white/50">{a.submitted}/{a.total} submitted</span>
                      <span className="text-white/40 ml-auto">{a.points} pts</span>
                    </div>

                    <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(a.submitted / a.total) * 100}%` }}
                        viewport={viewportConfig}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-zoho-400 to-zoho-300 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-white/40 text-xs">Showing 3 of 12 assignments</span>
                <button className="text-zoho-300 text-xs font-semibold flex items-center gap-1 hover:text-zoho-200 transition-colors">
                  View All <ChevronRight size={12} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Practice test results */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                <Target size={16} className="text-zoho-300" />
                <span className="text-white font-semibold text-sm">Practice Test Results</span>
                <span className="ml-auto text-white/40 text-xs">Avg. cohort score</span>
              </div>

              <div className="p-4 space-y-4">
                {testResults.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig}
                    transition={{ delay: i * 0.12 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{t.icon}</span>
                        <span className="text-white/80 text-xs font-medium">{t.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400 text-xs font-bold">{t.trend}</span>
                        <span className="text-white font-bold text-sm">{t.score}<span className="text-white/30">/{t.max}</span></span>
                      </div>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(t.score / t.max) * 100}%` }}
                        viewport={viewportConfig}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.9, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{
                          background: t.score > 90 ? 'linear-gradient(90deg, #10B981, #34D399)' :
                                       t.score > 75 ? 'linear-gradient(90deg, #3D5EFF, #6485FF)' :
                                       'linear-gradient(90deg, #F97316, #FB923C)',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Insight card */}
            <div className="bg-gradient-to-br from-green-900/40 to-teal-900/30 border border-green-500/20 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <BarChart2 size={18} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Cohort Readiness Insight</p>
                  <p className="text-white/60 text-xs mt-1 leading-relaxed">
                    82% of your Fall 2026 cohort is on track for their application deadlines. 9 students need SOP support before Thursday.
                  </p>
                  <button className="mt-3 text-green-400 text-xs font-semibold flex items-center gap-1 hover:text-green-300">
                    View Full Report <ChevronRight size={11} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
