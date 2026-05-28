import { motion } from 'framer-motion'
import { MapPin, Calendar, Coffee, ArrowRight } from 'lucide-react'

const schedule = [
  { day: 'Tue', date: '2', label: 'Exhibition Open',     time: '10am – 6pm', c: 'bg-blue-100 text-blue-700' },
  { day: 'Wed', date: '3', label: 'Demos & Deep Dives',  time: '9am – 5pm',  c: 'bg-violet-100 text-violet-700' },
  { day: 'Thu', date: '4', label: 'Meet the Team',        time: '9am – 4pm',  c: 'bg-teal-100 text-teal-700' },
  { day: 'Fri', date: '5', label: 'Final Day',            time: '9am – 2pm',  c: 'bg-amber-100 text-amber-700' },
]

const demos = [
  { emoji: '🎓', label: 'Course Builder',           dur: '20 min' },
  { emoji: '📋', label: 'Student Journey Demo',     dur: '15 min' },
  { emoji: '💬', label: 'Private Feed & Feed',       dur: '10 min' },
  { emoji: '📊', label: 'Recruiter Dashboard',       dur: '20 min' },
]

export default function SlideNAFSA() {
  return (
    <div className="slide relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-200/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-orange-200/20 blur-[80px] pointer-events-none" />

      <div className="flex-1 flex items-center max-w-7xl mx-auto w-full px-10 lg:px-16 gap-12 relative">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-5"
        >
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-800 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              NAFSA 2026 · Denver, Colorado
            </span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Visit us at{' '}
            <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">NAFSA 2026</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-700 text-base leading-relaxed max-w-md"
          >
            The Zoho Classes team is in Denver. Come see a live demo, talk to our product team, and discover how institutions are transforming student preparation.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-3">
            {[
              { icon: <MapPin size={15}/>, t: 'Colorado Convention Center — Booth #1726', s: 'Hall B, Education Technology Row' },
              { icon: <Calendar size={15}/>, t: 'June 2–5, 2026', s: 'Exhibition Hall open all 4 days' },
              { icon: <Coffee size={15}/>, t: 'Drop by anytime — no appointment needed', s: 'Or book a dedicated 30-minute slot below' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">{item.icon}</div>
                <div><p className="font-semibold text-slate-800 text-sm">{item.t}</p><p className="text-slate-500 text-xs">{item.s}</p></div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex gap-3">
            <a href="#" className="btn-accent"><span>Schedule a Meeting</span><ArrowRight size={15}/></a>
            <a href="#" className="btn-outline">Book Demo Link</a>
          </motion.div>
        </motion.div>

        {/* Right: Conference card */}
        <motion.div
          initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-[300px] xl:w-[340px]"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden">
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 px-5 py-5 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <div><p className="text-white/70 text-[10px] font-semibold uppercase tracking-wide">Annual Conference</p><h3 className="text-white font-extrabold text-2xl">NAFSA 2026</h3></div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 text-center">
                    <p className="text-white font-extrabold text-xl leading-none">1726</p>
                    <p className="text-white/60 text-[9px] font-medium">Booth #</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-white/80 text-xs"><MapPin size={11}/><span>Denver, CO · Jun 2–5, 2026</span></div>
              </div>
            </div>
            <div className="px-4 pt-4 pb-2">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide mb-2.5">Exhibition Schedule</p>
              <div className="grid grid-cols-2 gap-2">
                {schedule.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-center w-8 flex-shrink-0"><p className="text-[8px] text-slate-400 font-semibold">{s.day}</p><p className="text-slate-800 font-extrabold text-sm">{s.date}</p></div>
                    <div><p className="text-[10px] font-bold text-slate-800 leading-tight">{s.label}</p><p className="text-[9px] text-slate-400">{s.time}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-4 pb-4">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide mb-2 mt-3">What You'll See</p>
              <div className="grid grid-cols-2 gap-1.5">
                {demos.map((d, i) => (
                  <div key={i} className="flex items-center gap-1.5 p-2 rounded-lg bg-amber-50 border border-amber-100">
                    <span className="text-xs">{d.emoji}</span>
                    <div><p className="text-[9px] font-semibold text-slate-800 leading-tight">{d.label}</p><p className="text-[8px] text-slate-400">{d.dur}</p></div>
                  </div>
                ))}
              </div>
              <a href="#" className="mt-3 w-full flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs py-2.5 rounded-xl transition-colors">
                Book Your Slot <ArrowRight size={13}/>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
