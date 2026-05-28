import { motion } from 'framer-motion'
import { ArrowRight, Play, MapPin, Users, BookOpen, CheckCircle, Bell, Video, FileText, Star } from 'lucide-react'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from '../utils/animations'

const cityDots = [
  { cx: 22, cy: 34, label: 'Canada' },
  { cx: 18, cy: 44, label: 'USA' },
  { cx: 26, cy: 58, label: 'Brazil' },
  { cx: 45, cy: 32, label: 'UK' },
  { cx: 50, cy: 38, label: 'Germany' },
  { cx: 55, cy: 44, label: 'UAE' },
  { cx: 68, cy: 36, label: 'India' },
  { cx: 76, cy: 40, label: 'China' },
  { cx: 82, cy: 50, label: 'Australia' },
  { cx: 72, cy: 28, label: 'Korea' },
]

function GlobeViz() {
  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto">
      {/* Glow rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zoho-100 to-zoho-50 animate-pulse2 opacity-60" />
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-zoho-200/40 to-transparent" />

      <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 globe-glow">
        {/* Globe circle */}
        <defs>
          <radialGradient id="globeGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#3D5EFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1B5FD6" stopOpacity="0.08" />
          </radialGradient>
          <radialGradient id="globeGrad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EEF4FF" />
            <stop offset="100%" stopColor="#D9E6FF" />
          </radialGradient>
        </defs>

        <circle cx="50" cy="50" r="48" fill="url(#globeGrad2)" stroke="#BCCFFF" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="48" fill="url(#globeGrad)" />

        {/* Latitude lines */}
        {[20, 30, 40, 50, 60, 70, 80].map((y) => (
          <line key={y} x1="2" y1={y} x2="98" y2={y} stroke="#1B5FD6" strokeWidth="0.3" strokeOpacity="0.15" />
        ))}
        {/* Longitude lines */}
        {[20, 30, 40, 50, 60, 70, 80].map((x) => (
          <line key={x} x1={x} y1="2" x2={x} y2="98" stroke="#1B5FD6" strokeWidth="0.3" strokeOpacity="0.15" />
        ))}

        {/* Connection lines */}
        {cityDots.slice(0, 6).map((dot, i) => {
          const next = cityDots[(i + 3) % cityDots.length]
          return (
            <line
              key={i}
              x1={dot.cx} y1={dot.cy}
              x2={next.cx} y2={next.cy}
              stroke="#1B5FD6" strokeWidth="0.4" strokeOpacity="0.25"
              strokeDasharray="1.5 1.5"
            />
          )
        })}

        {/* City dots */}
        {cityDots.map((dot, i) => (
          <g key={i}>
            <circle cx={dot.cx} cy={dot.cy} r="2.2" fill="#1B5FD6" fillOpacity="0.2" />
            <circle
              cx={dot.cx} cy={dot.cy} r="1.2"
              fill="#1B5FD6"
              style={{ animation: `pulse2 ${2.5 + i * 0.3}s ease-in-out infinite` }}
            />
          </g>
        ))}
      </svg>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-2 -right-4 bg-white rounded-2xl shadow-card border border-slate-100 px-3 py-2 flex items-center gap-2"
      >
        <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center">
          <CheckCircle size={14} className="text-green-600" />
        </div>
        <div>
          <p className="text-[10px] text-slate-500 font-medium">Student Ready</p>
          <p className="text-xs font-bold text-slate-800">Visa Approved ✓</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-2 -left-6 bg-white rounded-2xl shadow-card border border-slate-100 px-3 py-2 flex items-center gap-2"
      >
        <div className="w-7 h-7 rounded-lg bg-zoho-100 flex items-center justify-center">
          <Users size={14} className="text-zoho-700" />
        </div>
        <div>
          <p className="text-[10px] text-slate-500 font-medium">Active Students</p>
          <p className="text-xs font-bold text-slate-800">12,400+ enrolled</p>
        </div>
      </motion.div>
    </div>
  )
}

