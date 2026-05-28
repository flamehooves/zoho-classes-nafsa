import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 500,  suffix: '+', label: 'Institutions & Recruiters', desc: 'Globally trusted' },
  { value: 50,   suffix: 'K+', label: 'Students Prepared',        desc: 'And counting' },
  { value: 80,   suffix: '+', label: 'Countries Represented',     desc: 'True global reach' },
  { value: 2.4,  suffix: 'M+', label: 'Resources Delivered',      desc: 'Visa docs, guides, modules' },
]

function Counter({ value, suffix, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((value * eased).toFixed(value < 10 ? 1 : 0)))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-dark-gradient py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-zoho-600/20 blur-[80px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/5 hover:bg-white/10 transition-colors p-8 text-center backdrop-blur-sm"
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-1">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-zoho-300 font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-white/40 text-xs">{s.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
