import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import MagneticButton from './MagneticButton.jsx'
import { portfolio } from '../data/portfolio.js'

export default function Hero() {
	const imageRef = useRef(null)
	const reduceMotion = useReducedMotion()

	useEffect(() => {
		if (reduceMotion || !imageRef.current) return undefined
		let cancelled = false
		let tween
		Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
			if (cancelled) return
			gsap.registerPlugin(ScrollTrigger)
			tween = gsap.to(imageRef.current, {
				yPercent: 12,
				scale: 1.08,
				ease: 'none',
				scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 0.7 },
			})
		})
		return () => {
			cancelled = true
			tween?.scrollTrigger?.kill()
			tween?.kill()
		}
	}, [reduceMotion])

	return (
		<section className="hero-section" id="home">
			<div className="hero-grid" aria-hidden="true" />
			<div className="hero-copy">
				<motion.p className="eyebrow hero-eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.6 }}><span className="status-dot" /> {portfolio.location} <span className="eyebrow-separator">/</span> {portfolio.title}</motion.p>
				<h1><span className="hero-intro">LEARN. SIMULATE. MASTER.</span><span className="hero-title-line">TECH NOLOGY</span><span className="hero-title-line hero-title-accent">THROUGH PRACTICE<span className="hero-period">.</span></span></h1>
				<div className="hero-bottom">
					<p>{portfolio.intro}</p>
					<div className="hero-actions">
						<MagneticButton href="#projects" className="button-lime">Explore projects</MagneticButton>
						<MagneticButton href="#contact" className="button-outline">Let's talk</MagneticButton>
					</div>
				</div>
			</div>
			<motion.div className="hero-visual" ref={imageRef} initial={reduceMotion ? false : { clipPath: 'inset(18% 0 18% 0 round 3px)', opacity: 1 }} animate={{ clipPath: 'inset(0% 0 0% 0 round 3px)', opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 1.25, delay: 0.55, ease: [0.76, 0, 0.24, 1] }}>
				<img className="hero-image-portrait" src="/images/ChatGPT%20Image%20Oct%201,%202026,%2006_44_42%20PM.png" alt={`${portfolio.name}, ${portfolio.title}`} />
				<span className="hero-image-caption">FIG. 01 <span>CREATIVE PRACTICE</span></span>
			</motion.div>
			<a className="scroll-cue" href="#introduction"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} aria-hidden="true" /></a>
			<span className="hero-side-note">INDEPENDENT PRACTICE / YOUR LOCATION</span>
		</section>
	)
}