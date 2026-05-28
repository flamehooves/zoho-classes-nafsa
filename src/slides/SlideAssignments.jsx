import { motion } from 'framer-motion'
import { FileText, Target, BarChart2, ChevronRight } from 'lucide-react'

const assignments = [
  { title: 'Visa Document Checklist Submission', course: 'Visa Preparation Masterclass', due: 'Due in 2 days',     status: 'pending',     statusC: 'text-amber-500 bg-amber-500/10 border-amber-500/20',  submitted: 31, total: 48 },
  { title: 'Statement of Purpose — Draft 1',     course: 'SOP & Document Workshop',      due: 'Submitted · Reviewed', status: 'graded',  statusC: 'text-green-400 bg-green-500/10 border-green-500/20',  submitted: 48, total: 48 },
  { title: 'IELTS Mock Exam — Reading Module',   course: 'English Readiness Program',    due: 'Due in 5 days',     status: 'in_progress', statusC: 'text-blue-400 bg-blue-500/10 border-blue-500/20',    submitted: 18, total: 48 },
  { title: 'Financial Proof Upload',             course: 'Visa Preparation Masterclass', due: 'Due tomorrow',      status: 'pending',     statusC: 'text-red-400 bg-red-500/10 border-red-500/20',       submitted: 12, total: 48 },
]

const tests = [
  { label: 'Embassy Interview Simulation', score: 87, max: 100, emoji: '🎤', trend: '+5',  barColor: 'from-zoho-500 to-zoho-300' },
  { label: 'Visa Knowledge Assessment',    score: 94, max: 100, emoji: '📋', trend: '+12', barColor: 'from-green-500 to-green-300' },
  { label: 'Financial Docs Comprehension', score: 76, max: 100, emoji: '💰', trend: '+8',  barColor: 'from-amber-500 to-amber-300' },
]

const statusLabel = { pending: 'Pending', graded: 'Graded', in_progress: 'In Progress' }

export default function SlideAssignments() {
  return (
    <div className="slide bg-zoho-950 relative overflow-hidden">
      <div className="absolute -top-40 left-0 w-96 h-96 bg-zoho-700/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 right-0 w-80 h-80 bg-zoho-800/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-10 lg:px-16 py-4 gap-5 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-1.5"
        >
          <span className="inline-flex items-center gap-2 text-zoho-300 font-semibold text-xs tracking-wide uppercase bg-white/8 border border-white/15 px-3 py-1 rounded-full">
            Assignments & Practice Tests
          </span>
          <h2 className="text-3xl xl:text-4xl font-extrabold text-white tracking-tight">
            Track every student's{' '}
            <span className="bg-gradient-to-r from-zoho-300 to-zoho-100 bg-clip-text text-transparent">readiness</span>
          </h2>
          <p className="text-white/50 text-sm">Assign tasks, collect submissions, run timed tests, and instantly see who's prepared.</p>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-5">
          {/* Assignments panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2"><FileText size={14} className="text-zoho-300" /><span className="text-white font-semibold text-xs">Active Assignments</span></div>
              <span className="bg-accent-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">4 pending</span>
            </div>
            <div className="flex-1 p-3 space-y-2 overflow-hidden">
              {assignments.map((a, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.09 }}
                  className="bg-white/5 border border-white/8 rounded-xl p-3 hover:bg-white/8 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-[11px] leading-tight">{a.title}</p>
                      <p className="text-white/35 text-[9px] mt-0.5">{a.course}</p>
                    </div>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border flex-shrink-0 ${a.statusC}`}>{statusLabel[a.status]}</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] mb-1.5">
                    <span className="text-white/50">{a.due}</span>
                    <span className="text-white/40">{a.submitted}/{a.total} submitted</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }} animate={{ width: `${(a.submitted / a.total) * 100}%` }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.7 }}
                      className="h-full bg-gradient-to-r from-zoho-400 to-zoho-300 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Practice test results panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-4 h-full"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col flex-1">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 flex-shrink-0">
                <Target size={14} className="text-zoho-300" />
                <span className="text-white font-semibold text-xs">Practice Test Results</span>
                <span className="ml-auto text-white/30 text-[9px]">Avg. cohort score</span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center space-y-4">
                {tests.map((t, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">{t.emoji}</span>
                        <span className="text-white/70 text-xs">{t.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400 text-[10px] font-bold">{t.trend}</span>
                        <span className="text-white font-bold text-sm">{t.score}<span className="text-white/30">/{t.max}</span></span>
                      </div>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }} animate={{ width: `${(t.score / t.max) * 100}%` }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.9 }}
                        className={`h-full bg-gradient-to-r ${t.barColor} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-500/20 rounded-2xl p-4 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <BarChart2 size={16} className="text-green-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Cohort Insight</p>
                <p className="text-white/55 text-xs mt-0.5 leading-relaxed">82% of your Fall 2026 cohort is on track. 9 students need SOP support before Thursday.</p>
                <button className="mt-2 text-green-400 text-[10px] font-semibold flex items-center gap-1 hover:text-green-300">
                  View Full Report <ChevronRight size={10} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
