import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ImageFrame from './ImageFrame.jsx'
import TextReveal from './TextReveal.jsx'
import { portfolio } from '../data/portfolio.js'

export default function About() {
	return (
		<section className="about-section section-pad" id="about">
			<div className="section-heading-row"><span className="mono-label">02 / A LITTLE CONTEXT</span><span className="section-rule" /></div>
			<div className="about-layout">
				<div className="about-title-block"><TextReveal as="h2" className="section-title">ABOUT<br /><span>ME</span></TextReveal><span className="about-stamp">CURIOUS BY<br />DEFAULT <ArrowUpRight size={20} /></span></div>
				<div className="about-content">
					<motion.div className="about-image-wrap" initial={{ clipPath: 'inset(12% 0 12% 0)', opacity: 0.5 }} whileInView={{ clipPath: 'inset(0% 0 0% 0)', opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}>
						<ImageFrame src="/images/756612623_17913429234426570_6252123818065483821_n.jpg" alt={`Portrait of ${portfolio.name}`} className="about-image" />
						<span className="image-coordinate">PROFILE / IMAGE</span>
					</motion.div>
					<p className="about-copy">{portfolio.about}</p>
					<div className="about-roles"><span>Developer</span><span>Designer</span><span>Problem solver</span><span>Creative technologist</span></div>
					<a className="text-link" href="#contact">A LITTLE MORE ABOUT ME <ArrowUpRight size={15} aria-hidden="true" /></a>
				</div>
			</div>
		</section>
	)
}