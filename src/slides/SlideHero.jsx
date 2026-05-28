import { motion } from 'framer-motion'
import { ArrowRight, Star, CheckCircle, Bell, Video, Users, FileText, BookOpen, MapPin } from 'lucide-react'

const courseItems = [
  { icon: <FileText size={11} />, label: 'Visa Prep 101',     progress: 90, color: 'bg-blue-500' },
  { icon: <BookOpen size={11} />, label: 'SOP Workshop',       progress: 65, color: 'bg-violet-500' },
  { icon: <Star size={11} />,     label: 'English Ready',      progress: 80, color: 'bg-amber-500' },
  { icon: <MapPin size={11} />,   label: 'Pre-Departure',      progress: 45, color: 'bg-teal-500' },
]

function DashboardCard() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-full max-w-[380px]"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Bar */}
        <div className="bg-gradient-to-r from-zoho-800 to-zoho-600 px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-400"/><div className="w-2 h-2 rounded-full bg-amber-400"/><div className="w-2 h-2 rounded-full bg-green-400"/></div>
          <span className="text-white/80 text-[10px] font-medium mx-auto">Zoho Classes — Student Portal</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-slate-400">Welcome back,</p>
              <p className="font-bold text-slate-800 text-sm">Sarah Chen 👋</p>
            </div>
            <span className="bg-zoho-50 text-zoho-700 text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-zoho-100">Pre-Departure Phase</span>
          </div>
          {/* Overall progress */}
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-slate-500 font-medium">Overall Preparation</span>
              <span className="text-zoho-700 font-bold">78%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }} animate={{ width: '78%' }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-zoho-600 to-zoho-400 rounded-full"
              />
            </div>
          </div>
          {/* Course grid */}
          <div className="grid grid-cols-2 gap-2">
            {courseItems.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-slate-50 rounded-xl p-2.5 border border-slate-100"
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="w-5 h-5 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500">{c.icon}</div>
                  <p className="text-[10px] font-semibold text-slate-700 leading-tight">{c.label}</p>
                </div>
                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className={`h-full ${c.color} rounded-full`} style={{ width: `${c.progress}%` }} />
                </div>
              </motion.div>
            ))}
          </div>
          {/* Notification */}
          <div className="bg-zoho-50 border border-zoho-100 rounded-xl p-2.5 flex items-start gap-2">
            <div className="w-6 h-6 rounded-lg bg-zoho-100 flex items-center justify-center flex-shrink-0">
              <Bell size={11} className="text-zoho-700" />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-zoho-800">Embassy Interview Prep</p>
              <p className="text-[9px] text-zoho-600">Virtual session link shared · Tomorrow 2PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3 -right-4 bg-white rounded-xl shadow-card border border-slate-100 px-2.5 py-1.5 flex items-center gap-1.5"
      >
        <div className="w-5 h-5 rounded-lg bg-green-100 flex items-center justify-center"><CheckCircle size={11} className="text-green-600" /></div>
        <div><p className="text-[9px] text-slate-400 font-medium">Visa Approved</p><p className="text-[10px] font-bold text-slate-700">✓ Ready</p></div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-3 -left-5 bg-white rounded-xl shadow-card border border-slate-100 px-2.5 py-1.5 flex items-center gap-1.5"
      >
        <div className="w-5 h-5 rounded-lg bg-violet-100 flex items-center justify-center"><Video size={11} className="text-violet-600" /></div>
        <div><p className="text-[9px] text-slate-400">Zoom shared</p><p className="text-[10px] font-bold text-slate-700">24 joined</p></div>
      </motion.div>
    </motion.div>
  )
}

export default function SlideHero() {
  return (
    <div className="slide bg-hero-gradient relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-zoho-100/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-accent-100/30 blur-3xl pointer-events-none" />

      <div className="flex-1 flex items-center max-w-7xl mx-auto w-full px-10 lg:px-16 gap-10 xl:gap-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          className="flex-1 space-y-5"
        >
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
              Showcasing at NAFSA 2026 · Denver, CO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight"
          >
            Prepare Every{' '}
            <span className="gradient-text">Student</span><br />
            for a World of{' '}
            <span className="relative gradient-text">
              Possibilities.
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 280 8" fill="none">
                <path d="M2 5 Q70 1 140 5 Q210 9 278 5" stroke="#1B5FD6" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-base xl:text-lg text-slate-600 leading-relaxed max-w-lg"
          >
            The all-in-one platform for international student recruiters. Structured courses, visa guidance, virtual orientations, and student progress — all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="flex gap-3"
          >
            <a href="#" className="btn-primary"><span>Book a Free Demo</span><ArrowRight size={15} /></a>
            <a href="#" className="btn-outline">Meet Us at NAFSA</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
            className="flex items-center gap-6 pt-1"
          >
            {[{ n: '500+', l: 'Institutions' }, { n: '50K+', l: 'Students' }, { n: '80+', l: 'Countries' }].map(s => (
              <div key={s.l}>
                <div className="text-xl font-extrabold text-zoho-700">{s.n}</div>
                <div className="text-[11px] text-slate-500 font-medium">{s.l}</div>
              </div>
            ))}
            <div className="h-8 w-px bg-slate-200" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}
              <span className="text-[11px] text-slate-500 ml-1">4.9 / 5</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <DashboardCard />
        </motion.div>
      </div>
    </div>
  )
}
