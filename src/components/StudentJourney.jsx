import { motion } from 'framer-motion'
import { Search, UserPlus, Shield, FileText, Plane, GraduationCap, CheckCircle } from 'lucide-react'
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/animations'

const steps = [
  {
    icon: <Search size={20} />,
    phase: 'Phase 1',
    title: 'Discovery & Inquiry',
    desc: 'Student expresses interest. Recruiter adds them to Zoho Classes and assigns the onboarding program.',
    tags: ['Initial Consultation', 'Program Match', 'Cohort Assignment'],
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50 text-blue-700',
    done: true,
  },
  {
    icon: <UserPlus size={20} />,
    phase: 'Phase 2',
    title: 'Enrollment & Orientation',
    desc: 'Student receives platform access. Welcome modules, platform walkthrough, and first announcements are shared.',
    tags: ['Platform Access', 'Welcome Module', 'Intro Session'],
    color: 'bg-violet-500',
    lightColor: 'bg-violet-50 text-violet-700',
    done: true,
  },
  {
    icon: <Shield size={20} />,
    phase: 'Phase 3',
    title: 'Visa & Compliance Prep',
    desc: 'Students complete visa modules, submit documents, attend virtual counseling sessions, and pass compliance quizzes.',
    tags: ['Visa Modules', 'VC Sessions', 'Document Submissions'],
    color: 'bg-pink-500',
    lightColor: 'bg-pink-50 text-pink-700',
    done: true,
  },
  {
    icon: <FileText size={20} />,
    phase: 'Phase 4',
    title: 'Document Preparation',
    desc: 'SOP guidance, financial proof templates, and institution-specific requirements are all organized in one place.',
    tags: ['SOP Workshop', 'Financial Docs', 'Transcript Guidance'],
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50 text-amber-700',
    done: false,
    active: true,
  },
  {
    icon: <Plane size={20} />,
    phase: 'Phase 5',
    title: 'Pre-Departure Readiness',
    desc: 'Cultural orientation, accommodation prep, packing lists, travel arrangements, and arrival plans are completed.',
    tags: ['Cultural Prep', 'Arrival Plan', 'Travel Readiness'],
    color: 'bg-teal-500',
    lightColor: 'bg-teal-50 text-teal-700',
    done: false,
  },
  {
    icon: <GraduationCap size={20} />,
    phase: 'Phase 6',
    title: 'Arrival & First Week',
    desc: 'Student arrives fully prepared. Post-arrival resources, local support contacts, and campus guides are waiting.',
    tags: ['Campus Guide', 'Local Support', 'Post-Arrival Check-in'],
    color: 'bg-green-500',
    lightColor: 'bg-green-50 text-green-700',
    done: false,
  },
]

export default function StudentJourney() {
  return (
    <section className="section-pad bg-slate-50" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="section-label">Student Journey</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="mt-4 text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            From first inquiry to{' '}
            <span className="gradient-text">first day on campus</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-600">
            Zoho Classes structures the entire student preparation journey into clear, trackable phases — so nothing gets missed.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(50%-300px)] right-[calc(50%-300px)] h-0.5 bg-gradient-to-r from-blue-300 via-violet-300 to-green-300" style={{ left: '8.33%', right: '8.33%' }} />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`relative bg-white rounded-2xl border p-6 shadow-sm transition-all duration-200 ${
                  step.active
                    ? 'border-amber-300 ring-2 ring-amber-200 shadow-md'
                    : step.done
                    ? 'border-green-200'
                    : 'border-slate-100'
                }`}
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <span className="text-white">{step.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">{step.phase}</p>
                    <p className="font-bold text-slate-900 text-sm leading-tight">{step.title}</p>
                  </div>
                  {step.done && (
                    <CheckCircle size={18} className="text-green-500 ml-auto flex-shrink-0" />
                  )}
                  {step.active && (
                    <span className="ml-auto flex-shrink-0 bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200">
                      In Progress
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">{step.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {step.tags.map((tag, j) => (
                    <span key={j} className={`text-[10px] font-semibold px-2 py-1 rounded-lg ${step.lightColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-slate-500 mt-10"
        >
          Every phase includes structured courses, assignments, virtual session links, and progress tracking — automatically.
        </motion.p>
      </div>
    </section>
  )
}
