import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Zoho Classes completely transformed how we prepare students for Canadian study permits. What used to take weeks of back-and-forth emails now happens seamlessly inside one platform.",
    name: "Priya Nair", role: "Director of International Admissions", org: "Global Study Pathways, Bangalore",
    av: "PN", avBg: "bg-blue-500", stars: 5, highlight: "Student readiness improved dramatically",
  },
  {
    quote: "We run pre-departure orientation for 300+ students across 12 countries every intake. Zoho Classes gave us the structure to deliver consistent, high-quality preparation regardless of location.",
    name: "Marcus Wei", role: "Head of Student Services", org: "Pacific Bridge Education, Sydney",
    av: "MW", avBg: "bg-teal-500", stars: 5, highlight: "Consistent delivery across 12 countries",
  },
  {
    quote: "Our embassy interview pass rate jumped from 71% to 89% after implementing Zoho Classes' interview prep module and practice tests. The platform pays for itself in visa approvals alone.",
    name: "Fatima Al-Hassan", role: "Senior Education Consultant", org: "PathBridge Consulting, Dubai",
    av: "FA", avBg: "bg-violet-500", stars: 5, highlight: "Pass rate jumped from 71% → 89%",
  },
  {
    quote: "As a university pathway provider, we needed something professional enough for institutions but simple enough for students. Zoho Classes hits that balance perfectly.",
    name: "Dr. Jennifer Clarke", role: "International Partnerships Manager", org: "Meridian Pathway College, Toronto",
    av: "JC", avBg: "bg-green-500", stars: 5, highlight: "Perfect balance for institutions & students",
  },
]

export default function SlideTestimonials() {
  return (
    <div className="slide bg-white">
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-10 lg:px-16 py-4 gap-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-1.5"
        >
          <span className="slide-label">Trusted Globally</span>
          <h2 className="text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by recruiters &{' '}
            <span className="gradient-text">education professionals</span>
          </h2>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="card-base p-5 relative flex flex-col"
            >
              <div className="absolute top-4 right-5 opacity-[0.07]"><Quote size={32} className="text-zoho-600" /></div>

              <div className="flex gap-1 mb-2">
                {[...Array(t.stars)].map((_, i) => <Star key={i} size={11} className="fill-amber-400 text-amber-400" />)}
              </div>

              <span className="inline-block bg-zoho-50 text-zoho-700 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-zoho-100 mb-2 self-start">
                "{t.highlight}"
              </span>

              <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-3">"{t.quote}"</p>

              <div className="flex items-center gap-2.5 pt-3 mt-3 border-t border-slate-100">
                <div className={`w-8 h-8 rounded-full ${t.avBg} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>{t.av}</div>
                <div>
                  <p className="font-bold text-slate-900 text-xs">{t.name}</p>
                  <p className="text-[10px] text-slate-500">{t.role}</p>
                  <p className="text-[10px] text-zoho-600 font-medium">{t.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-zoho-50 to-blue-50 rounded-xl border border-zoho-100 py-3 px-6 flex items-center justify-center gap-10"
        >
          {[['4.9/5', 'Average Rating', 'From 800+ reviews'], ['97%', 'Would Recommend', 'To other recruiters'], ['89%', 'Better Preparedness', 'Reported by institutions']].map(([v,l,s]) => (
            <div key={l} className="text-center">
              <div className="text-2xl font-extrabold text-zoho-700">{v}</div>
              <div className="text-xs font-semibold text-slate-700">{l}</div>
              <div className="text-[10px] text-slate-400">{s}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
