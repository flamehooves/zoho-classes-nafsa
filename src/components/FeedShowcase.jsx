import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, FileText, Video, Pin, MessageCircle, Link2, Image, ChevronRight } from 'lucide-react'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from '../utils/animations'

const feedItems = [
  {
    type: 'announcement',
    icon: <Bell size={14} />,
    iconBg: 'bg-amber-100 text-amber-600',
    author: 'Admissions Team',
    avatar: 'AT',
    avatarBg: 'bg-amber-500',
    time: '2 min ago',
    content: '📢 Reminder: Submit your financial proof documents by Friday 5 PM. Late submissions may delay your visa appointment booking.',
    tag: 'Urgent',
    tagColor: 'bg-red-100 text-red-600',
    pinned: true,
  },
  {
    type: 'resource',
    icon: <FileText size={14} />,
    iconBg: 'bg-blue-100 text-blue-600',
    author: 'Student Counselor',
    avatar: 'SC',
    avatarBg: 'bg-blue-500',
    time: '1 hour ago',
    content: 'New resource uploaded: "Bank Statement Requirements for UK Student Visa (2026 Updated)". Read before your appointment.',
    attachment: 'UK_Bank_Statement_Guide_2026.pdf',
    tag: 'Resource',
    tagColor: 'bg-blue-100 text-blue-600',
  },
  {
    type: 'session',
    icon: <Video size={14} />,
    iconBg: 'bg-violet-100 text-violet-600',
    author: 'Visa Consultant',
    avatar: 'VC',
    avatarBg: 'bg-violet-500',
    time: '3 hours ago',
    content: '🎥 Embassy Interview Prep Session scheduled for Thursday, 2 PM EST. Zoom link is live for enrolled students only.',
    sessionLink: 'Join via Zoom · Thursday 2 PM',
    tag: 'Live Session',
    tagColor: 'bg-violet-100 text-violet-600',
  },
  {
    type: 'reminder',
    icon: <Pin size={14} />,
    iconBg: 'bg-green-100 text-green-600',
    author: 'Program Coordinator',
    avatar: 'PC',
    avatarBg: 'bg-green-500',
    time: 'Yesterday',
    content: 'Pre-Departure Checklist Module is now unlocked. Complete it before your orientation session next week.',
    tag: 'Module Unlocked',
    tagColor: 'bg-green-100 text-green-600',
  },
]

const newItem = {
  type: 'discussion',
  icon: <MessageCircle size={14} />,
  iconBg: 'bg-teal-100 text-teal-600',
  author: 'You',
  avatar: 'ME',
  avatarBg: 'bg-teal-500',
  time: 'Just now',
  content: 'Has anyone completed the IELTS mock test yet? Looking for a study partner for the speaking section! 👋',
  tag: 'Discussion',
  tagColor: 'bg-teal-100 text-teal-600',
}

function FeedItem({ item, isNew }) {
  return (
    <motion.div
      layout
      initial={isNew ? { opacity: 0, y: -20, scale: 0.95 } : { opacity: 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-white rounded-xl border p-4 ${item.pinned ? 'border-amber-200 bg-amber-50/30' : 'border-slate-100'} shadow-sm`}
    >
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className={`w-8 h-8 rounded-full ${item.avatarBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
          {item.avatar}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-slate-800">{item.author}</span>
            <span className="text-[10px] text-slate-400">{item.time}</span>
            {item.pinned && <Pin size={10} className="text-amber-500 ml-auto" />}
            {isNew && <span className="ml-auto bg-zoho-100 text-zoho-700 text-[9px] font-bold px-1.5 py-0.5 rounded-full">New</span>}
          </div>

          <div className={`w-5 h-5 rounded-md ${item.iconBg} flex items-center justify-center mb-2`} style={{ display: 'none' }}>
            {item.icon}
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">{item.content}</p>

          {/* Attachment */}
          {item.attachment && (
            <div className="mt-2 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
              <FileText size={12} className="text-blue-500 flex-shrink-0" />
              <span className="text-[11px] text-slate-600 font-medium truncate">{item.attachment}</span>
              <ChevronRight size={10} className="text-slate-400 ml-auto flex-shrink-0" />
            </div>
          )}

          {/* Session link */}
          {item.sessionLink && (
            <div className="mt-2 flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-lg px-3 py-2">
              <Video size={12} className="text-violet-500 flex-shrink-0" />
              <span className="text-[11px] text-violet-700 font-semibold">{item.sessionLink}</span>
              <Link2 size={10} className="text-violet-400 ml-auto flex-shrink-0" />
            </div>
          )}

          <div className="mt-2 flex items-center gap-2">
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.tagColor}`}>
              {item.tag}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeedShowcase() {
  const [items, setItems] = useState(feedItems)
  const [showNew, setShowNew] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNew(true)
      setItems((prev) => [newItem, ...prev.slice(0, 3)])
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="section-pad bg-white" id="feed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="section-label">Private Student Feed</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Centralized, private{' '}
              <span className="gradient-text">student communication</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              Every cohort gets a dedicated private feed. Share announcements, upload resources, post VC session links, and keep all communication in one organized, secure space — only enrolled students can see it.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-3">
              {[
                { text: 'Pinned announcements with urgency tags', color: 'text-amber-600 bg-amber-50' },
                { text: 'PDF, video, and document uploads with previews', color: 'text-blue-600 bg-blue-50' },
                { text: 'Zoom, Meet, and Teams links shared securely', color: 'text-violet-600 bg-violet-50' },
                { text: 'Student discussion and peer Q&A threads', color: 'text-teal-600 bg-teal-50' },
                { text: 'Automated deadline reminders and module unlocks', color: 'text-green-600 bg-green-50' },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-3 text-sm text-slate-700"
                >
                  <span className={`w-6 h-6 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0 font-bold text-xs`}>✓</span>
                  {item.text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: Feed mockup */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
              {/* Feed header */}
              <div className="bg-white border-b border-slate-100 px-5 py-3.5 flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-slate-800 text-sm">Fall 2026 Cohort — Canada</span>
                <span className="ml-auto text-xs text-slate-400">48 students</span>
              </div>

              {/* Live indicator */}
              <div className="px-5 py-2 bg-zoho-50 border-b border-zoho-100 flex items-center gap-2">
                <Bell size={12} className="text-zoho-600" />
                <span className="text-xs text-zoho-700 font-medium">Live feed · Updates appear in real time</span>
              </div>

              {/* Feed items */}
              <div className="p-4 space-y-3 max-h-[460px] overflow-y-auto">
                <AnimatePresence>
                  {items.map((item, i) => (
                    <FeedItem key={`${item.type}-${i}`} item={item} isNew={i === 0 && showNew} />
                  ))}
                </AnimatePresence>
              </div>

              {/* Compose bar */}
              <div className="border-t border-slate-100 bg-white px-4 py-3 flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-zoho-500 flex items-center justify-center text-white text-xs font-bold">SC</div>
                <div className="flex-1 bg-slate-100 rounded-xl px-3 py-2 text-xs text-slate-400">
                  Share an announcement, resource, or update...
                </div>
                <div className="flex gap-1.5">
                  <button className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
                    <FileText size={13} className="text-slate-500" />
                  </button>
                  <button className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
                    <Video size={13} className="text-slate-500" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
