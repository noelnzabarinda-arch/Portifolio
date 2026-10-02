import { ArrowUpRight, Plus } from 'lucide-react'
import { motion } from 'framer-motion'
import ImageFrame from './ImageFrame.jsx'

export default function ProjectCard({ project, onOpen }) {
	return (
		<motion.article className="project-card" whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
			<button className="project-open" type="button" onClick={() => onOpen(project)} aria-label={`View details for ${project.name}`}>
				<div className="project-image-wrap"><ImageFrame src={project.image} alt={`${project.name} project`} className="project-image" /><span className="project-image-index">PROJECT / {project.number}</span><span className="project-open-icon"><Plus size={22} aria-hidden="true" /></span></div>
				<div className="project-card-meta"><div><span className="project-category">{project.category}</span><h3>{project.name}<ArrowUpRight className="project-title-arrow" size={20} aria-hidden="true" /></h3></div><span className="project-card-number">{project.number}</span></div>
			</button>
			<p className="project-card-description">{project.description}</p>
			<div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
		</motion.article>
	)
}