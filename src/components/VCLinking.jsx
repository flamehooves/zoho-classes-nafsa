import { motion } from 'framer-motion'
import { Video, Link2, Lock, Users, Calendar, CheckCircle, ExternalLink } from 'lucide-react'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from '../utils/animations'

const platforms = [
  { name: 'Zoom', color: 'bg-blue-500', icon: '📹', desc: 'Paste any Zoom link into a course, feed, or announcement.' },
  { name: 'Google Meet', color: 'bg-green-500', icon: '🎯', desc: 'Share Meet links for quick visa counseling sessions.' },
  { name: 'Microsoft Teams', color: 'bg-violet-500', icon: '💼', desc: 'Perfect for university-managed Teams environments.' },
  { name: 'Webex', color: 'bg-teal-500', icon: '🔵', desc: 'Share institutional Webex links with enrolled groups.' },
  { name: 'Any Webinar Tool', color: 'bg-orange-500', icon: '🌐', desc: 'Works with GoToWebinar, BigMarker, StreamYard — any link.' },
]

export default function VCLinking() {
  return (
    <section className="section-pad bg-slate-50" id="vc">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: VC mockup */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            {/* Main card */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              {/* Header bar */}
              <div className="bg-gradient-to-r from-zoho-800 to-zoho-600 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Video size={16} className="text-white" />
                  <span className="text-white font-semibold text-sm">Virtual Session Sharing</span>
                </div>
                <span className="bg-green-400/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full border border-green-400/30">
                  Enrolled Only
                </span>
              </div>

              <div className="p-5 space-y-4">
                {/* Session creation flow */}
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Share a Virtual Session</p>

                {/* Link input */}
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5">
                  <Link2 size={14} className="text-slate-400 flex-shrink-0" />
                  <span className="text-sm text-slate-500 flex-1 truncate">https://zoom.us/j/98765432100...</span>
                  <span className="text-[10px] bg-green-100 text-green-600 font-bold px-2 py-0.5 rounded-full">Valid</span>
                </div>

                {/* Options row */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Session Title', value: 'Embassy Interview Prep', icon: <Video size={12} /> },
                    { label: 'Date & Time', value: 'Thu, May 29 · 2:00 PM', icon: <Calendar size={12} /> },
                    { label: 'Access', value: 'Enrolled Students Only', icon: <Lock size={12} /> },
                    { label: 'Cohort', value: 'Fall 2026 — Canada', icon: <Users size={12} /> },
                  ].map((opt, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-slate-400">{opt.icon}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{opt.label}</span>
                      </div>
                      <p className="text-xs text-slate-800 font-semibold">{opt.value}</p>
                    </div>
                  ))}
                </div>

                {/* Shared preview */}
                <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                      <Video size={18} className="text-violet-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-violet-900">Embassy Interview Prep</p>
                      <p className="text-xs text-violet-600 mt-0.5">Thu, May 29 · 2:00 PM · 48 students notified</p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex -space-x-1.5">
                          {['bg-blue-400','bg-green-400','bg-amber-400','bg-pink-400'].map((c,i) => (
                            <div key={i} className={`w-5 h-5 rounded-full ${c} border-2 border-white`} />
                          ))}
                        </div>
                        <span className="text-[11px] text-violet-600 font-medium">+44 more students</span>
                        <ExternalLink size={11} className="text-violet-400 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-zoho-700 hover:bg-zoho-800 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <CheckCircle size={14} />
                  Share with Cohort
                </button>
              </div>
            </div>

            {/* Floating notification */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-6 bg-white rounded-2xl shadow-card border border-slate-100 p-3.5 max-w-[190px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-slate-800">Session Live!</span>
              </div>
              <p className="text-[11px] text-slate-500">36 students joined the Zoom session</p>
            </motion.div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="section-label">Virtual Sessions</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Share VC links without{' '}
              <span className="gradient-text">complex integrations</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              Zoho Classes isn't a video conferencing tool — it's smarter. Paste any Zoom, Meet, or Teams link into a course or feed, and it's instantly available only to enrolled students. No integrations. No friction.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-3">
              {platforms.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-3.5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-card transition-all duration-200 group"
                >
                  <div className={`w-9 h-9 rounded-xl ${p.color} flex items-center justify-center text-sm flex-shrink-0`}>
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800 group-hover:text-zoho-700 transition-colors">{p.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{p.desc}</p>
                  </div>
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-zoho-50 border border-zoho-100 rounded-2xl p-5">
              <p className="text-sm font-bold text-zoho-900 mb-1">Private & Secure by Design</p>
              <p className="text-xs text-zoho-700 leading-relaxed">
                VC links are never public. Only students enrolled in the specific course or cohort can see and access them — keeping your sessions private and your students protected.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
