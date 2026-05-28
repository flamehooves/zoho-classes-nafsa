import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Globe2, Users, BookOpen, Layers } from 'lucide-react'

const stats = [
  { icon: <Users size={26} />,    value: 500,  suffix: '+',  label: 'Institutions & Recruiters', sub: 'Globally trusted',              color: 'text-zoho-300',   bg: 'bg-zoho-800/60'  },
  { icon: <Globe2 size={26} />,   value: 80,   suffix: '+',  label: 'Countries Represented',     sub: 'True global reach',             color: 'text-teal-300',   bg: 'bg-teal-900/60'  },
  { icon: <BookOpen size={26} />, value: 50,   suffix: 'K+', label: 'Students Prepared',         sub: 'And growing every intake',      color: 'text-amber-300',  bg: 'bg-amber-900/50' },
  { icon: <Layers size={26} />,   value: 2.4,  suffix: 'M+', label: 'Resources Delivered',       sub: 'Docs, videos, sessions, guides', color: 'text-pink-300',   bg: 'bg-pink-900/40'  },
]

function Counter({ value, suffix }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const duration = 1600
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const p = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(parseFloat((value * eased).toFixed(value < 10 ? 1 : 0)))
      if (p < 1) requestAnimationFrame(tick)
    }
    const id = setTimeout(() => requestAnimationFrame(tick), 300)
    return () => clearTimeout(id)
  }, [value])

  return <span ref={ref}>{n}{suffix}</span>
}

export default function SlideStats() {
  return (
    <div className="slide bg-dark-gradient relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-zoho-700/10 blur-[100px] pointer-events-none" />

      <div className="flex-1 flex flex-col items-center justify-center px-10 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <span className="inline-flex items-center gap-2 text-zoho-300 font-semibold text-xs tracking-widest uppercase bg-white/8 border border-white/15 px-3 py-1.5 rounded-full">
            Platform Scale
          </span>
          <h2 className="text-4xl xl:text-5xl font-extrabold text-white">
            Trusted by the global<br />
            <span className="bg-gradient-to-r from-zoho-300 to-zoho-100 bg-clip-text text-transparent">
              education community
            </span>
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            From boutique consultancies to large university pathway providers — Zoho Classes powers preparation at every scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.25 + i * 0.12, duration: 0.5 }}
              className={`${s.bg} backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:border-white/25 transition-colors`}
            >
              <div className={`${s.color} flex justify-center mb-3 opacity-80`}>{s.icon}</div>
              <div className={`text-4xl xl:text-5xl font-extrabold ${s.color}`}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/80 font-semibold text-sm mt-1">{s.label}</div>
              <div className="text-white/35 text-xs mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="flex items-center gap-2 text-white/30 text-xs"
        >
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          <span>All systems operational · Data updated in real time</span>
        </motion.div>
      </div>
    </div>
  )
}
