import { motion } from 'framer-motion'
import { Search, UserPlus, Shield, FileText, Plane, GraduationCap, CheckCircle } from 'lucide-react'

const steps = [
  { icon: <Search size={22} />,        phase: '01', title: 'Discovery',         color: 'bg-blue-500',    light: 'bg-blue-50 text-blue-700 border-blue-200',      tags: ['Initial Consult', 'Program Match'],    done: true },
  { icon: <UserPlus size={22} />,      phase: '02', title: 'Enrollment',        color: 'bg-violet-500',  light: 'bg-violet-50 text-violet-700 border-violet-200', tags: ['Platform Access', 'Welcome Module'],    done: true },
  { icon: <Shield size={22} />,        phase: '03', title: 'Visa & Compliance', color: 'bg-pink-500',    light: 'bg-pink-50 text-pink-700 border-pink-200',       tags: ['Visa Modules', 'VC Sessions'],          done: true },
  { icon: <FileText size={22} />,      phase: '04', title: 'Documentation',     color: 'bg-amber-500',   light: 'bg-amber-50 text-amber-700 border-amber-200',    tags: ['SOP Workshop', 'Financial Docs'],       active: true },
  { icon: <Plane size={22} />,         phase: '05', title: 'Pre-Departure',     color: 'bg-teal-500',    light: 'bg-teal-50 text-teal-700 border-teal-200',       tags: ['Orientation', 'Travel Readiness'],      done: false },
  { icon: <GraduationCap size={22} />, phase: '06', title: 'Arrival & Beyond',  color: 'bg-green-500',   light: 'bg-green-50 text-green-700 border-green-200',    tags: ['Campus Guide', 'Post-Arrival'],         done: false },
]

export default function SlideJourney() {
  return (
    <div className="slide bg-slate-50">
      <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-10 lg:px-16 py-5 gap-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2 flex-shrink-0"
        >
          <span className="slide-label">Student Journey</span>
          <h2 className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight">
            From first inquiry to{' '}
            <span className="gradient-text">first day on campus</span>
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto">
            Zoho Classes structures the entire preparation journey into clear, trackable phases — so nothing gets missed.
          </p>
        </motion.div>

        {/* Phase cards — fill remaining height */}
        <div className="relative flex-1 min-h-0">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[56px] left-[calc(8.33%+28px)] right-[calc(8.33%+28px)] h-0.5 bg-gradient-to-r from-blue-200 via-pink-200 to-green-200 z-0" />

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 h-full">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.09, duration: 0.45 }}
                className={`relative bg-white rounded-2xl border p-5 shadow-sm flex flex-col ${
                  step.active ? 'border-amber-300 ring-2 ring-amber-100' : step.done ? 'border-green-200' : 'border-slate-100'
                }`}
              >
                {/* Icon row */}
                <div className="flex items-center gap-2 mb-4 flex-shrink-0 relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center shadow-sm flex-shrink-0`}>
                    <span className="text-white">{step.icon}</span>
                  </div>
                  {step.done && <CheckCircle size={16} className="text-green-500 ml-auto" />}
                  {step.active && (
                    <span className="ml-auto bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full border border-amber-200">Now</span>
                  )}
                </div>

                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wide">Phase {step.phase}</p>
                <p className="text-base font-bold text-slate-900 mt-1 mb-3 leading-tight">{step.title}</p>

                <div className="flex flex-col gap-2 flex-1">
                  {step.tags.map((tag, j) => (
                    <span key={j} className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border text-center ${step.light}`}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Overall progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="bg-white rounded-2xl border border-slate-200 px-6 py-4 shadow-sm flex-shrink-0"
        >
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-sm font-bold text-slate-700">Sarah Chen — Overall Preparation Progress</p>
            <span className="text-zoho-700 font-extrabold text-lg">58%</span>
          </div>
          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }} animate={{ width: '58%' }}
              transition={{ delay: 0.85, duration: 1.2, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-amber-400"
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-400">
            {steps.map(s => <span key={s.phase}>{s.title}</span>)}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