function DashboardPreview() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Main dashboard card */}
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Top bar */}
        <div className="bg-gradient-to-r from-zoho-800 to-zoho-600 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <span className="text-white text-xs font-medium opacity-80">Zoho Classes Dashboard</span>
          <div className="w-4 h-4 rounded-full bg-white/20" />
        </div>

        <div className="p-5 space-y-4">
          {/* Greeting */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500">Welcome back,</p>
              <p className="font-bold text-slate-800">Sarah Chen 👋</p>
            </div>
            <div className="bg-zoho-50 rounded-xl px-3 py-1.5">
              <p className="text-xs text-zoho-700 font-semibold">Pre-Departure Phase</p>
            </div>
          </div>

          {/* Progress bar */}
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-600 font-medium">Overall Preparation</span>
              <span className="text-zoho-700 font-bold">78%</span>
            </div>
            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '78%' }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-zoho-600 to-zoho-400 rounded-full"
              />
            </div>
          </div>

          {/* Course tiles */}
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { icon: <FileText size={13} />, label: 'Visa Prep 101', progress: 90, color: 'bg-blue-50 text-blue-600' },
              { icon: <BookOpen size={13} />, label: 'SOP Workshop', progress: 65, color: 'bg-violet-50 text-violet-600' },
              { icon: <Star size={13} />, label: 'English Ready', progress: 80, color: 'bg-amber-50 text-amber-600' },
              { icon: <MapPin size={13} />, label: 'Pre-Departure', progress: 45, color: 'bg-teal-50 text-teal-600' },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-slate-50 rounded-xl p-3 border border-slate-100 hover:border-zoho-200 transition-colors"
              >
                <div className={`w-7 h-7 rounded-lg ${c.color} flex items-center justify-center mb-2`}>
                  {c.icon}
                </div>
                <p className="text-xs font-semibold text-slate-800 leading-tight mb-1.5">{c.label}</p>
                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-zoho-500 rounded-full" style={{ width: `${c.progress}%` }} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Latest notification */}
          <div className="bg-zoho-50 border border-zoho-100 rounded-xl p-3 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-zoho-100 flex items-center justify-center flex-shrink-0">
              <Bell size={13} className="text-zoho-700" />
            </div>
            <div>
              <p className="text-xs font-semibold text-zoho-800">Embassy Interview Prep</p>
              <p className="text-[11px] text-zoho-600 mt-0.5">Virtual session link shared · Tomorrow 2PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating VC badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -right-8 top-16 bg-white rounded-2xl shadow-card border border-slate-100 p-3 flex items-center gap-2.5"
      >
        <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center">
          <Video size={15} className="text-blue-600" />
        </div>
        <div>
          <p className="text-[10px] text-slate-500">Zoom link shared</p>
          <p className="text-xs font-bold text-slate-800">24 students joined</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden flex items-center pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-zoho-100/60 to-zoho-50/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent-100/40 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] rounded-full bg-zoho-50/30 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            {/* NAFSA badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide shadow-sm">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                Showcasing at NAFSA 2026 · Denver, CO
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl lg:text-6xl xl:text-[68px] font-extrabold text-slate-900 leading-[1.05] tracking-tight">
                Prepare Every{' '}
                <span className="gradient-text">Student</span>
                <br />
                for a World of{' '}
                <span className="relative">
                  <span className="gradient-text">Possibilities.</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#1B5FD6" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4" />
                  </svg>
                </span>
              </h1>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg xl:text-xl text-slate-600 leading-relaxed max-w-xl">
              The all-in-one learning and engagement platform for international student recruiters. Deliver structured courses, share visa guidance, host virtual orientations, and track every student's preparation journey — beautifully organized.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
              <a href="#lead" className="btn-primary text-base px-7 py-3.5">
                Book a Free Demo <ArrowRight size={16} />
              </a>
              <a href="#nafsa" className="btn-outline text-base px-7 py-3.5">
                Meet Us at NAFSA
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 pt-2">
              {[
                { n: '500+', l: 'Institutions' },
                { n: '50K+', l: 'Students' },
                { n: '80+', l: 'Countries' },
              ].map((s) => (
                <div key={s.l} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-zoho-700">{s.n}</span>
                  <span className="text-xs text-slate-500 font-medium">{s.l}</span>
                </div>
              ))}
              <div className="h-10 w-px bg-slate-200" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs text-slate-600 ml-1 font-medium">4.9 / 5 rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-5 gap-6 items-center">
              <div className="col-span-2 hidden lg:block">
                <GlobeViz />
              </div>
              <div className="col-span-5 lg:col-span-3">
                <DashboardPreview />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
