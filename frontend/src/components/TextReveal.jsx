import { motion } from 'framer-motion'

export default function TextReveal({ as = 'p', children, className = '', delay = 0 }) {
	const Tag = motion[as] || motion.p
	return <Tag className={className} initial={{ y: 36, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</Tag>
}