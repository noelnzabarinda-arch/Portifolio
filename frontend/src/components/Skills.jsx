import { motion } from 'framer-motion'
import TextReveal from './TextReveal.jsx'
import { portfolio } from '../data/portfolio.js'

export default function Skills() {
	return (
		<section className="skills-section section-pad" id="skills">
			<div className="section-heading-row"><span className="mono-label">03 / THE TOOLKIT</span><span className="section-rule" /></div>
			<div className="skills-heading"><TextReveal as="h2" className="section-title">TOOLS FOR<br /><span>THE WORK.</span></TextReveal><p>Good tools don't make the work. They make room for the work.</p></div>
			<div className="skills-list">
				{portfolio.skills.map((group, index) => (
					<motion.div className="skill-row" key={group.category} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.65, delay: index * 0.08 }}>
						<span className="skill-category">0{index + 1} / {group.category}</span>
						<div className="skill-items">{group.items.map((skill) => <span className="skill-item" key={skill}>{skill}</span>)}</div>
					</motion.div>
				))}
			</div>
		</section>
	)
}