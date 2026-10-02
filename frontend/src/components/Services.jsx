import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import TextReveal from './TextReveal.jsx'
import { services } from '../data/portfolio.js'

export default function Services() {
	return (
		<section className="services-section section-pad" id="services">
			<div className="section-heading-row"><span className="mono-label">06 / IN GOOD COMPANY</span><span className="section-rule" /></div>
			<div className="services-heading"><TextReveal as="h2" className="section-title">WHAT<br /><span>I DO.</span></TextReveal><p>Bring the early sketch. I can help carry it all the way to the details.</p></div>
			<div className="service-list">{services.map((service, index) => <motion.article className="service-item" key={service.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55, delay: index * 0.07 }}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.detail}</p><ArrowUpRight size={20} aria-hidden="true" /></motion.article>)}</div>
		</section>
	)
}