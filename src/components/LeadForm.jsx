import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Building, User, Mail, Phone, Briefcase, MessageSquare } from 'lucide-react'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from '../utils/animations'

const roles = [
  'International Student Recruiter',
  'Education Consultant',
  'University / Institution',
  'Pathway Provider',
  'Immigration Consultant',
  'International Student',
  'Other',
]

const benefits = [
  'Free 30-day trial — no credit card required',
  'Onboarding support from our team',
  'Custom demo tailored to your workflows',
  'Access to all preparation program templates',
  'Priority support for NAFSA attendees',
]

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', role: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section className="section-pad bg-dark-gradient relative overflow-hidden" id="lead">
      {/* Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-zoho-600/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-accent-500/10 blur-[80px] rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Benefits */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-7 lg:pt-4"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 text-zoho-300 font-semibold text-sm tracking-wide uppercase bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
                Get Started
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Start preparing students{' '}
              <span className="bg-gradient-to-r from-zoho-300 to-zoho-100 bg-clip-text text-transparent">
                better, today.
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-white/70 leading-relaxed">
              Join 500+ institutions already using Zoho Classes to deliver structured, organized, and effective international student preparation programs.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-3">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-3 text-white/80 text-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={13} className="text-green-400" />
                  </div>
                  {b}
                </motion.li>
              ))}
            </motion.ul>

            {/* NAFSA callout */}
            <motion.div
              variants={fadeInUp}
              className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-400 text-lg">🏅</span>
                <p className="text-white font-bold text-sm">Attending NAFSA 2026?</p>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                Mention "NAFSA 2026" in your message and get a dedicated booth meeting slot + extended trial for your institution.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Form header */}
              <div className="bg-gradient-to-r from-zoho-700 to-zoho-600 px-6 py-5">
                <h3 className="text-white font-bold text-lg">Book a Demo or Get in Touch</h3>
                <p className="text-white/70 text-sm mt-1">We'll get back to you within 1 business day.</p>
              </div>

              {submitted ? (
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                    className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle size={32} className="text-green-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">You're all set!</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Thanks for reaching out. Our team will contact you within 1 business day to schedule your personalized demo.
                  </p>
                  <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-sm text-amber-700 font-semibold">See you at NAFSA 2026! 🏅</p>
                    <p className="text-xs text-amber-600 mt-1">Booth #1842 · Hall B · Denver, CO · Jun 2–5</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                      <div className="relative">
                        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zoho-300 focus:border-zoho-400 transition-all"
                        />
                      </div>
                    </div>

                    {/* Org */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Organization *</label>
                      <div className="relative">
                        <Building size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          name="org"
                          value={form.org}
                          onChange={handleChange}
                          required
                          placeholder="Institution or agency"
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zoho-300 focus:border-zoho-400 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Work Email *</label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@organization.com"
                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zoho-300 focus:border-zoho-400 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone</label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zoho-300 focus:border-zoho-400 transition-all"
                        />
                      </div>
                    </div>

                    {/* Role */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Role *</label>
                      <div className="relative">
                        <Briefcase size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        <select
                          name="role"
                          value={form.role}
                          onChange={handleChange}
                          required
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zoho-300 focus:border-zoho-400 transition-all bg-white appearance-none"
                        >
                          <option value="">Select role...</option>
                          {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Message</label>
                    <div className="relative">
                      <MessageSquare size={14} className="absolute left-3 top-3 text-slate-400" />
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your student preparation needs or NAFSA meeting request..."
                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zoho-300 focus:border-zoho-400 transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary justify-center py-3.5 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>Book Your Demo <ArrowRight size={16} /></>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    No spam. No sales pressure. Just a genuine demo.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
