import { motion } from 'framer-motion'
import TextReveal from './TextReveal.jsx'
import { portfolio } from '../data/portfolio.js'

export default function Experience() {
	return (
		<section className="experience-section section-pad" id="experience">
			<div className="section-heading-row"><span className="mono-label">05 / THE JOURNEY</span><span className="section-rule" /></div>
			<div className="experience-heading"><TextReveal as="h2" className="section-title">A FEW<br /><span>MILESTONES.</span></TextReveal><p>The people, places, and problems that have shaped the work so far.</p></div>
			<div className="timeline">
				{portfolio.experience.map((item, index) => <motion.article className="timeline-item" key={`${item.year}-${item.role}`} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, delay: index * 0.1 }}><span className="timeline-year">{item.year}</span><div className="timeline-role"><h3>{item.role}</h3><span>{item.company}</span></div><p>{item.description}</p></motion.article>)}
			</div>
		</section>
	)
}