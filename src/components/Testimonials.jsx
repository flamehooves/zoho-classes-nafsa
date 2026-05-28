import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/animations'

const testimonials = [
  {
    quote: "Zoho Classes completely transformed how we prepare our students for Canadian study permits. What used to take weeks of back-and-forth emails now happens seamlessly inside one platform. Student readiness has improved dramatically.",
    name: "Priya Nair",
    role: "Director of International Admissions",
    org: "Global Study Pathways, Bangalore",
    avatar: "PN",
    avatarBg: "bg-blue-500",
    stars: 5,
    highlight: "Student readiness improved dramatically",
  },
  {
    quote: "We run pre-departure orientation for 300+ students across 12 countries every intake. Zoho Classes gave us the structure to deliver consistent, high-quality preparation regardless of where students are located. The private feeds are game-changing.",
    name: "Marcus Wei",
    role: "Head of Student Services",
    org: "Pacific Bridge Education, Sydney",
    avatar: "MW",
    avatarBg: "bg-teal-500",
    stars: 5,
    highlight: "Game-changing for global coordination",
  },
  {
    quote: "Our embassy interview pass rate jumped from 71% to 89% after we implemented Zoho Classes' interview prep module and practice tests. The platform pays for itself in visa approvals alone.",
    name: "Fatima Al-Hassan",
    role: "Senior Education Consultant",
    org: "PathBridge Consulting, Dubai",
    avatar: "FA",
    avatarBg: "bg-violet-500",
    stars: 5,
    highlight: "Embassy pass rate jumped from 71% to 89%",
  },
  {
    quote: "As a university pathway provider, we needed something that felt professional enough for institutions but simple enough for students. Zoho Classes hits that balance perfectly. The course builder is incredibly intuitive.",
    name: "Dr. Jennifer Clarke",
    role: "International Partnerships Manager",
    org: "Meridian Pathway College, Toronto",
    avatar: "JC",
    avatarBg: "bg-green-500",
    stars: 5,
    highlight: "Professional enough for institutions, simple for students",
  },
]

export default function Testimonials() {
  return (
    <section className="section-pad bg-white" id="testimonials">
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
            <span className="section-label">Trusted Globally</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="mt-4 text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved by recruiters &{' '}
            <span className="gradient-text">education professionals</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-600">
            From boutique consultancies to large pathway providers — here's what they're saying.
          </motion.p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-base p-7 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={40} className="text-zoho-600" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Highlight badge */}
              <div className="inline-block bg-zoho-50 text-zoho-700 text-[11px] font-semibold px-3 py-1 rounded-full border border-zoho-100 mb-4">
                "{t.highlight}"
              </div>

              {/* Quote */}
              <p className="text-slate-700 leading-relaxed text-[15px] mb-6">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-sm font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                  <p className="text-xs text-zoho-600 font-medium">{t.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rating row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-zoho-50 to-blue-50 rounded-2xl border border-zoho-100 p-8 flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          {[
            { val: '4.9/5', label: 'Average Rating', sub: 'From 800+ reviews' },
            { val: '97%', label: 'Would Recommend', sub: 'To other recruiters' },
            { val: '89%', label: 'Better Preparedness', sub: 'Reported by institutions' },
          ].map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-extrabold text-zoho-700">{m.val}</div>
              <div className="text-sm font-semibold text-slate-800 mt-1">{m.label}</div>
              <div className="text-xs text-slate-500">{m.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
