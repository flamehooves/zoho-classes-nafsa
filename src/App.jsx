import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, GraduationCap, Play, Pause, Maximize2, Minimize2 } from 'lucide-react'

import SlideHero        from './slides/SlideHero'
import SlideStats       from './slides/SlideStats'
import SlideChallenges  from './slides/SlideChallenges'
import SlideFeatures    from './slides/SlideFeatures'
import SlideWorkflows   from './slides/SlideWorkflows'
import SlideCourses     from './slides/SlideCourses'
import SlideJourney     from './slides/SlideJourney'
import SlideFeed        from './slides/SlideFeed'
import SlideAssignments from './slides/SlideAssignments'
import SlideVC          from './slides/SlideVC'
import SlideNAFSA       from './slides/SlideNAFSA'
import SlideForm        from './slides/SlideForm'

const SLIDES = [
  { component: SlideHero,        label: 'Welcome'              },
  { component: SlideStats,       label: 'Platform Scale'       },
  { component: SlideChallenges,  label: 'The Problem'          },
  { component: SlideFeatures,    label: 'Platform Features'    },
  { component: SlideWorkflows,   label: 'Preparation Programs' },
  { component: SlideCourses,     label: 'Course Library'       },
  { component: SlideJourney,     label: 'Student Journey'      },
  { component: SlideFeed,        label: 'Private Feed'         },
  { component: SlideAssignments, label: 'Assignments & Tests'  },
  { component: SlideVC,          label: 'Virtual Sessions'     },
  { component: SlideNAFSA,       label: 'NAFSA 2026'           },
  { component: SlideForm,        label: 'Get Started'          },
]

const AUTO_DELAY = 6000

const variants = {
  enter:  (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: {
    x: 0, opacity: 1,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (d) => ({
    x: d > 0 ? '-100%' : '100%', opacity: 0,
    transition: { duration: 0.38, ease: [0.55, 0, 0.78, 0] },
  }),
}

export default function App() {
  const [current,    setCurrent]    = useState(0)
  const [direction,  setDirection]  = useState(1)
  const [autoPlay,   setAutoPlay]   = useState(false)
  const [progress,   setProgress]   = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const touchX      = useRef(null)
  const intervalRef = useRef(null)
  const progressRef = useRef(null)
  const startTime   = useRef(null)

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrent(c => (c + 1) % SLIDES.length)
  }, [])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrent(c => Math.max(c - 1, 0))
  }, [])

  const goTo = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  // Auto-slide engine
  const startAuto = useCallback(() => {
    setProgress(0)
    startTime.current = Date.now()

    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime.current
      setProgress(Math.min((elapsed / AUTO_DELAY) * 100, 100))
    }, 50)

    intervalRef.current = setTimeout(() => {
      goNext()
      startTime.current = Date.now()
      setProgress(0)
    }, AUTO_DELAY)
  }, [goNext])

  const stopAuto = useCallback(() => {
    clearTimeout(intervalRef.current)
    clearInterval(progressRef.current)
    setProgress(0)
  }, [])

  // Restart timer whenever slide changes while auto-playing
  useEffect(() => {
    if (!autoPlay) return
    stopAuto()
    const t = setTimeout(() => startAuto(), 100)
    return () => { clearTimeout(t); stopAuto() }
  }, [current, autoPlay, startAuto, stopAuto])

  const toggleAutoPlay = () => {
    setAutoPlay(v => {
      if (!v) startAuto()
      else stopAuto()
      return !v
    })
  }

  // Pause auto-play on manual navigation
  const manualGoNext = useCallback(() => {
    if (autoPlay) { stopAuto(); startTime.current = Date.now(); setProgress(0) }
    goNext()
  }, [autoPlay, goNext, stopAuto])

  const manualGoPrev = useCallback(() => {
    if (autoPlay) { stopAuto(); startTime.current = Date.now(); setProgress(0) }
    goPrev()
  }, [autoPlay, goPrev, stopAuto])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown'  || e.key === 'PageDown') manualGoNext()
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp'    || e.key === 'PageUp')   manualGoPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [manualGoNext, manualGoPrev])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }, [])

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd   = (e) => {
    if (touchX.current === null) return
    const diff = touchX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 55) diff > 0 ? manualGoNext() : manualGoPrev()
    touchX.current = null
  }

  const Slide   = SLIDES[current].component
  const isFirst = current === 0

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-white"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-200/60 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-zoho-700 to-zoho-400"
          initial={false}
          animate={{ width: `${((current + 1) / SLIDES.length) * 100}%` }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
        {/* Auto-slide progress overlay */}
        {autoPlay && (
          <motion.div
            key={current}
            className="absolute top-0 left-0 h-full bg-amber-400/60"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            style={{ width: `${((current) / SLIDES.length) * 100 + (progress / 100) * (1 / SLIDES.length) * 100}%` }}
          />
        )}
      </div>

      {/* Fullscreen button */}
      <button
        onClick={toggleFullscreen}
        title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        className="fixed top-3 right-4 z-50 w-8 h-8 rounded-lg bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-slate-500 hover:text-zoho-700"
      >
        {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
      </button>

      {/* Logo */}
      <div className="fixed top-3 left-4 z-50 flex items-center gap-2 pointer-events-none">
        <div className="w-7 h-7 rounded-lg bg-zoho-700 flex items-center justify-center shadow-md">
          <GraduationCap size={14} className="text-white" />
        </div>
        <span className="text-xs font-bold text-slate-700 opacity-70 hidden sm:block">Zoho Classes</span>
      </div>

      {/* Slide layer */}
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <Slide />
        </motion.div>
      </AnimatePresence>

      {/* ← Prev arrow */}
      <AnimatePresence>
        {!isFirst && (
          <motion.button
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            onClick={manualGoPrev}
            className="fixed left-3 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/85 backdrop-blur-md shadow-lg border border-slate-200 flex items-center justify-center hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-150 group"
          >
            <ChevronLeft size={20} className="text-slate-500 group-hover:text-zoho-700 transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* → Next arrow */}
      <motion.button
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        onClick={manualGoNext}
        className="fixed right-3 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/85 backdrop-blur-md shadow-lg border border-slate-200 flex items-center justify-center hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-150 group"
      >
        <ChevronRight size={20} className="text-slate-500 group-hover:text-zoho-700 transition-colors" />
      </motion.button>

      {/* Bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 h-10 flex items-center z-50 px-4 gap-3">
        {/* Auto-play toggle */}
        <button
          onClick={toggleAutoPlay}
          title={autoPlay ? 'Pause auto-slide' : 'Start auto-slide'}
          className={`flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-all ${
            autoPlay
              ? 'bg-amber-500 border-amber-400 text-white shadow-md'
              : 'bg-white/80 border-slate-200 text-slate-500 hover:border-zoho-300 hover:text-zoho-700'
          }`}
        >
          {autoPlay ? <Pause size={11} /> : <Play size={11} />}
          <span className="hidden sm:inline">{autoPlay ? 'Auto' : 'Auto'}</span>
        </button>

        {/* Label */}
        <span className="text-[10px] text-slate-400 font-medium hidden sm:block">{SLIDES[current].label}</span>

        {/* Dot navigation */}
        <div className="flex items-center gap-1.5 mx-auto">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              title={SLIDES[i].label}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-5 h-1.5 bg-zoho-600' : 'w-1.5 h-1.5 bg-slate-300 hover:bg-zoho-400'
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <span className="text-[10px] text-slate-400 font-medium text-right hidden sm:block">
          {current + 1} / {SLIDES.length}
        </span>
      </div>
    </div>
  )
}
