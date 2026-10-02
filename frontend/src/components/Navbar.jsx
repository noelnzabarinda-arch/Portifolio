import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

const links = [['Home', 'home'], ['About', 'about'], ['Projects', 'projects'], ['Skills', 'skills'], ['Experience', 'experience'], ['Contact', 'contact']]

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const update = () => setScrolled(window.scrollY > 24)
		update()
		window.addEventListener('scroll', update, { passive: true })
		return () => window.removeEventListener('scroll', update)
	}, [])

	useEffect(() => {
		document.body.classList.toggle('menu-open', open)
		return () => document.body.classList.remove('menu-open')
	}, [open])

	return (
		<header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
			<a className="wordmark" href="#home" onClick={() => setOpen(false)} aria-label={`${portfolio.name}, home`}>
				<span className="wordmark-mark">{portfolio.firstName.slice(0, 1)}</span>
				<span>{portfolio.name}</span>
			</a>
			<nav className={`desktop-nav${open ? ' nav-open' : ''}`} aria-label="Main navigation">
				{links.map(([label, id], index) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}><span className="nav-index">0{index + 1}</span>{label}</a>)}
			</nav>
			<a className="header-availability" href={`mailto:${portfolio.email}`}><span className="status-dot" /> {portfolio.availability} <ArrowUpRight size={13} aria-hidden="true" /></a>
			<button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button>
		</header>
	)
}