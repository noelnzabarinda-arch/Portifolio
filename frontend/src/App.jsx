import { useCallback, useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Preloader from './components/Preloader.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Skills from './components/Skills.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'
import TextReveal from './components/TextReveal.jsx'
import { portfolio } from './data/portfolio.js'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const finishLoading = useCallback(() => setLoading(false), [])

  useEffect(() => {
    document.body.classList.toggle('is-loading', loading)
    return () => document.body.classList.remove('is-loading')
  }, [loading])

  return (
    <SmoothScroll>
      {loading && <Preloader onComplete={finishLoading} />}
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <Navbar />
      <main>
        <Hero />
        <section className="manifesto section-pad" id="introduction" aria-label="Introduction">
          <p className="eyebrow"><span className="status-dot" /> A little about how I work</p>
          <TextReveal as="h2" className="manifesto-heading">
            I BUILD DIGITAL EXPERIENCES <span>THAT FEEL</span> AS GOOD AS THEY WORK.
          </TextReveal>
          <div className="manifesto-bottom">
            <span className="mono-label">01 / THE APPROACH</span>
            <p>Thoughtful by default. Distinct by design. Made to last beyond the first impression.</p>
          </div>
        </section>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <span className="sr-only">Portfolio of {portfolio.name}, {portfolio.title}</span>
    </SmoothScroll>
  )
}

export default App
