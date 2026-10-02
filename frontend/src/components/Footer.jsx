import { ArrowUp } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

export default function Footer() {
	return <footer className="site-footer"><a className="footer-brand" href="#home">{portfolio.name}<span> / {portfolio.title}</span></a><span className="footer-copyright">© {new Date().getFullYear()} {portfolio.name}</span><a className="back-to-top" href="#home">BACK TO TOP <ArrowUp size={14} aria-hidden="true" /></a></footer>
}