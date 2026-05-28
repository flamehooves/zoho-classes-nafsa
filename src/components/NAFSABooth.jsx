import { motion } from 'framer-motion'
import { MapPin, Calendar, Coffee, Users, ArrowRight, ExternalLink, Star } from 'lucide-react'
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/animations'

const schedule = [
  { day: 'Tuesday', date: 'Jun 2', time: '10am – 6pm', label: 'Exhibition Open', color: 'bg-blue-100 text-blue-700' },
  { day: 'Wednesday', date: 'Jun 3', time: '9am – 5pm', label: 'Demos & Deep Dives', color: 'bg-violet-100 text-violet-700' },
  { day: 'Thursday', date: 'Jun 4', time: '9am – 4pm', label: 'Meet the Team', color: 'bg-teal-100 text-teal-700' },
]

const demos = [
  { icon: '🎓', label: 'Course Builder Walkthrough', duration: '20 min' },
  { icon: '📋', label: 'Student Journey Demo', duration: '15 min' },
  { icon: '💬', label: 'Private Feed & Announcements', duration: '10 min' },
  { icon: '📊', label: 'Recruiter Dashboard Overview', duration: '20 min' },
]

export default function NAFSABooth() {
  return (
    <section className="py-24 relative overflow-hidden" id="nafsa">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-200/20 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-200/20 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                NAFSA 2026 · Denver, Colorado
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Visit us at{' '}
              <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                NAFSA 2026
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-slate-700 leading-relaxed">
              The Zoho Classes team will be at NAFSA 2026 in Denver, CO. Come see a live demo, talk to our product team, and discover how institutions are transforming their international student preparation programs.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-3">
              {[
                { icon: <MapPin size={16} />, text: 'Colorado Convention Center, Denver, CO', sub: 'Booth #1842 — Hall B, Education Technology Row' },
                { icon: <Calendar size={16} />, text: 'June 2–5, 2026', sub: 'Exhibition Hall open all 4 days' },
                { icon: <Coffee size={16} />, text: 'Drop by anytime — no appointment needed', sub: 'Or book a dedicated 30-minute session below' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-3 text-sm"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{item.text}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#lead" className="btn-accent text-base px-7 py-3.5">
                Schedule a Meeting <ArrowRight size={16} />
              </a>
              <a href="#lead" className="btn-outline text-base px-7 py-3.5">
                Get Demo Link
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Conference card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main conference card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-amber-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 px-6 py-6 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-white/5" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-white/80 text-xs font-semibold uppercase tracking-wide">Annual Conference</p>
                      <h3 className="text-white font-extrabold text-2xl">NAFSA 2026</h3>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 text-center">
                      <p className="text-white font-extrabold text-lg leading-none">1842</p>
                      <p className="text-white/70 text-[10px] font-medium">Booth #</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <MapPin size={13} />
                    <span>Denver, Colorado · Jun 2–5, 2026</span>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="px-5 pt-5">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Exhibition Schedule</p>
                <div className="space-y-2">
                  {schedule.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-center w-10 flex-shrink-0">
                        <p className="text-[9px] text-slate-400 font-semibold uppercase">{s.day.slice(0, 3)}</p>
                        <p className="text-slate-800 font-extrabold text-sm">{s.date.split(' ')[1]}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-slate-800">{s.label}</p>
                        <p className="text-[11px] text-slate-500">{s.time}</p>
                      </div>
                      <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${s.color}`}>{s.day.slice(0, 3)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo sessions */}
              <div className="px-5 pt-4 pb-5">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">What You'll See</p>
                <div className="grid grid-cols-2 gap-2">
                  {demos.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50 border border-amber-100">
                      <span className="text-sm">{d.icon}</span>
                      <div>
                        <p className="text-[11px] font-semibold text-slate-800 leading-tight">{d.label}</p>
                        <p className="text-[10px] text-slate-400">{d.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a href="#lead" className="mt-4 w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm py-3 rounded-xl transition-colors">
                  Book Your Slot at NAFSA 2026 <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
