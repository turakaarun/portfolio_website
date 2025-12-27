import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Hero from './components/Hero'
import MotionDesign from './components/MotionDesign'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Logos from './components/Logos'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import CaseStudy from './pages/CaseStudy'
import ContactPage from './pages/ContactPage'
import ResumePage from './pages/ResumePage'
import { initScrollAnimations, initSectionAnimations } from './utils/scrollAnimations'
import './App.css'

function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Initialize scroll animations
    const cleanupScroll = initScrollAnimations()
    const cleanupSections = initSectionAnimations()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cleanupScroll()
      cleanupSections()
    }
  }, [])

  return (
    <>
      <Navigation scrollY={scrollY} />
      <Hero />
      <MotionDesign />
      <Projects />
      <Skills />
      <Logos />
      <Contact />
    </>
  )
}

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    // Initialize animations for new page
    setTimeout(() => {
      initScrollAnimations()
      initSectionAnimations()
    }, 100)
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study/:id" element={<><Navigation scrollY={0} /><CaseStudy /></>} />
      <Route path="/contact" element={<><Navigation scrollY={0} /><ContactPage /></>} />
      <Route path="/resume" element={<><Navigation scrollY={0} /><ResumePage /></>} />
    </Routes>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <AppContent />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

