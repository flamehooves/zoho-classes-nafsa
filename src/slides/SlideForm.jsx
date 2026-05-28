import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Building, User, Mail, Phone, Briefcase, MessageSquare } from 'lucide-react'

const roles = ['International Student Recruiter','Education Consultant','University / Institution','Pathway Provider','Immigration Consultant','International Student','Other']

const benefits = [
  '30-day free trial — no credit card needed',
  'Onboarding support from our team',
  'Custom demo tailored to your workflows',
  'All preparation program templates included',
  'Priority support for NAFSA 2026 attendees',
]

export default function SlideForm() {
  const [form, setForm] = useState({ name:'', org:'', email:'', phone:'', role:'', message:'' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1100)
  }

  return (
    <div className="slide bg-dark-gradient relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-64 bg-zoho-600/15 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-64 bg-accent-500/8 blur-[70px] rounded-full pointer-events-none" />

      <div className="flex-1 flex items-center max-w-6xl mx-auto w-full px-10 lg:px-16 gap-14 relative">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-5"
        >
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 text-zoho-300 text-xs font-bold uppercase tracking-wide bg-white/8 border border-white/15 px-3 py-1 rounded-full">Get Started</span>
            <h2 className="text-3xl xl:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Start preparing students{' '}
              <span className="bg-gradient-to-r from-zoho-300 to-zoho-100 bg-clip-text text-transparent">better, today.</span>
            </h2>
            <p className="text-white/55 text-sm leading-relaxed max-w-sm">
              Join 500+ institutions already using Zoho Classes to deliver structured, organized international student preparation.
            </p>
          </div>
          <ul className="space-y-2.5">
            {benefits.map((b, i) => (
              <motion.li key={i}
                initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="flex items-center gap-3 text-white/75 text-sm"
              >
                <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={11} className="text-green-400" />
                </div>
                {b}
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4"
          >
            <p className="text-white font-bold text-sm flex items-center gap-2"><span>🏅</span>Attending NAFSA 2026?</p>
            <p className="text-white/50 text-xs mt-1 leading-relaxed">Mention "NAFSA 2026" in your message for a dedicated booth meeting + extended trial.</p>
          </motion.div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex-shrink-0 w-[380px] xl:w-[420px]"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-zoho-700 to-zoho-600 px-5 py-4">
              <h3 className="text-white font-bold">Book a Demo or Get in Touch</h3>
              <p className="text-white/65 text-xs mt-0.5">We'll respond within 1 business day.</p>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                  className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3"
                >
                  <CheckCircle size={28} className="text-green-500" />
                </motion.div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">You're all set!</h3>
                <p className="text-slate-500 text-sm">Our team will reach out within 1 business day to schedule your personalized demo.</p>
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3">
                  <p className="text-sm text-amber-700 font-semibold">See you at NAFSA 2026! 🏅</p>
                  <p className="text-xs text-amber-600 mt-0.5">Booth #1726 · Denver, CO · Jun 2–5</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name:'name',  icon:<User size={12}/>,    placeholder:'Your name',           type:'text',  label:'Full Name *' },
                    { name:'org',   icon:<Building size={12}/>, placeholder:'Institution or agency', type:'text', label:'Organization *' },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-[10px] font-semibold text-slate-600 mb-1">{f.label}</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">{f.icon}</span>
                        <input name={f.name} value={form[f.name]} onChange={e=>setForm({...form,[e.target.name]:e.target.value})} required type={f.type} placeholder={f.placeholder}
                          className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zoho-300 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-600 mb-1">Work Email *</label>
                  <div className="relative">
                    <Mail size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="email" name="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required placeholder="you@organization.com"
                      className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zoho-300 transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-600 mb-1">Phone</label>
                    <div className="relative">
                      <Phone size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input type="tel" name="phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+1 (555) 000-0000"
                        className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zoho-300 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-600 mb-1">Your Role *</label>
                    <div className="relative">
                      <Briefcase size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <select name="role" value={form.role} onChange={e=>setForm({...form,role:e.target.value})} required
                        className="w-full pl-8 pr-2 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zoho-300 transition-all bg-white appearance-none">
                        <option value="">Select…</option>
                        {roles.map(r=><option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-600 mb-1">Message</label>
                  <div className="relative">
                    <MessageSquare size={12} className="absolute left-3 top-2.5 text-slate-400" />
                    <textarea name="message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={2} placeholder="Tell us your needs or NAFSA meeting request…"
                      className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zoho-300 transition-all resize-none" />
                  </div>
                </div>
                <button type="submit" disabled={loading}
                  className="w-full btn-primary justify-center py-2.5 text-sm disabled:opacity-60"
                >
                  {loading
                    ? <span className="flex items-center gap-2"><div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"/>Sending…</span>
                    : <><span>Book Your Demo</span><ArrowRight size={14}/></>
                  }
                </button>
                <p className="text-center text-[10px] text-slate-400">No spam. No sales pressure. Just a genuine demo.</p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
