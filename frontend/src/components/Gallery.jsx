import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import ImageFrame from './ImageFrame.jsx'
import { portfolio } from '../data/portfolio.js'

function GalleryImage({ item, index, progress, reduceMotion }) {
	const offsets = [[0, 18], [0, -22], [0, 14]]
	const y = useTransform(progress, [0, 1], reduceMotion ? [0, 0] : offsets[index] || [0, 12])
	return <motion.figure className={`gallery-item ${item.shape}`} style={{ y }}><ImageFrame src={item.image} alt={item.label} /><figcaption><span>{item.label}</span><span>0{index + 1}</span></figcaption></motion.figure>
}

export default function Gallery() {
	const galleryRef = useRef(null)
	const reduceMotion = useReducedMotion()
	const { scrollYProgress } = useScroll({ target: galleryRef, offset: ['start end', 'end start'] })
	return (
		<section className="gallery-section section-pad" ref={galleryRef}>
			<div className="section-heading-row"><span className="mono-label">07 / OUTSIDE THE FRAME</span><span className="section-rule" /></div>
			<div className="gallery-heading"><h2>COLLECTED<br /><span>FRAGMENTS.</span></h2><p>A small visual notebook. Replace these frames with images from your own process.</p></div>
			<div className="gallery-grid">{portfolio.gallery.map((item, index) => <GalleryImage item={item} index={index} progress={scrollYProgress} reduceMotion={reduceMotion} key={item.image} />)}</div>
		</section>
	)
}