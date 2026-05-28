import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, FileText, Video, Pin, Link2, ChevronRight } from 'lucide-react'

const feedItems = [
  { type: 'announcement', author: 'Admissions Team', av: 'AT', avBg: 'bg-amber-500', time: '2 min ago',
    content: '📢 Submit your financial proof documents by Friday 5 PM. Late submissions may delay your visa booking.',
    tag: 'Urgent', tagC: 'bg-red-100 text-red-600', pinned: true },
  { type: 'resource', author: 'Student Counselor', av: 'SC', avBg: 'bg-blue-500', time: '1 hr ago',
    content: 'New resource: "Bank Statement Requirements for UK Student Visa (2026)". Read before your appointment.',
    attachment: 'UK_Bank_Statement_Guide_2026.pdf',
    tag: 'Resource', tagC: 'bg-blue-100 text-blue-600' },
  { type: 'session', author: 'Visa Consultant', av: 'VC', avBg: 'bg-violet-500', time: '3 hrs ago',
    content: '🎥 Embassy Interview Prep Session — Thursday 2 PM EST. Zoom link is live for enrolled students only.',
    sessionLink: 'Join via Zoom · Thursday 2 PM',
    tag: 'Live Session', tagC: 'bg-violet-100 text-violet-600' },
  { type: 'unlock', author: 'Program Coordinator', av: 'PC', avBg: 'bg-green-500', time: 'Yesterday',
    content: 'Pre-Departure Checklist Module is now unlocked. Complete before your orientation session next week.',
    tag: 'Module Unlocked', tagC: 'bg-green-100 text-green-600' },
]

const newItem = { type: 'discussion', author: 'You', av: 'ME', avBg: 'bg-teal-500', time: 'Just now',
  content: 'Has anyone completed the IELTS mock test? Looking for a study partner for the speaking section! 👋',
  tag: 'Discussion', tagC: 'bg-teal-100 text-teal-600' }

function FeedItem({ item, isNew }) {
  return (
    <motion.div
      layout
      initial={isNew ? { opacity: 0, y: -16, scale: 0.96 } : { opacity: 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35 }}
      className={`bg-white rounded-xl border p-3 ${item.pinned ? 'border-amber-200 bg-amber-50/30' : 'border-slate-100'} shadow-sm`}
    >
      <div className="flex items-start gap-2.5">
        <div className={`w-7 h-7 rounded-full ${item.avBg} flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0`}>{item.av}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[10px] font-semibold text-slate-800">{item.author}</span>
            <span className="text-[9px] text-slate-400">{item.time}</span>
            {item.pinned && <Pin size={9} className="text-amber-500 ml-auto" />}
            {isNew && <span className="ml-auto bg-zoho-100 text-zoho-700 text-[8px] font-bold px-1.5 py-0.5 rounded-full">New</span>}
          </div>
          <p className="text-[10px] text-slate-700 leading-relaxed">{item.content}</p>
          {item.attachment && (
            <div className="mt-1.5 flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5">
              <FileText size={10} className="text-blue-500" /><span className="text-[9px] text-slate-600 font-medium truncate">{item.attachment}</span><ChevronRight size={8} className="text-slate-400 ml-auto" />
            </div>
          )}
          {item.sessionLink && (
            <div className="mt-1.5 flex items-center gap-1.5 bg-violet-50 border border-violet-200 rounded-lg px-2.5 py-1.5">
              <Video size={10} className="text-violet-500" /><span className="text-[9px] text-violet-700 font-semibold">{item.sessionLink}</span><Link2 size={8} className="text-violet-400 ml-auto" />
            </div>
          )}
          <span className={`mt-1.5 inline-block text-[9px] font-semibold px-2 py-0.5 rounded-full ${item.tagC}`}>{item.tag}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function SlideFeed() {
  const [items, setItems] = useState(feedItems)
  const [showNew, setShowNew] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setShowNew(true)
      setItems([newItem, ...feedItems.slice(0, 3)])
    }, 2800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="slide bg-white">
      <div className="flex-1 flex items-center max-w-7xl mx-auto w-full px-10 lg:px-16 gap-12">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-5"
        >
          <div className="space-y-2">
            <span className="slide-label">Private Student Feed</span>
            <h2 className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Centralized, private<br />
              <span className="gradient-text">student communication</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-sm">
              Every cohort gets a dedicated private feed. Share announcements, resources, and VC links — only enrolled students can see it.
            </p>
          </div>
          <ul className="space-y-2">
            {[
              { t: 'Pinned announcements with urgency tags',       c: 'bg-amber-50 text-amber-600' },
              { t: 'PDF, video, and document uploads with previews', c: 'bg-blue-50 text-blue-600' },
              { t: 'Zoom, Meet, Teams links shared securely',       c: 'bg-violet-50 text-violet-600' },
              { t: 'Student discussion and peer Q&A threads',       c: 'bg-teal-50 text-teal-600' },
              { t: 'Automated deadline reminders and module unlocks', c: 'bg-green-50 text-green-600' },
            ].map((item, i) => (
              <motion.li key={i}
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="flex items-center gap-3 text-sm text-slate-700"
              >
                <span className={`w-5 h-5 rounded-lg ${item.c} flex items-center justify-center text-[10px] font-bold flex-shrink-0`}>✓</span>
                {item.t}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Live feed */}
        <motion.div
          initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex-shrink-0 w-[340px] xl:w-[380px]"
        >
          <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
            <div className="bg-white border-b border-slate-100 px-4 py-2.5 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-semibold text-slate-800 text-xs">Fall 2026 Cohort — Canada</span>
              <span className="ml-auto text-[10px] text-slate-400">48 students</span>
            </div>
            <div className="px-4 py-1.5 bg-zoho-50 border-b border-zoho-100 flex items-center gap-1.5">
              <Bell size={10} className="text-zoho-600" />
              <span className="text-[10px] text-zoho-700 font-medium">Live feed · Updates appear in real time</span>
            </div>
            <div className="p-3 space-y-2 max-h-[340px] overflow-hidden">
              <AnimatePresence>
                {items.map((item, i) => (
                  <FeedItem key={`${item.type}-${i}`} item={item} isNew={i === 0 && showNew} />
                ))}
              </AnimatePresence>
            </div>
            <div className="border-t border-slate-100 bg-white px-3 py-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-zoho-500 flex items-center justify-center text-white text-[9px] font-bold">SC</div>
              <div className="flex-1 bg-slate-100 rounded-xl px-2.5 py-1.5 text-[10px] text-slate-400">Share an announcement or resource...</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
