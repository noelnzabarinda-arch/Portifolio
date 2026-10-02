import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDownLeft, ArrowUpRight, X } from 'lucide-react'
import ProjectCard from './ProjectCard.jsx'
import { portfolio } from '../data/portfolio.js'
import ImageFrame from './ImageFrame.jsx'

export default function Projects() {
	const viewportRef = useRef(null)
	const trackRef = useRef(null)
	const [activeProject, setActiveProject] = useState(null)

	useEffect(() => {
		let cancelled = false
		let media
		Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
			if (cancelled) return
			gsap.registerPlugin(ScrollTrigger)
			media = gsap.matchMedia()
			media.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
				const viewport = viewportRef.current
				const track = trackRef.current
				if (!viewport || !track) return undefined
				return gsap.to(track, {
					x: () => -(track.scrollWidth - viewport.clientWidth),
					ease: 'none',
					scrollTrigger: { trigger: viewport, start: 'top top+=80', end: () => `+=${track.scrollWidth - viewport.clientWidth}`, pin: true, scrub: 0.8, invalidateOnRefresh: true },
				})
			})
		})
		return () => {
			cancelled = true
			media?.revert()
		}
	}, [])

	useEffect(() => {
		if (!activeProject) return undefined
		const closeOnEscape = (event) => { if (event.key === 'Escape') setActiveProject(null) }
		document.body.classList.add('modal-open')
		window.addEventListener('keydown', closeOnEscape)
		return () => {
			document.body.classList.remove('modal-open')
			window.removeEventListener('keydown', closeOnEscape)
		}
	}, [activeProject])

	return (
		<section className="projects-section" id="projects">
			<div className="section-heading-row section-pad"><span className="mono-label">04 / SELECTED WORK</span><span className="section-rule" /></div>
			<div className="projects-intro section-pad"><h2>MADE WITH<br /><span>INTENTION.</span></h2><p>A selection of work, experiments, and things built along the way.</p><span className="projects-count">{String(portfolio.projects.length).padStart(2, '0')} PROJECTS</span></div>
			<div className="projects-viewport" ref={viewportRef}><div className="projects-track" ref={trackRef}>{portfolio.projects.map((project) => <ProjectCard key={project.number} project={project} onOpen={setActiveProject} />)}</div><div className="projects-scroll-label"><ArrowDownLeft size={15} aria-hidden="true" /><span>SCROLL TO EXPLORE</span></div></div>
			<AnimatePresence>
				{activeProject && <motion.div className="project-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveProject(null) }}>
					<motion.section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" initial={{ y: 28, opacity: 0, scale: 0.985 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 18, opacity: 0, scale: 0.99 }} transition={{ duration: 0.35 }}>
						<button className="modal-close" type="button" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={20} /></button>
						<div className="modal-image"><ImageFrame src={activeProject.image} alt={`${activeProject.name} project`} /></div>
						<div className="modal-content"><span className="mono-label">PROJECT / {activeProject.number} — {activeProject.category}</span><h2 id="project-modal-title">{activeProject.name}</h2><p>{activeProject.description}</p><h3>DETAILS</h3><ul>{activeProject.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="project-tags">{activeProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="modal-links">{activeProject.liveUrl && <a href={activeProject.liveUrl} target="_blank" rel="noreferrer">Live website <ArrowUpRight size={16} /></a>}{activeProject.githubUrl && <a href={activeProject.githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a>}</div></div>
					</motion.section>
				</motion.div>}
			</AnimatePresence>
		</section>
	)
}