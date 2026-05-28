import { motion } from 'framer-motion'
import { Video, Link2, Lock, Users, Calendar, CheckCircle, ExternalLink } from 'lucide-react'

const platforms = [
  { name: 'Zoom',            emoji: '📹', c: 'bg-blue-500',   desc: 'Paste any Zoom link into a course, feed, or announcement.' },
  { name: 'Google Meet',     emoji: '🎯', c: 'bg-green-500',  desc: 'Share Meet links for quick visa counseling sessions.' },
  { name: 'Microsoft Teams', emoji: '💼', c: 'bg-violet-500', desc: 'Perfect for university-managed Teams environments.' },
  { name: 'Webex',           emoji: '🔵', c: 'bg-teal-500',   desc: 'Share institutional Webex links with enrolled groups.' },
  { name: 'Any Webinar Tool',emoji: '🌐', c: 'bg-orange-500', desc: 'Works with GoToWebinar, BigMarker, StreamYard — any link.' },
]

export default function SlideVC() {
  return (
    <div className="slide bg-slate-50">
      <div className="flex-1 flex items-center max-w-7xl mx-auto w-full px-10 lg:px-16 gap-12">
        {/* Left: mockup */}
        <motion.div
          initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-[320px] xl:w-[360px] relative"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-zoho-800 to-zoho-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2"><Video size={13} className="text-white" /><span className="text-white font-semibold text-xs">Virtual Session Sharing</span></div>
              <span className="bg-green-400/20 text-green-300 text-[9px] font-bold px-2 py-0.5 rounded-full border border-green-400/30">Enrolled Only</span>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Share a Virtual Session</p>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2">
                <Link2 size={11} className="text-slate-400 flex-shrink-0" />
                <span className="text-[10px] text-slate-400 flex-1 truncate">https://zoom.us/j/98765432100...</span>
                <span className="text-[9px] bg-green-100 text-green-600 font-bold px-1.5 py-0.5 rounded-full">Valid</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Session', value: 'Embassy Interview Prep', icon: <Video size={10}/> },
                  { label: 'Time',    value: 'Thu, May 29 · 2:00 PM',  icon: <Calendar size={10}/> },
                  { label: 'Access',  value: 'Enrolled Only',           icon: <Lock size={10}/> },
                  { label: 'Cohort',  value: 'Fall 2026 — Canada',      icon: <Users size={10}/> },
                ].map((o, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-2.5 border border-slate-100">
                    <div className="flex items-center gap-1 mb-0.5 text-slate-400">{o.icon}<span className="text-[9px] font-medium">{o.label}</span></div>
                    <p className="text-[10px] text-slate-800 font-semibold leading-tight">{o.value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0"><Video size={15} className="text-violet-600" /></div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-violet-900">Embassy Interview Prep</p>
                    <p className="text-[10px] text-violet-600 mt-0.5">Thu, May 29 · 2:00 PM · 48 students notified</p>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <div className="flex -space-x-1">
                        {['bg-blue-400','bg-green-400','bg-amber-400','bg-pink-400'].map((c,i) => (
                          <div key={i} className={`w-4 h-4 rounded-full ${c} border-2 border-white`}/>
                        ))}
                      </div>
                      <span className="text-[9px] text-violet-600">+44 more</span>
                      <ExternalLink size={9} className="text-violet-400 ml-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-zoho-700 text-white font-semibold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:bg-zoho-800 transition-colors">
                <CheckCircle size={12} /> Share with Cohort
              </button>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -7, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-3 -right-5 bg-white rounded-xl shadow-card border border-slate-100 p-3 max-w-[170px]"
          >
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-slate-800">Session Live!</span>
            </div>
            <p className="text-[10px] text-slate-500">36 students joined the Zoom session</p>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex-1 space-y-5"
        >
          <div className="space-y-2">
            <span className="slide-label">Virtual Sessions</span>
            <h2 className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Share VC links without{' '}
              <span className="gradient-text">complex integrations</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-sm">
              Paste any Zoom, Meet, or Teams link into a course or feed. It's instantly available only to enrolled students — no setup, no friction.
            </p>
          </div>
          <div className="space-y-2">
            {platforms.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-card transition-all group"
              >
                <div className={`w-10 h-10 rounded-xl ${p.c} flex items-center justify-center text-base flex-shrink-0`}>{p.emoji}</div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-800 group-hover:text-zoho-700 transition-colors">{p.name}</p>
                  <p className="text-xs text-slate-500">{p.desc}</p>
                </div>
                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            className="bg-zoho-50 border border-zoho-100 rounded-xl p-3.5"
          >
            <p className="text-xs font-bold text-zoho-800">🔒 Private & Secure by Design</p>
            <p className="text-[10px] text-zoho-700 mt-1 leading-relaxed">VC links are never public. Only enrolled students can see and access them.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
