import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton.jsx'
import { portfolio } from '../data/portfolio.js'

export default function Contact() {
	return (
		<section className="contact-section section-pad" id="contact">
			<div className="section-heading-row"><span className="mono-label">08 / YOUR TURN</span><span className="section-rule" /></div>
			<div className="contact-layout"><div className="contact-main"><span className="contact-kicker"><span className="status-dot" /> {portfolio.availability}</span><motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>LET'S BUILD<br /><span>SOMETHING</span><br />GREAT<span className="hero-period">.</span></motion.h2><MagneticButton href={`mailto:${portfolio.email}`} className="contact-cta">LET'S TALK</MagneticButton></div><div className="contact-side"><p>Have a good one in mind? Tell me a little about it. I read every note.</p><a className="contact-email" href={`mailto:${portfolio.email}`}>{portfolio.email}<ArrowUpRight size={18} aria-hidden="true" /></a><a className="contact-email" href={`tel:${portfolio.phone}`}>{portfolio.phone}<ArrowUpRight size={18} aria-hidden="true" /></a><div className="contact-socials">{portfolio.socials.map((social) => <a key={social.label} href={social.href} target={social.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">{social.label}<ArrowUpRight size={13} aria-hidden="true" /></a>)}</div></div></div>
			<span className="contact-ornament" aria-hidden="true">↗</span>
		</section>
	)
}