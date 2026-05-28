import { motion } from 'framer-motion'
import { BookOpen, Users, Clock, Star, ChevronRight, FileText, Video, CheckSquare, Play } from 'lucide-react'
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/animations'

const courses = [
  {
    gradient: 'from-blue-600 to-blue-500',
    badge: 'Most Popular',
    badgeColor: 'bg-white/20 text-white',
    icon: <FileText size={28} className="text-white" />,
    title: 'Visa Preparation Masterclass',
    desc: 'End-to-end guide covering DS-160/CAS, financial documentation, embassy appointments, and visa interview prep.',
    modules: [
      { icon: <FileText size={12} />, label: 'Visa Categories & Eligibility' },
      { icon: <CheckSquare size={12} />, label: 'Document Checklist Builder' },
      { icon: <Video size={12} />, label: 'Embassy Interview Simulation' },
      { icon: <Play size={12} />, label: 'Mock Interview Sessions' },
    ],
    students: 3840,
    hours: 12,
    rating: 4.9,
    progress: 78,
    modules_count: 8,
  },
  {
    gradient: 'from-violet-600 to-violet-500',
    badge: 'New',
    badgeColor: 'bg-violet-200/30 text-violet-100',
    icon: <BookOpen size={28} className="text-white" />,
    title: 'Pre-Departure Essentials',
    desc: 'Everything a student needs to know before flying — housing, banking, healthcare, campus navigation, and cultural readiness.',
    modules: [
      { icon: <CheckSquare size={12} />, label: 'Pre-Departure Checklist' },
      { icon: <FileText size={12} />, label: 'Accommodation & Banking' },
      { icon: <Video size={12} />, label: 'Culture & Social Life' },
      { icon: <Play size={12} />, label: 'Arrival Day Walkthrough' },
    ],
    students: 2210,
    hours: 8,
    rating: 4.8,
    progress: 55,
    modules_count: 6,
  },
  {
    gradient: 'from-teal-600 to-teal-500',
    badge: 'High Impact',
    badgeColor: 'bg-teal-200/30 text-teal-100',
    icon: <Star size={28} className="text-white" />,
    title: 'English Readiness Program',
    desc: 'Structured IELTS/TOEFL preparation with practice tests, vocabulary modules, writing feedback, and speaking confidence sessions.',
    modules: [
      { icon: <FileText size={12} />, label: 'Listening & Reading Skills' },
      { icon: <CheckSquare size={12} />, label: 'Academic Writing Workshop' },
      { icon: <Video size={12} />, label: 'Speaking Practice Sessions' },
      { icon: <Play size={12} />, label: 'Full Mock Exam' },
    ],
    students: 1870,
    hours: 20,
    rating: 4.9,
    progress: 40,
    modules_count: 10,
  },
]

function CourseCard({ course, index }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="card-base overflow-hidden flex flex-col"
    >
      {/* Course header */}
      <div className={`bg-gradient-to-br ${course.gradient} p-6 relative overflow-hidden`}>
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-6 -left-4 w-24 h-24 rounded-full bg-white/5" />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              {course.icon}
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${course.badgeColor}`}>
              {course.badge}
            </span>
          </div>
          <h3 className="text-white font-bold text-lg leading-tight">{course.title}</h3>
          <p className="text-white/70 text-sm mt-2 leading-relaxed line-clamp-2">{course.desc}</p>
        </div>
      </div>

      {/* Course body */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Modules list */}
        <div className="space-y-2 mb-5">
          {course.modules.map((m, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
              <div className="w-5 h-5 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-500">
                {m.icon}
              </div>
              {m.label}
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-4 text-xs text-slate-500 border-t border-slate-100 pt-4 mb-4">
          <div className="flex items-center gap-1">
            <Users size={12} />
            <span>{course.students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{course.hours}h content</span>
          </div>
          <div className="flex items-center gap-1 ml-auto">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            <span className="font-semibold text-slate-700">{course.rating}</span>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-auto">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-slate-500">{course.modules_count} modules</span>
            <span className="font-semibold text-zoho-700">{course.progress}% enrolled</span>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${course.progress}%` }}
              viewport={viewportConfig}
              transition={{ delay: 0.3 + index * 0.1, duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-zoho-600 to-zoho-400 rounded-full"
            />
          </div>
        </div>

        <button className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 border-2 border-zoho-200 text-zoho-700 font-semibold rounded-xl text-sm hover:bg-zoho-50 transition-colors">
          Preview Course <ChevronRight size={15} />
        </button>
      </div>
    </motion.div>
  )
}

export default function CoursesSection() {
  return (
    <section className="section-pad bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.div variants={fadeInUp}>
            <span className="section-label">Preparation Programs</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="mt-4 text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Courses built for{' '}
            <span className="gradient-text">migration readiness</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-600">
            Create your own or start from our templates. Every course includes modules, resources, practice tests, assignments, and VC session slots.
          </motion.p>
        </motion.div>

        {/* Course cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} index={i} />
          ))}
        </motion.div>

        {/* Platform note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-zoho-50 rounded-2xl border border-zoho-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="font-bold text-slate-900">Build your own preparation programs from scratch</p>
            <p className="text-sm text-slate-600 mt-1">Customize every course for your cohort, country, and institution requirements.</p>
          </div>
          <a href="#lead" className="btn-primary flex-shrink-0">
            Start Building
          </a>
        </motion.div>
      </div>
    </section>
  )
}
