import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

export default function MagneticButton({ href, children, className = '', down = false, ...props }) {
	const Icon = down ? ArrowDownRight : ArrowUpRight
	const handleMove = (event) => {
		if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
		const bounds = event.currentTarget.getBoundingClientRect()
		event.currentTarget.style.setProperty('--mag-x', `${(event.clientX - bounds.left - bounds.width / 2) * 0.1}px`)
		event.currentTarget.style.setProperty('--mag-y', `${(event.clientY - bounds.top - bounds.height / 2) * 0.1}px`)
	}
	const handleLeave = (event) => {
		event.currentTarget.style.setProperty('--mag-x', '0px')
		event.currentTarget.style.setProperty('--mag-y', '0px')
	}
	const shared = { className: `magnetic-button ${className}`, onPointerMove: handleMove, onPointerLeave: handleLeave, ...props }
	return href ? <a href={href} {...shared}>{children}<Icon size={16} aria-hidden="true" /></a> : <button type="button" {...shared}>{children}<Icon size={16} aria-hidden="true" /></button>
}