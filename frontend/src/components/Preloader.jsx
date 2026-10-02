import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { portfolio } from '../data/portfolio.js'

export default function Preloader({ onComplete }) {
	const [progress, setProgress] = useState(0)
	const [closing, setClosing] = useState(false)
	const reduceMotion = useReducedMotion()

	useEffect(() => {
		const started = Date.now()
		const duration = 950
		let closeTimer
		let removeTimer
		const tick = () => {
			const next = Math.min(100, Math.round(((Date.now() - started) / duration) * 100))
			setProgress(next)
			if (next === 100) {
				window.clearInterval(interval)
				closeTimer = window.setTimeout(() => {
					setClosing(true)
					removeTimer = window.setTimeout(onComplete, reduceMotion ? 10 : 850)
				}, 180)
			}
		}
		const interval = window.setInterval(tick, 24)
		return () => {
			window.clearInterval(interval)
			window.clearTimeout(closeTimer)
			window.clearTimeout(removeTimer)
		}
	}, [onComplete, reduceMotion])

	return (
		<motion.div className="preloader" initial={{ y: 0 }} animate={{ y: closing ? '-100%' : 0 }} transition={{ duration: reduceMotion ? 0.01 : 0.8, ease: [0.76, 0, 0.24, 1] }}>
			<div className="preloader-top"><span>PORTFOLIO / 2026</span><span>INDEPENDENT PRACTICE</span></div>
			<div className="preloader-center"><span className="preloader-kicker">A DIGITAL SPACE BY</span><p>{portfolio.name}</p></div>
			<div className="preloader-bottom"><span>LOADING EXPERIENCE</span><div className="preloader-meter"><span style={{ transform: `scaleX(${progress / 100})` }} /></div><span className="preloader-count">{String(progress).padStart(2, '0')}<small>%</small></span></div>
		</motion.div>
	)
}