import './App.scss'
import { useEffect } from 'react'
import { useReveal } from './hooks'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  useReveal()

  // Keep old links like /about or /contact working by scrolling to that section.
  useEffect(() => {
    const id = window.location.pathname.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
